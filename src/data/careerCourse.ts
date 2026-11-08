export const CAREER_COURSE_LIST_ID = "PLtFbQRDJ11kFJFzd5UNy5vSnkbR031vG9";

export const careerCourseVideoUrl = (videoId: string, index: number) =>
  `https://www.youtube.com/watch?v=${videoId}&list=${CAREER_COURSE_LIST_ID}&index=${index}`;

export const CAREER_COURSE_START_URL = careerCourseVideoUrl("_rDqhxrkANc", 1);

export interface CareerModule {
  videoId: string;
  /** Position of the module's first video in the playlist. */
  index: number;
  icon: string;
  title: string;
  description: string;
  videos: number;
}

export const careerModules: CareerModule[] = [
  {
    videoId: "_rDqhxrkANc",
    index: 1,
    icon: "🧭",
    title: "مقدمة الدورة",
    description: "محتوى الدورة، المطلوب منك، وأسئلة شائعة عن طريقة المتابعة.",
    videos: 2,
  },
  {
    videoId: "J-pO5UIqkBE",
    index: 3,
    icon: "🎨",
    title: "أساسيات HTML و CSS",
    description: "HTML و CSS من الصفر، كيف تذاكر صح، وأسئلة المقابلات.",
    videos: 7,
  },
  {
    videoId: "B3OnCddcrmY",
    index: 10,
    icon: "🖥️",
    title: "المشروع الأول + Git",
    description: "تطبيق موقع كامل خطوة بخطوة ثم رفعه على GitHub.",
    videos: 7,
  },
  {
    videoId: "AlxosX07_S4",
    index: 17,
    icon: "✨",
    title: "CSS المتقدم",
    description: "HTML5 و CSS3 و Flexbox و Grid و Selectors و Media Query ومنهجيات BEM، مع مشروع ثانٍ.",
    videos: 13,
  },
  {
    videoId: "GyBT6iXNdO4",
    index: 30,
    icon: "⚡",
    title: "جافاسكربت",
    description: "المتغيرات والدوال و DOM و BOM و Ajax و ES6 والبرمجة الكائنية OOP.",
    videos: 19,
  },
  {
    videoId: "cgs0tIRvSHQ",
    index: 49,
    icon: "🛠️",
    title: "مشاريع جافاسكربت",
    description: "سلة مشتريات، لعبة حرب، وتطبيق اختبارات، مع أسئلة مقابلات JS.",
    videos: 21,
  },
  {
    videoId: "dmbp0ecIi90",
    index: 70,
    icon: "🧰",
    title: "jQuery و Bootstrap",
    description: "jQuery في ساعة، Bootstrap 4 مع قالب عربي، ومقدمة عن Node.js.",
    videos: 6,
  },
  {
    videoId: "3_ZgW1x_yao",
    index: 76,
    icon: "⚛️",
    title: "React",
    description: "JSX و Components و State و Props و Hooks و Context و React Router.",
    videos: 19,
  },
  {
    videoId: "XdA3kxOUn3U",
    index: 95,
    icon: "🔄",
    title: "Redux",
    description: "Store و Reducer و Actions، ثم تطبيقات عملية باستخدام Redux.",
    videos: 23,
  },
];
