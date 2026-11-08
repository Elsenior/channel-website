import type { ReactNode } from "react";
import { Link } from "react-router";

export interface TocItem {
  id: string;
  label: string;
}

interface ArticleLayoutProps {
  breadcrumb: string;
  tag: { label: string; className: string };
  title: string;
  lead: string;
  readTime: string;
  date: string;
  toc: TocItem[];
  /** Structured data that helps search engines understand the article. */
  jsonLd: object;
  /** Text above the "all articles" button at the end of the page. */
  related: ReactNode;
  children: ReactNode;
}

export default function ArticleLayout(props: ArticleLayoutProps) {
  const { breadcrumb, tag, title, lead, readTime, date, toc, jsonLd, related, children } = props;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="read-progress" aria-hidden="true"></div>
      <main>
        <article className="article">
          <header className="article-hero">
            <div className="container article-narrow">
              <nav className="breadcrumb" aria-label="مسار التصفح">
                <Link to="/">الرئيسية</Link> <span aria-hidden="true">›</span>{" "}
                <Link to="/articles">المقالات</Link> <span aria-hidden="true">›</span>{" "}
                <span aria-current="page">{breadcrumb}</span>
              </nav>
              <span className={tag.className}>{tag.label}</span>
              <h1>{title}</h1>
              <p className="article-lead">{lead}</p>
              <div className="article-meta">
                <img src="/images/img.jpeg" alt="" width="40" height="40" />
                <span>
                  <b>Hamza Nabil</b>
                  <small>Senior Software Engineer</small>
                </span>
                <span className="meta-sep" aria-hidden="true"></span>
                <span className="meta-item">⏱️ {readTime}</span>
                <span className="meta-item">📅 {date}</span>
              </div>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="toc" aria-label="محتوى المقال">
              <p className="toc-title">محتوى المقال</p>
              <ol>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="article-body">{children}</div>
          </div>
        </article>

        <div className="container next-step">
          <p>{related}</p>
          <Link to="/articles" className="btn btn-ghost">
            → كل المقالات
          </Link>
        </div>
      </main>
    </>
  );
}
