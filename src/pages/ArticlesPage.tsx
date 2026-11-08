import { Link } from "react-router";
import { SUBSCRIBE_URL } from "../data/links";
import { articles } from "../data/articles";

export default function ArticlesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">مقالات ونصائح</span>
          <h1>المقالات</h1>
          <p>
            مقالات قصيرة وواضحة عن البرمجة وتطوير الويب وسوق العمل، من خبرة عملية تزيد عن 8 سنوات. اقرأها في
            دقائق وطبّق منها فوراً.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "0" }}>
        <div className="container">
          {articles.map((article) => (
            <Link className="article-feature" to={article.to} key={article.to}>
              <div className={article.altVisual ? "af-visual af-visual-2" : "af-visual"} aria-hidden="true">
                <span className="af-icon">{article.icon}</span>
                <span className="af-chip c-a">{article.chips[0]}</span>
                <span className="af-chip c-b">{article.chips[1]}</span>
                <span className="af-chip c-c">{article.chips[2]}</span>
              </div>
              <div className="af-body">
                <div className="af-tags">
                  <span className={article.tag.className}>{article.tag.label}</span>
                  {article.isNew && <span className="af-new">جديد</span>}
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <div className="af-meta">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
                <span className="af-read">اقرأ المقال ←</span>
              </div>
            </Link>
          ))}
          <div className="articles-soon">
            <p>📬 مقالات جديدة قريباً. تابع القناة على يوتيوب ليصلك كل جديد.</p>
            <a href={SUBSCRIBE_URL} className="btn btn-ghost" target="_blank" rel="noopener">
              اشترك في القناة
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
