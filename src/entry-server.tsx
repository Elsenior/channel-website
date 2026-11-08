import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { pages } from "./routes";

export { pages };

/** Renders one page to HTML. Used by scripts/prerender.mjs at build time. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
