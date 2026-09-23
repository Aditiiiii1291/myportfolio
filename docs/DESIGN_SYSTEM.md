# Aditi's Adventure — Design System

Status: P1.3 DONE — revision 03 bounded visual sample visually approved on 2026-09-16. Production artwork and application components remain unbuilt.
Updated: 2026-09-16.

## Latest direction — 2026-09-16

Explicit completion approval settles the bounded sample and intended character features: **a sort of long diamond-shaped face, middle-parted hair, cat-eye frame glasses**. Earlier softened rectangular-frame wording is historical and superseded. Pixel geometry, exact font files, shades, animation frames and responsive production assets remain provisional; these do not reopen P1.3. See the [approval record](VISUAL_SAMPLE_REVIEW.md).

User approval of revision 03: “yes i like the style now”. Use this sample as the approved stylistic reference for pastel pink scenery, pixel-style lettering and cozy chibi character art. Exact font files, production geometry, incidental generated copy and animation implementation are not finalized by this approval.

The user's new reference feedback supersedes the earlier smooth-vector/blocky interpretation: use visible pixel art, a cute chibi game character, pastel baby-pink scenery and pixel lettering like the supplied pink personal-web screenshot. The second supplied screenshot informs character scale and the game-like atmosphere. Preserve Aditi's identity, fluffy cream bunny, five destinations and direct access to content. The user explicitly chose **revise the design sample first**; this round does not implement a website.

Revision 03 is a generated raster concept, not a production sprite sheet, an editable vector master or a functioning UI. See [current review](VISUAL_SAMPLE_REVIEW.md) for remaining refinement. Original layout and characters should express the broad cozy life-simulation feeling of the references.

Motion direction for later implementation: restrained avatar blinking/idle, bunny ear twitches and small hops, flower movement and the existing album-delivery interaction. These are proposed behaviors, not animations present in the sample. Character movement is optional and not required to reach portfolio content; this feedback does not require a full game.

## Authority and use

This document translates [PRD.md](../PRD.md) into repeatable visual rules. The [roadmap](PORTFOLIO_MASTER_ROADMAP.md) governs production order and [history](PROJECT_HISTORY.md) records accepted changes.

**Confirmed** means selected in brainstorming. **Baseline/candidate** means a concrete starting value for the visual sample, not a previously approved final token. **TBD** requires selection or artwork exploration. Do not quietly turn a candidate into a new identity decision. Record approved refinements in history; maintain the PRD's scope and accessibility requirements.

## 1. Visual identity — confirmed

P1.3 feedback update, 2026-09-14: Aditi accepted cream bunny fur and requested more fluff, glasses between cat-eye and rectangular rather than boxy, a middle hair part, paler warm skin and pastel baby pink. These directions supersede earlier open/recommended descriptions below. Revision 02 tests them; exact geometry/shades are not yet approved. The earlier strawberry token remains a historical candidate; revision 02 tests `#F6C6D5`. See [visual review](VISUAL_SAMPLE_REVIEW.md).

World name: **Aditi's Adventure**. Exact welcome line:

> A little world of things I build, ideas I explore, and things I love.

Identity: cute, cozy, pastel, pink-led, personal, gently magical and game-like. The latest user feedback selects **pixel art** over the earlier smooth chunky-vector sample. Use readable chibi silhouettes, stepped contours, deliberate pixel clusters and limited shade ramps. Retain soft proportions within the pixel grid.

Professional content is clear and quiet. Do not put technical paragraphs in ornamental lettering or re-theme genuine application screenshots until they stop showing the actual work.

## 2. World perspective and composition — confirmed

- Gently elevated illustrated 2D, showing building fronts and enough roof/ground to suggest a village.
- One central plaza with a short winding loop and five nearby destinations.
- Workshop most prominent; Cottage secondary; Garden can be broad and low; Board upright and readable; Mailbox easy to recognize and reach.
- Aditi and bunny welcome visitors near the plaza. Exact coordinates and centerpiece remain sample-stage layout details.
- Keep one consistent horizon, implied viewpoint and light direction within the scene. A proposed upper-left light source may be used for the sample, but is not a user-finalized choice.
- Buildings, props, labels, characters and background layers are separate assets/elements. Do not flatten all navigation into one background image.
- Desktop and mobile share the same world identity and content, not necessarily the same asset arrangement.

