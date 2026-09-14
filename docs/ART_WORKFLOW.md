# Aditi's Adventure — Original-Art Workflow

Status: P1.2 complete — planning/documentation validated; evidence recorded in project history. No artwork produced. Date: 2026-09-14.

## 1. Purpose

Define how original art will be created, revised, approved and prepared for the web. Follow the [PRD](../PRD.md), [design system](DESIGN_SYSTEM.md), [technical approach](TECHNICAL_APPROACH.md), [roadmap](PORTFOLIO_MASTER_ROADMAP.md) and [history](PROJECT_HISTORY.md). P1.2 resolves the production-method part of Q-03; visual approval remains P1.3. All asset paths and filenames below are proposals, not existing files.

## 2. Artwork categories

| Group | Eventual assets and role | Production boundary |
| --- | --- | --- |
| Characters | Aditi holding bunny for Welcome; simplified village identity; bunny nearby, delivery and still/idle poses | Initial sample only in P1.3; extra scene poses optional |
| Environments | Welcome sky/distant village; elevated Central Plaza, short loop and vertical mobile path | Composition thumbnails first; no finished map yet |
| Buildings/locations | Cottage exterior and one creative room; Workshop shelves/workbench; Garden potting bench/packets; grouped Adventure Board; Mailbox/envelope | Only Workshop sample in P1.3; five-location set later |
| Interface artwork | Things I've Built album/book, notebook navigation decoration, journal/letter/paper frames, sign plaques, small original icons | Album, one control and typography sample first; functional text stays HTML |
| Decoration | Plants, flowers, clouds, wood/paper accents; Cottage painting/crafts, tennis racket and warm candles | Reuse a few motifs; butterfly and extra ambient details optional |
| Project media | Genuine Pathwise, TrafficIQ and MarketMind screenshots, approved walkthrough stills | Content evidence, not generated artwork; Pathwise media belongs to P1.4 |

No walkable interiors, NPC cast, combat assets, sprite movement system, complete animation sheet or sound inventory is required.

## 3. Originality rules

Create Aditi's own character silhouettes, building shapes, scene arrangement and decorative drawings from the written brief. Broad cozy mood, pastel atmosphere, common cottage/book/garden forms and general composition principles are allowed. Chunky shapes, cocoa outlines, simple shading and Strawberry Cream describe our design requirements.

Do not trace, extract, recolor or recreate identifiable characters, buildings, icons or scenes from Animal Crossing, Lily Oglesby, Rose Dryad, Strawberry Reverie or another artist. Do not reproduce another site's exact layout or present its art as ours. Editing a copied asset does not make it original. Use those references for discussion of broad mood and navigation ideas only.

Record actual creator and assistance; never describe generated output as hand-drawn by Aditi. Originality review is a project acceptance check, not a guarantee of exclusive ownership. Record tool/media usage terms and font licenses before publication without inventing rights. Real project screenshots retain their factual appearance and are tracked separately from custom illustration.

## 4. Creation workflow and responsibilities

**Written brief → small rough concept → Aditi's visual review → editable master/cleanup → approved sample → web export → optimization/quality review → later integration.**

1. **Brief:** Select one required asset and its role, confirmed identity, intended display context and unknowns. Start from this project's written requirements, not another artist's image. No art brief is executed in P1.2.
2. **Rough concept:** In P1.3, draw a small concept manually or use an image-generation tool for an original concept. Do not create a full scene collection to choose one style.
3. **Visual review:** Compare character identity, blocky silhouettes, palette direction and mobile clarity. Aditi directs taste/likeness decisions; the assistant records feedback and checks the documented constraints. Revise only the small sample.
4. **Editable master:** The producer cleans shapes, separates needed parts, fixes edges and maintains source layers. Preserve the raw generated concept if used. Aditi may draw/paint manually; assistant-assisted concepts or vector work are permitted in a later authorized task. This plan does not assume a tool is installed or promise unattended Krita editing.
5. **Approve:** Record exactly which source revision Aditi approves and which details remain open. Draft output does not become approved just because it was generated or exported.
6. **Export:** Derive web variants from that master with named purpose, crop, dimensions and format. Never overwrite the only editable version.
7. **Optimize/review:** Compare compressed variants at intended display size and enlarged for defects; record export settings, file bytes and source revision. Reopen masters to confirm editability.
8. **Integrate later:** In P2 or the relevant later task, import approved exports, supply HTML labels/alternatives, reserve image dimensions and check rendering/loads. P1.3 sample approval is not authorization to scaffold the app.

