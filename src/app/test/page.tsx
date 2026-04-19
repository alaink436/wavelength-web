"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  type Question,
  type AdaptiveState,
  createInitialState,
  selectNextQuestion,
  updateState,
  calculateIQ,
} from "@/lib/iqQuestions";
import { IQ_QUESTION_BANK } from "@/lib/questionBank";

const TOTAL_QUESTIONS = 40;

const CATEGORY_LABELS: Record<string, string> = {
  logic: "Logic",
  pattern: "Pattern",
  verbal: "Verbal",
  math: "Math",
  spatial: "Spatial",
};

export default function IQTestPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"intro" | "test" | "calculating">("intro");
  const [state, setState] = useState<AdaptiveState>(createInitialState);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [usedIds, setUsedIds] = useState<Set<number>>(new Set());
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const questionNumber = state.answers.length + 1;
  const progress = (state.answers.length / TOTAL_QUESTIONS) * 100;

  const nextQuestion = useCallback(() => {
    const q = selectNextQuestion(state, IQ_QUESTION_BANK as Question[], usedIds);
    if (!q || state.answers.length >= TOTAL_QUESTIONS) {
      // Test complete
      setPhase("calculating");
      const results = calculateIQ(state.answers);
      // Store results in sessionStorage for the values page
      sessionStorage.setItem("iq_results", JSON.stringify(results));
      sessionStorage.setItem("iq_answers", JSON.stringify(state.answers));
      setTimeout(() => router.push("/values"), 2000);
      return;
    }
    setCurrentQuestion(q);
    setUsedIds((prev) => new Set([...prev, q.id]));
    setSelectedOption(null);
    setConfirmed(false);
    setShowFeedback(false);
    setTimeLeft(q.timeLimit);
    startTimeRef.current = Date.now();

    // Start timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [state, usedIds, router]);

  // Auto-submit on timeout
  useEffect(() => {
    if (timeLeft === 0 && currentQuestion && phase === "test" && !confirmed) {
      handleConfirm(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  function handleConfirm(timedOut = false) {
    if (!currentQuestion) return;
    if (timerRef.current) clearInterval(timerRef.current);

    const timeSpent = (Date.now() - startTimeRef.current) / 1000;
    const isCorrect = timedOut ? false : selectedOption === currentQuestion.correct;

    setConfirmed(true);
    setShowFeedback(true);

    const newState = updateState(state, currentQuestion, isCorrect, timeSpent);
    setState(newState);

    // Show feedback briefly, then next question
    setTimeout(() => {
      nextQuestion();
    }, 800);
  }

  function startTest() {
    setPhase("test");
    nextQuestion();
  }

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Intro screen
  if (phase === "intro") {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg"
        >
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
            Wavelength IQ Test
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Map your mind.
          </h1>
          <p className="text-text-secondary leading-relaxed mb-6">
            40 adaptive questions across 5 cognitive dimensions. The test adjusts
            to your level — harder questions when you&apos;re doing well, easier ones
            when you need them. Takes about 15 minutes.
          </p>

          <div className="grid grid-cols-5 gap-2 mb-8">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <div key={key} className="text-center p-3 rounded-lg bg-surface border border-border">
                <div className="text-xs text-text-tertiary">{label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-text-secondary mb-8">
            <div className="flex gap-3">
              <span className="text-accent">01</span>
              <span>Questions get harder or easier based on your answers</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">02</span>
              <span>Each question has a time limit — think fast</span>
            </div>
            <div className="flex gap-3">
              <span className="text-accent">03</span>
              <span>Your results transfer to the app when you sign up</span>
            </div>
          </div>

          <button
            onClick={startTest}
            className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors text-base"
          >
            Begin Test
          </button>
        </motion.div>
      </main>
    );
  }

  // Calculating screen
  if (phase === "calculating") {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-secondary">Analyzing your cognitive profile...</p>
        </motion.div>
      </main>
    );
  }

  // Test screen
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        {/* Progress bar */}
        <div className="h-1 bg-surface">
          <motion.div
            className="h-full bg-accent"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-sm text-text-secondary">
            <span className="text-foreground font-medium">{questionNumber}</span>
            <span className="text-text-tertiary"> / {TOTAL_QUESTIONS}</span>
          </span>
          <span className="text-sm font-medium text-text-tertiary">
            {currentQuestion && CATEGORY_LABELS[currentQuestion.category]}
          </span>
          <span
            className={`text-sm font-mono font-medium ${
              timeLeft <= 5 ? "text-error" : "text-text-secondary"
            }`}
          >
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <AnimatePresence mode="wait">
          {currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="max-w-lg w-full"
            >
              <h2 className="text-xl sm:text-2xl font-semibold leading-snug mb-8">
                {currentQuestion.question}
              </h2>

              <div className="space-y-2">
                {currentQuestion.options.map((option, i) => {
                  const isSelected = selectedOption === i;
                  const isCorrect = i === currentQuestion.correct;
                  const showCorrect = showFeedback && isCorrect;
                  const showWrong = showFeedback && isSelected && !isCorrect;

                  return (
                    <button
                      key={i}
                      onClick={() => !confirmed && setSelectedOption(i)}
                      disabled={confirmed}
                      className={`w-full text-left p-4 rounded-lg border transition-all text-[15px] ${
                        showCorrect
                          ? "border-success bg-success/10 text-success"
                          : showWrong
                          ? "border-error bg-error/10 text-error"
                          : isSelected
                          ? "border-accent bg-accent-muted text-foreground"
                          : "border-border hover:border-text-tertiary text-text-secondary hover:text-foreground"
                      }`}
                    >
                      <span className="font-mono text-xs mr-3 opacity-50">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {!confirmed && (
                <button
                  onClick={() => handleConfirm(false)}
                  disabled={selectedOption === null}
                  className="w-full mt-6 h-12 bg-accent hover:bg-accent/90 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all"
                >
                  Confirm
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
