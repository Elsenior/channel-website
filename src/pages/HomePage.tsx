import { Link } from "react-router";
import { SUBSCRIBE_URL } from "../data/links";
import CareerCourseFeature from "../components/CareerCourseFeature";
import ChannelStats from "../components/ChannelStats";
import CourseCard from "../components/CourseCard";
import Testimonials from "../components/Testimonials";
import { CAREER_COURSE_START_URL } from "../data/careerCourse";
import { featuredCourses } from "../data/courses";

export default function HomePage() {
  return (
    <main>
      {/* الواجهة */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">أكاديمية برمجة عربية مجانية</span>
            <h1>
              تعلّم البرمجة <span>بالعربي</span>
              <br />
              خطوة بخطوة، من الصفر حتى سوق العمل
            </h1>
            <p className="lead">
              كورسات ومشاريع عملية في تطوير الويب: HTML و CSS و JavaScript و React وغيرها، بشرح بسيط وواضح.
            </p>
            <div className="hero-actions">
              <Link to="/roadmap" className="btn btn-primary">
                ابدأ رحلة التعلم ←
              </Link>{" "}
              <Link to="/courses" className="btn btn-ghost">
                تصفّح كل الكورسات
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/logo.jpg"
              alt="شعار قناة Unique Coderz Academy"
            />
          </div>
        </div>
      </section>
      {/* الإحصائيات */}
      <ChannelStats showVisits />
      {/* الدورة المميزة */}
      <CareerCourseFeature
        showPath
        description="دورة كاملة تبدأ معك من الصفر وتصل بك إلى مستوى يؤهلك للعمل في الشركات: من HTML و CSS حتى React و Redux، مع مشاريع حقيقية وأسئلة مقابلات."
        actions={
          <>
            <a href={CAREER_COURSE_START_URL} className="btn btn-primary" target="_blank" rel="noopener">
              ▶ ابدأ الدورة الآن
            </a>{" "}
            <Link to="/courses#career-course" className="btn btn-ghost">
              اعرض المنهج كاملاً
            </Link>
          </>
        }
      />
      {/* من أين أبدأ */}
      <section className="alt-bg">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">من أين أبدأ؟</span>
            <h2>اختر المسار المناسب لمستواك</h2>
            <p>لا تضيع بين عشرات الفيديوهات. حدّد مستواك الحالي وابدأ من المكان الصحيح.</p>
          </div>
          <div className="paths">
            <Link to="/roadmap#step-1" className="path">
              <div className="emoji">🌱</div>
              <h3>مبتدئ تماماً</h3>
              <p>لم تكتب سطر كود من قبل؟ ابدأ بأساسيات HTML و CSS وابنِ أول موقع لك.</p>
              <span className="more">ابدأ من الخطوة الأولى ←</span>
            </Link>{" "}
            <Link to="/roadmap#step-4" className="path">
              <div className="emoji">⚡</div>
              <h3>أعرف الأساسيات</h3>
              <p>انتقل إلى JavaScript والبرمجة الكائنية، وطبّق ما تعلمته في مشاريع حقيقية.</p>
              <span className="more">انتقل إلى JavaScript ←</span>
            </Link>{" "}
            <Link to="/roadmap#step-6" className="path">
              <div className="emoji">🚀</div>
              <h3>جاهز لسوق العمل</h3>
              <p>React و Redux و Next.js، مع أسئلة المقابلات ونصائح للوصول إلى الشركات.</p>
              <span className="more">جهّز نفسك للعمل ←</span>
            </Link>
          </div>
        </div>
      </section>
      {/* كورسات مميزة */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">الأكثر طلباً</span>
            <h2>كورسات مميزة</h2>
            <p>أفضل نقطة بداية لمعظم المتعلمين، ويمكنك مشاهدتها كاملة على يوتيوب.</p>
          </div>
          <div className="grid">
            {featuredCourses.map((course) => (
              <CourseCard key={course.listId} course={course} />
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/courses" className="btn btn-ghost">
              شاهد جميع الكورسات (80 قائمة) ←
            </Link>
          </p>
        </div>
      </section>
      {/* ماذا يقولون عن القناة */}
      <Testimonials />
      {/* اشتراك */}
      <section style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="cta">
            <div>
              <h2>لا تفوّت أي درس جديد</h2>
              <p>اشترك في القناة وفعّل الإشعارات لتصلك الفيديوهات الجديدة أولاً بأول.</p>
            </div>
            <a href={SUBSCRIBE_URL} className="btn btn-primary" target="_blank" rel="noopener">
              اشترك في القناة
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
