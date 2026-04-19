export type Difficulty = 1 | 2 | 3; // 1=Easy, 2=Medium, 3=Hard

export type Question = {
  id: number;
  category: "logic" | "pattern" | "verbal" | "math" | "spatial";
  difficulty: Difficulty;
  timeLimit: number; // seconds
  question: string;
  options: string[];
  correct: number;
};

// Time limits per difficulty
export const TIME_LIMITS: Record<Difficulty, number> = { 1: 20, 2: 35, 3: 55 };

export const IQ_QUESTION_BANK: Question[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ─── LOGIC ─────────────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // Easy (10)
  { id: 101, category: "logic", difficulty: 1, timeLimit: 20, question: "If all cats are animals, and Whiskers is a cat, then:", options: ["Whiskers may be an animal", "Whiskers is an animal", "Whiskers is not an animal", "We can't know"], correct: 1 },
  { id: 102, category: "logic", difficulty: 1, timeLimit: 20, question: "Tom is taller than Sam. Sam is taller than Jake. Who is shortest?", options: ["Tom", "Sam", "Jake", "They're equal"], correct: 2 },
  { id: 103, category: "logic", difficulty: 1, timeLimit: 20, question: "If today is Wednesday, what day was it 3 days ago?", options: ["Monday", "Sunday", "Saturday", "Tuesday"], correct: 1 },
  { id: 104, category: "logic", difficulty: 1, timeLimit: 20, question: "All birds have wings. A penguin is a bird. Does a penguin have wings?", options: ["Yes", "No", "Maybe", "Only some penguins"], correct: 0 },
  { id: 105, category: "logic", difficulty: 1, timeLimit: 20, question: "There are 5 apples. You take away 3. How many do you have?", options: ["2", "3", "5", "0"], correct: 1 },
  { id: 106, category: "logic", difficulty: 1, timeLimit: 20, question: "Anna is older than Ben. Ben is older than Clara. Anna is __ than Clara.", options: ["younger", "the same age", "older", "can't determine"], correct: 2 },
  { id: 119, category: "logic", difficulty: 1, timeLimit: 20, question: "If you rearrange 'CIFAIPC', you get the name of a(n):", options: ["City", "Animal", "Ocean", "Country"], correct: 2 },
  { id: 120, category: "logic", difficulty: 1, timeLimit: 20, question: "A farmer has 17 sheep. All but 9 die. How many are left?", options: ["8", "9", "17", "0"], correct: 1 },
  { id: 121, category: "logic", difficulty: 1, timeLimit: 20, question: "Which month has 28 days?", options: ["February only", "All of them", "None", "February and April"], correct: 1 },
  { id: 122, category: "logic", difficulty: 1, timeLimit: 20, question: "If you have a bowl with six apples and you take away four, how many do you have?", options: ["Two", "Four", "Six", "Zero"], correct: 1 },

  // Medium (10)
  { id: 107, category: "logic", difficulty: 2, timeLimit: 35, question: "No politicians are honest. Some dishonest people are popular. Therefore:", options: ["All politicians are popular", "Some politicians may be popular", "No politicians are popular", "All popular people are politicians"], correct: 1 },
  { id: 108, category: "logic", difficulty: 2, timeLimit: 35, question: "A man builds a house with 4 sides, each facing south. A bear walks by. What color is the bear?", options: ["Brown", "Black", "White", "Gray"], correct: 2 },
  { id: 109, category: "logic", difficulty: 2, timeLimit: 35, question: "If A > B, B > C, and C > D, which CANNOT be true?", options: ["A > D", "B > D", "D > A", "A > C"], correct: 2 },
  { id: 110, category: "logic", difficulty: 2, timeLimit: 35, question: "In a room, half the people are wearing hats. A third of those with hats also wear glasses. What fraction wear both?", options: ["1/6", "1/4", "1/3", "1/5"], correct: 0 },
  { id: 111, category: "logic", difficulty: 2, timeLimit: 35, question: "Alice lies on Mondays, Tuesdays, and Wednesdays. She tells truth all other days. She says 'Yesterday I lied.' What day is it?", options: ["Monday", "Thursday", "Sunday", "Tuesday"], correct: 1 },
  { id: 112, category: "logic", difficulty: 2, timeLimit: 35, question: "Three friends each have a different pet: cat, dog, fish. Alice doesn't have the cat. Bob doesn't have the dog or fish. Who has the fish?", options: ["Alice", "Bob", "Charlie", "Can't determine"], correct: 0 },
  { id: 123, category: "logic", difficulty: 2, timeLimit: 35, question: "A clock loses 15 minutes every hour. After 4 real hours, what time does it show if it started at 12:00?", options: ["2:00", "3:00", "3:15", "3:30"], correct: 1 },
  { id: 124, category: "logic", difficulty: 2, timeLimit: 35, question: "If some A are B, and all B are C, which must be true?", options: ["All A are C", "Some A are C", "All C are A", "No A are C"], correct: 1 },
  { id: 125, category: "logic", difficulty: 2, timeLimit: 35, question: "Two fathers and two sons go fishing. They catch 3 fish total, 1 each. How?", options: ["One didn't catch any", "They are grandfather, father, and son", "One fish was shared", "They caught more"], correct: 1 },
  { id: 126, category: "logic", difficulty: 2, timeLimit: 35, question: "If it takes 5 machines 5 minutes to make 5 widgets, how long for 100 machines to make 100 widgets?", options: ["100 minutes", "5 minutes", "20 minutes", "1 minute"], correct: 1 },

  // Hard (10)
  { id: 113, category: "logic", difficulty: 3, timeLimit: 55, question: "Five houses in a row are painted different colors. The green house is directly to the left of the white house. The green house owner drinks coffee. Who drinks coffee?", options: ["Red house owner", "Blue house owner", "Green house owner", "White house owner"], correct: 2 },
  { id: 114, category: "logic", difficulty: 3, timeLimit: 55, question: "A says: 'B is lying.' B says: 'C is lying.' C says: 'A and B are both lying.' How many are lying?", options: ["0", "1", "2", "3"], correct: 1 },
  { id: 115, category: "logic", difficulty: 3, timeLimit: 55, question: "If P\u2192Q and Q\u2192R are both true, and R is false, what can we conclude?", options: ["P is true", "P is false", "Q is true", "Nothing about P"], correct: 1 },
  { id: 116, category: "logic", difficulty: 3, timeLimit: 55, question: "100 prisoners, each assigned a number 1\u2013100. Each must guess the color of their own hat (black/white). They can agree on strategy beforehand. What's the max guaranteed survivors?", options: ["50", "75", "99", "100"], correct: 2 },
  { id: 117, category: "logic", difficulty: 3, timeLimit: 55, question: "In a tournament, every player plays every other player exactly once. There are 45 games total. How many players?", options: ["8", "9", "10", "11"], correct: 2 },
  { id: 118, category: "logic", difficulty: 3, timeLimit: 55, question: "You have 12 balls, one slightly heavier. With a balance scale and only 3 weighings, can you always identify it?", options: ["Yes, always", "Only if you know which half it's in", "No, you need 4 weighings", "Only with equal groups"], correct: 0 },
  { id: 127, category: "logic", difficulty: 3, timeLimit: 55, question: "Three gods A, B, C are called True, False, Random (in some order). True always speaks truly, False falsely, Random randomly. You can ask 3 yes/no questions to determine who is who. Which is the key insight?", options: ["Ask about themselves", "Ask about each other", "Use counterfactual questions", "Ask the same question to all"], correct: 2 },
  { id: 128, category: "logic", difficulty: 3, timeLimit: 55, question: "A king places 1000 bottles of wine for a party. An assassin poisons one. The king has 10 prisoners to test. Poison kills in exactly 24h. The party is in 24h. Can the king find the poisoned bottle?", options: ["No, 10 is not enough", "Yes, using binary encoding", "Only with 500 prisoners", "Only if he tests 100 bottles each"], correct: 1 },
  { id: 129, category: "logic", difficulty: 3, timeLimit: 55, question: "In the Monty Hall problem, you pick door 1. The host opens door 3 (goat). Should you switch?", options: ["No, 50/50 either way", "Yes, switching gives 2/3 chance", "No, staying gives 2/3", "It depends on the host"], correct: 1 },
  { id: 130, category: "logic", difficulty: 3, timeLimit: 55, question: "Two envelopes contain money. One has twice the other. You pick one and see $100. Should you switch?", options: ["Yes, expected value is higher", "No, it's symmetrical", "Yes if risk-seeking", "The problem is a paradox"], correct: 3 },

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── PATTERN ───────────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // Easy (10)
  { id: 201, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], correct: 1 },
  { id: 202, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: 1 },
  { id: 203, category: "pattern", difficulty: 1, timeLimit: 20, question: "Odd one out: 2, 4, 6, 7, 8", options: ["2", "4", "7", "8"], correct: 2 },
  { id: 204, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: 1, 4, 9, 16, ?", options: ["20", "24", "25", "36"], correct: 2 },
  { id: 205, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: Z, Y, X, W, ?", options: ["U", "V", "T", "S"], correct: 1 },
  { id: 206, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: 3, 6, 12, 24, ?", options: ["36", "42", "48", "96"], correct: 2 },
  { id: 219, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: 10, 20, 30, 40, ?", options: ["45", "50", "55", "60"], correct: 1 },
  { id: 220, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: 1, 2, 4, 8, ?", options: ["10", "12", "14", "16"], correct: 3 },
  { id: 221, category: "pattern", difficulty: 1, timeLimit: 20, question: "Odd one out: Circle, Square, Triangle, Banana", options: ["Circle", "Square", "Triangle", "Banana"], correct: 3 },
  { id: 222, category: "pattern", difficulty: 1, timeLimit: 20, question: "What comes next: 5, 10, 15, 20, ?", options: ["22", "24", "25", "30"], correct: 2 },

  // Medium (10)
  { id: 207, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 1, 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "14"], correct: 2 },
  { id: 208, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 3, 6, 11, 18, 27, ?", options: ["36", "38", "40", "42"], correct: 1 },
  { id: 209, category: "pattern", difficulty: 2, timeLimit: 35, question: "Odd one out: 36, 49, 64, 80, 100", options: ["36", "49", "80", "100"], correct: 2 },
  { id: 210, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 2, 3, 5, 7, 11, 13, ?", options: ["15", "16", "17", "19"], correct: 2 },
  { id: 211, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 1, 8, 27, 64, ?", options: ["100", "121", "125", "216"], correct: 2 },
  { id: 212, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 0, 1, 3, 6, 10, 15, ?", options: ["18", "20", "21", "25"], correct: 2 },
  { id: 223, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "48"], correct: 1 },
  { id: 224, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 1, 3, 6, 10, 15, 21, ?", options: ["25", "27", "28", "30"], correct: 2 },
  { id: 225, category: "pattern", difficulty: 2, timeLimit: 35, question: "What comes next: 4, 9, 16, 25, 36, ?", options: ["42", "45", "49", "64"], correct: 2 },
  { id: 226, category: "pattern", difficulty: 2, timeLimit: 35, question: "Odd one out: 121, 144, 169, __(196)__, 200", options: ["121", "144", "200", "169"], correct: 2 },

  // Hard (10)
  { id: 213, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 1, 2, 6, 24, 120, ?", options: ["240", "360", "600", "720"], correct: 3 },
  { id: 214, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 2, 5, 10, 17, 26, 37, ?", options: ["48", "50", "52", "54"], correct: 1 },
  { id: 215, category: "pattern", difficulty: 3, timeLimit: 55, question: "What is the missing number: 4, 8, ?, 32, 64, 128", options: ["12", "14", "16", "20"], correct: 2 },
  { id: 216, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 1, 3, 7, 15, 31, ?", options: ["47", "57", "63", "65"], correct: 2 },
  { id: 217, category: "pattern", difficulty: 3, timeLimit: 55, question: "Find the pattern: 2, 12, 36, 80, 150, ?", options: ["196", "216", "252", "280"], correct: 2 },
  { id: 218, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 1, 11, 21, 1211, 111221, ?", options: ["312211", "3112211", "13112221", "312221"], correct: 0 },
  { id: 227, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 0, 1, 1, 2, 3, 5, 8, 13, 21, ?", options: ["29", "31", "34", "42"], correct: 2 },
  { id: 228, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 2, 3, 5, 9, 17, 33, ?", options: ["49", "57", "65", "66"], correct: 2 },
  { id: 229, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next: 1, 4, 27, 256, ?", options: ["625", "1024", "3125", "4096"], correct: 2 },
  { id: 230, category: "pattern", difficulty: 3, timeLimit: 55, question: "What comes next in Catalan numbers: 1, 1, 2, 5, 14, ?", options: ["28", "36", "42", "48"], correct: 2 },

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── VERBAL ────────────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // Easy (10)
  { id: 301, category: "verbal", difficulty: 1, timeLimit: 20, question: "BOOK is to LIBRARY as PAINTING is to:", options: ["Artist", "Museum", "Canvas", "Brush"], correct: 1 },
  { id: 302, category: "verbal", difficulty: 1, timeLimit: 20, question: "Odd one out: Cat, Dog, Rose, Fish", options: ["Cat", "Dog", "Rose", "Fish"], correct: 2 },
  { id: 303, category: "verbal", difficulty: 1, timeLimit: 20, question: "SURGEON is to SCALPEL as PAINTER is to:", options: ["Canvas", "Gallery", "Brush", "Paint"], correct: 2 },
  { id: 304, category: "verbal", difficulty: 1, timeLimit: 20, question: "Which word means the opposite of ANCIENT?", options: ["Old", "Modern", "Historical", "Antique"], correct: 1 },
  { id: 305, category: "verbal", difficulty: 1, timeLimit: 20, question: "CLOCK is to TIME as THERMOMETER is to:", options: ["Heat", "Weather", "Temperature", "Mercury"], correct: 2 },
  { id: 306, category: "verbal", difficulty: 1, timeLimit: 20, question: "Odd one out: Apple, Banana, Carrot, Grape", options: ["Apple", "Banana", "Carrot", "Grape"], correct: 2 },
  { id: 319, category: "verbal", difficulty: 1, timeLimit: 20, question: "HAND is to GLOVE as FOOT is to:", options: ["Leg", "Sock", "Shoe", "Ankle"], correct: 2 },
  { id: 320, category: "verbal", difficulty: 1, timeLimit: 20, question: "Which word is the synonym of HAPPY?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
  { id: 321, category: "verbal", difficulty: 1, timeLimit: 20, question: "EYE is to SEE as EAR is to:", options: ["Sound", "Hear", "Listen", "Noise"], correct: 1 },
  { id: 322, category: "verbal", difficulty: 1, timeLimit: 20, question: "Odd one out: Run, Walk, Sit, Jog", options: ["Run", "Walk", "Sit", "Jog"], correct: 2 },

  // Medium (10)
  { id: 307, category: "verbal", difficulty: 2, timeLimit: 35, question: "Odd one out: Angry, Furious, Enraged, Melancholy", options: ["Angry", "Furious", "Enraged", "Melancholy"], correct: 3 },
  { id: 308, category: "verbal", difficulty: 2, timeLimit: 35, question: "What is the antonym of VERBOSE?", options: ["Talkative", "Concise", "Eloquent", "Loud"], correct: 1 },
  { id: 309, category: "verbal", difficulty: 2, timeLimit: 35, question: "OCEAN is to WAVE as DESERT is to:", options: ["Cactus", "Sand dune", "Heat", "Mirage"], correct: 1 },
  { id: 310, category: "verbal", difficulty: 2, timeLimit: 35, question: "Which word completes: COMPOSE : MUSIC :: CHOREOGRAPH : ?", options: ["Dance", "Theatre", "Film", "Poetry"], correct: 0 },
  { id: 311, category: "verbal", difficulty: 2, timeLimit: 35, question: "Odd one out: Simile, Metaphor, Alliteration, Noun", options: ["Simile", "Metaphor", "Alliteration", "Noun"], correct: 3 },
  { id: 312, category: "verbal", difficulty: 2, timeLimit: 35, question: "PEDANTIC is closest in meaning to:", options: ["Lazy", "Excessively concerned with minor details", "Creative", "Generous"], correct: 1 },
  { id: 323, category: "verbal", difficulty: 2, timeLimit: 35, question: "ARCHITECT is to BUILDING as AUTHOR is to:", options: ["Library", "Publisher", "Book", "Pen"], correct: 2 },
  { id: 324, category: "verbal", difficulty: 2, timeLimit: 35, question: "What is the antonym of BENEVOLENT?", options: ["Kind", "Generous", "Malevolent", "Peaceful"], correct: 2 },
  { id: 325, category: "verbal", difficulty: 2, timeLimit: 35, question: "METICULOUS is closest in meaning to:", options: ["Careless", "Quick", "Thorough and precise", "Messy"], correct: 2 },
  { id: 326, category: "verbal", difficulty: 2, timeLimit: 35, question: "PARADOX is to CONTRADICTION as ENIGMA is to:", options: ["Answer", "Mystery", "Solution", "Explanation"], correct: 1 },

  // Hard (10)
  { id: 313, category: "verbal", difficulty: 3, timeLimit: 55, question: "EPHEMERAL : PERMANENT :: LUCID : ?", options: ["Clear", "Opaque", "Brief", "Transparent"], correct: 1 },
  { id: 314, category: "verbal", difficulty: 3, timeLimit: 55, question: "Which word does NOT belong: Sycophant, Toady, Flatterer, Iconoclast", options: ["Sycophant", "Toady", "Flatterer", "Iconoclast"], correct: 3 },
  { id: 315, category: "verbal", difficulty: 3, timeLimit: 55, question: "ENERVATE is to VITALIZE as OBFUSCATE is to:", options: ["Confuse", "Clarify", "Obscure", "Mystify"], correct: 1 },
  { id: 316, category: "verbal", difficulty: 3, timeLimit: 55, question: "SOLECISM : GRAMMAR :: CACOPHONY : ?", options: ["Music", "Sound", "Noise", "Harmony"], correct: 3 },
  { id: 317, category: "verbal", difficulty: 3, timeLimit: 55, question: "Which word is most nearly opposite to PERSPICACIOUS?", options: ["Dull-witted", "Keen", "Observant", "Shrewd"], correct: 0 },
  { id: 318, category: "verbal", difficulty: 3, timeLimit: 55, question: "POLEMIC : CONTROVERSY :: ELEGY : ?", options: ["Celebration", "Grief", "Anger", "Satire"], correct: 1 },
  { id: 327, category: "verbal", difficulty: 3, timeLimit: 55, question: "QUIXOTIC is closest in meaning to:", options: ["Practical", "Cynical", "Idealistic and unrealistic", "Quick-tempered"], correct: 2 },
  { id: 328, category: "verbal", difficulty: 3, timeLimit: 55, question: "VERISIMILITUDE : TRUTH :: SIMULACRUM : ?", options: ["Copy", "Reality", "Fake", "Art"], correct: 1 },
  { id: 329, category: "verbal", difficulty: 3, timeLimit: 55, question: "Odd one out: Zeitgeist, Schadenfreude, Wanderlust, Saudade", options: ["Zeitgeist", "Schadenfreude", "Wanderlust", "Saudade"], correct: 3 },
  { id: 330, category: "verbal", difficulty: 3, timeLimit: 55, question: "APOTHEOSIS : GLORIFICATION :: NADIR : ?", options: ["Zenith", "Lowest point", "Middle ground", "Elevation"], correct: 1 },

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── MATH ──────────────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // Easy (10)
  { id: 401, category: "math", difficulty: 1, timeLimit: 20, question: "What is 15% of 200?", options: ["25", "30", "35", "40"], correct: 1 },
  { id: 402, category: "math", difficulty: 1, timeLimit: 20, question: "If 3x + 7 = 22, what is x?", options: ["3", "4", "5", "6"], correct: 2 },
  { id: 403, category: "math", difficulty: 1, timeLimit: 20, question: "What is the next prime after 7?", options: ["8", "9", "10", "11"], correct: 3 },
  { id: 404, category: "math", difficulty: 1, timeLimit: 20, question: "A square has a perimeter of 20. What is its area?", options: ["16", "20", "25", "30"], correct: 2 },
  { id: 405, category: "math", difficulty: 1, timeLimit: 20, question: "How many degrees in a triangle?", options: ["90", "180", "270", "360"], correct: 1 },
  { id: 406, category: "math", difficulty: 1, timeLimit: 20, question: "If a car travels 60 km/h for 2 hours, how far does it travel?", options: ["100 km", "120 km", "130 km", "140 km"], correct: 1 },
  { id: 419, category: "math", difficulty: 1, timeLimit: 20, question: "What is 7 \u00d7 8?", options: ["48", "54", "56", "64"], correct: 2 },
  { id: 420, category: "math", difficulty: 1, timeLimit: 20, question: "If you buy 3 items at $4 each and pay with $20, how much change?", options: ["$6", "$7", "$8", "$9"], correct: 2 },
  { id: 421, category: "math", difficulty: 1, timeLimit: 20, question: "What is 1/4 + 1/4?", options: ["1/8", "2/8", "1/2", "1"], correct: 2 },
  { id: 422, category: "math", difficulty: 1, timeLimit: 20, question: "A rectangle is 5 cm wide and 10 cm long. What is the area?", options: ["15 cm\u00b2", "30 cm\u00b2", "50 cm\u00b2", "100 cm\u00b2"], correct: 2 },

  // Medium (10)
  { id: 407, category: "math", difficulty: 2, timeLimit: 35, question: "A shirt costs $40 after a 20% discount. What was the original price?", options: ["$48", "$50", "$52", "$56"], correct: 1 },
  { id: 408, category: "math", difficulty: 2, timeLimit: 35, question: "A train travels 120 km in 2 hours. How long to travel 300 km?", options: ["4 hours", "4.5 hours", "5 hours", "5.5 hours"], correct: 2 },
  { id: 409, category: "math", difficulty: 2, timeLimit: 35, question: "A rectangle has perimeter 28 cm, length = 2\u00d7 width. What is the area?", options: ["36 cm\u00b2", "40 cm\u00b2", "44 cm\u00b2", "48 cm\u00b2"], correct: 0 },
  { id: 410, category: "math", difficulty: 2, timeLimit: 35, question: "How many prime numbers are between 10 and 30?", options: ["4", "5", "6", "7"], correct: 1 },
  { id: 411, category: "math", difficulty: 2, timeLimit: 35, question: "If 2^x = 32, what is x?", options: ["4", "5", "6", "8"], correct: 1 },
  { id: 412, category: "math", difficulty: 2, timeLimit: 35, question: "The average of 5 numbers is 12. If one number is 20, what is the average of the remaining 4?", options: ["8", "9", "10", "11"], correct: 2 },
  { id: 423, category: "math", difficulty: 2, timeLimit: 35, question: "A pizza is cut into 8 equal slices. You eat 3. What percentage is left?", options: ["37.5%", "50%", "62.5%", "75%"], correct: 2 },
  { id: 424, category: "math", difficulty: 2, timeLimit: 35, question: "If f(x) = 2x + 3, what is f(5)?", options: ["10", "13", "15", "25"], correct: 1 },
  { id: 425, category: "math", difficulty: 2, timeLimit: 35, question: "A store increases prices by 25%, then offers 20% off. What\u2019s the net change?", options: ["5% increase", "No change", "5% decrease", "1% increase"], correct: 1 },
  { id: 426, category: "math", difficulty: 2, timeLimit: 35, question: "What is the LCM of 12 and 18?", options: ["24", "36", "54", "72"], correct: 1 },

  // Hard (10)
  { id: 413, category: "math", difficulty: 3, timeLimit: 55, question: "A container is 1/3 full. After adding 8 liters it is 1/2 full. What is the total capacity?", options: ["40 L", "44 L", "48 L", "52 L"], correct: 2 },
  { id: 414, category: "math", difficulty: 3, timeLimit: 55, question: "How many ways can 4 people sit in a row if two specific people must sit together?", options: ["12", "18", "24", "48"], correct: 0 },
  { id: 415, category: "math", difficulty: 3, timeLimit: 55, question: "A ball is dropped from 64 m. Each bounce it rises half the height. Total distance traveled after infinite bounces?", options: ["128 m", "180 m", "192 m", "256 m"], correct: 2 },
  { id: 416, category: "math", difficulty: 3, timeLimit: 55, question: "If log\u2082(x) + log\u2082(x-2) = 3, what is x?", options: ["2", "3", "4", "6"], correct: 2 },
  { id: 417, category: "math", difficulty: 3, timeLimit: 55, question: "In how many ways can you arrange the letters of MISSISSIPPI?", options: ["34650", "45600", "54450", "69300"], correct: 0 },
  { id: 418, category: "math", difficulty: 3, timeLimit: 55, question: "A cone has radius 3 and height 4. What is its slant height?", options: ["4", "5", "6", "7"], correct: 1 },
  { id: 427, category: "math", difficulty: 3, timeLimit: 55, question: "What is the sum of all integers from 1 to 100?", options: ["4950", "5000", "5050", "5100"], correct: 2 },
  { id: 428, category: "math", difficulty: 3, timeLimit: 55, question: "A compound interest of 10% per year doubles the investment in approximately how many years?", options: ["5", "7", "10", "12"], correct: 1 },
  { id: 429, category: "math", difficulty: 3, timeLimit: 55, question: "How many distinct handshakes in a group of 10 people?", options: ["40", "45", "50", "90"], correct: 1 },
  { id: 430, category: "math", difficulty: 3, timeLimit: 55, question: "A clock\u2019s minute and hour hands overlap how many times in 12 hours?", options: ["10", "11", "12", "22"], correct: 1 },

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── SPATIAL ───────────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // Easy (10)
  { id: 501, category: "spatial", difficulty: 1, timeLimit: 20, question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
  { id: 502, category: "spatial", difficulty: 1, timeLimit: 20, question: "How many faces does a cube have?", options: ["4", "5", "6", "8"], correct: 2 },
  { id: 503, category: "spatial", difficulty: 1, timeLimit: 20, question: "A square is rotated 90\u00b0. What shape is it now?", options: ["Rectangle", "Triangle", "Square", "Diamond"], correct: 2 },
  { id: 504, category: "spatial", difficulty: 1, timeLimit: 20, question: "How many right angles does a rectangle have?", options: ["2", "3", "4", "6"], correct: 2 },
  { id: 505, category: "spatial", difficulty: 1, timeLimit: 20, question: "How many edges does a triangular prism have?", options: ["6", "7", "9", "12"], correct: 2 },
  { id: 506, category: "spatial", difficulty: 1, timeLimit: 20, question: "If a wheel rotates 3 times to travel 6m, what is its circumference?", options: ["1 m", "2 m", "3 m", "4 m"], correct: 1 },
  { id: 519, category: "spatial", difficulty: 1, timeLimit: 20, question: "How many lines of symmetry does a square have?", options: ["1", "2", "4", "8"], correct: 2 },
  { id: 520, category: "spatial", difficulty: 1, timeLimit: 20, question: "What is the 3D shape of a can of soda?", options: ["Sphere", "Cube", "Cylinder", "Cone"], correct: 2 },
  { id: 521, category: "spatial", difficulty: 1, timeLimit: 20, question: "A mirror image of the letter 'b' looks like:", options: ["b", "d", "p", "q"], correct: 1 },
  { id: 522, category: "spatial", difficulty: 1, timeLimit: 20, question: "How many corners does a triangle have?", options: ["2", "3", "4", "5"], correct: 1 },

  // Medium (10)
  { id: 507, category: "spatial", difficulty: 2, timeLimit: 35, question: "How many sides does a polygon have if each interior angle is 120\u00b0?", options: ["4", "5", "6", "8"], correct: 2 },
  { id: 508, category: "spatial", difficulty: 2, timeLimit: 35, question: "A clock shows 3:15. Angle between hour and minute hands?", options: ["0\u00b0", "7.5\u00b0", "15\u00b0", "22.5\u00b0"], correct: 1 },
  { id: 509, category: "spatial", difficulty: 2, timeLimit: 35, question: "A cube is painted red and cut into 27 equal smaller cubes. How many have NO red faces?", options: ["0", "1", "6", "8"], correct: 1 },
  { id: 510, category: "spatial", difficulty: 2, timeLimit: 35, question: "How many diagonals does a pentagon have?", options: ["4", "5", "6", "10"], correct: 1 },
  { id: 511, category: "spatial", difficulty: 2, timeLimit: 35, question: "A square sheet is folded in half twice then a corner is cut. How many holes when unfolded?", options: ["1", "2", "3", "4"], correct: 3 },
  { id: 512, category: "spatial", difficulty: 2, timeLimit: 35, question: "How many vertices does an octahedron have?", options: ["4", "6", "8", "12"], correct: 1 },
  { id: 523, category: "spatial", difficulty: 2, timeLimit: 35, question: "How many edges does a cube have?", options: ["6", "8", "10", "12"], correct: 3 },
  { id: 524, category: "spatial", difficulty: 2, timeLimit: 35, question: "If you unfold a cube, how many squares do you see?", options: ["4", "5", "6", "8"], correct: 2 },
  { id: 525, category: "spatial", difficulty: 2, timeLimit: 35, question: "A regular hexagon can be divided into how many equilateral triangles?", options: ["3", "4", "6", "8"], correct: 2 },
  { id: 526, category: "spatial", difficulty: 2, timeLimit: 35, question: "If you rotate the letter 'N' 180\u00b0, what does it look like?", options: ["Z", "N", "M", "W"], correct: 1 },

  // Hard (10)
  { id: 513, category: "spatial", difficulty: 3, timeLimit: 55, question: "A 4\u00d74\u00d74 cube is painted on all faces and cut into 64 unit cubes. How many have exactly 2 painted faces?", options: ["16", "24", "32", "48"], correct: 1 },
  { id: 514, category: "spatial", difficulty: 3, timeLimit: 55, question: "The volume of a sphere is doubled. By what factor does the radius increase?", options: ["\u221a2", "\u221b2", "2", "4"], correct: 1 },
  { id: 515, category: "spatial", difficulty: 3, timeLimit: 55, question: "A regular tetrahedron has 4 faces. How many edges does it have?", options: ["4", "6", "8", "12"], correct: 1 },
  { id: 516, category: "spatial", difficulty: 3, timeLimit: 55, question: "If you cut a M\u00f6bius strip down the middle lengthwise, how many pieces do you get?", options: ["1", "2", "3", "4"], correct: 0 },
  { id: 517, category: "spatial", difficulty: 3, timeLimit: 55, question: "A sphere fits exactly inside a cube (touching all 6 faces). What fraction of the cube's volume does the sphere occupy?", options: ["\u03c0/4", "\u03c0/6", "\u03c0/3", "2\u03c0/3"], correct: 1 },
  { id: 518, category: "spatial", difficulty: 3, timeLimit: 55, question: "How many non-congruent triangles can be formed with vertices at corners of a unit cube?", options: ["3", "4", "5", "6"], correct: 2 },
  { id: 527, category: "spatial", difficulty: 3, timeLimit: 55, question: "A 3\u00d73\u00d73 Rubik's cube has how many visible colored squares?", options: ["27", "48", "54", "56"], correct: 2 },
  { id: 528, category: "spatial", difficulty: 3, timeLimit: 55, question: "A dodecahedron has how many faces?", options: ["10", "12", "14", "20"], correct: 1 },
  { id: 529, category: "spatial", difficulty: 3, timeLimit: 55, question: "If you connect all vertices of a regular hexagon with diagonals, how many triangles are formed?", options: ["14", "18", "20", "24"], correct: 2 },
  { id: 530, category: "spatial", difficulty: 3, timeLimit: 55, question: "An icosahedron has 20 faces. How many vertices does it have?", options: ["10", "12", "15", "20"], correct: 1 },
];

// --- SCORING ----------------------------------------------------------------

export const DIFFICULTY_SCORE: Record<Difficulty, number> = { 1: 1, 2: 2, 3: 3 };

export type CategoryAccuracy = {
  correct: number;
  total: number;
  accuracy: number;
};

export type IQBreakdown = {
  iq: number;
  cluster: string;
  baseRatio: number;
  difficultyAdjust: number;
  categoryAccuracy: Record<string, CategoryAccuracy>;
  difficultyAccuracy: Record<number, CategoryAccuracy>;
  totalCorrect: number;
  totalQuestions: number;
  avgDifficulty: number;
};

/**
 * IQ calculation modeled after Computerized Adaptive Testing (CAT).
 *
 * Real IQ tests like Mensa use two signals:
 * 1. Weighted accuracy (harder correct answers count more)
 * 2. The difficulty level the adaptive engine converged to
 *
 * The adaptive engine pushes you toward questions where you get ~50%
 * correct. The LEVEL at which you converge IS your ability estimate.
 * Someone scoring 50% on hard questions has higher ability than someone
 * scoring 50% on easy questions.
 *
 * We blend weighted accuracy with a difficulty adjustment, then map
 * through a logit function to produce a normal distribution (mean=100,
 * SD=15) matching the Wechsler scale used by Mensa.
 */
export function calculateIQAdvanced(
  answers: { questionId: number; correct: boolean; difficulty: Difficulty; category: string }[]
): IQBreakdown {
  let weightedScore = 0;
  let maxScore = 0;

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

  let totalCorrect = 0;
  let difficultySum = 0;
  let correctDifficultySum = 0;

  for (const a of answers) {
    const weight = DIFFICULTY_SCORE[a.difficulty];
    maxScore += weight;
    if (a.correct) {
      weightedScore += weight;
      totalCorrect++;
      correctDifficultySum += a.difficulty;
    }
    difficultySum += a.difficulty;

    catAcc[a.category].total++;
    if (a.correct) catAcc[a.category].correct++;

    diffAcc[a.difficulty].total++;
    if (a.correct) diffAcc[a.difficulty].correct++;
  }

  const baseRatio = maxScore > 0 ? weightedScore / maxScore : 0;
  const avgDifficulty = answers.length > 0 ? difficultySum / answers.length : 2;

  // Difficulty adjustment: the average difficulty of correctly answered
  // questions relative to the midpoint (2.0). If you answer hard questions
  // correctly, your ability is higher than the raw ratio suggests.
  // This mirrors how real CAT estimates ability from item difficulty.
  const avgCorrectDifficulty = totalCorrect > 0
    ? correctDifficultySum / totalCorrect
    : 1;
  const difficultyAdjust = (avgCorrectDifficulty - 2.0) * 0.12;

  // Combine: weighted ratio + difficulty signal
  const adjustedRatio = Math.max(0.02, Math.min(0.98, baseRatio + difficultyAdjust));

  // Logit transform: maps (0,1) to (-inf, inf)
  // This produces a normal-like distribution matching real IQ curves
  const theta = Math.log(adjustedRatio / (1 - adjustedRatio));

  // Wechsler scale: mean=100, SD=15
  // theta=0 -> IQ 100 (50th percentile)
  // theta=1 -> IQ 115 (84th percentile, +1 SD)
  // theta=2 -> IQ 130 (98th percentile, Mensa cutoff)
  const iq = Math.round(Math.max(55, Math.min(145, 100 + theta * 15)));

  const cluster = getIQCluster(iq);

  const categoryAccuracy: Record<string, CategoryAccuracy> = {};
  for (const [cat, acc] of Object.entries(catAcc)) {
    categoryAccuracy[cat] = {
      correct: acc.correct,
      total: acc.total,
      accuracy: acc.total > 0 ? acc.correct / acc.total : 0,
    };
  }

  const difficultyAccuracy: Record<number, CategoryAccuracy> = {};
  for (const [diff, acc] of Object.entries(diffAcc)) {
    difficultyAccuracy[Number(diff)] = {
      correct: acc.correct,
      total: acc.total,
      accuracy: acc.total > 0 ? acc.correct / acc.total : 0,
    };
  }

  return {
    iq,
    cluster,
    baseRatio,
    difficultyAdjust,
    categoryAccuracy,
    difficultyAccuracy,
    totalCorrect,
    totalQuestions: answers.length,
    avgDifficulty,
  };
}

export function getIQCluster(iq: number): string {
  if (iq < 85) return "A";
  if (iq < 100) return "B";
  if (iq < 115) return "C";
  if (iq < 130) return "D";
  return "E";
}

export const IQ_CLUSTER_LABELS: Record<string, { label: string; range: string; percentile: string; description: string; color: string }> = {
  A: { label: "Below Average", range: "< 85", percentile: "Bottom 16%", description: "You approach problems practically and prefer straightforward solutions.", color: "#60A5FA" },
  B: { label: "Average", range: "85-99", percentile: "16th-50th", description: "You have solid reasoning skills and handle everyday problems well.", color: "#34D399" },
  C: { label: "Above Average", range: "100-114", percentile: "50th-84th", description: "You think analytically and excel at connecting ideas across domains.", color: "#FBBF24" },
  D: { label: "Superior", range: "115-129", percentile: "84th-98th", description: "You rapidly identify patterns and thrive with abstract concepts.", color: "#F97316" },
  E: { label: "Exceptional", range: "130+", percentile: "Top 2%", description: "You demonstrate extraordinary reasoning across all cognitive dimensions.", color: "#F472B6" },
};
