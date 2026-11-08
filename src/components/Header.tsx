import { Link, useLocation } from "react-router";
import { findPage } from "../routes";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/courses", label: "الكورسات" },
  { to: "/roadmap", label: "خريطة التعلم" },
  { to: "/articles", label: "المقالات" },
  { to: "/mentorship", label: "الإرشاد" },
  { to: "/about", label: "عن القناة" },
];

export default function Header() {
  const { pathname } = useLocation();
  const current = findPage(pathname)?.nav;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img
            src="/images/logo-small.jpg"
            alt=""
          />
          Unique Coderz Academy
        </Link>
        <nav className="nav" aria-label="القائمة الرئيسية">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} aria-current={current === item.to ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <label htmlFor="theme" className="theme-toggle" title="تبديل الوضع">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
          </svg>
        </label>
      </div>
    </header>
  );
}
