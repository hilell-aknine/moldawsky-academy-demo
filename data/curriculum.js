/* ============================================================
   MOLDAWSKY ACADEMY · Curriculum spine (THE single source).
   Extracted from Daniel Moldawsky's full YouTube course
   (video _WM5MC28zQc, 4:00:14). Every ts is a REAL timestamp
   read from the transcript; every dur is the REAL segment
   length (next lesson start minus this one). No invented times.
   Every page reads window.CURRICULUM. Do not fork this shape.
   ============================================================ */
window.VIDEO_ID = '3gqhMJAmnYA'; // Hillel's own unlisted, embeddable re-upload (Daniel disabled embedding on the original _WM5MC28zQc)
window.VIDEO_END = 14414; // 4:00:14 · full video length, used as the end bound of the last lesson
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
      { id:'l1',  ts:0,    dur:'3:17', title:'פתיחה · מי זה דניאל ומה תלמדו', summary:'הצגת הסרטון, ההבטחה לבנות חנות מאפס, והרקע של דניאל כבעל מותגי איקומרס גדולים (תנאור ועוד).' },
      { id:'l2',  ts:197,  dur:'3:08', title:'מה זה שופיפיי ומה זה איקומרס', summary:'מהי פלטפורמת שופיפיי, למה היא plug & play שמאפשרת חנות בלי לתכנת, ולמה מותגי ענק בנויים עליה.' },
      { id:'l3',  ts:385,  dur:'2:58', title:'שופיפיי מול מרקטפלייס (אמזון/איביי/אטסי)', summary:'ההבדל בין חנות עצמאית לדוכן במרקטפלייס של מישהו אחר: שליטה, מיתוג, עמלות וסכנת חסימה.' },
      { id:'l4',  ts:563,  dur:'1:50', title:'החנות כנכס · בניית שווי ומכירת העסק', summary:'חנות רווחית הופכת לנכס בעל שווי שאפשר למכור במכפלות של הרווח השנתי, לא רק להרוויח ממנה.' },
      { id:'l5',  ts:673,  dur:'2:13', title:'הוכחות הכנסה בלייב', summary:'הדגמת מסכים אמיתיים של מכירות ורווחים יומיים וחודשיים מהמותגים של דניאל.' },
    ]},
    { id:'m2', title:'מקימים את החנות', icon:'<i data-lucide="store"></i>', lessons:[
      { id:'l6',  ts:806,  dur:'4:25', title:'בחירת שם למותג עם ChatGPT', summary:'איך לבחור שם גנרי וקליט למותג בעזרת ChatGPT, ולבדוק שהדומיין פנוי לפני שסוגרים.' },
      { id:'l7',  ts:1071, dur:'5:04', title:'פתיחת Gmail + הרשמה לשופיפיי + תוכנית', summary:'פותחים מייל ייעודי לחנות, נרשמים לשופיפיי דרך ההצעה של דולר לחודש, ובוחרים תוכנית מתאימה.' },
      { id:'l8',  ts:1375, dur:'3:36', title:'קניית דומיין וחיבורו (GoDaddy)', summary:'קונים דומיין נקי ב-GoDaddy ומחברים אותו לחנות שופיפיי כדי שהאתר ייראה מקצועי וימיר יותר.' },
    ]},
    { id:'m3', title:'האפליקציות החיוניות', icon:'<i data-lucide="puzzle"></i>', lessons:[
      { id:'l9',  ts:1591, dur:'2:17', title:'מה הן אפליקציות + BundleUp + המושג AOV', summary:'מה הן אפליקציות בשופיפיי, התקנת BundleUp, והמושג AOV (סך הזמנה ממוצע) שמכריע רווחיות.' },
      { id:'l10', ts:1728, dur:'1:37', title:'AutoDS · דרופשיפינג + מילוי הזמנות אוטומטי', summary:'התקנת AutoDS שמושכת מוצרים מאלי-אקספרס וממלאת הזמנות אוטומטית, גם בנפחים גדולים.' },
      { id:'l11', ts:1825, dur:'3:33', title:'Sales RTL + Cartify + Vouch AI', summary:'התקנת אפליקציית עברית/RTL, אפסל בעגלה (Cartify), ואפליקציית ביקורות מבוססת AI (Vouch).' },
    ]},
    { id:'m4', title:'מוצרים · המודל ומה למכור', icon:'<i data-lucide="package"></i>', lessons:[
      { id:'l12', ts:2038, dur:'2:35', title:'העלאת מוצר משלך (מחיר, עלות, מרג\'ין)', summary:'יצירת מוצר בשופיפיי עם מחיר, עלות ומרג\'ין, וההגדרה להמשך מכירה גם כשאין מלאי.' },
      { id:'l13', ts:2193, dur:'17:29', title:'מה זה דרופשיפינג · המודל, מוסריות, חוקיות', summary:'השיעור המכונן: איך התיווך בין לקוח לספק עובד, למה זה חוקי ומוסרי, והדגמת פערי תמחור אמיתיים.' },
      { id:'l14', ts:3242, dur:'7:51', title:'מציאת מוצר וייבוא דרך AutoDS', summary:'חיפוש מוצרים מנצחים במרקטפלייס של AutoDS ובאלי-אקספרס, וייבוא המוצר הראשון לחנות.' },
      { id:'l15', ts:3713, dur:'3:08', title:'ניקוי המוצר ותמחור', summary:'מוחקים תיאור ותמונות גרועים מאלי-אקספרס, נותנים שם ממותג, וקובעים מחיר ומבצע.' },
    ]},
    { id:'m5', title:'דף מוצר ממיר (קופירייטינג)', icon:'<i data-lucide="pen-line"></i>', lessons:[
      { id:'l16', ts:3901, dur:'4:08', title:'ריגול מתחרים בספריית המודעות', summary:'מוצאים מתחרים מצליחים דרך Facebook Ad Library ולוקחים מהם השראה לקופי, למבנה ולמחיר.' },
      { id:'l17', ts:4149, dur:'6:13', title:'תיאור מוצר בתבנית AIDA', summary:'כותבים תיאור מוצר ממיר לפי תבנית AIDA: תשומת-לב, עניין, חשק ופעולה, במקום רשימת תכונות.' },
      { id:'l18', ts:4522, dur:'5:08', title:'הוכחה חברתית, גרנטי ושאלות-תשובות', summary:'משלבים ביקורות, התחייבות להחזר כספי ושאלות-תשובות בדף המוצר כדי להעלות אמון והמרה.' },
    ]},
    { id:'m6', title:'עיצוב החנות והמותג', icon:'<i data-lucide="palette"></i>', lessons:[
      { id:'l19', ts:4830, dur:'7:01', title:'בחירת ערכת נושא ועורך החנות', summary:'בוחרים theme בשופיפיי ולומדים את העורך: סקשנים, בלוקים, גרירה ועריכת טקסט ותמונות.' },
      { id:'l20', ts:5251, dur:'4:23', title:'יצירת לוגו ופאביקון בקנבה', summary:'מעצבים לוגו טקסטואלי פשוט ופאביקון בקנבה ומעלים אותם לערכת הנושא של החנות.' },
      { id:'l21', ts:5514, dur:'4:41', title:'צבעים, פונטים והגדרות ערכת נושא', summary:'בוחרים צבעי מותג, פונטים וסגנון כפתורים, והופכים את העגלה ל-drawer נשלף.' },
      { id:'l22', ts:5795, dur:'4:02', title:'התקנת Sales RTL לעברית', summary:'מפעילים RTL, מחליפים שפה לעברית, מגדירים פונט עברי ומתרגמים את התראות המייל ללקוח.' },
      { id:'l23', ts:6037, dur:'5:39', title:'עיצוב דף הבית', summary:'בונים דף בית מינימלי במובייל-first שמחזיר את הגולשים לדף המוצר, עם תמונות וטקסט.' },
      { id:'l24', ts:6376, dur:'2:10', title:'מטבע, פורמט שקל ואזור זמן', summary:'משנים את מטבע החנות לשקל, מתקנים את מיקום סימן השקל ומגדירים את אזור הזמן.' },
    ]},
    { id:'m7', title:'בניית דף המוצר', icon:'<i data-lucide="layout-template"></i>', lessons:[
      { id:'l25', ts:6506, dur:'7:53', title:'דף המוצר · מבנה וקופי', summary:'מוסיפים הכרזה, multi-row וטקסטים שקל לקרוא, ושוזרים עקרונות שיווק וקופירייטינג לאורך הדף.' },
      { id:'l26', ts:6979, dur:'11:48', title:'תמונות מוצר ובאנדלים בקנבה', summary:'מעבדים תמונות מוצר בקנבה: הסרת רקע, טקסט עברי, רקעים תואמי-מותג ותמונות לבאנדלים.' },
      { id:'l27', ts:7687, dur:'13:33', title:'סידור דף המוצר · ביקורות ושאלות-תשובות', summary:'מגדירים תמונה ראשית, מוסיפים בלוקי ביקורות, שאלות-תשובות וסקשן גרנטי לדף המוצר.' },
    ]},
    { id:'m8', title:'להעלות את סל הקנייה (AOV)', icon:'<i data-lucide="trending-up"></i>', lessons:[
      { id:'l28', ts:8500, dur:'11:06', title:'הקמת באנדלים ב-BundleUp', summary:'חבילות של 1/2/3 עם מחיר פר-יחידה שמדגיש חיסכון, צבעים ותמונות שדוחפים לקנות יותר.' },
      { id:'l29', ts:9166, dur:'6:10', title:'אפסל בעגלה · Cartify', summary:'מגדירים אפסל שמציע מוצרים נלווים בתוך העגלה הנשלפת כדי להגדיל את ההזמנה.' },
      { id:'l30', ts:9536, dur:'9:35', title:'תגמולים ופריט משלים · Cartify', summary:'תגמולים מדורגים (משלוח חינם / הנחה / מתנה), פריט משלים, באנר טיימר וסמלי אשראי.' },
    ]},
    { id:'m9', title:'ביקורות, שימור ומחקר מתקדם', icon:'<i data-lucide="star"></i>', lessons:[
      { id:'l31', ts:10111, dur:'6:10', title:'Vouch AI · ייבוא ביקורות מתורגמות', summary:'מייבאים ביקורות מאלי-אקספרס עם תרגום AI לעברית והתאמה לשמות ישראליים, ועורכים אותן.' },
      { id:'l32', ts:10481, dur:'5:21', title:'Vouch AI · וידג\'טים וטאב התנגדויות', summary:'מציגים את הביקורות באתר בוידג\'טים שונים, כולל קרוסלות וטאב התנגדויות לפי נושא הלקוח.' },
      { id:'l33', ts:10802, dur:'3:09', title:'Dundi · שחזור עגלות נטושות בוואטסאפ', summary:'מתקינים Dundi להחזרת נוטשי עגלה אוטומטית בהודעות וואטסאפ עם תזכורות וקודי הנחה.' },
      { id:'l34', ts:10991, dur:'17:07', title:'מציאת מוצרים מנצחים · Shopshark + Pipiads', summary:'שימוש ב-Shopshark לנתוני TikTok Shop וב-Pipiads כדי למצוא מוצרים מנצחים והשראה לקריאייטיב.' },
    ]},
    { id:'m10', title:'דפים, תפריטים ומדיניות', icon:'<i data-lucide="scale"></i>', lessons:[
      { id:'l35', ts:12018, dur:'3:06', title:'דפי About + Contact', summary:'יוצרים דף צור-קשר ודף "קצת עלינו" בעזרת ChatGPT כדי לבנות אמון מול הלקוח.' },
      { id:'l36', ts:12204, dur:'3:25', title:'מדיניות ותקנון (תבניות מוכנות)', summary:'ממלאים מדיניות החזרות/פרטיות/תנאי שימוש/משלוחים עם תבניות מוכנות שעורכי-דין ניסחו.' },
      { id:'l37', ts:12409, dur:'3:14', title:'תפריט ראשי ופוטר', summary:'ממרכזים את הלוגו ובונים תפריט ראשי ותפריט פוטר: דף הבית, מוצר, צור-קשר, מדיניות ומעקב.' },
      { id:'l38', ts:12603, dur:'5:11', title:'AutoTrack · מעקב הזמנה + הסתרת מקור', summary:'דף מעקב הזמנה שהלקוח בודק לבד, וחסימת מילים כמו "סין"/"אלי-אקספרס" בעדכוני המשלוח.' },
    ]},
    { id:'m11', title:'הגדרות, סליקה וההזמנה הראשונה', icon:'<i data-lucide="credit-card"></i>', lessons:[
      { id:'l39', ts:12914, dur:'1:49', title:'הגדרות צ\'קאאוט', summary:'עוברים על הגדרות הצ\'קאאוט: חיוב מייל, שם וטלפון, וסידור שדות הרכישה ללקוח.' },
      { id:'l40', ts:13023, dur:'4:12', title:'אזורי משלוח ושווקים (ישראל + בינ"ל)', summary:'מגדירים אזורי משלוח לישראל ושווקים בינלאומיים עם שיטות משלוח כדי לאפשר צ\'קאאוט.' },
      { id:'l41', ts:13275, dur:'2:22', title:'סליקה · PayPal מול PayPlus', summary:'מחברים סליקה לחנות: היתרונות והסיכונים של PayPal מול ספק סליקה ישראלי כמו PayPlus.' },
      { id:'l42', ts:13417, dur:'6:42', title:'רכישת ניסיון ומילוי אוטומטי', summary:'מבצעים רכישת ניסיון, שומעים את סאונד ההזמנה, ומגדירים מילוי אוטומטי ב-AutoDS.' },
    ]},
    { id:'m12', title:'מה באמת עושה כסף · 5 העמודים', icon:'<i data-lucide="rocket"></i>', lessons:[
      { id:'l43', ts:13819, dur:'2:43', title:'5 העמודים · שיווק, קריאייטיב וקידום ממומן', summary:'שלושת העמודים הראשונים: פסיכולוגיה צרכנית (למה אנשים קונים), קריאייטיב וקופי למודעות, וקידום ממומן רווחי.' },
      { id:'l44', ts:13982, dur:'7:12', title:'מיסוי, AI והמעבר ל-DMA', summary:'בירוקרטיה ומיסוי (עוסק פטור/מורשה), עבודה עם כלי AI, וסיום עם הדרך פנימה לליווי הצמוד DMA.' },
    ]},
  ],
};

/* flat list helper */
window.ALL_LESSONS = window.CURRICULUM.modules.flatMap(m =>
  m.lessons.map(l => ({ ...l, moduleId:m.id, moduleTitle:m.title, moduleIcon:m.icon })));
window.LESSON_COUNT = window.ALL_LESSONS.length;
