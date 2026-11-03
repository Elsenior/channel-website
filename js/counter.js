/* =========================================================
   عدّاد زيارات الموقع باستخدام GoatCounter
   ---------------------------------------------------------
   1. أنشئ حساباً مجانياً على https://www.goatcounter.com
   2. اكتب الكود الخاص بموقعك بالأسفل (مثلاً: "uniquecoderz"
      إذا كان رابط لوحة التحكم https://uniquecoderz.goatcounter.com)
   3. من لوحة التحكم: Settings ← فعّل خيار
      "Allow adding visitor counts on your website"
   ========================================================= */
const GOATCOUNTER_CODE = ""; // ← اكتب الكود هنا

(function () {
  if (!GOATCOUNTER_CODE) return; // العدّاد مخفي حتى يتم ضبط الكود

  const base = `https://${GOATCOUNTER_CODE}.goatcounter.com`;

  // 1) تسجيل الزيارة الحالية
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = `${base}/count`;
  document.head.appendChild(s);

  // 2) جلب إجمالي الزيارات وعرضه
  fetch(`${base}/counter/TOTAL.json`)
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((data) => {
      // GoatCounter يرجع الرقم كنص مثل "12,345"
      // نضيف 1 لاحتساب الزيارة الحالية (يسجّلها GoatCounter بعد ثوانٍ)
      const total = parseInt(String(data.count).replace(/\D/g, ""), 10) + 1;
      if (!Number.isFinite(total)) return;

      document.querySelectorAll("[data-visits-wrap]").forEach((el) => (el.hidden = false));
      document.querySelectorAll("[data-visits]").forEach((el) => countUp(el, total));
    })
    .catch(() => { /* عند أي خطأ يبقى العدّاد مخفياً */ });

  // حركة عدّ بسيطة من 0 حتى الرقم
  function countUp(el, target) {
    const fmt = (n) => n.toLocaleString("en-US");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || target < 20) { el.textContent = fmt(target); return; }

    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();
