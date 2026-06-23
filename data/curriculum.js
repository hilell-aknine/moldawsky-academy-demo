/* ============================================================
   MOLDAWSKY ACADEMY · Curriculum spine (THE single source).
   Extracted from Daniel Moldawsky's full YouTube course
   (video _WM5MC28zQc, ~4h). Timestamps are real seconds into the video.
   Every page reads window.CURRICULUM. Do not fork this shape.
   ============================================================ */
window.VIDEO_ID = '3gqhMJAmnYA'; // Hillel's own unlisted, embeddable re-upload (Daniel disabled embedding on the original _WM5MC28zQc)
window.VIDEO_END = 14420; // ~4:00:14 · full video length, used as the end bound of the last lesson
window.YT_THUMB = (ts) => `https://i.ytimg.com/vi/${window.VIDEO_ID}/hqdefault.jpg`;
/* Each lesson is its OWN modular segment: it starts at lesson.ts and ENDS where the next
   lesson begins, so the player stops at the lesson boundary instead of running into the next topic. */
window.YT_EMBED = (ts) => {
  const list = window.ALL_LESSONS || [];
  const idx = list.findIndex(l => l.ts === ts);
  const end = (idx > -1 && idx < list.length - 1) ? list[idx + 1].ts : window.VIDEO_END;
  return `https://www.youtube.com/embed/${window.VIDEO_ID}?start=${ts}&end=${end}&rel=0&modestbranding=1&iv_load_policy=3`;
};

