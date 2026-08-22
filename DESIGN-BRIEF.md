# AfroBiome Foods: One-Page Design Brief

**Brand:** AfroBiome Foods Incorporated (nonprofit)  
**Tagline:** Nourishing Community. Preserving Heritage.  
**Style refs:** Savor (atmosphere) × Farm Minerals (hero) × sweetgreen (produce/system) × Mammoth/Zipline (impact type)

---

## 1. Positioning

Heritage-first food sovereignty site: not a grocery shop, not a pity-charity, not DTC snack branding.  
First viewport must read as one composition: brand + one headline + one supporting line + one CTA + full-bleed farm photography.

---

## 2. Color

| Token | Hex | Use |
|---|---|---|
| `--leaf` | `#1B4332` | Brand, nav CTA, headlines on light |
| `--leaf-mid` | `#2D6A4F` | Links, secondary accents |
| `--leaf-bright` | `#40916C` | Hover, highlights |
| `--soil` | `#4A3428` | Secondary text, footer accents |
| `--earth` | `#7A5C45` | Muted labels |
| `--canvas` | `#F2F4EF` | Page background (cool-green undertone, not cream cliché) |
| `--canvas-deep` | `#E4E9DF` | Alternating sections |
| `--ink` | `#141814` | Body text |
| `--fog` | `#F7F8F5` | Soft panels |
| `--eggplant` | `#5C2A4A` | Rare accent (Garden Eggs, impact) |
| `--white` | `#FFFFFF` | Nav bar, cards only when interactive |

**Rules:** No purple gradients. No terracotta-on-cream default. No glow effects.

---

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display / brand | **Fraunces** | Soft optical sizing; brand name & H1 |
| Body / UI | **Figtree** | Humanist sans; nav, body, buttons |

**Scale (desktop):** Brand 1.25rem · H1 3.5–4.5rem · H2 2.25rem · Body 1.125rem · Labels 0.75rem uppercase tracked  
**Scale (mobile):** H1 ~2.25rem; keep brand hero-level, not nav-sized only

---

## 4. Motion (2–3 intentional)

1. Hero: slow image scale (ken-burns) on load  
2. Pillars / metrics: fade-up on scroll  
3. Impact numbers: count-up once in view  

No decorative noise animations.

---

## 5. Global chrome

```
┌─────────────────────────────────────────────────────────────┐
│ AfroBiome Foods          Story  Farms  Crops  Impact  Involved │ [Donate]
└─────────────────────────────────────────────────────────────┘
```

- Logo/wordmark left (Fraunces, leaf color)  
- Text links center-right  
- Solid leaf “Donate” / “Support Our Mission” pill right  
- Footer: locations (Clarke Rd · Pleasant Valley · Hamilton Rd), email, newsletter “Stay rooted”

---

## 6. Section wireframes

### Home

```
┌─ HERO (100vh, full-bleed photo) ────────────────────────────┐
│  AfroBiome Foods                                             │
│  Nourishing Community.                                       │
│  Preserving Heritage.                                        │
│  One sentence · [Support Our Mission]                        │
└──────────────────────────────────────────────────────────────┘
┌─ PROBLEM / SOLUTION (one block, no cards) ──────────────────┐
│  Headline + short paragraph                                  │
└──────────────────────────────────────────────────────────────┘
┌─ PILLARS (3 columns, no cards) ─────────────────────────────┐
│  Cultivation     Processing     Distribution                 │
└──────────────────────────────────────────────────────────────┘
┌─ CROPS TEASER (photo strip → Our Crops) ────────────────────┐
┌─ IMPACT STRIP (3 big numbers) ──────────────────────────────┐
┌─ CTA BAND (Volunteer · Donate) ─────────────────────────────┐
```

### Our Story
Mission / Vision / three pillars (sovereignty, stewardship, care): editorial long-form, photo breaks.

### Farms & Facilities
Pipeline chapters: Clarke Road → Pleasant Valley → Hamilton Road (photo + short copy each).

### Our Crops
Two bands: Leafy Greens · Vegetables & Pods. Photo + name + one heritage sentence. Quality note at end.

### Community Impact
Big type metrics · Food Box story · Partners · SROI ($10 → ~3 lbs).

### Get Involved
Three equal paths: Volunteer · Donate (tiers) · Partner. Forms as simple CTAs (mailto / placeholder).

---

## 7. Do / Don’t

**Do:** Full-bleed hero · brand-first · real farm/community imagery · one job per section  
**Don’t:** Inset hero cards · floating badges on photos · KPI dashboards · pill clusters · Inter/Roboto

---

## 8. Build stack

Next.js (App Router) · Tailwind CSS · Google Fonts (Fraunces + Figtree) · static content from outline
