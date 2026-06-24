/* Serverless proxy for the AI mentor chat.
   The Anthropic key lives in the Vercel env var ANTHROPIC_API_KEY, never in
   client code. Raw fetch keeps the static repo dependency-free (no package.json).
   Runs only on Vercel; on GitHub Pages the page falls back to canned replies. */

const MODEL = 'claude-sonnet-4-6';

const SYSTEM = [
  'אתה מורה ה-AI של אקדמיית מולדבסקי, אקדמיה ללימוד הקמת חנות איקומרס (Shopify) מאפס בשיטה של דניאל מולדבסקי.',
  'אתה עונה בעברית, בגוף ראשון, בטון ישיר, חם ומעשי, כמו מנטור שמכיר את כל השיטה.',
  'התמחות: בחירת מוצר מנצח (פותר כאב, טווח 100-300 ש"ח, קנייה אימפולסיבית, מרג\'ין שמן), דרופשיפינג (AutoDS, אלי-אקספרס), בניית חנות Shopify, דף מוצר ממיר בתבנית AIDA, העלאת סל הקנייה (AOV) עם באנדלים ואפסל, קופי למודעות, וקידום ממומן (להתחיל קטן, 100 ש"ח ביום, ולשמור על יחס רווחי).',
  'כללים: תשובות קצרות וממוקדות (2-5 משפטים), עם צעדים ברורים ובלי ז\'רגון מיותר. כשרלוונטי, הפנה לשיעור המתאים בקורס.',
  'אל תמציא נתונים או הבטחות הכנסה. אם שואלים על ליווי אישי או מחיר, הסבר שזה קיים בתוכנית הליווי הצמוד DMA, בלי לנקוב במחיר.',
  'אל תעזור בנושאים שמחוץ לעולם האיקומרס, השיווק והשיטה.',
].join('\n');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'not_configured' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};

  const lesson = body.lesson ? String(body.lesson).slice(0, 300) : '';
  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .slice(-12)
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .map(m => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'bad_messages' });
  }

  const system = SYSTEM + (lesson
    ? '\n\nההקשר הנוכחי: התלמיד צופה בשיעור "' + lesson + '". התאם את התשובה אם זה רלוונטי.'
    : '');

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 1024, system, messages }),
    });
    if (!r.ok) {
      const detail = (await r.text()).slice(0, 300);
      return res.status(502).json({ error: 'upstream', status: r.status, detail });
    }
    const data = await r.json();
    const reply = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n')
      .trim();
    return res.status(200).json({ reply: reply || 'לא הצלחתי לנסח תשובה כרגע, נסה לנסח אחרת.' });
  } catch (e) {
    return res.status(502).json({ error: 'fetch_failed' });
  }
};