window.CURRICULUM = {
  brand: { name: 'אקדמיית מולדבסקי', creator: 'דניאל מולדבסקי', brandRef: 'תנאור', program: 'הכשרת האיקומרס', tagline: 'הסיסטם מבוסס ה-AI להקמת מותג איקומרס מ-0' },
  modules: [
    { id:'m1', title:'להבין את המשחק', icon:'<i data-lucide="target"></i>', lessons:[
      { id:'l1',  ts:0,    dur:'3:00', title:'ברוכים הבאים · מי דניאל ומה תלמדו', summary:'הקדמה: מי דניאל מולדבסקי, המותגים שהקים (תנאור, עשרות מיליוני ש"ח), ומה בדיוק תצא איתו מהקורס · חנות מוכרת מאפס.' },
      { id:'l2',  ts:180,  dur:'3:25', title:'מה זה שופיפיי ומה זה איקומרס', summary:'הפלטפורמה שמאפשרת לבנות חנות אינטרנטית בלי לדעת לתכנת, מהר וזול. למה היא plug & play ולמה מותגי ענק בנויים עליה.' },
      { id:'l3',  ts:385,  dur:'2:58', title:'שופיפיי מול מרקטפלייס (אמזון/איביי/אטסי)', summary:'למה חנות משלך מנצחת דוכן בשוק של מישהו אחר: שליטה, מיתוג, עמלות נמוכות, ואין סכנת חסימה שרירותית.' },
      { id:'l4',  ts:563,  dur:'4:00', title:'החנות כנכס · בניית שווי ומכירת העסק', summary:'חנות שמרוויחה 25K בחודש שווה 1-3 מיליון ש"ח. למה אתה לא רק מרוויח · אתה בונה נכס שאפשר למכור.' },
    ]},
    { id:'m2', title:'מקימים את החנות', icon:'<i data-lucide="store"></i>', lessons:[
      { id:'l5',  ts:806,  dur:'3:45', title:'בחירת שם למותג עם ChatGPT', summary:'למה שם גנרי בלי משמעות (כמו זרה/סוני) מנצח, איך מוציאים 20 רעיונות ב-2 דקות, ובודקים שהדומיין פנוי.' },
      { id:'l6',  ts:1033, dur:'4:45', title:'פתיחת Gmail + רישום לשופיפיי + בחירת תוכנית', summary:'פותחים מייל ייעודי, נרשמים בהצעה של $1 לחודש, ומבינים מתי Basic ומתי Grow/Advanced לפי המחזור.' },
      { id:'l7',  ts:1320, dur:'4:00', title:'קניית דומיין וחיבורו (GoDaddy)', summary:'למה דומיין משלך נראה מקצועי וממיר יותר, איך קונים בזול ומחברים לשופיפיי בלחיצה.' },
    ]},
    { id:'m3', title:'האפליקציות החיוניות', icon:'<i data-lucide="puzzle"></i>', lessons:[
      { id:'l8',  ts:1560, dur:'2:48', title:'מה הן אפליקציות + BundleUp + המושג AOV', summary:'אפליקציות מוסיפות פיצ\'רים בלי קוד. באנדלים מעלים את סך-ההזמנה-הממוצע (AOV) · הנתון שמכריע רווחיות.' },
      { id:'l9',  ts:1728, dur:'1:52', title:'AutoDS · דרופשיפינג + מילוי הזמנות אוטומטי', summary:'האפליקציה שמושכת מוצרים מאלי-אקספרס וממלאת הזמנות אוטומטית גם ב-1000 הזמנות ביום.' },
      { id:'l10', ts:1840, dur:'3:18', title:'Sales RTL + Cartify + Vouch AI', summary:'התאמת החנות לעברית/RTL, אפסל בעגלה, ואפליקציית ביקורות עם AI · הוכחה חברתית שמוכרת.' },
    ]},
    { id:'m4', title:'מוצרים · מה למכור', icon:'<i data-lucide="package"></i>', lessons:[
      { id:'l11', ts:2038, dur:'2:35', title:'העלאת מוצר משלך (מחיר, עלות, מרג\'ין)', summary:'איך מגדירים מוצר, מחיר מול עלות, ורואים מיד את המרג\'ין. ניהול מלאי ו-continue selling.' },
      { id:'l12', ts:2193, dur:'17:00', title:'מה זה דרופשיפינג · המודל, מוסריות, חוקיות', summary:'השיעור המכונן: איך תיווך בין לקוח לספק עובד, למה זה 100% חוקי ומוסרי, ולמה הלקוח לא יודע ולא אכפת לו.' },
      { id:'l13', ts:3240, dur:'9:00', title:'מציאת מוצרים מנצחים', summary:'קריטריון פתרון-כאב, טווח מחיר 100-300₪ לרכישה אימפולסיבית, וחיפוש ב-AutoDS ובאלי-אקספרס. דוגמת הבובה הנושמת.' },
    ]},
    { id:'m5', title:'דף מוצר ממיר (קופירייטינג)', icon:'<i data-lucide="pen-line"></i>', lessons:[
      { id:'l14', ts:3780, dur:'5:24', title:'תיאור מוצר בתבנית AIDA', summary:'תשומת-לב → עניין → חשק → פעולה. איך כותבים תיאור שמשכנע במקום רשימת תכונות משעממת.' },
      { id:'l15', ts:4104, dur:'21:00', title:'ריגול מתחרים + שאלות-תשובות + הוכחה חברתית', summary:'Facebook Ad Library: לוקחים השראה ממתחרים מצליחים, בונים שאלות-תשובות שמייצרות ודאות ומסירות חששות.' },
    ]},
    { id:'m6', title:'עיצוב החנות', icon:'<i data-lucide="palette"></i>', lessons:[
      { id:'l16', ts:5400, dur:'30:00', title:'עורך התבנית, דף הבית והמובייל', summary:'בונים את דף הבית והסקשנים בעורך של שופיפיי, מובייל-first · כי שם הלקוחות באמת קונים.' },
      { id:'l17', ts:7800, dur:'12:00', title:'תמונות מוצר ובאנדלים בקנבה', summary:'תמונות הן הכל. איך מייצרים תמונות באנדל עם רקע שקוף, הצללות ומראה ממותג בקנבה.' },
    ]},
    { id:'m7', title:'להעלות את סל הקנייה (AOV)', icon:'<i data-lucide="trending-up"></i>', lessons:[
      { id:'l18', ts:8460, dur:'12:00', title:'הקמת באנדלים ב-BundleUp', summary:'חבילות של 1/2/3, תמחור פר-יחידה שמדגיש חיסכון, ועיצוב שדוחף לקנות יותר.' },
      { id:'l19', ts:9180, dur:'15:00', title:'אפסל ותגמולים · Cartify', summary:'אפסל בעגלה + תגמולים מדורגים (משלוח חינם / הנחה / מתנה לפי סף), טיימר וסמלי אשראי. שם נמצא המון רווח.' },
    ]},
    { id:'m8', title:'דפים חוקיים, תפריטים ומעקב', icon:'<i data-lucide="scale"></i>', lessons:[
      { id:'l20', ts:12000, dur:'3:00', title:'דפי About + Contact', summary:'סיפור מותג שמייצר אמון ודף יצירת קשר. אפשר לכתוב הכל עם ChatGPT בדקות.' },
      { id:'l21', ts:12180, dur:'3:00', title:'מדיניות ותקנון (תבניות מוכנות)', summary:'מדיניות החזרות/פרטיות/תנאי שימוש/משלוחים · חובה חוקית. דניאל נותן תבניות שעורכי-דין שלו ניסחו.' },
      { id:'l22', ts:12360, dur:'3:00', title:'תפריט ראשי ופוטר', summary:'בונים ניווט נקי: דף הבית, מוצר, צור קשר, מדיניות, מעקב הזמנה.' },
      { id:'l23', ts:12540, dur:'5:00', title:'AutoTrack · מעקב הזמנה + הסתרת מקור סיני', summary:'דף מעקב שהלקוח בודק לבד, שמסתיר ש המשלוח מגיע מסין · פחות ביטולים, יותר אמון.' },
    ]},
    { id:'m9', title:'הגדרות החנות', icon:'<i data-lucide="settings"></i>', lessons:[
      { id:'l24', ts:12900, dur:'2:00', title:'מטבע וצ\'קאאוט', summary:'מטבע נכון, וחיוב הלקוח למלא אימייל/שם/טלפון כדי שלא יאבדו עדכוני משלוח.' },
      { id:'l25', ts:13020, dur:'4:00', title:'אזורי משלוח ושווקים (ישראל + בינ"ל)', summary:'מגדירים shipping zones כך שלקוחות בישראל ובחו"ל יוכלו לבחור מדינה ולסיים רכישה. חוקי תמחור בישראל.' },
    ]},
    { id:'m10', title:'סליקה · לקבל תשלומים', icon:'<i data-lucide="credit-card"></i>', lessons:[
      { id:'l26', ts:13260, dur:'3:30', title:'PayPal מול ספק סליקה (PayPlus)', summary:'איך מחברים סליקה כדי שאנשים יוכלו לשלם באשראי. אזהרת PayPal מתחת לגיל 18.' },
    ]},
    { id:'m11', title:'ההזמנה הראשונה', icon:'<i data-lucide="bell"></i>', lessons:[
      { id:'l27', ts:13440, dur:'5:00', title:'רכישת ניסיון ומילוי אוטומטי', summary:'עושים רכישת בדיקה, שומעים את סאונד ההזמנה, ומגדירים מילוי אוטומטי ב-AutoDS + חיבור אלי-אקספרס.' },
    ]},
    { id:'m12', title:'מה באמת עושה כסף · 5 העמודים', icon:'<i data-lucide="rocket"></i>', lessons:[
      { id:'l28', ts:13740, dur:'1:30', title:'שיווק ופסיכולוגיה צרכנית', summary:'אנשים קונים מרגש, לא מהיגיון. להבין למה אנשים קונים זה מה שמפריד בין רווח להפסד.' },
      { id:'l29', ts:13860, dur:'1:00', title:'קריאייטיב וקופי למודעות', summary:'איך כותבים תסריט מודעה שתופס תשומת-לב ומשכנע · והיום עושים את זה ב-AI בשקלים בודדים.' },
      { id:'l30', ts:13920, dur:'1:00', title:'קידום ממומן (Facebook/Instagram/TikTok)', summary:'איך מוציאים 100₪ ביום ומקבלים 500₪ במכירות · ומשם רק מעלים תקציב ושומרים על היחס.' },
      { id:'l31', ts:13980, dur:'7:00', title:'מיסוי, AI, והמעבר ל-DMA', summary:'עוסק פטור/מורשה, חשבוניות, ושימוש ב-AI. ולמי שרוצה ליווי צמוד · הדרך פנימה ל-DMA.' },
    ]},
  ],
};

/* flat list helper */
window.ALL_LESSONS = window.CURRICULUM.modules.flatMap(m =>
  m.lessons.map(l => ({ ...l, moduleId:m.id, moduleTitle:m.title, moduleIcon:m.icon })));
window.LESSON_COUNT = window.ALL_LESSONS.length;
