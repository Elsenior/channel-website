/* =========================================================
   عدّاد زيارات الموقع
   ---------------------------------------------------------
   - الرقم الظاهر في الموقع: Abacus (مجاني وبدون تسجيل)
     يزيد 1 مع كل فتح أو تحديث لأي صفحة.
   - الإحصائيات التفصيلية (الزوّار، الصفحات، الدول):
     لوحة GoatCounter الخاصة بك على
     https://hamzanabil.goatcounter.com
   ========================================================= */
const GOATCOUNTER_CODE = "hamzanabil";
const ABACUS_URL = "https://abacus.jasoncameron.dev/hit/uniquecoderz-dev/pageviews";

(function () {
  // 1) تسجيل الزيارة في GoatCounter (للوحة التحكم فقط)
  if (GOATCOUNTER_CODE) {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
    document.head.appendChild(s);
  }

  // 2) زيادة العدّاد الظاهر +1 وعرض الرقم الجديد
  fetch(ABACUS_URL)
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((data) => {
      const total = Number(data.value);
      if (!Number.isFinite(total) || total <= 0) return;

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
