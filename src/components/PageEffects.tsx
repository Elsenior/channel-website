import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";
import { findPage } from "../routes";

/** Updates the tab title and scroll position when the page changes. */
export default function PageEffects() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const page = findPage(pathname);
    if (!page) return;
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description);
  }, [pathname]);

  useEffect(() => {
    // Let the browser restore the old position on back and forward.
    if (navigationType === "POP" && !hash) return;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, navigationType]);

  return null;
}
