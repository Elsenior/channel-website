import { Link } from "react-router";

/** Filled in automatically when someone opens WhatsApp or email from this page. */
const BOOKING_MESSAGE =
  "مرحباً حمزة، أريد حجز جلسة إرشاد 👋\n\nالاسم:\nمستواي الحالي:\nموضوع الجلسة:\nتفاصيل مختصرة عن احتياجي:\nرابط المشروع أو GitHub (إن وجد):\nالأيام والأوقات المناسبة لي:";
const WHATSAPP_URL = `https://wa.me/201017544243?text=${encodeURIComponent(BOOKING_MESSAGE)}`;
const EMAIL_URL = `mailto:hamzanabil913@gmail.com?subject=${encodeURIComponent("طلب حجز جلسة إرشاد")}&body=${encodeURIComponent(BOOKING_MESSAGE)}`;

export default function MentorshipPage() {
  return (
    <main>
      {/* الواجهة */}
      <section className="page-hero mentor-hero">
        <div className="container">
          <span className="eyebrow">Mentorship · جلسات إرشاد فردية</span>
          <h1>
            محتاج حد يوجّهك؟ <span className="hl">احجز جلسة واحد لواحد</span>
          </h1>
          <p>
            ساعة كاملة أونلاين مع <strong>حمزة نبيل</strong> (Senior Software Engineer بخبرة +8 سنوات)، نركّز
            فيها على مشكلتك أنت: كودك، مسارك، أو مقابلتك القادمة.
          </p>
          <div className="hero-actions">
            <a href="#book" className="btn btn-primary">
              احجز جلستك الآن ←
            </a>{" "}
            <a href="#plan" className="btn btn-ghost">
              تفاصيل الجلسة والسعر
            </a>
          </div>
        </div>
      </section>
      {/* الخطة */}
      <section id="plan" style={{ paddingTop: "1rem" }}>
        <div className="container plan-wrap">
          <article className="plan">
            <span className="plan-badge">خطة واحدة · بدون تعقيد</span>
            <h2>جلسة إرشاد فردية</h2>
            <p className="plan-sub">كل ما تحتاجه في ساعة واحدة مركّزة</p>
            <div className="price">
              <span className="discount-badge">خصم 50%</span>
              <div className="price-row">
                <strong>500</strong>{" "}
                <span>
                  جنيه مصري
                  <br />
                  <small>للساعة الواحدة</small>
                </span>
              </div>
              <p className="old-price">
                بدلاً من <s>1000 جنيه</s> · <b>وفّر 500 جنيه</b>
              </p>
            </div>
            <ul className="plan-list">
              <li>
                جلسة مباشرة <strong>60 دقيقة</strong> أونلاين (Google Meet أو Zoom)
              </li>
              <li>اختيار موضوع الجلسة حسب احتياجك</li>
              <li>نصائح واضحة لخطوتك القادمة</li>
              <li>إمكانية حجز أكثر من جلسة للمتابعة</li>
            </ul>
            <a href="#book" className="btn btn-primary plan-btn">
              احجز الجلسة
            </a>
            <p className="plan-note">يتم تحديد الموعد وطريقة الدفع بعد التواصل.</p>
          </article>
          <div className="topics">
            <h2>اختر موضوع جلستك</h2>
            <p className="topics-sub">يمكنك اختيار موضوع واحد أو أكثر في نفس الساعة:</p>
            <ul className="topic-grid">
              <li>
                <span aria-hidden="true">🧭</span>
                <div>
                  <h3>خطة تعلّم مخصصة</h3>
                  <p>من أين تبدأ وماذا تتعلم وبأي ترتيب حسب مستواك ووقتك.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">🔍</span>
                <div>
                  <h3>مراجعة الكود والمشاريع</h3>
                  <p>مراجعة مشروعك أو كودك وكيف تحسّنه وتكتبه بشكل احترافي.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">🎤</span>
                <div>
                  <h3>تحضير للمقابلات</h3>
                  <p>مقابلة تجريبية وأسئلة Front End الشائعة وكيف تجاوب عليها.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">📄</span>
                <div>
                  <h3>مراجعة CV و GitHub و LinkedIn</h3>
                  <p>اجعل ملفك جاذباً للشركات ومسؤولي التوظيف.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">🧩</span>
                <div>
                  <h3>حل مشكلة تقنية</h3>
                  <p>مشكلة في React أو JavaScript أو CSS واقف عندها؟ نحلها سوا.</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">💼</span>
                <div>
                  <h3>استشارة مهنية</h3>
                  <p>أول وظيفة، العمل الحر، التنقل بين الشركات، أو الترقية لـ Senior.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* كيف تعمل */}
      <section className="alt-bg">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">خطوات بسيطة</span>
            <h2>كيف تحجز جلستك؟</h2>
          </div>
          <ol className="how">
            <li>
              <h3>أرسل رسالة</h3>
              <p>راسلني على WhatsApp (الأسرع) أو الإيميل أو LinkedIn باستخدام النموذج بالأسفل.</p>
            </li>
            <li>
              <h3>نحدد الموعد</h3>
              <p>نتفق على اليوم والساعة المناسبين لك.</p>
            </li>
            <li>
              <h3>تأكيد الحجز</h3>
              <p>تأكيد الجلسة وإرسال رابط الاجتماع.</p>
            </li>
            <li>
              <h3>الجلسة</h3>
              <p>ساعة كاملة مركّزة على هدفك أنت.</p>
            </li>
          </ol>
        </div>
      </section>
      {/* الحجز */}
      <section id="book">
        <div className="container book">
          <div className="book-text">
            <span className="eyebrow">احجز الآن</span>
            <h2>أرسل رسالتك وسأرد عليك</h2>
            <p>
              املأ النموذج التالي، ثم أرسله على WhatsApp أو الإيميل أو LinkedIn. زرّا WhatsApp والإيميل يفتحان
              الرسالة والنموذج مكتوب جاهز. كلما كانت التفاصيل أوضح، كانت الجلسة أكثر فائدة.
            </p>
            <ul className="contact-info">
              <li>
                📱 واتساب: <span dir="ltr">+201017544243</span>
              </li>
              <li>
                ✉️ الإيميل: <span dir="ltr">hamzanabil913@gmail.com</span>
              </li>
            </ul>
            <div className="book-actions">
              <a href={WHATSAPP_URL} className="btn contact-btn s-wa-btn" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
                </svg>{" "}
                راسلني على WhatsApp
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/hamzabadr/"
                className="btn contact-btn s-li-btn"
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
                </svg>{" "}
                راسلني على LinkedIn
              </a>{" "}
              <a href={EMAIL_URL} className="btn contact-btn s-mail-btn">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m3 6 9 7 9-7" />
                </svg>{" "}
                راسلني على الإيميل
              </a>
            </div>
          </div>
          <div className="template">
            <div className="template-head">
              <span></span>
              <span></span>
              <span></span>
              <b>نموذج طلب جلسة</b>
            </div>
            <pre>{`مرحباً حمزة، أريد حجز جلسة إرشاد 👋

الاسم:
مستواي الحالي: (مبتدئ / متوسط / أعمل بالفعل)
موضوع الجلسة: (خطة تعلّم / مراجعة كود / مقابلات / CV / مشكلة تقنية / استشارة)
تفاصيل مختصرة عن احتياجي:
رابط المشروع أو GitHub (إن وجد):
الأيام والأوقات المناسبة لي:`}</pre>
          </div>
        </div>
      </section>
      {/* أسئلة شائعة */}
      <section className="alt-bg">
        <div className="container faq-wrap">
          <div className="section-head">
            <span className="eyebrow">أسئلة شائعة</span>
            <h2>عندك سؤال؟</h2>
          </div>
          <div className="faq">
            <details open>
              <summary>هل الجلسة مناسبة للمبتدئين؟</summary>
              <p>
                نعم، الجلسة تُبنى حسب مستواك. المبتدئ نركّز معه على خطة التعلم، ومن يعمل بالفعل نركّز معه على
                الكود والمسار المهني.
              </p>
            </details>
            <details>
              <summary>كيف تتم الجلسة؟</summary>
              <p>أونلاين عبر Google Meet أو Zoom، بالصوت والفيديو مع إمكانية مشاركة الشاشة لمراجعة الكود.</p>
            </details>
            <details>
              <summary>كيف أدفع؟</summary>
              <p>يتم الاتفاق على طريقة الدفع المناسبة عند تأكيد موعد الجلسة.</p>
            </details>
            <details>
              <summary>هل يمكنني حجز أكثر من جلسة؟</summary>
              <p>بالتأكيد. يمكنك حجز جلسات متابعة كلما احتجت، وكل جلسة بنفس السعر.</p>
            </details>
            <details>
              <summary>ماذا أجهّز قبل الجلسة؟</summary>
              <p>جهّز أسئلتك ورابط مشروعك أو كودك إن وجد، حتى نستفيد من كل دقيقة في الساعة.</p>
            </details>
          </div>
        </div>
      </section>
      <div className="container next-step">
        <p>لست جاهزاً للجلسة بعد؟ ابدأ مجاناً بالكورسات.</p>
        <Link to="/roadmap" className="btn btn-ghost">
          اعرض خريطة التعلم ←
        </Link>
      </div>
    </main>
  );
}
