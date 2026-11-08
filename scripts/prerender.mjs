// Writes one ready-made HTML file per page into dist/ after `vite build`.
// Search engines and visitors get the full content before any JavaScript runs,
// and the old URLs such as /courses.html keep working on GitHub Pages.
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve("dist");
const ssrDir = resolve("dist-ssr");
// Minify the page shell. The rendered content is already compact.
const template = (await readFile(resolve(dist, "index.html"), "utf8")).replace(/>\s+</g, "><").trim();
const { pages, render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);

const escapeAttribute = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

for (const page of pages) {
  const html = template
    .replace(/<title>.*?<\/title>/s, () => `<title>${escapeAttribute(page.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*">/,
      () => `<meta name="description" content="${escapeAttribute(page.description)}">`,
    )
    .replace("<!--app-->", () => render(page.path));
  await writeFile(resolve(dist, page.file), html);
  console.log(`prerendered ${page.path} -> ${page.file}`);
}

await rm(ssrDir, { recursive: true, force: true });
