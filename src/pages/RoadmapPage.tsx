import { Link } from "react-router";
import { playlistUrl } from "../data/links";
import { roadmapSteps } from "../data/roadmap";

export default function RoadmapPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">7 خطوات واضحة</span>
          <h1>خريطة التعلم</h1>
          <p>
            مسار مرتب يأخذك من الصفر حتى أول وظيفة كمطور ويب. أكمل كل خطوة قبل الانتقال إلى التي بعدها، ولا
            تنسَ أن تطبّق بيدك.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "1rem" }}>
        <div className="container">
          <ol className="steps">
            {roadmapSteps.map((step) => (
              <li className="step" id={step.id} key={step.id}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-links">
                  {step.playlists.map((playlist) => (
                    <a
                      key={playlist.listId}
                      href={playlistUrl(playlist.listId)}
                      target="_blank"
                      rel="noopener"
                    >
                      ▶ {playlist.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="alt-bg">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">نصائح للرحلة</span>
            <h2>كيف تستفيد أكثر؟</h2>
          </div>
          <div className="features">
            <div className="feature">
              <div className="emoji">✍️</div>
              <h3>اكتب الكود بنفسك</h3>
              <p>لا تكتفِ بالمشاهدة. أوقف الفيديو واكتب الكود وجرّب تغييره.</p>
            </div>
            <div className="feature">
              <div className="emoji">⏱️</div>
              <h3>القليل كل يوم</h3>
              <p>ساعة يومياً أفضل من سبع ساعات مرة واحدة في الأسبوع.</p>
            </div>
            <div className="feature">
              <div className="emoji">💬</div>
              <h3>اسأل في التعليقات</h3>
              <p>إذا واجهتك مشكلة، اسأل تحت الفيديو، فغالباً غيرك واجه نفس المشكلة.</p>
            </div>
            <div className="feature">
              <div className="emoji">🗂️</div>
              <h3>ابنِ معرض أعمال</h3>
              <p>ارفع كل مشروع على GitHub ليصبح دليلاً على مهاراتك أمام الشركات.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container next-step">
        <p>تريد رؤية كل الكورسات مرة واحدة؟</p>
        <Link to="/courses" className="btn btn-primary">
          تصفّح جميع الكورسات ←
        </Link>
      </div>
    </main>
  );
}
