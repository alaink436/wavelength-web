"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { VALUES_QUESTIONS } from "@/lib/valuesQuestions";

export default function ValuesPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [hasIQResults, setHasIQResults] = useState(false);

  useEffect(() => {
    const iq = sessionStorage.getItem("iq_results");
    setHasIQResults(!!iq);
  }, []);

  const question = VALUES_QUESTIONS[currentIndex];
  const progress = ((currentIndex) / VALUES_QUESTIONS.length) * 100;
  const isLast = currentIndex === VALUES_QUESTIONS.length - 1;

  function selectAnswer(value: string) {
    const newAnswers = { ...answers, [question.key]: value };
    setAnswers(newAnswers);

    if (isLast) {
      // Store values and go to results
      sessionStorage.setItem("values_answers", JSON.stringify(newAnswers));
      router.push("/results");
    } else {
      setTimeout(() => setCurrentIndex((i) => i + 1), 300);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border-subtle">
        <div className="h-[2px] bg-[rgba(255,255,255,0.02)]">
          <motion.div
            className="h-full bg-accent"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="max-w-[640px] mx-auto px-6 h-11 flex items-center justify-between">
          <span className="text-[13px] font-[510] text-text-tertiary">
            {hasIQResults ? "Part 2 — " : ""}Values & Dealbreakers
          </span>
          <span className="text-[13px] font-[510] text-text-tertiary">
            <span className="text-foreground">{currentIndex + 1}</span>
            <span className="text-text-quaternary"> / {VALUES_QUESTIONS.length}</span>
          </span>
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="max-w-lg w-full"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-[510] text-text-quaternary tracking-[-0.13px]">
                {question.category}
              </span>
              {question.weight === "hard" && (
                <span className="text-[10px] font-[510] text-error/70 bg-error/[0.08] px-1.5 py-0.5 rounded-[4px]">
                  dealbreaker
                </span>
              )}
            </div>

            <h2 className="text-[20px] sm:text-[24px] font-[510] tracking-[-0.29px] leading-[1.33] mb-8">
              {question.question}
            </h2>

            <div className="space-y-1.5">
              {question.options.map((option) => {
                const isSelected = answers[question.key] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => selectAnswer(option.value)}
                    className={`w-full text-left p-3.5 rounded-[6px] border transition-all text-[14px] tracking-[-0.14px] ${
                      isSelected
                        ? "border-accent/40 bg-accent/[0.06] text-foreground"
                        : "border-border bg-[rgba(255,255,255,0.02)] text-text-secondary hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