Recommended production mode: **human-directed hybrid**, with manual layered cleanup as the dependable finalization path and optional AI concepts when useful. Manual drawing from scratch is equally valid; no paid generator or generation quota is a dependency. Aditi is visual approver; each asset records its actual producer rather than assigning all work to her by default.

For AI assistance, prompts specify our silhouette, outfit, perspective, palette direction and layering needs. No named living-artist style imitation or reference-site recreation. Use only our approved character reference for subsequent consistency edits. Preserve prompt, tool/model where available, date, raw result and editing notes; do not claim generated images contain editable body-part layers. Review anatomy, hands holding bunny, glasses, outfit, artifacts and unexpected signatures. If useful separation requires repainting, do it explicitly; a flattened image wrapped in a layered file is still largely flattened. No generation occurs now.

## 5. Recommended tools

| Tool | Role | Why included |
| --- | --- | --- |
| Krita | Layered raster characters, environments, masks and paint corrections; retain `.kra` masters | One illustration editor; its native format retains Krita features ([manual](https://docs.krita.org/en/general_concepts/file_formats/file_kra.html)) |
| Inkscape | Simple original vector icons, plaques and book/letter decoration; retain editable SVG | SVG is its native format; no second UI-design platform required ([SVG documentation](https://inkscape.org/en/develop/about-svg/)) |
| Squoosh | Browser-based resizing/compression comparison for exported raster images | Small manual workflow suitable for a bounded sample; compression processes locally ([official project](https://github.com/GoogleChromeLabs/squoosh)) |

These are selected workflow defaults, not installed software. No Photoshop/Procreate subscription, Figma workspace, Illustrator or automated asset build service is needed. If Aditi already prefers another editor, retain its native layered source and the same export contract rather than adding an extra mandatory tool. AI generation is optional and provider choice is made when an authorized sample task needs it.

For SVG, keep the editor master and save a separate plain SVG export, remove unused elements and verify that no external raster/font dependencies remain. Avoid complex filters and thousands of unnecessary nodes. Do not add an SVG optimizer package now; manual cleanup suffices until asset complexity demonstrates a need.

## 6. Editable formats

- `.kra`: raster illustration masters with named groups for outline, fill, shading, optional texture and movable objects. Keep reusable components separate where needed.
- `.svg`: editable Inkscape masters with named layers/groups and preserved shapes; web SVG is a separate export.
- Original `.png` or other tool-returned image plus prompt/edit notes: retain AI concept provenance alongside the cleaned master. Preserve source-resolution captures of actual project media; edit a copy for safe publication.
- Existing `.psd` or other native files supplied by Aditi may be retained instead of destructive conversion. Document any import losses; do not assume format conversion preserves all layers.

Not every leaf needs a separate master. Group related reusable props in one source file with independent export groups. Retain approved source revisions and a recoverable backup outside the workspace before discarding working drafts. Backup location/availability must be recorded when files actually exist; no backup has been created here.

## 7. Web export formats

| Asset | Default export | Alternative/condition |
| --- | --- | --- |
| Aditi/bunny | Transparent WebP for raster art | PNG if lossless detail/edges are better; SVG only if actually designed as simple vectors |
| Welcome, backgrounds, location illustrations | WebP | Separate mobile crop if recomposition needs it; PNG only where quality justifies bytes |
| Transparent foreground overlays/decorative objects | WebP for painted objects | SVG for simple vector shapes; PNG if needed for lossless edges |
| Icons, plaques, simple album/notebook ornament | Plain SVG | No rasterized body copy; many paper surfaces can later be ordinary CSS instead of assets |
| Screenshots | WebP after checking small text | PNG when text/charts lose useful detail under compression |

WebP supports transparency; PNG is not automatically required for cutouts. Exports use a consistent web color treatment (sRGB for raster), with transparency checked over both cream and darker scenery. Keep alpha edges clean. Do not use giant GIFs/video as a substitute for the small CSS-driven animation plan.

## 8. Responsive/export strategy

Choose dimensions after P1.3 composition review, not now. Start with intended CSS display size and crop, then export a small useful range. A roughly 2× raster variant may help high-density displays where source detail and byte budget justify it; do not blindly ship every asset at 4× or upscale low-resolution concepts to fake detail.

Use shared character masters and rearranged location layers for mobile. Export a genuinely different crop only when it improves composition; do not create a second complete art style. Keep hair/headphones/bunny within safe crop bounds and leave room for HTML copy. Simplify small-scale detail while keeping the silhouette and outline weight coherent.

P2 integration uses srcset/sizes, picture where needed, dimensions/aspect ratios and route-appropriate loading. Do not lazy-load the likely initial LCP image; defer galleries, other interiors and optional motion assets. Review sharpness, halos, gradients, screenshot text and byte sizes against the original. Set compression per asset rather than locking a universal quality percentage.

The total compressed first-view budget remains **1.5 MB including art/fonts/code**, with **250 KB initial JavaScript**, LCP ≤2.5 s and CLS ≤0.1 targets. Allocate artwork within what remains after code/fonts; do not interpret 1.5 MB as an allowance per image. Actual measurements and tooling remain later tasks. No new pixel dimensions or per-asset byte quotas are locked.

## 9. Layering strategy

Keep background sky/ground, buildings, Aditi, bunny, album, foreground props and intentionally animated objects independently composable. Keep HTML labels and hit areas independent of illustration pixels. This allows mobile reordering, focus visibility and small CSS transitions without repainting the whole village.

Flatten static detail that always moves together, such as roof shading within a Workshop image. Separate a flower only if it needs independent reuse or motion; avoid hundreds of layers exported as individual files. For shared poses, use consistent transparent canvas bounds, baseline and recorded anchor points; retain matching still versions. Plan bunny/book contact and occlusion before animation, without building a rig or frame library.

At integration, decoration must not intercept clicks or hide focus. Hover/focus states should usually be CSS around a semantic control, not separate full-scene images. The album, notebook and signs provide visual framing; text, project access and skip/return controls remain readable HTML. A static composite may be a review thumbnail, never the only shipped navigable map.

## 10. Character consistency process

P1.3 establishes a compact reference sheet from the approved sample, not an exhaustive turnaround or expression pack. Record revision, silhouette/proportion notes, recurring colors, line weight and a small-scale read check. Reuse that reference for later poses, compare side by side, and record intentional changes.

**Aditi:** Preserve long layered brunette hair, glasses, pink headphones, preferably black sleeveless high-neck top, flared blue jeans, dark sneakers and pale warm/yellowish skin tone. Welcome holds bunny; village uses her as a host. Record accepted face/glasses shape, proportions and exact recurring colors after review; no photo likeness or new outfit is invented now. Check hair masses, flared silhouette and recognizable accessories at small scale.

**Bunny:** Preserve fluffy pet identity and curious/gentle role. Record approved silhouette, proportions, fur color, markings, ear shape and expression notes after review. Color/name/accessories remain open; none is required to finish P1.2. No default bow, satchel or collar becomes approved by omission. Future expressions must match the same reference, with a usable resting/still pose.

A later character change updates the reference revision and affected assets together. Reuse approved shapes rather than generating each scene from an unrelated prompt.

## 11. Naming conventions

Use lowercase kebab-case: `subject-purpose-state-variant.ext`, omitting unnecessary parts. Examples only: `aditi-welcome-holding-bunny.webp`, `aditi-village.webp`, `bunny-album-delivery-still.webp`, `workshop-shelves-desktop.webp`, `workshop-shelves-mobile.webp`, `notebook-frame.svg`, `flower-cluster.webp`, `pathwise-overview.webp`.

For responsive exports, append actual width such as `-640w` only when that width is chosen. Masters can use `-v01`, `-v02` for review revisions; approved app names stay descriptive and stable, with source revision recorded in inventory. Never use `final-final2`; Vite handles build hashes later.

## 12. Future folder structure

Keep P1.1's roots; do not add a competing `art/` tree:

```text
assets/sources/
  characters/aditi/       characters/bunny/
  world/welcome/          world/plaza/
  locations/              props/                 ui/
  project-media/          reviews/               references/
src/assets/
  characters/aditi/       characters/bunny/
  world/welcome/          world/plaza/
  locations/cottage/      locations/workshop/     locations/garden/
  locations/board/        locations/mailbox/
  props/                 ui/
  project-media/pathwise/ project-media/trafficiq/ project-media/marketmind/
public/documents/         # approved resume later, not illustration sources
```

No folders above are created in P1.2. Masters/raw concepts/reference material stay outside `src` and `public`; only approved web exports enter application assets. Before source production/staging, establish ignore rules for raw captures, downloaded references, temporary files and backups. Large/private masters default to local storage plus a recorded separate backup; public source inclusion requires a deliberate content/size review. Small original SVG masters may be versioned when appropriate. Do not assume that being outside web delivery keeps a file out of public Git. No ignore file or Git operations are performed now.

## 13. Asset tracking

Use the existing **ASSET INVENTORY in PROJECT_HISTORY.md** initially; expand it as real P1.3 files appear. Avoid a separate manifest until the inventory becomes unwieldy, then migrate rather than duplicate it.

For each major asset record: logical ID/name, purpose, status, source path/revision, export path(s), creator/tool/date, originality/rights note, approval/date, required/completed variants, dimensions/bytes/export settings, alt/decorative classification and motion/still relationship. AI-assisted records link their prompt/raw-result/edit notes; screenshot records include capture date/version and safe-publication review.

Use `planned → draft → in-review → approved → exported → integrated`; `needs-revision` sends work back to draft. Approval applies to an identified revision, not every future variation. A sample can be approved while final exports remain unfinished. Use pending values honestly and never list conceptual filenames as existing exports.

## 14. Reference handling

Prefer a text record of source URL, creator/site, date and the broad idea discussed. Existing design-system reference links suffice for initial inspiration. Do not download a library of reference art during planning.

If a reference image is later needed for private discussion, label it clearly as third-party reference, keep it separate under the nondeployed reference location, and exclude it from public source staging. References are never production inputs to tracing, asset extraction or exact scene recreation. Keep our own approved character references distinct from third-party mood references. No reference images ship with the website.

Never generate project screenshots or paint extra functionality into them. Remove private details from publication copies and retain accurate captions/status; raw sensitive captures must not be bundled, committed or sent to external tools. Export copies should exclude unnecessary personal metadata.

## 15. Visual approval workflow

P1.3 creates the bounded sample described below and presents it at intended desktop/mobile reading sizes. Aditi reviews palette/style, character identity and environment direction; the assistant checks the design-system constraints, legibility, reusable layers and feasible export weight. Capture specific changes, revise that sample, then record approval against the exact revision.

Before scaling production, check Strawberry Cream direction; chunky/blocky silhouettes; cocoa outlines/simple shading; exact avatar features; bunny consistency; gently elevated perspective; shelves and album; readable non-baked labels; mobile recomposition; still-state clarity and source editability. Fonts and final color tokens remain candidates until this review. An image preview cannot prove keyboard accessibility or runtime performance; those checks occur after implementation.

No bulk art on assumed approval. Aditi's sample approval is the existing roadmap gate, not a new approval requirement for planning documentation.

## 16. Deferred decisions and exclusions

Still open: exact face/proportions, bunny color/markings/name/accessories, final fonts/licenses and colors, light direction, precise composition/crops/export sizes, delivery staging/frame needs and optional decorative motion. Tool installation/availability and actual generator provider are not verified by a planning decision.

Do not produce all five locations, a complete village map, full Welcome artwork, multiple character-pose libraries, detailed UI/icon sets, animation frames or polished Cottage interiors before the bounded direction is approved. No app integration, packages, React scaffolding or UI implementation belongs to P1.2/P1.3.

## 17. Handoff to P1.3 and validation

Exact next task: **P1.3 — Create bounded visual sample.** Expected scope: one Aditi-with-bunny sample at Welcome scale plus a simplified village-scale read check, one Workshop/shelf sample, an album surface, one control and typography sample, and desktop/mobile composition thumbnails. These are style-review artifacts, not a finished Welcome scene, complete village or coded prototype. Include still clarity and enough staging notes to assess later bunny delivery; no full animation sequence is needed.

The workflow supports PRD §§6/9/25–30/32 and V-11 through original-source rules and provenance; design-system §§2–5/13–15 through separate layers and character/sample review; P1.1 §§6–8 through unchanged asset roots, responsive exports and static motion alternatives. It resolves P1.2's creator/tool, editable-format, export and provenance requirements while leaving Q-03 visual acceptance open. Validate relative documentation links and record scope checks before marking the roadmap task DONE. No artwork or application behavior is claimed tested.
