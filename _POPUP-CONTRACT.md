# POPUP CONTRACT — shared between admin.html (manager) and course-library.html (display)

The admin dashboard MANAGES popups; the course player DISPLAYS them. Both use the SAME
localStorage store so they stay in sync. Do not diverge from this shape.

## Store
- localStorage key: `mold_popups`
- Value: JSON array of popup objects.
- If empty/missing, the player uses these DEFAULT seeds (admin should seed them on first load):

```json
[
  { "id":"p_done",  "trigger":"lesson_end",       "active":true,  "icon":"🎉",
    "title":"כל הכבוד! סיימת שיעור",
    "body":"עוד צעד לקראת המותג שלך. רוצה את סיכום השיעור או להמשיך הלאה?",
    "ctaText":"לשיעור הבא", "ctaHref":"course-library.html", "cta2Text":"סיכום PDF", "cta2Href":"lesson-summary.html" },
  { "id":"p_streak","trigger":"after_5_lessons",   "active":true,  "icon":"🔥",
    "title":"5 שיעורים, מומנטום אמיתי",
    "body":"אתה בקצב מצוין. תלמידים שמגיעים לכאן הם אלה שמקימים מותג. רוצה ללוות את זה צמוד?",
    "ctaText":"גלה את DMA", "ctaHref":"dma.html", "cta2Text":"המשך ללמוד", "cta2Href":"course-library.html" },
  { "id":"p_course_done","trigger":"course_done",  "active":true,  "icon":"🏆",
    "title":"סיימת את הקורס החינמי!",
    "body":"יש לך עכשיו את כל היסודות. הרמה הבאה היא ליווי צמוד עד התוצאה.",
    "ctaText":"קבע שיחת התאמה", "ctaHref":"dma.html", "cta2Text":"חזור לפורטל", "cta2Href":"course-library.html" }
]
```

## Fields
- `id` (string, unique) · `trigger` one of: `lesson_end` | `after_5_lessons` | `course_done`
- `active` (bool) · `icon` (emoji) · `title` · `body` · `ctaText` + `ctaHref` (primary) · optional `cta2Text` + `cta2Href` (secondary)

## Display rules (course-library.html)
- When a lesson is marked complete: fire the FIRST `active` popup whose trigger applies:
  - `course_done` if all lessons now complete;
  - else `after_5_lessons` if completedCount just reached a multiple of 5 (and not already shown this session);
  - else `lesson_end`.
- Render as a branded `.portal-modal` (use the v2 SaaS theme classes) with the icon, title, body,
  primary `.btn--primary` and secondary `.btn--outline`. A close (X) dismisses.
- For `lesson_end`, if a `cta2Href` is `lesson-summary.html`, append `?lesson=<currentLessonId>`.
- Don't nag: show at most one popup per lesson-complete action.

## Manager rules (admin.html)
- Seed defaults into `mold_popups` if missing. List all popups with: toggle active, edit
  title/body/cta/trigger/icon, add new, delete. Persist every change to `mold_popups`.
- A "תצוגה מקדימה" button renders the popup exactly as the player would.
