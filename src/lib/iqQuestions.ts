// Re-export from the Thinq app's question bank — adapted for web
export type Difficulty = 1 | 2 | 3;

export type Question = {
  id: number;
  category: "logic" | "pattern" | "verbal" | "math" | "spatial";
  difficulty: Difficulty;
  timeLimit: number;
  question: string;
  options: string[];
  correct: number;
};

export const TIME_LIMITS: Record<Difficulty, number> = { 1: 20, 2: 35, 3: 55 };

export const DIFFICULTY_SCORE: Record<Difficulty, number> = { 1: 1, 2: 2, 3: 3 };

// Adaptive engine state
export type AdaptiveState = {
  estimatedDifficulty: number;
  correctStreak: number;
  wrongStreak: number;
  categoryCount: Record<string, number>;
  answers: AnswerRecord[];
};

export type AnswerRecord = {
  questionId: number;
  correct: boolean;
  difficulty: Difficulty;
  category: string;
  timeSpent: number;
};

export function createInitialState(): AdaptiveState {
  return {
    estimatedDifficulty: 2.0,
    correctStreak: 0,
    wrongStreak: 0,
    categoryCount: { logic: 0, pattern: 0, verbal: 0, math: 0, spatial: 0 },
    answers: [],
  };
}

export function selectNextQuestion(
  state: AdaptiveState,
  bank: Question[],
  usedIds: Set<number>
): Question | null {
  const available = bank.filter((q) => !usedIds.has(q.id));
  if (available.length === 0) return null;

  // Find least-used category
  const minCat = Object.entries(state.categoryCount).sort(
    (a, b) => a[1] - b[1]
  )[0][0];

  // Score each question
  const scored = available.map((q) => {
    const diffDist = Math.abs(q.difficulty - state.estimatedDifficulty);
    const catBonus = q.category === minCat ? -0.5 : 0;
    const recentPenalty = state.answers.length > 0 &&
      state.answers[state.answers.length - 1].category === q.category
      ? 1
      : 0;
    return { q, score: diffDist + catBonus + recentPenalty + Math.random() * 0.3 };
  });

  scored.sort((a, b) => a.score - b.score);
  return scored[0].q;
}

export function updateState(
  state: AdaptiveState,
  question: Question,
  correct: boolean,
  timeSpent: number
): AdaptiveState {
  const newState = { ...state };
  newState.answers = [...state.answers, {
    questionId: question.id,
    correct,
    difficulty: question.difficulty,
    category: question.category,
    timeSpent,
  }];
  newState.categoryCount = { ...state.categoryCount };
  newState.categoryCount[question.category]++;

  if (correct) {
    newState.correctStreak = state.correctStreak + 1;
    newState.wrongStreak = 0;
    const streakBoost = Math.min(newState.correctStreak * 0.05, 0.15);
    newState.estimatedDifficulty = Math.min(
      3,
      state.estimatedDifficulty +
        (0.25 + streakBoost) * (question.difficulty - state.estimatedDifficulty + 0.4)
    );
  } else {
    newState.wrongStreak = state.wrongStreak + 1;
    newState.correctStreak = 0;
    const streakPenalty = Math.min(newState.wrongStreak * 0.05, 0.15);
    newState.estimatedDifficulty = Math.max(
      1,
      state.estimatedDifficulty +
        (0.3 + streakPenalty) * (question.difficulty - state.estimatedDifficulty - 0.6)
    );
  }

  return newState;
}

export type CategoryAccuracy = {
  correct: number;
  total: number;
  accuracy: number;
};

export type IQBreakdown = {
  iq: number;
  cluster: string;
  clusterLabel: string;
  clusterDescription: string;
  percentile: string;
  baseRatio: number;
  categoryAccuracy: Record<string, CategoryAccuracy>;
  difficultyAccuracy: Record<number, CategoryAccuracy>;
  totalCorrect: number;
  totalQuestions: number;
};

export function calculateIQ(answers: AnswerRecord[]): IQBreakdown {
  let weightedScore = 0;
  let maxScore = 0;
  let totalCorrect = 0;
  let correctDifficultySum = 0;

  const catAcc: Record<string, { correct: number; total: number }> = {
    logic: { correct: 0, total: 0 },
    pattern: { correct: 0, total: 0 },
    verbal: { correct: 0, total: 0 },
    math: { correct: 0, total: 0 },
    spatial: { correct: 0, total: 0 },
  };

  const diffAcc: Record<number, { correct: number; total: number }> = {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
  };

  for (const a of answers) {
    const weight = DIFFICULTY_SCORE[a.difficulty];
    maxScore += weight;
    if (a.correct) {
      weightedScore += weight;
      totalCorrect++;
      correctDifficultySum += a.difficulty;
    }
    catAcc[a.category].total++;
    if (a.correct) catAcc[a.category].correct++;
    diffAcc[a.difficulty].total++;
    if (a.correct) diffAcc[a.difficulty].correct++;
  }

  const baseRatio = maxScore > 0 ? weightedScore / maxScore : 0;
  const avgCorrectDifficulty = totalCorrect > 0 ? correctDifficultySum / totalCorrect : 1;
  const difficultyAdjust = (avgCorrectDifficulty - 2.0) * 0.12;
  const adjustedRatio = Math.max(0.02, Math.min(0.98, baseRatio + difficultyAdjust));
  const theta = Math.log(adjustedRatio / (1 - adjustedRatio));
  const iq = Math.round(Math.max(55, Math.min(145, 100 + theta * 15)));

  const cluster = iq < 85 ? "A" : iq < 100 ? "B" : iq < 115 ? "C" : iq < 130 ? "D" : "E";

  const clusterInfo: Record<string, { label: string; percentile: string; description: string }> = {
    A: { label: "Below Average", percentile: "Bottom 16%", description: "You approach problems practically and prefer straightforward solutions." },
    B: { label: "Average", percentile: "16th–50th", description: "You have solid reasoning skills and handle everyday problems well." },
    C: { label: "Above Average", percentile: "50th–84th", description: "You think analytically and excel at connecting ideas across domains." },
    D: { label: "Superior", percentile: "84th–98th", description: "You rapidly identify patterns and thrive with abstract concepts." },
    E: { label: "Exceptional", percentile: "Top 2%", description: "You demonstrate extraordinary reasoning across all cognitive dimensions." },
  };

  const categoryAccuracy: Record<string, CategoryAccuracy> = {};
  for (const [cat, acc] of Object.entries(catAcc)) {
    categoryAccuracy[cat] = { correct: acc.correct, total: acc.total, accuracy: acc.total > 0 ? acc.correct / acc.total : 0 };
  }

  const difficultyAccuracy: Record<number, CategoryAccuracy> = {};
  for (const [diff, acc] of Object.entries(diffAcc)) {
    difficultyAccuracy[Number(diff)] = { correct: acc.correct, total: acc.total, accuracy: acc.total > 0 ? acc.correct / acc.total : 0 };
  }

  return {
    iq,
    cluster,
    clusterLabel: clusterInfo[cluster].label,
    clusterDescription: clusterInfo[cluster].description,
    percentile: clusterInfo[cluster].percentile,
    baseRatio,
    categoryAccuracy,
    difficultyAccuracy,
    totalCorrect,
    totalQuestions: answers.length,
  };
}