Use an elevated sprite-world view with visible character faces and building fronts. Avoid a platform-level composition or a river/bridge as the organizing map structure. The new reference permits a pixel sprite world; the earlier blanket rejection of that treatment is superseded. Small environmental details should support the central plaza.

## 3. Illustration principles

### Shape and line

Use broad roofs, thick frames, compact props, and softly squared volumes. Draw the hair in a few readable layered masses and bunny fur as simplified tufts. Use cocoa outlines with consistent apparent weight. Corners can be rounded without turning every object into a pill or bubble.

Sample baseline: a small outline family equivalent to roughly 2–4 CSS px at intended display size, heavier on a large silhouette than interior detail. Final art stroke units depend on source/export scale; test the visible weight at actual mobile size.

### Detail and texture

Favor two or three clear value levels per object, simple shading, and sparse texture. Handmade texture is optional and belongs on roofs, paper or foliage; keep it out from behind paragraphs. Reuse related leaves, flowers and wood treatments rather than inventing a new style per location.

The scene must remain identifiable as a still image. Animation cannot rescue an unclear silhouette or unlabeled destination.

### Interaction clarity

Required destinations combine a readable HTML label, consistent outline/frame, and visible focus/hover/pressed feedback. Scenery does not receive the same button-like treatment. Optional interactive props have an explicit label or clear discoverable cue and never contain the sole route to required content.

## 4. Aditi avatar rules — confirmed identity, unfinished art

| Feature | Required direction |
| --- | --- |
| Hair | Long, brunette, layered, middle-parted; simplify into recognizable flowing shapes |
| Face | A sort of long diamond-shaped face; pale warm skin; precise pixel proportions remain provisional |
| Glasses | Cat-eye frame glasses; preserve the lifted outer silhouette at readable scales |
| Headphones | Pink, recognizable recurring accessory |
| Top | Sleeveless high-neck, preferably black |
| Trousers | Flared blue jeans |
| Shoes | Dark sneakers |
| Welcome pose | Holding the fluffy bunny |
| Other scenes | Host in composed scenes; bunny may rest nearby |

The black top, blue jeans and dark shoes are character identity colors and need not be replaced by pastel clothes. Exact hair/skin/outfit shades are separate character tokens to settle with an approved sample. Do not recolor Aditi merely to match scenery.

Mandatory initial sample: Aditi holding bunny at welcome size and a simplified small village version. Additional desk/garden/mailbox poses are optional asset variants; do not require every location to receive a new full character illustration.

## 5. Bunny companion rules

Confirmed: fluffy pet bunny; curious and gently playful; held at Welcome and present nearby elsewhere; delivers the Workshop album.

Approved: fluffy cream fur. TBD: markings, exact ear shape, name, accessories and final pixel facial geometry. Do not add a bow, bell, collar, satchel, antlers or hybrid-species features as a requirement.

Use posture, ears and brief expressions for personality. Initial idle candidate is grooming/scratching; an optional butterfly encounter can use a small hop and pause. More complex bug antics are future polish, not combat.

Album delivery should read as the bunny nudging/pushing a manageable book toward the workbench/reader. Establish the physical staging in a storyboard before animation. No game AI, autonomous pathfinding or following system is needed.

For every animated sequence, prepare a still pose. Do not hide the bunny entirely when motion is reduced.

## 6. Strawberry Cream palette

The **palette direction is confirmed**. These hex values are **candidate tokens** carried forward from brainstorming. They must be evaluated in the art/component sample before final acceptance.

