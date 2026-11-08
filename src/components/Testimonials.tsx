import { featuredTestimonial as featured, testimonials, type Testimonial } from "../data/testimonials";
import { YOUTUBE_URL } from "../data/links";

function Author({ testimonial }: { testimonial: Testimonial }) {
  return (
    <>
      <span className={`t-avatar ${testimonial.color}`} aria-hidden="true">
        {testimonial.avatar}
      </span>
      <span className="t-who">
        <b dir="ltr">{testimonial.author}</b>
        <small>{testimonial.course}</small>
      </span>
      {testimonial.likes && (
        <span className="t-likes" title="إعجاب">
          ♥ {testimonial.likes}
        </span>
      )}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">من تعليقات المتابعين على يوتيوب</span>
          <h2>ماذا يقولون عن القناة؟</h2>
          <p>
            تعليقات حقيقية من متعلمين استفادوا من الكورسات. اضغط على أي تعليق لتراه في مكانه الأصلي على
            يوتيوب.
          </p>
        </div>
        <figure className="t-featured">
          <blockquote>{featured.text}</blockquote>
          <figcaption>
            <Author testimonial={featured} />
            <a className="t-link" href={featured.url} target="_blank" rel="noopener">
              شاهد التعليق ←
            </a>
          </figcaption>
        </figure>
        <div className="t-grid">
          {testimonials.map((testimonial) => (
            <a className="t-card" href={testimonial.url} target="_blank" rel="noopener" key={testimonial.url}>
              <p>{testimonial.text}</p>
              <span className="t-foot">
                <Author testimonial={testimonial} />
              </span>
            </a>
          ))}
        </div>
        <p className="t-more">
          عندك تجربة مع القناة؟{" "}
          <a href={YOUTUBE_URL} target="_blank" rel="noopener">
            شاركنا رأيك في التعليقات على يوتيوب
          </a>
        </p>
      </div>
    </section>
  );
}
