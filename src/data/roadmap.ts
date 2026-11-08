export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  playlists: { listId: string; label: string }[];
}

export const roadmapSteps: RoadmapStep[] = [
  {
    id: "step-1",
    title: "🧭 تعرّف على المجال",
    description: "قبل أن تكتب أي كود، افهم ما هو تطوير الويب وكيف تفكر كمبرمج.",
    playlists: [
      { listId: "PLtFbQRDJ11kH_lzWv3SCRzKcF5MarNu_1", label: "كيف أبدأ تعلم الويب؟" },
      { listId: "PLtFbQRDJ11kGvzwSDJlGX2ROuVpZaNuPl", label: "تعاريف مهمة" },
      { listId: "PLtFbQRDJ11kGpFFwvzRf8NUelhAnokbq8", label: "فروقات مهمة" },
      { listId: "PLtFbQRDJ11kGRt3bUHlOdjsPvr-lchIYe", label: "فكّر ثم اكتب الكود" },
    ],
  },
  {
    id: "step-2",
    title: "🎨 أساسيات HTML و CSS",
    description: "تعلّم بناء هيكل الصفحة وتنسيقها وجعلها متجاوبة مع كل الشاشات.",
    playlists: [
      { listId: "PLtFbQRDJ11kHSmfYMvSprAHaPeNlpF4qK", label: "دورة HTML" },
      { listId: "PLtFbQRDJ11kFENgYWivcxJwFKZp815zXX", label: "دورة CSS" },
      { listId: "PLtFbQRDJ11kEry0gyNDDxTrQ_ATbOn9-t", label: "CSS3" },
      { listId: "PLtFbQRDJ11kG5SWAH-uHqqZtPbUkNm2RY", label: "التصميم المتجاوب" },
      { listId: "PLtFbQRDJ11kHnEE5SVx_LrfI3o6KgaWC5", label: "CSS Grid" },
      { listId: "PLtFbQRDJ11kG9bpED1ETRKAmP1huxqvrd", label: "خاصية Position" },
      { listId: "PLtFbQRDJ11kE--j12SU0X5pnXiM0WsWVQ", label: "توسيط العناصر" },
      { listId: "PLtFbQRDJ11kEXHMMcWsKUaiO3b3epajIe", label: "Bootstrap 4" },
    ],
  },
  {
    id: "step-3",
    title: "🖥️ صمّم مواقع كاملة",
    description: "طبّق ما تعلمته في قوالب ومواقع حقيقية. هنا يثبت الفهم.",
    playlists: [
      { listId: "PLtFbQRDJ11kEaYTCQOy6KlmosZsujMquy", label: "مشروع HTML5 و CSS3 الكبير" },
      { listId: "PLtFbQRDJ11kFQdohqPO8yIE1Wx9s4g2ts", label: "مشروع مع Git و GitHub" },
      { listId: "PLtFbQRDJ11kG7W2TmVs4gr9FqmZ0Ui551", label: "قالب متجاوب" },
      { listId: "PLtFbQRDJ11kHRssrAL0kxjBFN-e6GlJNs", label: "قالب مع Sass" },
      { listId: "PLtFbQRDJ11kGlBGJexOddT7pj6ZAp69DC", label: "سلسلة التصميم من الصفر" },
    ],
  },
  {
    id: "step-4",
    title: "⚡ لغة جافاسكربت",
    description: "اجعل صفحاتك تفاعلية. ركّز على فهم الأساسيات جيداً لأن كل ما بعدها يعتمد عليها.",
    playlists: [
      { listId: "PLtFbQRDJ11kFSI83AC5yfPVHKDe_7upv8", label: "كورس جافاسكربت الكامل" },
      { listId: "PLtFbQRDJ11kH1QG_cGo4Z9-V66BBuAH9Q", label: "أمثلة وتطبيقات" },
      { listId: "PLtFbQRDJ11kHgwumBSYiYdA7MknejHAj6", label: "البرمجة الكائنية OOP" },
      { listId: "PLtFbQRDJ11kGc2dWpGMLJjPADeHPAFVA9", label: "LocalStorage" },
      { listId: "PLtFbQRDJ11kETV6HO6iyjyW4aDQc1GV9O", label: "ما ناتج هذا الكود؟" },
      { listId: "PLtFbQRDJ11kFNxjsbgm9uWqTQhtkY0Fzk", label: "jQuery (اختياري)" },
    ],
  },
  {
    id: "step-5",
    title: "🛠️ مشاريع وحل مشكلات",
    description: "ابنِ مشاريع لمعرض أعمالك ودرّب عقلك على حل المسائل.",
    playlists: [
      { listId: "PLtFbQRDJ11kGlRWp8MFhqlbO3ZmxIa3RE", label: "مشاريع جافاسكربت" },
      { listId: "PLtFbQRDJ11kHvXLruqSf-x_EE6-VEVc78", label: "تطبيق GitHub" },
      { listId: "PLtFbQRDJ11kEMjSzhHKMdcIuLiIywYWjH", label: "تطبيق الوصفات" },
      { listId: "PLtFbQRDJ11kGjrfjRZ3ikR_KUCIY9sJAS", label: "لعبة بـ OOP" },
      { listId: "PLtFbQRDJ11kHCgyFid3khHdOk0VEHiJ3e", label: "متجر وسلة مشتريات" },
      { listId: "PLtFbQRDJ11kEZczEgH0Zt-fif_bO-yUBB", label: "حل المشكلات بجافاسكربت" },
      { listId: "PLtFbQRDJ11kHXFaL_6hH0VLO0dFgRehlN", label: "مسائل Codeforces" },
    ],
  },
  {
    id: "step-6",
    title: "⚛️ React والأدوات الحديثة",
    description: "تعلّم الأدوات التي تطلبها الشركات اليوم لبناء تطبيقات كبيرة وسريعة.",
    playlists: [
      { listId: "PLtFbQRDJ11kH1RHmJD7DYtV9RXY42Al5g", label: "TypeScript" },
      { listId: "PLtFbQRDJ11kHq9fxQpHNjO2GAmR9yUJco", label: "React الكامل" },
      { listId: "PLtFbQRDJ11kF1BU_by3RV4ab4PXDti-Es", label: "تطبيق المهام" },
      { listId: "PLtFbQRDJ11kF2PJwHI7tGgugIa7poDXYd", label: "تطبيق الطقس" },
      { listId: "PLtFbQRDJ11kGxwImInU0LvTlDQemcVdIJ", label: "Redux الكامل" },
      { listId: "PLtFbQRDJ11kHPsrZ_jZHrGGpwtS7Ngrl8", label: "Redux Toolkit" },
      { listId: "PLtFbQRDJ11kENRrEUG6fmPSVVh7WWijbz", label: "Next.js" },
      { listId: "PLtFbQRDJ11kHx_-ZSxZHntR02O2X4j3Hz", label: "تطبيق MERN" },
    ],
  },
  {
    id: "step-7",
    title: "💼 الاستعداد لسوق العمل",
    description: "جهّز نفسك للمقابلات وتعرّف على طريقة الوصول إلى الشركات والحصول على أول وظيفة.",
    playlists: [
      { listId: "PLtFbQRDJ11kFJFzd5UNy5vSnkbR031vG9", label: "دورة التأهيل لسوق العمل" },
      { listId: "PLtFbQRDJ11kE7NkqOq6jElBGNdqZfsAIP", label: "أسئلة مقابلات Front End" },
      { listId: "PLtFbQRDJ11kGKNhbVhquhj2TxN6b018E2", label: "طريقك للشركات" },
    ],
  },
];
