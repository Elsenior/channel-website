import type { Course, CourseLevel } from "../data/courses";
import { playlistUrl } from "../data/links";

const levels: Record<CourseLevel, { label: string; className: string }> = {
  beg: { label: "مبتدئ", className: "tag" },
  mid: { label: "متوسط", className: "tag mid" },
  adv: { label: "متقدم", className: "tag adv" },
  any: { label: "للجميع", className: "tag all" },
};

export default function CourseCard({ course }: { course: Course }) {
  const level = levels[course.level];

  return (
    <a className="card" data-level={course.level} href={playlistUrl(course.listId)} target="_blank" rel="noopener">
      <div className="thumb">
        <img src={`https://i.ytimg.com/vi/${course.thumbVideoId}/hqdefault.jpg`} alt="" loading="lazy" />
        {course.startHere && <span className="star">⭐ ابدأ بهذا</span>}
        {course.count && <span className="count">{course.count}</span>}
      </div>
      <div className="card-body">
        <span className={level.className}>{level.label}</span>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        {course.englishTitle && <span className="en">{course.englishTitle}</span>}
      </div>
    </a>
  );
}
