import type { ReactNode } from "react";
import { CAREER_COURSE_START_URL, careerCourseVideoUrl, careerModules } from "../data/careerCourse";

interface CareerCourseFeatureProps {
  description: string;
  actions: ReactNode;
  /** Shows the course parts as small numbered pills. */
  showPath?: boolean;
  children?: ReactNode;
}

export default function CareerCourseFeature({
  description,
  actions,
  showPath = false,
  children,
}: CareerCourseFeatureProps) {
  return (
    <section className="flagship-wrap" id="career-course">
      <div className="container">
        <div className="flagship">
          <div className="flagship-content">
            <span className="flag-badge">🎯 الدورة الأشمل في القناة</span>
            <h2>دورة التأهيل لسوق العمل في مجال الويب</h2>
            <p>{description}</p>
            <ul className="flag-stats">
              <li>
                <strong>117</strong>
                <span>فيديو</span>
              </li>
              <li>
                <strong>+1.2M</strong>
                <span>مشاهدة</span>
              </li>
              <li>
                <strong>9</strong>
                <span>مراحل</span>
              </li>
              <li>
                <strong>مجانية</strong>
                <span>بالكامل</span>
              </li>
            </ul>
            {showPath && (
              <ol className="flag-path">
                {careerModules.map((module) => (
                  <li key={module.index}>{module.title}</li>
                ))}
              </ol>
            )}
            <div className="hero-actions">{actions}</div>
          </div>
          <a
            className="flagship-media"
            href={CAREER_COURSE_START_URL}
            target="_blank"
            rel="noopener"
            aria-label="شاهد الفيديو الأول من الدورة"
          >
            <img src="https://i.ytimg.com/vi/_rDqhxrkANc/hqdefault.jpg" alt="" loading="lazy" />
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="media-note">شاهد الفيديو الأول: مقدمة الدورة</span>
          </a>
        </div>
        {children}
      </div>
    </section>
  );
}

/** The full outline: each part opens at its first video. */
export function CareerCourseModules() {
  return (
    <>
      <div className="modules-head">
        <h3>منهج الدورة</h3>
        <p>اضغط على أي مرحلة لتبدأ مباشرة من أول فيديو فيها.</p>
      </div>
      <ol className="modules">
        {careerModules.map((module, position) => (
          <li className="module" key={module.index}>
            <a
              href={careerCourseVideoUrl(module.videoId, module.index)}
              target="_blank"
              rel="noopener"
              title={module.description}
            >
              <span className="module-num">{position + 1}</span>
              <span className="module-icon" aria-hidden="true">
                {module.icon}
              </span>
              <span className="module-title">{module.title}</span>
              <span className="module-count">{module.videos} فيديو</span>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}
