import { Link } from "react-router";
import CareerCourseFeature, { CareerCourseModules } from "../components/CareerCourseFeature";
import CourseCard from "../components/CourseCard";
import { CAREER_COURSE_LIST_ID, CAREER_COURSE_START_URL } from "../data/careerCourse";
import { courseCategories } from "../data/courses";
import { playlistUrl } from "../data/links";

/** Arabic counting for "playlist". */
function playlistCount(count: number): string {
  if (count === 1) return "قائمة واحدة";
  if (count === 2) return "قائمتان";
  return count <= 10 ? `${count} قوائم` : `${count} قائمة`;
}

export default function CoursesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">80 قائمة تشغيل</span>
          <h1>جميع الكورسات</h1>
          <p>
            كل قوائم التشغيل في القناة مرتبة حسب الموضوع. ابحث عن علامة <strong>⭐ ابدأ بهذا</strong> في كل
            قسم، أو اتبع <Link to="/roadmap">خريطة التعلم</Link> إذا لم تكن متأكداً من أين تبدأ.
          </p>
          <div className="filters" aria-label="تصفية حسب المستوى">
            <span className="filters-label">المستوى:</span>{" "}
            <input type="radio" name="level" id="lv-all" defaultChecked />
            <label htmlFor="lv-all">الكل</label> <input type="radio" name="level" id="lv-beg" />
            <label htmlFor="lv-beg">مبتدئ</label> <input type="radio" name="level" id="lv-mid" />
            <label htmlFor="lv-mid">متوسط</label> <input type="radio" name="level" id="lv-adv" />
            <label htmlFor="lv-adv">متقدم</label>
          </div>
        </div>
      </section>
      <CareerCourseFeature
        description="إذا كنت تريد طريقاً واحداً واضحاً من الصفر حتى العمل في الشركات، فهذه الدورة لك. 117 فيديو مرتبة في 9 مراحل، كل مرحلة تبني على التي قبلها."
        actions={
          <>
            <a href={CAREER_COURSE_START_URL} className="btn btn-primary" target="_blank" rel="noopener">
              ▶ ابدأ الدورة من البداية
            </a>{" "}
            <a
              href={playlistUrl(CAREER_COURSE_LIST_ID)}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener"
            >
              قائمة التشغيل على يوتيوب
            </a>
          </>
        }
      >
        <CareerCourseModules />
      </CareerCourseFeature>

      <div className="container">
        <nav className="chips" aria-label="أقسام الكورسات">
          <a href="#career-course" className="chip-featured">
            🎯 دورة التأهيل لسوق العمل
          </a>
          {courseCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.icon} {category.title}
            </a>
          ))}
        </nav>
      </div>

      {courseCategories.map((category) => (
        <section className="category" id={category.id} key={category.id}>
          <div className="container">
            <div className="category-head">
              <div className="icon" aria-hidden="true">
                {category.icon}
              </div>
              <div>
                <h2>
                  {category.title} <small>{playlistCount(category.courses.length)}</small>
                </h2>
                <p>{category.description}</p>
              </div>
            </div>
            <div className="grid">
              {category.courses.map((course) => (
                <CourseCard key={course.listId} course={course} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="container next-step">
        <p>محتار من أين تبدأ؟ رتّبنا لك الكورسات في مسار واضح.</p>
        <Link to="/roadmap" className="btn btn-primary">
          اعرض خريطة التعلم ←
        </Link>
      </div>
    </main>
  );
}
