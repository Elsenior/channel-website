import { Link } from "react-router";
import VisitCount from "./VisitCount";
import { useVisits } from "../hooks/useVisits";
import { YOUTUBE_URL } from "../data/links";

export default function Footer() {
  const visits = useVisits();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p style={{ margin: 0 }}>© Unique Coderz Academy. جميع الحقوق محفوظه.</p>
        <p className="visits" hidden={visits === null}>
          <span className="visits-dot" aria-hidden="true"></span>
          <VisitCount as="b" /> زيارة للموقع
        </p>
        <div className="footer-links">
          <Link to="/courses">الكورسات</Link>
          <Link to="/roadmap">خريطة التعلم</Link>
          <Link to="/about">عن القناة</Link>
          <Link to="/articles">المقالات</Link>
          <Link to="/mentorship">الإرشاد</Link>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener">
            يوتيوب
          </a>
        </div>
      </div>
    </footer>
  );
}
