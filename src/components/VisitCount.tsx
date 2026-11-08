import { useEffect, useState } from "react";
import { useVisits } from "../hooks/useVisits";

const format = (value: number) => value.toLocaleString("en-US");

/** Shows the site's visit count, counting up from 0 when the number arrives. */
export default function VisitCount({ as: Tag }: { as: "b" | "strong" }) {
  const target = useVisits();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (target === null) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || target < 20) {
      setShown(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setShown(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <Tag data-visits>{format(shown)}</Tag>;
}
