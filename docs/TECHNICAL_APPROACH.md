# Aditi's Adventure — Prototype Technical Approach

Status: P1.1 complete — architecture decisions only. Date: 2026-09-14.

Subsequent resolution: P1.2 now defines the production workflow, tools, masters and export process in [ART_WORKFLOW.md](ART_WORKFLOW.md). References below to art workflow/tooling being deferred describe the P1.1 handoff; visual approval and actual production remain later work. The architecture and asset roots are unchanged.

Authority: [PRD](../PRD.md) defines the product, [design system](DESIGN_SYSTEM.md) preserves visual rules, [roadmap](PORTFOLIO_MASTER_ROADMAP.md) controls sequencing, and [history](PROJECT_HISTORY.md) records progress. This document resolves the local-prototype part of Q-02. Hosting remains P5.3; art production remains P1.2. All paths and commands below describe future work, not existing application files.

## 1. Goals and constraints

Prove Welcome → Central Plaza → Workshop → optional bunny delivery → real Pathwise chapter, alongside immediate Projects and direct chapter access. Keep a maintainable professional website beneath the illustrated world. Do not build the five-location V1 during this task.

| Technical need | Smallest required provision | PRD |
| --- | --- | --- |
| Rendering/UI | Semantic HTML content, CSS layout, separate illustrated layers; shelves and readable album | §§7, 11–17 |
| Navigation/routing | Stable URLs, shared destinations, notebook, browser history and explicit returns | §§10, 14–17 |
| Content/data | Static, typed, evidence-based project records; no runtime project API | §§16–17, 31–32 |
| Assets | Original separate art layers, responsive exports, factual screenshots, static motion alternatives | §§6, 9, 30 |
| Responsive behavior | Recompose plaza into vertical path; normal-flow chapter reading | §§22–24 |
| Accessibility | Keyboard, semantic controls, focus, contrast, reduced motion, independent content access | §29 |
| Animation | Brief CSS feedback/delivery with immediate skip and usable still state | §28 |
| Performance | Defer noncritical art and galleries, reserve dimensions, preserve existing budgets | §30 |
| Local development | Typed frontend, development server, static build and production preview | §§36–37 |
| Deployment | Static host capable of clean-route fallback; verify deep-link refresh later | §§17, 37 |

No movement, physics, authentication, sound, portfolio backend or contact form is added. Exact title, tagline, avatar identity, Strawberry Cream, chunky art, notebook and shelf/album metaphors stay locked. Missing personal content is not invented.

## 2. Selected stack and alternatives

**Select React + Vite + TypeScript, React Router in declarative mode with BrowserRouter, and plain CSS.** Use npm for future package scripts. No CSS framework or component kit is needed initially. Select compatible supported versions and record a lockfile when P2.1 scaffolding is authorized; no packages or versions are installed now.

| Option | Fit for this project | Decision |
| --- | --- | --- |
| React + Vite + TypeScript | Shared notebook, album, chapter and responsive state are straightforward to compose; typed records keep three projects consistent. Clean URLs require router and hosting fallback. | Selected; modest client-side complexity for the required interactions |
| Next.js | Static export is possible; useful if generated chapter HTML, search indexing and page-specific social previews become stronger requirements. Adds rendering/build conventions this prototype does not require. | Not selected for this scope |
| Plain HTML/CSS/JavaScript | Very small runtime and native document navigation; viable for a simpler site. Shared templates and return/delivery state would need manual organization or another build convention. | Viable, but less convenient for the planned reusable interactive surfaces |

These are project judgments, not performance measurements. React Router's declarative mode provides URL matching, links and location state without framework-mode infrastructure ([official modes guide](https://reactrouter.com/start/modes)); BrowserRouter uses browser history ([reference](https://reactrouter.com/api/declarative-routers/BrowserRouter)). Next.js can export static sites ([official guide](https://nextjs.org/docs/pages/guides/static-exports)); rejecting it here does not mean it requires a server.

## 3. Rendering approach

Use semantic HTML for every heading, sign label, link, album entry and chapter paragraph. CSS grid/flex and normal flow establish reading order. A bounded desktop scene may position decorative image layers and destination anchors relative to the scene; targets retain readable text and sufficient size. Scenery must not intercept pointer events or cover focus.

Use separate image/SVG assets for Aditi, bunny, scenery, Workshop and book decoration. SVG is appropriate for simple scalable shapes/icons; do not convert textured illustrations into elaborate vector DOM. On mobile, the same destination anchors reflow down the path and imagery changes composition. Do not bake navigation or copy into pictures, use an image map, or make a canvas the content surface.

Use no Canvas, WebGL, game engine or simulated world coordinates. Local UI state, not game state, controls the notebook and optional delivery. Layout must remain understandable when decorative images fail.

## 4. Routing and return strategy

