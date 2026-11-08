import type { ReactElement } from "react";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import RoadmapPage from "./pages/RoadmapPage";
import ArticlesPage from "./pages/ArticlesPage";
import MentorshipPage from "./pages/MentorshipPage";
import AboutPage from "./pages/AboutPage";
import AiProgrammingArticle from "./pages/articles/AiProgrammingArticle";
import FocusPathArticle from "./pages/articles/FocusPathArticle";
import StudyWhileWorkingArticle from "./pages/articles/StudyWhileWorkingArticle";

export interface Page {
  /** Clean URL used by the links inside the site. */
  path: string;
  /** HTML file generated at build time. It also keeps the old URLs working. */
  file: string;
  /** Menu item highlighted while this page is open. */
  nav: string;
  title: string;
  description: string;
  element: ReactElement;
}

export const pages: Page[] = [
  {
    path: "/",
    file: "index.html",
    nav: "/",
    title: "Unique Coderz Academy | تعلّم البرمجة بالعربي",
    description:
      "قناة عربية لتعليم البرمجة وتطوير الويب: HTML و CSS و JavaScript و React ومشاريع عملية وتأهيل لسوق العمل.",
    element: <HomePage />,
  },
  {
    path: "/courses",
    file: "courses.html",
    nav: "/courses",
    title: "الكورسات | Unique Coderz Academy",
    description: "جميع كورسات وقوائم تشغيل (80 قائمة) قناة Unique Coderz Academy مرتبة حسب الموضوع والمستوى.",
    element: <CoursesPage />,
  },
  {
    path: "/roadmap",
    file: "roadmap.html",
    nav: "/roadmap",
    title: "خريطة التعلم | Unique Coderz Academy",
    description: "مسار تعلّم مرتب خطوة بخطوة لتصبح مطور ويب، باستخدام كورسات قناة Unique Coderz Academy.",
    element: <RoadmapPage />,
  },
  {
    path: "/articles",
    file: "articles.html",
    nav: "/articles",
    title: "المقالات | Unique Coderz Academy",
    description:
      "مقالات ونصائح عن البرمجة وتطوير الويب والذكاء الاصطناعي وسوق العمل من Unique Coderz Academy.",
    element: <ArticlesPage />,
  },
  {
    path: "/mentorship",
    file: "mentorship.html",
    nav: "/mentorship",
    title: "الإرشاد Mentorship | Unique Coderz Academy",
    description:
      "جلسات إرشاد فردية أونلاين مع حمزة نبيل، Senior Software Engineer: مراجعة كود، تحضير مقابلات، وخطة تعلّم مخصصة.",
    element: <MentorshipPage />,
  },
  {
    path: "/about",
    file: "about.html",
    nav: "/about",
    title: "عن القناة | Unique Coderz Academy",
    description: "تعرّف على قناة Unique Coderz Academy، قناة عربية لتعليم البرمجة وتطوير الويب.",
    element: <AboutPage />,
  },
  {
    path: "/article-ai-programming",
    file: "article-ai-programming.html",
    nav: "/articles",
    title: "الذكاء الاصطناعي والبرمجة: إجابات لأكثر 10 أسئلة | Unique Coderz Academy",
    description:
      "هل سيستبدل الذكاء الاصطناعي المبرمجين؟ هل ما زال تعلّم البرمجة يستحق؟ وكيف تستخدمه بشكل صحيح؟ إجابات واضحة لأكثر 10 أسئلة شيوعاً.",
    element: <AiProgrammingArticle />,
  },
  {
    path: "/article-focus-path",
    file: "article-focus-path.html",
    nav: "/articles",
    title: "التشتت وتحديد المسار في تعلّم البرمجة | Unique Coderz Academy",
    description:
      "حاسس إنك مشتت بين الكورسات واللغات والأدوات؟ اعرف ليه التشتت بيحصل، وإزاي تختار مسار واحد وتخرج منه بخطة عملية لمدة 4 أسابيع.",
    element: <FocusPathArticle />,
  },
  {
    path: "/article-study-while-working",
    file: "article-study-while-working.html",
    nav: "/articles",
    title: "إزاي تذاكر برمجة صح وأنت شغال أو بتدرس | Unique Coderz Academy",
    description:
      "مش لاقي وقت تتعلم برمجة جنب شغلك أو دراستك؟ نظام عملي: وقت ثابت، خطة أسبوعية، جلسة 60 دقيقة مثالية، ومذاكرة نشطة، مع جدول جاهز للطالب والموظف.",
    element: <StudyWhileWorkingArticle />,
  },
];

export function findPage(pathname: string): Page | undefined {
  return pages.find((page) => page.path === pathname || `/${page.file}` === pathname);
}
