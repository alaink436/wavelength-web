export type ValuesOption = {
  label: string;
  value: string;
};

export type ValuesQuestion = {
  id: number;
  key: string;
  category: string;
  icon: string;
  question: string;
  options: ValuesOption[];
  weight: "hard" | "soft";
};

export const VALUES_QUESTIONS: ValuesQuestion[] = [
  {
    id: 1, key: "kids", category: "Family", icon: "♥", weight: "hard",
    question: "Do you want children?",
    options: [
      { label: "Definitely yes — it's important to me", value: "yes" },
      { label: "Open to it, but not set on it", value: "open" },
      { label: "Probably not", value: "probably_not" },
      { label: "Definitely not", value: "no" },
    ],
  },
  {
    id: 2, key: "relationship_style", category: "Relationship", icon: "👥", weight: "hard",
    question: "Your ideal relationship is...",
    options: [
      { label: "Strictly monogamous — no exceptions", value: "mono" },
      { label: "Monogamous with full honesty about attraction", value: "mono_open" },
      { label: "Open to ethical non-monogamy if we both agree", value: "enm" },
      { label: "Still figuring it out", value: "unsure" },
    ],
  },
  {
    id: 3, key: "career_vs_relationship", category: "Priorities", icon: "💼", weight: "soft",
    question: "Your partner gets their dream job offer — it requires moving abroad for 2 years. You've been together 1 year. You would...",
    options: [
      { label: "Support them fully — love means figuring it out", value: "support" },
      { label: "Try long-distance and see how it goes", value: "long_distance" },
      { label: "Expect them to weigh your situation equally", value: "equal" },
      { label: "Be honest — this would likely end things for me", value: "dealbreaker" },
    ],
  },
  {
    id: 4, key: "infidelity", category: "Dealbreaker", icon: "⚠", weight: "soft",
    question: "If your partner cheated once, you would...",
    options: [
      { label: "End it immediately — zero tolerance", value: "end" },
      { label: "Have a serious conversation, then decide", value: "talk" },
      { label: "Try to work through it if they were willing", value: "work" },
      { label: "It depends on the context and the relationship", value: "depends" },
    ],
  },
  {
    id: 5, key: "politics", category: "Values", icon: "🌍", weight: "soft",
    question: "When it comes to politics, you...",
    options: [
      { label: "Are actively engaged — it shapes how I live", value: "engaged" },
      { label: "Follow it, but don't make it my identity", value: "moderate" },
      { label: "Tune it out — it drains me", value: "tuned_out" },
      { label: "Have strong views I rarely share openly", value: "private" },
    ],
  },
  {
    id: 6, key: "religion", category: "Spirituality", icon: "✦", weight: "soft",
    question: "Spirituality or religion in your life is...",
    options: [
      { label: "Central — it defines how I live", value: "central" },
      { label: "Present but flexible — beliefs, not rules", value: "flexible" },
      { label: "Uncertain — I'm still working it out", value: "searching" },
      { label: "Not part of my life", value: "none" },
    ],
  },
  {
    id: 7, key: "jealousy", category: "Trust", icon: "🛡", weight: "soft",
    question: "Your partner has a close friend of the gender they're attracted to. They hang out alone regularly. You...",
    options: [
      { label: "Trust them completely — jealousy is my issue", value: "trust" },
      { label: "Feel slightly uneasy but keep it to myself", value: "uneasy" },
      { label: "Want to understand the friendship better", value: "curious" },
      { label: "Find it genuinely difficult to handle", value: "hard" },
    ],
  },
  {
    id: 8, key: "conflict", category: "Communication", icon: "💬", weight: "soft",
    question: "When your partner does something that genuinely hurts you, you...",
    options: [
      { label: "Tell them directly — honesty first", value: "direct" },
      { label: "Need time alone to process before I talk", value: "process" },
      { label: "Struggle to say it — I tend to go quiet", value: "avoidant" },
      { label: "Can overreact first, then come back to reflect", value: "reactive" },
    ],
  },
  {
    id: 9, key: "therapy", category: "Mindset", icon: "🧠", weight: "soft",
    question: "Therapy is...",
    options: [
      { label: "Something I do or have done — it helped", value: "active" },
      { label: "Something I'm open to if I needed it", value: "open" },
      { label: "Not really my thing", value: "not_for_me" },
      { label: "Important — I'd want a partner who values it", value: "value" },
    ],
  },
  {
    id: 10, key: "debt", category: "Lifestyle", icon: "💰", weight: "soft",
    question: "Your partner reveals significant debt. You've been together 6 months. You...",
    options: [
      { label: "It doesn't change how I feel at all", value: "fine" },
      { label: "Want to understand their relationship with money", value: "curious" },
      { label: "Feel I should have known earlier", value: "bothered" },
      { label: "Need to seriously think about it", value: "serious" },
    ],
  },
  {
    id: 11, key: "smoking", category: "Lifestyle", icon: "🚫", weight: "soft",
    question: "Does a partner who smokes bother you?",
    options: [
      { label: "Yes — it's a dealbreaker for me", value: "dealbreaker" },
      { label: "I'd prefer not, but not a dealbreaker", value: "prefer_not" },
      { label: "Doesn't bother me at all", value: "fine" },
      { label: "I smoke too", value: "smoker" },
    ],
  },
  {
    id: 12, key: "drinking", category: "Lifestyle", icon: "🍷", weight: "soft",
    question: "Your relationship with alcohol?",
    options: [
      { label: "I don't drink and prefer my partner doesn't", value: "none_strict" },
      { label: "Social drinking fine, heavy drinking is a dealbreaker", value: "social_ok" },
      { label: "I drink regularly — fine if they do too", value: "drinks" },
      { label: "I don't drink, but don't care if they do", value: "none_relaxed" },
    ],
  },
  {
    id: 13, key: "social_media", category: "Lifestyle", icon: "📱", weight: "soft",
    question: "Your partner posts about your relationship on social media. You feel...",
    options: [
      { label: "Uncomfortable — I value my privacy", value: "private" },
      { label: "Fine, as long as I approve what goes up", value: "approval" },
      { label: "Happy — it means they're proud of us", value: "happy" },
      { label: "Depends on what and how they post", value: "depends" },
    ],
  },
  {
    id: 14, key: "life_phase", category: "Mindset", icon: "📈", weight: "soft",
    question: "Right now, you're primarily focused on...",
    options: [
      { label: "Building — career, projects, growth is everything", value: "building" },
      { label: "Balance — success AND a real personal life", value: "balance" },
      { label: "Living — depth and experience over hustle", value: "living" },
      { label: "Figuring it out — I'm in transition", value: "transition" },
    ],
  },
  {
    id: 15, key: "partner_earns_more", category: "Values", icon: "📊", weight: "soft",
    question: "Your partner earns significantly more than you. This...",
    options: [
      { label: "Doesn't affect me — money ≠ self-worth", value: "fine" },
      { label: "Motivates me to keep growing", value: "motivated" },
      { label: "Creates some friction — I like equal footing", value: "friction" },
      { label: "Would honestly bother me", value: "bothered" },
    ],
  },
  {
    id: 16, key: "dealbreaker", category: "Dealbreaker", icon: "✕", weight: "soft",
    question: "Your most honest dealbreaker — the one you've avoided admitting?",
    options: [
      { label: "Someone who doesn't match my ambition", value: "ambition" },
      { label: "Someone emotionally unavailable", value: "emotional" },
      { label: "Someone whose values I can't respect", value: "values" },
      { label: "Someone I'm not deeply attracted to", value: "physical" },
    ],
  },
];

export const VALUES_DISPLAY: Record<string, Record<string, string>> = {
  kids: { yes: "Wants kids", open: "Open to kids", probably_not: "Probably no kids", no: "No kids" },
  relationship_style: { mono: "Monogamous", mono_open: "Monogamous", enm: "Open relationship", unsure: "Figuring it out" },
  life_phase: { building: "Career-driven", balance: "Work-life balance", living: "Life first", transition: "In transition" },
  religion: { central: "Religious", flexible: "Spiritual", searching: "Searching", none: "Not religious" },
  therapy: { active: "Into self-growth", open: "Open-minded", not_for_me: "Independent", value: "Values therapy" },
  social_media: { private: "Very private", approval: "Selective sharer", happy: "Open sharer", depends: "Context-dependent" },
  dealbreaker: { ambition: "Values ambition", emotional: "Needs emotional depth", values: "Values-driven", physical: "Chemistry matters" },
};

export function getProfileTags(profile: Record<string, string>): string[] {
  const keys = ["kids", "relationship_style", "life_phase", "religion", "therapy", "social_media"];
  return keys.map((k) => VALUES_DISPLAY[k]?.[profile[k]] ?? null).filter(Boolean) as string[];
}
