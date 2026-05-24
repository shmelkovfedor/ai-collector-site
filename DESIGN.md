---
title: AI-Collector — Design System (canonical)
created: 2026-05-24
updated: 2026-05-24
status: approved
approved_variant_ref: ~/.gstack/projects/Obsidian-clode/designs/hero-fusion-20260524/approved.json
direction_name: Premium Trader Floor
source_inspiration: ByBit (glass-cards) + Prodigal (vertical-laser + voice-wave)
deprecated_directions:
  - 2026-05-23 Editorial-Operational (Fraunces + paper + oxblood) — слишком литературно/журнально, не tech-product
---

# AI-Collector — Design System

> **Canonical source of truth.** Любое UI-решение (сайт, питч-дек, презентации, документация) должно опираться на этот документ. Не отклоняться без явного одобрения Фёдора.

---

## 1. Product Context

- **Что это:** B2B SaaS — голосовая AI-платформа для российских коллекторских агентств (ПКО), адаптация канадской системы Christian'а под РФ-рынок
- **Кто пользователь:** директора ПКО (45+, консервативные, опытные в финансах), плюс банки/МФО которые рассматривают аутсорс взыскания
- **Категория продукта:** B2B fintech / voice-AI / debt-collection
- **Project type:** marketing site (основной артефакт) + позже dashboard

## 2. Memorable Thing

**«Взрослое решение для нашей ниши»** — то что должен запомнить директор ПКО после первого визита. Серьёзный tech-product, не игрушка, не журналистский longread, не Сбер-blue, не tech-bro неон. Финансовая зрелость с энергией tech-стартапа.

## 3. Aesthetic Direction — Premium Trader Floor

**Визуальный тезис:** премиум торговый зал. Серьёзная финансовая платформа с энергией нативного digital-tech. Не корпоратив, не игрушка — спокойная уверенность профессионала который зарабатывает на цифрах.

**Reference DNA:**
- **ByBit** → glass-morphism cards с большими цифрами + dark-drama база
- **Prodigal** → vertical-laser positioning («AI agent **for** [vertical]») + voice-wave на фоне hero
- **НЕ** Editorial-direction (Fraunces serif + paper + oxblood) — снято 2026-05-24, читалось как Economist/luxury-banking, не как tech-product

**Mood:** trading floor at midnight. Уверенность, плотность данных, тепло-тёмный фон, узкая палитра, метрики читаются как биржевой тикер.

**Decoration level:** intentional minimum. Voice-wave SVG как единственный декоративный элемент. Glass-morphism как функциональный (метрики), не декоративный приём.

## 4. Color System

### Primary palette

```css
--bg:           #0D1421;   /* navy-black, основной фон */
--bg-alt:       #0a1019;   /* deeper, для logo-bands, footer, secondary sections */
--bg-surface:   #131C2C;   /* slightly lifted surface для cards без glass */

--ink:          #FFFFFF;   /* primary text, headlines */
--ink-muted:    rgba(255,255,255,0.65);   /* secondary text, subheadlines */
--ink-subtle:   rgba(255,255,255,0.45);   /* tertiary, labels */
--ink-quiet:    rgba(255,255,255,0.30);   /* dividers, hints */

--accent:       #FF6B47;   /* warm coral — primary CTA, метрики, highlights */
--accent-deep:  #E04E29;   /* hover/pressed state */
--accent-soft:  rgba(255,107,71,0.12);   /* accent backgrounds, subtle tints */

--glass-bg:     rgba(255,255,255,0.04);     /* glass-morphism card background */
--glass-border: rgba(255,255,255,0.10);     /* glass-morphism card border */
--hairline:     rgba(255,255,255,0.06);     /* dividers, separators */
```

### Semantic colors

```css
--success:  #4ADE80;   /* зелёный для success-состояний (редко используем) */
--warning:  #FBBF24;   /* янтарный для warnings */
--error:    #F87171;   /* мягкий red для errors */
```

