import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import PageEffects from "./PageEffects";
import { VisitsProvider } from "../hooks/useVisits";

export default function Layout() {
  return (
    <VisitsProvider>
      <PageEffects />
      {/* The checkbox drives the theme through :has() in style.css. */}
      <input type="checkbox" id="theme" className="theme-input" aria-label="تبديل الوضع الفاتح والداكن" />
      <Header />
      <Outlet />
      <Footer />
    </VisitsProvider>
  );
}
