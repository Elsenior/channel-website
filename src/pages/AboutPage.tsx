import { Link } from "react-router";
import { YOUTUBE_URL, SUBSCRIBE_URL } from "../data/links";
import ChannelStats from "../components/ChannelStats";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container about">
          <img
            src="/images/logo.jpg"
            alt="شعار قناة Unique Coderz Academy"
          />
          <div className="about-text">
            <span className="eyebrow">عن القناة</span>
            <h1>Unique Coderz Academy</h1>
            <p>
              قناة باللغة العربية تهدف إلى تقديم كورسات وتطبيقات في مجال البرمجة والويب، بأسلوب بسيط وعملي
              يناسب المبتدئ ويفيد المحترف.
            </p>
            <p>
              أخوكم: <strong>حمزة</strong>
            </p>
            <div className="hero-actions">
              <a href={SUBSCRIBE_URL} className="btn btn-primary" target="_blank" rel="noopener">
                اشترك في القناة
              </a>{" "}
              <a
                href="https://www.youtube.com/@uniqueCoderzAcademy/playlists"
                className="btn btn-ghost"
                target="_blank"
                rel="noopener"
              >
                قوائم التشغيل على يوتيوب
              </a>
            </div>
          </div>
        </div>
      </section>
      <ChannelStats />
      {/* عن صاحب القناة */}
      <section id="owner" className="owner-section">
        <div className="container">
          <div className="owner">
            <div className="owner-visual">
              <div className="owner-photo">
                <img
                  src="/images/img.jpeg"
                  alt="صورة حمزة نبيل، صاحب قناة Unique Coderz Academy"
                  width="640"
                  height="640"
                  loading="lazy"
                />
              </div>
              <div className="float-badge badge-exp">
                <strong>+8</strong>
                <span>سنوات خبرة</span>
              </div>
              <div className="float-badge badge-subs">
                <strong>+84K</strong>
                <span>متعلم</span>
              </div>
            </div>
            <div className="owner-intro">
              <span className="eyebrow">صاحب القناة</span>
              <h2>Hamza Nabil</h2>
              <p className="owner-role">
                <span className="dot" aria-hidden="true"></span>
                <span dir="ltr">Senior Software Engineer</span>
              </p>
              <p>
                أنا مهندس برمجيات بخبرة تزيد عن <strong>8 سنوات</strong>، واشتغلت بفضل الله في شركات كثيرة في{" "}
                <strong>مصر والخليج وأوروبا</strong>، وتعاملت مع مشاريع كبيرة ومتنوعة.
              </p>
              <p>
                وبفضل الله قررت أن أؤسس قناة <strong>Unique Coderz Academy</strong> لأنشر فيها الخبرة التي
                اكتسبتها، وأساعد كل من يريد أن يبدأ أو يطوّر مسيرته في البرمجة.
              </p>
              <div className="skills">
                <span className="skills-label">التقنيات التي أشرحها:</span>
                <ul dir="ltr">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="socials owner-socials" aria-label="حسابات حمزة">
                <span className="skills-label">تواصل معي:</span>{" "}
                <a
                  className="social s-li"
                  href="https://www.linkedin.com/in/hamzabadr/"
                  target="_blank"
                  rel="noopener"
                  aria-label="لينكدإن"
                  title="لينكدإن"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
                  </svg>
                </a>{" "}
                <a
                  className="social s-gh"
                  href="https://github.com/HamzaNabil"
                  target="_blank"
                  rel="noopener"
                  aria-label="جيت هب"
                  title="جيت هب"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                  </svg>
                </a>{" "}
                <a
                  className="social s-fb"
                  href="https://www.facebook.com/share/1E3vV1SnJx/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener"
                  aria-label="فيسبوك"
                  title="فيسبوك"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
                  </svg>
                </a>{" "}
                <a
                  className="social s-yt"
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener"
                  aria-label="يوتيوب"
                  title="يوتيوب"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                  </svg>
                </a>
              </div>
              <div className="hero-actions">
                <a href={SUBSCRIBE_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  ▶ اشترك في القناة
                </a>{" "}
                <Link to="/courses" className="btn btn-ghost">
                  تصفّح الكورسات
                </Link>
              </div>
            </div>
          </div>
          <ul className="owner-points">
            <li>
              <span className="icon" aria-hidden="true">
                🏆
              </span>
              <h3>+8 سنوات خبرة</h3>
              <p>في شركات بمصر والخليج وأوروبا، ومشاريع كبيرة ومتنوعة.</p>
            </li>
            <li>
              <span className="icon" aria-hidden="true">
                🧩
              </span>
              <h3>تبسيط المعقّد</h3>
              <p>قدرة على شرح المفاهيم التقنية الصعبة بطريقة سهلة يفهمها المتخصص وغير المتخصص.</p>
            </li>
            <li>
              <span className="icon" aria-hidden="true">
                🎓
              </span>
              <h3>مؤسس Unique Coderz Academy</h3>
              <p>قناة تعليمية مجانية بالعربي يتابعها أكثر من 84 ألف متعلم.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="alt-bg">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">لماذا هذه القناة؟</span>
            <h2>ما الذي يميّز المحتوى؟</h2>
          </div>
          <div className="features">
            <div className="feature">
              <div className="emoji">🗣️</div>
              <h3>شرح بالعربي</h3>
              <p>مفاهيم البرمجة بلغة بسيطة وواضحة، مع الحفاظ على المصطلحات التقنية الأصلية.</p>
            </div>
            <div className="feature">
              <div className="emoji">🛠️</div>
              <h3>تطبيق عملي</h3>
              <p>مشاريع حقيقية من البداية للنهاية، وليس مجرد كلام نظري.</p>
            </div>
            <div className="feature">
              <div className="emoji">🧭</div>
              <h3>مسار واضح</h3>
              <p>من أساسيات HTML حتى React والتأهيل لسوق العمل.</p>
            </div>
            <div className="feature">
              <div className="emoji">🎁</div>
              <h3>مجاني بالكامل</h3>
              <p>كل المحتوى متاح للجميع على يوتيوب بدون أي اشتراك مدفوع.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cta">
            <div>
              <h2>جاهز تبدأ؟</h2>
              <p>اتبع خريطة التعلم خطوة بخطوة، أو اختر الكورس الذي يناسبك.</p>
            </div>
            <div className="hero-actions" style={{ margin: "0" }}>
              <Link to="/roadmap" className="btn btn-primary">
                خريطة التعلم ←
              </Link>{" "}
              <Link to="/courses" className="btn btn-ghost">
                كل الكورسات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