| Candidate token | Value | Semantic use |
| --- | --- | --- |
| strawberry | `#EFA3B6` | Primary accents, selected surfaces, mailbox/roof/headphone relationships |
| cream | `#FFF7EB` | Paper, readable panels and light backgrounds |
| lavender | `#D8C7EB` | Secondary accents and small scenic details |
| sky | `#C7E3F2` | Sky and supporting blue areas |
| sage | `#B8CFAE` | Plants, garden category accents, foliage |
| peach | `#F4C6A6` | Warm minor accents |
| cocoa | `#44312F` | Primary text, outlines, readable control labels |
| wood | `#A87959` | Shelves, signs and environmental wood |

Pink is the focal identity, not the background for every surface. Cream provides reading space; blue and green separate sky and ground. Reserve deeper shades for text/structure rather than introducing neon accents or a dark theme.

### Contrast calculation — documentation check only

Computed using sRGB relative luminance on opaque flat colors during document creation. Rounded ratios are shown for explanation; threshold decisions use the underlying values. This is not a rendered accessibility audit.

| Pair | Approximate ratio | Usage |
| --- | --- | --- |
| Cocoa on cream | 11.45:1 | Strong body-text candidate |
| Cocoa on strawberry | 6.13:1 | Readable pink button/panel labels |
| Cocoa on lavender | 7.70:1 | Readable secondary labels |
| Cocoa on sky | 9.09:1 | Readable supporting labels |
| Cocoa on sage | 7.28:1 | Readable skill labels |
| Cocoa on peach | 7.81:1 | Readable accent labels |
| Cocoa on wood | 3.21:1 | Not suitable for ordinary body text; place labels on cream plaques |
| White on strawberry | 1.98:1 | Do not use for informative text |
| Wood on cream | 3.56:1 | Decorative use; not ordinary paragraph text |

Actual texture, transparency, overlays, and image backgrounds can change effective contrast. Test all states. Follow the PRD's 4.5:1 ordinary-text and 3:1 large-text thresholds, based on [W3C guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Error/success/warning surfaces are not assigned final hues yet. Use explicit text/icon/state cues and contrast-safe treatment rather than assuming pink means error or sage alone means success.

## 7. Typography

Approved standing rule (2026-09-23): use existing local Pixelify Sans throughout the site, including all body/readable content, headings, labels, buttons, Welcome tagline, notebook, hints and descriptions. This supersedes the former Times New Roman rule and Pathwise-only exception. No serif body requirement remains. Preserve comfortable font sizes, readable line-height, sufficient spacing and appropriate contrast. Current Pathwise body uses 17px / 1.6 line-height. No new font dependency.

P2.6 final closure — 2026-09-23: DONE / VISUALLY APPROVED. Aditi approved the completed Pathwise chapter, album/book presentation, Pixelify Sans throughout the site, floating Aditi's Adventure pixel label, removal of the rectangular branding block, small cream notebook-style Menu with pink binding, and current responsive desktop/mobile presentation. Identified implementation: src/PathwiseChapter.tsx, src/pathwise.css and the shared refinement in src/styles.css, src/plaza.css and src/workshop.css. Approval applies only to this revision, not automatically to future variations. Keep comfortable font sizes, readable line-height, sufficient spacing and appropriate contrast. No application or artwork changes during closure. P2.7 has NOT started; no commit or push.

| Role | Candidate size/behavior | Rules |
| --- | --- | --- |
| Welcome title | Approximately 40–72 px desktop, 32–44 px phone | Responsive wrapping; no clipping; chunky silhouette |
| Major section/chapter title | Approximately 28–40 px | Brief display text; enough line height for glasses/headings not to overlap art |
| UI/sign labels | Approximately 16–18 px, bold | Readable HTML, ordinary mixed case for longer labels |
| Body | At least 16 px starting size; line height 1.5–1.7 | Selectable/resizable HTML in Pixelify Sans; preserve readable spacing and contrast |
| Caption/supporting label | Approximately 14–16 px | Never the only presentation of critical information |

Body measure baseline: about 45–75 characters, narrower naturally on phones. Keep paragraphs off busy art. Essential information must not be shrunk to fit a drawn page. Avoid long all-caps text and decorative handwriting for project details.

