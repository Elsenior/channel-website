import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router";

const GOATCOUNTER_CODE = "hamzanabil";
const ABACUS_URL = "https://abacus.jasoncameron.dev/hit/uniquecoderz-dev/pageviews";

declare global {
  interface Window {
    goatcounter?: { count?: (vars: { path: string }) => void };
  }
}

const VisitsContext = createContext<number | null>(null);

/** The visit count, or null until it loads. It stays null if the service fails. */
export function useVisits(): number | null {
  return useContext(VisitsContext);
}

/**
 * Counts every page view and shares the total with the page.
 * - Abacus keeps the number shown on the site (+1 on every page open).
 * - GoatCounter feeds the private dashboard: https://hamzanabil.goatcounter.com
 * Only the production build counts, so local development adds nothing.
 */
export function VisitsProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [visits, setVisits] = useState<number | null>(null);
  const firstView = useRef(true);

  useEffect(() => {
    if (!import.meta.env.PROD) return;

    if (firstView.current) {
      // count.js records the first page view by itself when it loads.
      firstView.current = false;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://gc.zgo.at/count.js";
      script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
      document.head.appendChild(script);
    } else {
      window.goatcounter?.count?.({ path: pathname });
    }

    fetch(ABACUS_URL)
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data: { value: unknown }) => {
        const total = Number(data.value);
        if (Number.isFinite(total) && total > 0) setVisits(total);
      })
      .catch(() => {
        // The counter stays hidden if the service is unavailable.
      });
  }, [pathname]);

  return <VisitsContext.Provider value={visits}>{children}</VisitsContext.Provider>;
}
