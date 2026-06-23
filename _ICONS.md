# ICON SWAP — emoji → Lucide vector (premium, not "cheap AI")

Replace emoji used as ICONS with Lucide SVG icons. Lucide is already loaded centrally
(by `js/portal-core.js`); you only add markup + (for dynamic content) call `window.refreshIcons()`.

## How to use
- Inline icon: `<i data-lucide="NAME"></i>` (sizes itself; inherits text color).
- Card / agent / feature icon: wrap in the brand chip:
  `<span class="ic-chip"><i data-lucide="NAME"></i></span>`
- After you inject ANY markup containing icons via JS (dynamic lists, generated output, game
  screens, chat, etc.), call `window.refreshIcons()` right after setting innerHTML.
- Lucide carries over the `class` you put on the `<i>` to the rendered `<svg>`, so keep classes like `ico`.

## Mapping (use the closest; pick sensible Lucide names for anything not listed)
| emoji | lucide | emoji | lucide |
|---|---|---|---|
| 🔥 | flame | ⏱️ ⏰ | clock |
| 📚 📖 | book-open | 🎓 | graduation-cap |
| 📔 📓 📒 | notebook-pen | 📝 ✍️ | pen-line |
| 🤖 ✨ | sparkles | 👥 🧑‍🤝‍🧑 | users |
| 🎮 🕹️ | gamepad-2 | 🏆 | trophy |
| 💰 💵 💸 | banknote | 📈 📊 | trending-up |
| 🔓 👑 | crown | 🔒 | lock |
| ⚙️ 🛠️ | settings | 🎯 | target |
| 🔍 | search | 🏷️ | tag |
| ⚖️ | scale | 📣 📢 | megaphone |
| 🧮 | calculator | 📋 | clipboard-list |
| 🧰 | wrench | ✅ ✔️ | check-circle-2 |
| 🎉 🥳 | party-popper | 💎 | gem |
| 📄 📃 | file-text | 📦 | package |
| 🛍️ 🛒 | shopping-bag | 💳 | credit-card |
| 🚀 | rocket | ❓ | help-circle |
| 💡 | lightbulb | ⭐ 🌟 | star |
| 🔔 | bell | 📱 | smartphone |
| 👋 | hand | 🟢 | circle (or a status dot) |
| 🏅 | medal | 📌 | pin |
| ☰ | menu | × ✕ | x |

## Rules
- Replace emoji that act as ICONS (nav, buttons, stat tiles, card/section/feature icons, agent
  icons, list bullets-as-icons, status markers). 
- It is fine to KEEP an emoji only where it is genuine playful inline text within a sentence and
  not a UI icon (rare). When in doubt, swap it.
- Do NOT change layout/logic/IDs/handlers. Only swap the icon glyph markup. RTL preserved, no em-dashes.
- Keep the `.ic-chip` for prominent card/agent icons so they get the brand-tinted rounded tile.