## 8. Spacing, borders and shadows

Candidate spacing scale: 4, 8, 12, 16, 24, 32, 48, 64 CSS px. Use a consistent rhythm rather than unique values on every panel. Sample panel padding: 24–32 px desktop, 16–20 px phone; adjust to actual text and screen size.

Candidate interface borders: 2–3 px cocoa, with 3–4 px for large sign/panel emphasis. Candidate radii: 8 px small controls, 12–16 px ordinary panels, up to 24 px large paper/letter frames. Preserve blocky character through broad edges; do not default to fully pill-shaped controls everywhere.

Use a restrained offset shadow beneath raised controls and panels, such as a 3–5 px downward offset at low opacity. P2.4 explicitly permits translucent cream/pink notebook surfaces with slight panel backdrop blur, plus a small introduction with a transparent unblurred backdrop; this supersedes the earlier blanket avoidance of glass-like surfaces. Avoid luminous outlines, deep floating shadows and distracting texture behind text.

Maintain at least the PRD's comfortable target dimensions for primary controls; padding should support touch without making desktop labels oversized.

## 9. Shared interface components

### Buttons and links

Anatomy: visible action label, adequate hit area, clear border, optional supporting icon, consistent focus and pressed states. Primary uses strawberry with cocoa text; secondary may use cream with cocoa. Links must remain identifiable without hover alone.

Candidates for hover: 1–2 px lift or a small shade change. Pressed: slight shadow reduction rather than moving the button away. Reduced motion uses color/border state changes. Loading preserves label context and announces meaningful progress. Disabled controls explain unavailable actions where necessary.

### Notebook menu

The external control says **Menu**. Entries match PRD §15. P2.4 uses a small floating translucent cream/pink notebook with a cocoa border, pink spine, restrained shadow and slight backdrop blur. Desktop width is at most 350px; mobile fits within the viewport with safe margins and internal scrolling as needed. Keep the world visible behind it; no giant opaque white rectangle or unrelated navigation page. Native modal focus/Escape/opener-return behavior remains; appearance is compact, not a simulated turning book. Current destination uses aria-current and a visible “Here” marker.

### Welcome title-screen presentation

Welcome presentation revision (2026-09-20): the existing Welcome content now overlays the existing landscape/portrait village hub artwork. Latest user steering makes the background secondary with a 62% Strawberry Cream veil and 3px blur, confined to Welcome. Title, Aditi holding bunny, Menu and actions remain sharp. Local text backing preserves readability without one large opaque card. Copy, fonts, links and artwork files are unchanged; the approved Welcome raster is softly edge-masked in CSS. This new presentation awaits visual review and does not change the prior artwork approval or approve the new hub. P2.5 remains NOT STARTED.

Desktop/tablet retain the title-copy and foreground portrait arrangement; phone layouts stack them, with natural vertical scrolling on short screens. Background art switches to the portrait hub at square/tall aspect ratios. Blur affects only the decorative background, never readable content or controls. The interactive Village retains its sharp, unblurred hub presentation.

### Full-screen Village presentation — P2.4 direction update

The map itself is the `/village` interface. Latest correction (2026-09-20) supersedes the rejected contained-map/blurred-edge approach: one continuous, full-bleed pixel-art world, no decorative duplicate backdrop, no white margins or presentation frame. New landscape and portrait candidates show the five established places, connected paths and central Aditi/bunny. Only peripheral scenery may be cropped; preserve recognizable destinations. On unusually wide/short viewports the scene has a minimum height and may scroll rather than hide locations. HTML signs share the image coordinate system and remain readable. Workshop is a semantic link; future places explicitly say Unavailable. Small floating wordmark/Menu overlays the world. Exterior hub art does not authorize future interiors or P2.5.

First entry per tab session uses a small bottom prompt with a transparent backdrop: no full-screen tint or blur. Confirmation or Escape closes it without changing map framing. View Projects bypasses it; sessionStorage and local-state fallback retain dismissal. Untimed Next hint/Got it and Dismiss controls offer Pixelify Sans guidance, including the truthful limited availability. Notebook remains secondary, compact and softly translucent; only its own panel retains slight blur.