| Route | Meaning | Delivery scope |
| --- | --- | --- |
| `/` | Separate Welcome; never a compulsory gateway | Prototype |
| `/village` | Plaza and active Workshop; other places clearly unfinished | Prototype; all five in V1 |
| `/projects` | Project Workshop and Things I've Built album, shared by both entry paths | Prototype |
| `/projects/pathwise` | Real Pathwise chapter | Prototype |
| `/projects/trafficiq`, `/projects/marketmind` | Other chapters using the same chapter view | P3 |
| `/about` | Cottage journal | P3 |
| `/skills` | Garden packets | P3 |
| `/adventure` | Board; navigation label Experience & Achievements | P3 |
| `/contact` | Mailbox letter; mechanism still Q-01 | P3 |
| Unrecognized pathname/slug | Useful not-found view with Projects and Village links | Prototype foundation |

Resume is an approved document link, not a separate invented route. Until supplied, show clear noninteractive draft availability text. Prototype Menu links only implemented destinations; future entries may be visibly marked unavailable without fake links. V1 exposes every entry required by PRD §15.

Welcome Enter My World navigates to `/village`; View Projects navigates to `/projects`. Workshop selects that same `/projects` route. No separate explore/professional content copies. A direct chapter URL renders the chapter immediately without Welcome or delivery. Reloading must preserve the path and select the same record.

Normal internal navigation adds a browser-history entry. Back/Forward follows the visitor's actual history, including leaving the site when appropriate; never intercept it to force a tour. Explicit **Back to Workshop** always has `/projects` as its fallback and **Back to Village** has `/village`; neither relies on an unconditional history-back operation. If the previous in-app entry is the exact return destination, it may be restored instead of pushing a duplicate.

Keep a small shell-owned map of scroll offsets and originating control IDs keyed by history entry, plus last Workshop/Village context for explicit returns. Save on departure. Restore on history traversal/explicit return after layout is available; reserve image sizes and avoid repeated forced scrolling. Focus the originating link without changing restored scroll when it still exists; otherwise focus the destination heading. New forward chapter visits start at the heading/top. Notebook close restores its opener; notebook navigation closes it and focuses the new page heading. Refresh/direct entry has a safe heading/top fallback when memory is absent. No global state package or persistence of personal information is needed.

Hosting must serve the app entry for valid client routes while serving real assets normally; missing assets must not receive HTML. Unknown routes receive the client not-found view (a generic SPA fallback may still return HTTP 200: a documented soft-404 tradeoff). Configure Vite base and router basename together if hosting under a subpath. Do not silently switch to hash URLs to bypass a hosting mismatch. Host choice and exact rewrite configuration stay P5.3; test preview deep links in P2 and public deep links in P5.

## 5. Shared content/data strategy

Use **TypeScript data modules** for V1: one source per project plus shared profile, skills and milestone records. This permits checked fields, stable IDs and imported media without JSON schemas, Markdown parsing or executable MDX. Long text is paragraph/list data rendered through a shared chapter template, not JSX embedded in records. Content edits require a rebuild; acceptable for three owner-maintained projects.

Conceptual shape only (not a new data file):

```text
Project = id, slug, title, summary, fullDescription,
          problem, solution, contribution, technologies[], features[],
          architecture, decisions[], result, limitations[], lessons[],
          screenshots[{src, alt, caption, width, height}], githubUrl,
          demo{type: hosted|local|none, url?, walkthroughUrl?, accessNote,
               verificationStatus, verifiedAt?, limitations[]},
          implementationStatus, featuredOrder, evidence[],
          chapterSections[{id, heading, paragraphs[], bullets?}]
```

Canonical required sections derive from PRD §32 fields; optional chapterSections add material without duplicating the same prose. A small summary index serves the album; detailed records load on chapter demand so later long chapters/media do not join Welcome startup. Both views reference the same IDs and source records. Skills use id/name/category/projectIds/description; profile holds approved biography, interests, education references, goals, resume and public links; milestones retain dates, type, organization, role and evidence as specified in the PRD. Missing required draft values are explicit pending states, never invented strings or fake URLs; release validation rejects unresolved required content.

Pathwise must preserve the prior observation of dashboard/interventions working and a profile failing for a missing model artifact. Label that evidence as a prior review, not current uptime. Its demo requires login; never expose the supplied administrator account. Display access/limitation text near the link and provide approved screenshots independently. TrafficIQ is not runtime-verified; MarketMind is local with interface/version pending. No runtime requests to featured applications, no credentials, and no implication that synthetic records prove real adoption. P1.4 creates the actual Pathwise record and media, not P1.1.

## 6. Asset strategy

Proposed future organization adapts design-system §13 to Vite:

