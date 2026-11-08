# Unique Coderz Academy

الموقع الرسمي لقناة **Unique Coderz Academy** على يوتيوب: قناة عربية لتعليم البرمجة وتطوير الويب.

الموقع: https://www.uniquecoderz.dev

## التقنيات
React و TypeScript و React Router و Vite، مع CSS عادي.

## التشغيل

```bash
npm install       # تثبيت المكتبات (مرة واحدة)
npm run dev       # تشغيل الموقع محلياً أثناء التطوير
npm run build     # فحص الأنواع وبناء النسخة النهائية في dist/
npm run preview   # معاينة النسخة النهائية
```

## هيكل المشروع

```
public/                الصور وملف CNAME (تُنسخ كما هي)
scripts/prerender.mjs  يولّد ملف HTML جاهز لكل صفحة وقت البناء
src/
  routes.tsx           جدول الصفحات: الرابط والعنوان والوصف
  components/          الأجزاء المشتركة: الهيدر، الفوتر، بطاقة الكورس...
  pages/               الصفحات
  pages/articles/      المقالات
  data/                المحتوى: الكورسات، خريطة التعلم، التعليقات، قائمة المقالات
  hooks/useVisits.tsx  عدّاد الزيارات
  styles/style.css     كل التنسيقات
```

## إضافة محتوى

- **كورس جديد:** أضفه في `src/data/courses.ts`.
- **مقال جديد:** أنشئ ملفاً في `src/pages/articles/`، وأضفه في `src/routes.tsx` و `src/data/articles.ts`.

## النشر

كل `git push` على `main` يبني الموقع وينشره تلقائياً على GitHub Pages.
