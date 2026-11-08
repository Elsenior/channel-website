export interface ArticleSummary {
  to: string;
  icon: string;
  chips: string[];
  tag: { label: string; className: string };
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  /** Uses the second background style for the card picture. */
  altVisual?: boolean;
  /** Shows the "جديد" badge. */
  isNew?: boolean;
}

/** Newest first. */
export const articles: ArticleSummary[] = [
  {
    to: "/article-study-while-working",
    icon: "⏰",
    chips: ["60 min", "Plan", "</>"],
    tag: { label: "طريقة التعلّم", className: "tag mid" },
    title: "إزاي تذاكر برمجة صح وأنت شغال أو بتدرس؟",
    excerpt:
      "مش محتاج 8 ساعات في اليوم. نظام عملي يناسب وقتك وطاقتك: ساعة ثابتة، هدف أسبوعي، جلسة 60 دقيقة مثالية، وجدول جاهز للطالب والموظف.",
    author: "✍️ Hamza Nabil",
    readTime: "⏱️ 11 دقيقة قراءة",
    date: "📅 نوفمبر 2026",
    isNew: true,
  },
  {
    to: "/article-focus-path",
    icon: "🧭",
    chips: ["HTML", "React?", "Vue?"],
    tag: { label: "طريقة التعلّم", className: "tag mid" },
    title: "التشتت في تعلّم البرمجة: كيف تختار مسارك وتتعامل مع كثرة المصادر والأدوات؟",
    excerpt:
      "كورس هنا وفيديو هناك ولغة جديدة كل أسبوع؟ اعرف ليه التشتت بيحصل، وإزاي تختار مسار واحد ومصدر واحد، وتخرج منه بخطة عملية لمدة 4 أسابيع.",
    author: "✍️ Hamza Nabil",
    readTime: "⏱️ 12 دقيقة قراءة",
    date: "📅 نوفمبر 2026",
    altVisual: true,
  },
  {
    to: "/article-ai-programming",
    icon: "🤖",
    chips: ["AI", "LLM", "</>"],
    tag: { label: "ذكاء اصطناعي", className: "tag" },
    title: "الذكاء الاصطناعي والبرمجة: إجابات واضحة لأكثر 10 أسئلة شيوعاً",
    excerpt:
      "هل سيأخذ الذكاء الاصطناعي وظيفتك؟ هل ما زال تعلّم البرمجة يستحق؟ وكيف تستخدمه صح وأنت مبتدئ أو محترف؟ إجابات صريحة وبسيطة مع أمثلة ونصائح عملية.",
    author: "✍️ Hamza Nabil",
    readTime: "⏱️ 10 دقائق قراءة",
    date: "📅 نوفمبر 2026",
  },
];