```text
src/assets/
  characters/aditi/         characters/bunny/
  world/welcome/            world/plaza/
  locations/workshop/       locations/cottage/
  locations/garden/         locations/board/       locations/mailbox/
  props/                   ui/
  project-media/pathwise/   project-media/trafficiq/   project-media/marketmind/
assets/sources/             # editable originals; outside deployed files
public/documents/           # approved resume with a stable filename, later
```

Avatar/bunny go in character categories, Welcome/distant village and plaza background in world categories, shelves/workbench in Workshop, reusable album decoration in props, small decoration in props and icons in ui. Folder listing does not create assets or decide the art-production tool.

Prefer SVG for simple icons/outlines and flat illustrations; WebP for exported colored/ textured artwork and screenshots where legibility survives compression; PNG for lossless transparency or screenshot text when it is demonstrably clearer. WebP can also carry transparency. Keep originals out of web delivery and review whether large/private source files belong in public Git separately in P1.2. No GIF/video animation default.

Import deployable media from source modules so Vite resolves build URLs; reserve public for stable-name approved documents. Vite copies public files unchanged and imported assets participate in its asset pipeline ([asset guide](https://vite.dev/guide/assets)). Vite does not replace an image-resizing/compression workflow; export/optimization tooling is deferred to P1.2.

Use display-sized variants with srcset/sizes and picture for genuine mobile crops. Reserve width/height or aspect ratio; eager-load only essential above-the-fold art and do not lazy-load the likely LCP image. Defer unused interiors, gallery images and extra poses; lazy-load below-the-fold screenshots. Do not preload all locations or bundle large inline images. Alt text describes meaningful project evidence; redundant destination artwork is decorative beside its HTML label. Supply a concise alternative for identity artwork when it contributes information. Failed images retain captions/text links and stable layout.

Preserve PRD budgets: compressed first-view transfer ≤1.5 MB, initial JavaScript ≤250 KB, mobile LCP ≤2.5 s and CLS ≤0.1; INP ≤200 ms only when field measurement exists. Measure representative direct entry as well as Welcome to catch heavy chapter startup. These are targets, not P1.1 measured results; the recorded testing setup belongs to P1.7.

## 7. Responsive strategy

Use one semantic destination list and shared route/content views. Wide screens position locations in the elevated plaza; constrained screens return them to normal flow on a vertical illustrated path. Tablet chooses the composition by available space, not device detection. For V1, preserve Workshop → Cottage → Garden → Board → Mailbox order; the first prototype only activates Workshop.

Welcome remains separate at all sizes and can scroll on short screens. Collapse book framing into one-column reading, put interior art above text, simplify props before shrinking controls, and protect safe areas/focus from the persistent Menu. Changing orientation must preserve the route/content. Do not mount duplicate desktop/mobile interactive trees. Final breakpoints and crop dimensions require P1.3/P2 composition evidence; none is locked now.

## 8. Animation and session behavior

Start with CSS transitions/keyframes and small React state changes only. Use transform/opacity for brief scene feedback and bunny/album movement; actual poses/staging are P1.2/P1.3 work. No animation library or game loop is needed.

The first `/projects` visit may offer delivery while the album's links and Skip are already accessible. Once offered, record a non-sensitive per-tab sessionStorage flag; skip, reduced-motion access and a direct chapter visit also mark the album ready so returning to Workshop does not introduce a belated delivery. New tabs/sessions can offer it again; no cross-device persistence is needed. Guard storage failure and fall back to shell memory. Do not depend on animationend for content, navigation or completion; failure to load art never blocks reading.

System prefers-reduced-motion shows the open album/still bunny immediately and removes nonessential movement. Keep visible state/focus feedback. Pause offscreen/background-tab animation; any sustained ambient motion needs a discoverable pause control. Exact timings remain design-system candidates; idle cadence and choreography are later. This policy refines the existing once-per-browsing-session baseline without making repeat delivery a prerequisite.

## 9. Accessibility approach

Use header/nav/main, ordered headings, skip-to-content, anchors for navigation and buttons for actions. No clickable divs, hover-only labels, hidden book gestures or focusable decorative props. Notebook is a modal dialog with accessible name, initial focus, confined tab order, Escape/close, inert background and opener restoration; use native dialog semantics with behavior checked against selected browsers later.

Route changes update the document title and focus as described above. Direct content uses the same readable HTML as exploration. Loading/error text remains available if illustrations fail. Color is not the only state cue; preserve PRD contrast and 44px primary-target goals, visible unobscured focus, resizable text and normal reflow. Decorative imagery has empty alternatives; meaningful screenshots have alt/captions. Reduced motion never removes essential content. WCAG 2.2 AA remains a target pending automated and manual assessment, not a conformance claim.

## 10. Local development and deployment implications

Future npm scripts, to be created in P2.1, will support:

| User command | Intended action |
| --- | --- |
| `npm run dev` | Vite development server |
| `npm run build` | TypeScript project check (`tsc -b`) followed by `vite build` |
| `npm run preview` | Vite preview of built `dist` output |

No command above was run; package.json and dist do not exist. Preview requires a successful build and is a local check, not a production server ([Vite deployment guide](https://vite.dev/guide/static-deploy)). Future Node/npm versions must be compatible with the selected packages and recorded in P2.1; environment/test versions are P1.7 work.

Deploy only static build output to a provider meeting the route contract. No runtime Node service or portfolio API is needed. Provider/domain, redirects, caching details, base path and publication are deferred. Store no secrets in frontend content or build-exposed environment variables. All bundled content is public.

## 11. Prototype flow architecture

Conceptual shared shell: persistent Menu + route outlet + lightweight navigation context. Route views: Welcome, Village, Workshop album and Project chapter. Shared typed records and media feed the album/chapter; layout CSS composes them for each viewport. These are responsibilities, not components created in this task.

1. **Explore:** Welcome → Village → `/projects`; first-session delivery decorates the ready album → `/projects/pathwise` → explicit Back to Workshop restores album context → Back to Village restores its destination context.
2. **Fast:** Welcome View Projects → same `/projects` album immediately available → same Pathwise chapter. Delivery never adds a required activation/wait.
3. **Direct:** `/projects/pathwise` → same chapter without Welcome or delivery → deterministic `/projects` return with album ready.

All use the same route registry, labels, content records, chapter view, keyboard rules and responsive reading surface. The origin affects return context, not project claims or content availability.

## 12. Technologies intentionally not used

No game engine, Canvas/WebGL, physics/pathfinding, movement system, global state library, portfolio backend/database/authentication, CMS, runtime content API, embedded featured applications, complex animation framework, separate mobile app, audio engine or service worker/offline subsystem. Static content and a few local/session UI values meet current needs. Q-01 must be resolved before any form/service expansion; a full-stack career goal alone does not justify portfolio server infrastructure.

## 13. Tradeoffs

The selected SPA needs JavaScript to render its content and a host fallback for clean URLs. Semantic HTML describes the rendered interface, not guaranteed pre-rendered content without JavaScript. Provide an honest noscript message with a GitHub link; this is not a substitute for the interactive portfolio.

Initial metadata can identify Aditi's portfolio, and route titles can change in the browser. Distinct project social-card previews and reliable pre-rendered chapter indexing are not guaranteed by this baseline. If those become release requirements, explicitly evaluate static pre-rendering before hosting; do not quietly add server rendering. Asset size and focus/history correctness remain implementation work; selecting this stack alone does not pass budgets or accessibility tests.

## 14. Deferred decisions

- P1.2: original-art creator/tools, editable formats, export/compression tooling and provenance workflow.
- P1.3: approved avatar/bunny details, typography, final tokens, sample composition and physical delivery staging.
- P1.4/P1.5: actual Pathwise record/screenshots, biography/resume/skills/milestones/contact and other project evidence.
- P1.6: Mailbox contact mechanism (Q-01).
- P1.7: exact testing tools/versions, browser availability and lab setup; existing acceptance targets remain.
- P2: actual components/routes/state implementation, responsive breakpoints validated with sample art and measured bundle sizes.
- P5.2/P5.3: demo re-verification/public access and host/domain/rewrite configuration. No project repair is authorized here.

## 15. P1.1 validation and handoff

This is a documentation review of architectural support, not runtime testing.

| Acceptance coverage | Architecture provision | Result now |
| --- | --- | --- |
| P-01/P-02, V-04 | Separate Welcome, exact copy retained, direct Projects, honest missing-resume state | Supported by plan |
| P-03, V-02/V-12 | Stable slug, shared real record, evidence and explicit demo limitations | Supported; content still P1.4 |
| P-04, V-07 | Nonblocking delivery, skip/session state, reduced-motion still | Supported; animation unimplemented |
| P-05, V-06 | Semantic navigation, dialog/focus rules, keyboard access | Supported; manual/automated checks later |
| P-06, V-05/V-09 | Shared tree, vertical mobile path; existing viewport matrix retained | Supported; layouts/browser tests later |
| P-07, V-10 | History context, deterministic returns, route fallback and recovery | Supported; host/runtime checks later |
| P-08, V-10 | No demo API dependency, missing-media/not-found/error treatment | Supported; no runtime pass claimed |
| V-01/V-03 | Future routes and shared records cover all locations/resume/contact | Supported; P3/content gates remain |
| V-08/V-11 | Deferred media, budgets, original-art categories and provenance requirement | Supported; measurement/art approval later |

Next roadmap task: **P1.2 — Define original-art workflow.** Decide creator/tools, editable source format, export process and provenance while preserving original assets and Aditi's selected identity. It precedes P1.3's bounded visual sample; no art workflow has been selected and no artwork has been created by P1.1.