The uploaded village reference supplies composition principles, not a final asset to trace. New candidate art must be reviewed independently for the long diamond-shaped face, middle part and cat-eye glasses; prior approved character variations do not approve this one.

Focus state must be visible on paper and scenery. Candidate focus ring: 3 px cocoa with a cream separation halo/offset, validated against each background. Do not rely only on a pink glow.

### Paper panels and location metaphors

| Surface | Distinctive treatment | Shared rules |
| --- | --- | --- |
| Workshop album | Shelves, Things I've Built cover, paper/bookmark accents | Readable HTML, direct chapter actions, no required page flips |
| Project chapter | Concise album chapter, primary live/source links, optional single static preview | Comfortable measure, clear links and return |
| Cottage journal | Personal desk/room context | Main biography immediately visible |
| Skill packet | Simple illustrated packet with category/name | Names readable before tapping |
| Adventure Board notice | Pin, category grouping, date | Orderly cards, no overlapping important text |
| Mailbox letter | Envelope/paper framing | P1.6 links-only actions; readable immediately with or without animation; public values require approval |

A different metaphor does not justify different close buttons, keyboard behavior or arbitrary text sizes. Clear labels outweigh ornate decorative treatments.

### Signs, icons and speech bubbles

Signs use cream labels/plaques over wood when needed for contrast. Icons follow the same simplified stroke/fill language and supplement text. Custom icons are original; do not copy reference-site or game icon systems.

Speech bubbles are brief and optional. They must not cover navigation, seize focus, or require dismissal on each visit. The welcome line is fixed; incidental speech remains draft copy until written, not a mandatory dialogue library.

## 10. Location-specific art direction

- **Welcome:** Separate title composition with pastel sky, distant village and Aditi holding bunny; artwork leaves room for exact copy and direct actions. No degree subtitle forced into the scene.
- **Plaza:** Open arrival area, readable destination signs, short loop. No requirement for a fountain or decorative obstacle course.
- **Cottage:** Pastel creative bedroom/studio corner: brushes, sketchbook, craft tray, artwork, tennis racket, soft window furnishings, small warm candles. One composed room, not multiple explorable spaces.
- **Workshop:** Broad shelves and workbench; clear book silhouettes and bunny delivery. Do not replace the selected concept with pinned sheets or a generic card-grid landing.
- **Garden:** Potting bench, labeled seed packets, planted surroundings. No ambiguous skill plants or growth-based proficiency.
- **Adventure Board:** Grouped notes, warm timber, pins and a few handmade flower accents. Clear Experience & Achievements subtitle.
- **Mailbox:** Recognizable pink-accented mailbox and readable opening letter; content must survive the animation being skipped.

## 11. Animation style

Confirmed atmosphere: **gently alive**. Favor anticipation, a small action, then rest. Avoid synchronized loops on everything visible.

Candidate timing baselines for prototyping:

- Control feedback: 120–180 ms; state remains clear without movement.
- Scene transition: about 200–350 ms; no imposed delay before content access.
- Bunny album delivery: approximately 0.8–1.2 s, immediately skippable, still content available independently of completion.
- Idle actions: brief gestures separated by long quiet pauses; exact cadence decided by visual review.

These durations are implementation starting points, not user-approved frame counts. The experience must remain responsive even if assets have not loaded. First Workshop delivery is once per browsing session; returns open the album immediately. Keep behavior aligned with PRD §28 if session semantics change.

Required: transition/opening/control feedback, signature delivery and restrained idle. Optional: butterfly encounter, candle glow, swaying flowers, drifting clouds, extra greetings. Future: bug antics, autonomous walking/NPCs and sound.

Under reduced motion, show still poses, open content immediately, and remove nonessential zoom/hop/sway. If ambient motion runs continuously, provide pause access. Pause offscreen/background-tab animation. No audio V1; pink headphones are character identity, not an audio toggle.