### Rules
- **Никогда не используем:** purple/violet gradients, Sber-blue, Бирюзовый/cyan, неоновый розовый/magenta
- **Accent (#FF6B47) — РЕДКО.** Только для CTA, ключевых метрик, vertical-laser слова «агентств». Если accent везде → не accent
- **Light mode не предусмотрен в MVP** — сайт всегда dark. Опционально добавим в v2 если будут запросы

## 5. Typography

### Fonts

| Роль | Шрифт | Fallback | Weights |
|---|---|---|---|
| **Display / Hero** | **Geist** (variable) | `-apple-system, system-ui, sans-serif` | 700 (hero), 600 (h2/h3) |
| **Body** | **Geist** | то же | 400 (regular), 500 (medium) |
| **Data / Numbers** | **Geist Mono** (tabular-nums) | `JetBrains Mono, ui-monospace, monospace` | 600 (для метрик) |
| **Eyebrow caps** | Geist | то же | 500, uppercase, letter-spacing 2px |

**Источник:** [vercel.com/font/geist](https://vercel.com/font/geist) — лицензия SIL Open Font, self-host через Vercel CDN или скачать.

**Почему Geist:** modern sans-serif с настоящим tech-feel (создан Vercel для своих продуктов). Не Inter (overused / AI-slop), не system-ui (capitulation). Имеет variable-weights, tabular-nums, отличную кириллицу.

### Scale (modular ratio 1.25)

```css
--text-xs:    11px;
--text-sm:    13px;
--text-base:  15px;
--text-md:    17px;
--text-lg:    20px;
--text-xl:    24px;
--text-2xl:   32px;
--text-3xl:   42px;
--text-4xl:   54px;   /* hero на mobile */
--text-hero:  72px;   /* hero на desktop, 96px optional для крупного hero */
```

### Letter-spacing

```css
--ls-tight:    -0.02em;   /* для крупных headlines, делает их собранными */
--ls-normal:   0;
--ls-wide:     0.04em;    /* для eyebrow caps */
--ls-extra:    2px;       /* для всё-большое-uppercase labels */
```

## 6. Spacing

**Base unit:** 4px. **Density:** comfortable (не Bloomberg-плотно, не bootstrap-просторно).

```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-8:   32px;
--space-10:  40px;
--space-12:  48px;
--space-16:  64px;
--space-20:  80px;
--space-24:  96px;
--space-32:  128px;
```

**Section vertical rhythm:** между секциями `--space-24` (96px) минимум. Hero — `--space-20` сверху, `--space-24` снизу.

## 7. Layout

### Grid

- **Max content width:** 1280px (основной), 720px (для длинных prose-блоков)
- **Grid:** 12-col desktop, 6-col tablet, 4-col mobile
- **Gutter:** 32px desktop, 24px tablet, 16px mobile
- **Side padding:** 40px desktop, 24px mobile

### Hero (asymmetric 60/40)

Главный паттерн нашего бренда:
- **Левая колонка (7-8 cols):** eyebrow caps → headline (display) → subhead → CTA row
- **Правая колонка (4-5 cols):** cluster из 3 glass-cards с метриками вертикально

На mobile складывается в одну колонку: hero-text сверху, glass-cards снизу.

### Border-radius scale

```css
--radius-sm:    4px;       /* small chips, badges, buttons */
--radius-md:    8px;       /* cards, inputs, larger buttons */
--radius-lg:    12px;      /* hero cards, modals */
--radius-full:  9999px;    /* avatar, pills (редко) */
```

**Никогда не используем:** `--radius-full` для CTA. CTA = `--radius-md` (8px).

## 8. Components

### Glass-card (signature component)

```css
.glass-card {
  background: var(--glass-bg);            /* rgba(255,255,255,0.04) */
  border: 1px solid var(--glass-border);  /* rgba(255,255,255,0.10) */
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);        /* 12px */
  padding: var(--space-5) var(--space-6); /* 20 24 */
}

.glass-card-metric {
  font-family: Geist Mono;
  font-size: var(--text-3xl);            /* 42px */
  font-weight: 700;
  color: var(--accent);                   /* coral */
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.glass-card-label {
  font-size: var(--text-xs);             /* 11px */
  color: var(--ink-subtle);
  margin-top: var(--space-2);
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
}
```

### Voice-wave SVG (signature decorative)

Тонкие синусоидальные линии на coral, opacity 0.15-0.20, проходят горизонтально через hero. Создают «звук течёт через страницу» ассоциацию. Не анимируются (статичный SVG для performance).

```html
<svg viewBox="0 0 1200 160" preserveAspectRatio="none">
  <path d="M0,80 Q200,50 400,80 T800,80 T1200,80" stroke="#FF6B47" stroke-width="1.2" fill="none" opacity="0.15"/>
  <path d="M0,90 Q200,60 400,90 T800,90 T1200,90" stroke="#FF6B47" stroke-width="1" fill="none" opacity="0.10"/>
  <path d="M0,70 Q200,40 400,70 T800,70 T1200,70" stroke="#FF6B47" stroke-width="0.8" fill="none" opacity="0.08"/>
</svg>
```

### CTA Button (primary)

```css
.cta-primary {
  background: var(--accent);              /* coral */
  color: var(--bg);                       /* navy на coral для contrast */
  padding: 14px 26px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--text-sm);
  border: none;
  cursor: pointer;
}
.cta-primary:hover { background: var(--accent-deep); }
```

CTA содержит стрелку `→` для directional energy (Prodigal-pattern).

### CTA Button (ghost)

```css
.cta-ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--ink-quiet);
  padding: 13px 24px;   /* меньше padding из-за border */
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--text-sm);
}
```

### Eyebrow caps

```css
.eyebrow {
  font-size: var(--text-xs);              /* 11px */
  letter-spacing: var(--ls-extra);        /* 2px */
  text-transform: uppercase;
  color: var(--ink-subtle);
  font-weight: 500;
  margin-bottom: var(--space-4);
}
```

## 9. Motion

**Approach:** minimal-functional. Анимации только когда они объясняют изменение состояния.

- **Scroll-reveal:** `opacity 0→1 + translateY(8px→0)`, duration 400ms, ease-out, stagger 60ms между элементами в секции. IntersectionObserver-based.
- **Hover на CTA:** `background-color transition 120ms`. Никаких scale/rotate/bounce.
- **Theme toggle:** N/A в MVP (только dark)
- **Voice-wave:** статичный, без анимации. В v2 опционально — slow morph 8s ease-in-out infinite.
- **Никогда:** scroll-jacking, parallax, fullscreen video-bg, particle-effects, cursor-trails

## 10. Anti-patterns (что НЕ делаем)

| Запрет | Почему |
|---|---|
| Purple/violet gradients | AI-slop signal |
| 3-col SaaS feature grid с иконками в цветных кружочках | AI-slop |
| Centered hero с симметричным CTA снизу (Vercel default) | Generic |
| Inter, Roboto, system-ui как primary font | Capitulation на типографике |
| Бирюзовый/cyan/teal акцент | TWIN/VS Robotics уже там |
| Стоковые фото улыбающихся «бизнес-вуменов» | Не наша аудитория |
| Friendly cartoon-energy | TWIN это делает, мы серьёзнее |
| Серифы в headlines | Снято 2026-05-24 — читалось как journalism |
| Paper/cream backgrounds | Снято 2026-05-24 — читалось как luxury |
| Bubble-radius (`--radius-full`) на CTA | Tech-bro signal |
| Gradient buttons | Generic SaaS |

## 11. Asset Inventory (что нужно создать)

- [ ] Geist font files self-hosted (или Vercel CDN link)
- [ ] Voice-wave SVG как переиспользуемый component (4 path variants для variety)
- [ ] Logos band assets (НБКИ, ОКБ, ФССП, Novofon — пока monochrome SVG placeholders)
- [ ] Favicon + apple-touch-icon (navy bg + coral mark)
- [ ] OG-image для социальных шар (1200×630, navy + headline + coral accent)
- [ ] Mobile-optimized hero (свернуть asymmetric в single-col)

## 12. Reference Implementation

Полный mockup hero-секции А (Premium Trader Floor) лежит в:
`Проекты/AI-Collector/.superpowers/brainstorm/23002-1779633629/content/05-3-concepts-fullsize.html`

Approved.json:
`~/.gstack/projects/Obsidian-clode/designs/hero-fusion-20260524/approved.json`

## 13. Decisions Log

| Дата | Решение | Обоснование |
|---|---|---|
| 2026-05-18 | Initial direction: Bloomberg-Pro dense | Hero-mockup approved May 18 |
| 2026-05-23 | Pivot to Editorial-Operational (Fraunces + paper + oxblood) | Тогда хотели differentiation от sans-серого рынка |
| 2026-05-24 | **Editorial СНЯТ** | Читался как journalism/luxury-banking, не tech-product. «Слишком литературно» (фидбек Фёдора) |
| 2026-05-24 | **Pivot to Premium Trader Floor** | ByBit glass-cards + Prodigal vertical-laser + Geist sans + warm coral. Tech-mature без journalism-feel |
| 2026-05-24 | Light mode не делаем в MVP | Снижает scope, dark подходит для serious-finance vibe |
| 2026-05-24 | Voice-wave статичный (не анимация) | Performance + не отвлекает от headline |

## 14. Связанные документы в vault

- [[wiki/concepts/site-redesign-v1.html]] — старая Editorial-итерация (deprecated)
- [[wiki/concepts/2026-05-22_маркетинг-конкурентов-v1]] — конкурентный анализ (ByBit / Prodigal / TWIN / VS Robotics)
- [[output/report-for-christian-2026-05-23]] — отчёт партнёру где упоминается айдентика