## 12. Responsive visual rules

### Wide desktop and laptop

Compose the plaza rather than stretching it indefinitely. Keep Workshop prominent and five destinations identifiable. Reduce peripheral scenery before target/label sizes. Book framing may suggest two pages, but long content can use one broad reading surface.

### Tablet

Switch composition based on available space, not device detection. Wide views may use the plaza; narrow portrait views use the vertical path. Touch gets the same labels as desktop. Do not force landscape orientation.

### Mobile and very small screens

Welcome remains a separate screen, with normal scrolling if needed. The current P2.4 candidate shows the five-location hub together using a portrait composition. Future detailed scenes remain directly reachable through Menu when implemented; the earlier vertical-path expansion is superseded for this hub presentation.

Panels, project chapters, and the album become single-column reading surfaces. Interior art moves above text. Seed packets/notices reflow. Remove tiny decorative props rather than shrinking the entire village. Respect safe areas; fixed navigation must not overlap content or focused controls.

PRD test widths range from 320 to 1920 CSS px. Breakpoint values remain TBD until composition testing. Keep one semantic content tree where practical; avoid duplicated desktop/mobile content that screen readers announce twice.

## 13. Asset naming and organization

The following is a **planned asset structure**, not folders/files already created. Adapt the root to the selected framework without changing the logical categories.

```text
assets/
  characters/aditi/
  characters/bunny/
  world/welcome/
  world/plaza/
  locations/cottage/
  locations/workshop/
  locations/garden/
  locations/board/
  locations/mailbox/
  props/
  ui/
  project-media/pathwise/
  project-media/trafficiq/
  project-media/marketmind/
  sources/
```

Naming baseline: lowercase kebab-case, with subject, purpose/state, and variant where needed. Examples are illustrative filenames: `aditi-welcome-holding-bunny.webp`, `bunny-album-delivery-still.webp`, `workshop-shelves-desktop.webp`, `pathwise-overview.webp`. Do not imply files exist because names are listed here.

Keep editable originals in a source location excluded from web delivery. Export display-sized variants; record dimensions, intended scale, and animation/still relationship. Use SVG for appropriate simple art/icons, optimized raster for textured art, and avoid enormous GIF/video loops. Store important copy separately from artwork.

Asset inventory fields: logical ID, filename, status (planned/draft/approved/exported), source/creator/rights, dimensions, mobile variant, alt/decorative flag, motion/still pair, and usage. Actual inventory lives in history until a larger manifest is justified.

## 14. Reference roles and originality boundaries

| Reference | Borrow only the idea of | Never reproduce |
| --- | --- | --- |
| [Lily Oglesby](https://lilyoglesby.com/) | Exploration plus direct content access | Exact navigation layout, maps, code, sprites or game mechanics |
| [Rose Dryad](https://rosedryad.com/) | Cozy pastel handmade environment | Artwork, page layout, distinctive props or fixed-screen constraints |
| [Strawberry Reverie](https://strawberryreverie.neocities.org/) | Strong original character personality | Existing characters, illustrations or branding |
| Cozy village games such as Animal Crossing | Welcoming village emotion and gentle life | Any character, font, music, effect, logo, UI or game asset |

Originality does not mean modifying copied sprites until they look different. Commission/draw/create new world assets through the selected production workflow and document their provenance. Do not invent ownership claims for third-party fonts/media.

## 15. Visual review checklist

- Exact welcome copy and separate title scene preserved.
- Aditi's hair, outfit, glasses, headphones and bunny relationship recognizable.
- Chunky/blocky shape language consistent across characters, architecture and UI.
- Five destinations and Menu identifiable without hover.
- Workshop shelves/album and bunny delivery preserved.
- Technology names, project content and contact actions remain real readable text.
- Candidate colors/fonts accepted only after actual component/mobile testing.
- First/repeat/reduced-motion states show usable content.
- No decorative excess compromises the initial-transfer budget.
- Asset inventory and actual test coverage recorded honestly; reference art not copied.




