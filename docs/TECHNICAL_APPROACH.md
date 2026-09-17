# Aditi's Adventure — Prototype Technical Approach

Status: P1.1 complete — architecture decisions only. Date: 2026-09-14.

Subsequent resolution: P1.2 now defines the production workflow, tools, masters and export process in [ART_WORKFLOW.md](ART_WORKFLOW.md). References below to art workflow/tooling being deferred describe the P1.1 handoff; visual approval and actual production remain later work. The architecture and asset roots are unchanged.

Authority: [PRD](../PRD.md) defines the product, [design system](DESIGN_SYSTEM.md) preserves visual rules, [roadmap](PORTFOLIO_MASTER_ROADMAP.md) controls sequencing, and [history](PROJECT_HISTORY.md) records progress. This document resolves the local-prototype part of Q-02. Hosting remains P5.3; art production remains P1.2. All paths and commands below describe future work, not existing application files.

## 2026-09-16 visual update

The user now requests pastel pink pixel art and pixel typography; the current task is a revised static sample only. The selected web stack remains unchanged. Later pixel assets need deliberate native dimensions, nearest-neighbor/integer scaling where suitable, separate interactive HTML labels, and reduced-motion still states. This direction does not require a game engine or mandatory character movement. No prototype, runtime animation or font integration has been implemented.

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
| `/contact` | Shared links-only Mailbox letter; Q-01 resolved in P1.6 | P3 |
| Unrecognized pathname/slug | Useful not-found view with Projects and Village links | Prototype foundation |

Resume is an approved document link, not a separate invented route. Until supplied, show clear noninteractive draft availability text. Prototype Menu links only implemented destinations; future entries may be visibly marked unavailable without fake links. V1 exposes every entry required by PRD §15.

Welcome Enter My World navigates to `/village`; View Projects navigates to `/projects`. Workshop selects that same `/projects` route. No separate explore/professional content copies. A direct chapter URL renders the chapter immediately without Welcome or delivery. Reloading must preserve the path and select the same record.

Normal internal navigation adds a browser-history entry. Back/Forward follows the visitor's actual history, including leaving the site when appropriate; never intercept it to force a tour. Explicit **Back to Workshop** always has `/projects` as its fallback and **Back to Village** has `/village`; neither relies on an unconditional history-back operation. If the previous in-app entry is the exact return destination, it may be restored instead of pushing a duplicate.

Keep a small shell-owned map of scroll offsets and originating control IDs keyed by history entry, plus last Workshop/Village context for explicit returns. Save on departure. Restore on history traversal/explicit return after layout is available; reserve image sizes and avoid repeated forced scrolling. Focus the originating link without changing restored scroll when it still exists; otherwise focus the destination heading. New forward chapter visits start at the heading/top. Notebook close restores its opener; notebook navigation closes it and focuses the new page heading. Refresh/direct entry has a safe heading/top fallback when memory is absent. No global state package or persistence of personal information is needed.

Hosting must serve the app entry for valid client routes while serving real assets normally; missing assets must not receive HTML. Unknown routes receive the client not-found view (a generic SPA fallback may still return HTTP 200: a documented soft-404 tradeoff). Configure Vite base and router basename together if hosting under a subpath. Do not silently switch to hash URLs to bypass a hosting mismatch. Host choice and exact rewrite configuration stay P5.3; test preview deep links in P2 and public deep links in P5.

## 5. Shared content/data strategy

### P1.6 resolution — Mailbox, 2026-09-17

Use the existing `/contact` route for both Village Mailbox and notebook Contact, including direct entry/refresh. Follow the existing heading focus, history and Back to Village behavior; no extra modal or envelope state machine. Render approved static contact records as ordinary named links; use a small Copy Email button with announced success/failure and a visible selectable address as fallback. Email opens the visitor's mail handler, not a portfolio submission service. Copy failure must not prevent manual use. No new library, API, backend, database, authentication or email service is needed.

PRD §21 records the links-versus-form comparison and selected links-only method. Forms are not required for V1. Public values remain pending in CONTENT_INTAKE.md. Same content/controls reflow into a mobile letter; keyboard, visible focus and reduced-motion still presentation remain required. Personality is optional opening feedback with immediate contact access. These are future implementation requirements, not implemented behavior.

P1.4 clarification: Pathwise ownership is settled as Aditi's end-to-end developer/builder role, not a pending intake field. Verify capability claims against the project rather than asking her to allocate team work. Keep the chapter to the ten concise topics in PRD §17, with **Open Live Project** and **View GitHub / Source Code** as primary actions. No Project Moments, gallery, carousel or media-navigation component is required. `previewImage` is optional and singular; omit it cleanly without an empty-media state or completion blocker. These are planning contracts only, not implemented components.

Use **TypeScript data modules** for V1: one source per project plus shared profile, skills and milestone records. This permits checked fields, stable IDs and imported media without JSON schemas, Markdown parsing or executable MDX. Long text is paragraph/list data rendered through a shared chapter template, not JSX embedded in records. Content edits require a rebuild; acceptable for three owner-maintained projects.

Conceptual shape only (not a new data file):

```text
Project = id, slug, title, summary, fullDescription,
          problem, solution, contribution, technologies[], features[],
          architecture, decisions[], result, limitations[], lessons[],
          previewImage?{src, alt, caption, width?, height?}, githubUrl,
          demo{type: hosted|local|none, url?, walkthroughUrl?, accessNote,
               verificationStatus, verifiedAt?, limitations[]},
          implementationStatus, featuredOrder, evidence[],
          chapterSections[{id, heading, paragraphs[], bullets?}]
```

Canonical required sections derive from PRD §32 fields; optional chapterSections add material without duplicating the same prose. A small summary index serves the album; detailed records load on chapter demand so later long chapters/media do not join Welcome startup. Both views reference the same IDs and source records. Skills use id/name/category/projectIds/description; profile holds approved biography, interests, education references, goals, resume and public links; milestones retain dates, type, organization, role and evidence as specified in the PRD. Missing required draft values are explicit pending states, never invented strings or fake URLs; release validation rejects unresolved required content.

Pathwise must preserve the prior observation of dashboard/interventions working and a profile failing for a missing model artifact. Label that evidence as a prior review, not current uptime. Its demo requires login; never expose the supplied administrator account. Display access/limitation text near Open Live Project; View GitHub / Source Code remains available. One approved static preview is optional, not required. TrafficIQ is not runtime-verified; MarketMind is local with interface/version pending. No runtime requests to featured applications, no credentials, and no implication that synthetic records prove real adoption. P1.4 prepares the concise Pathwise record and links, with an optional static preview, not a gallery. Confirmed end-to-end authorship requires no team-attribution intake.

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

Use display-sized variants with srcset/sizes and picture for genuine mobile crops. Reserve width/height or aspect ratio; eager-load only essential above-the-fold art and do not lazy-load the likely LCP image. Defer unused interiors and extra poses; lazy-load the optional static project preview if below the fold. No project gallery or Project Moments section is planned. Do not preload all locations or bundle large inline images. Alt text describes meaningful project evidence; redundant destination artwork is decorative beside its HTML label. Supply a concise alternative for identity artwork when it contributes information. Failed images retain captions/text links and stable layout.

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

### P1.7 — selected test baseline, 2026-09-17

**DONE as planning only.** Protect navigation, readable project content, direct routes and accessible interactions with the smallest useful suite. No tests, scripts, packages, browser automation or application files were created/run. The latest P1.7 instruction explicitly limits this to planning: actual installed versions and measured lab results must be recorded during authorized implementation/validation, not invented to satisfy the older roadmap wording. PRD budgets and acceptance IDs are unchanged.

#### Selected tools and alternatives

| Layer | Selection and reason | Alternative / boundary |
| --- | --- | --- |
| Unit/component runner | **Vitest**, aligned with the selected Vite build; one runner for meaningful logic and component behavior | Jest is capable but introduces a separate transform/configuration path without a project need. Do not add both |
| Component interaction | **React Testing Library + user-event**, with **jsdom** and jest-dom matchers; query by accessible role/name and assert visible outcomes | jsdom is a DOM environment, not proof of real layout, native focus behavior or browser compatibility. Required Testing Library DOM peer dependency belongs to the same setup, not a second framework |
| Browser journeys | **Playwright Test**, a small suite against production preview; real routing, refresh, focus and reduced-motion checks justify it | Cypress is a valid alternative, but one E2E tool is sufficient. No Playwright component runner or Vitest browser-mode layer alongside this setup |
| Accessibility | **@axe-core/playwright** scans within existing browser journeys, plus manual keyboard/screen-reader/contrast review | No separate accessibility service or duplicate component-level axe suite. Automated scans cannot establish conformance |
| Visual/responsive | Manual review with browser responsive mode and the existing viewport matrix | No screenshot-diff service, Storybook or snapshot approval pipeline |
| Performance | Production build, Network transfer inspection and Chrome DevTools Lighthouse | No benchmark framework, performance CI service or score-chasing requirement |

Official references checked for this decision: [Vitest/Vite integration](https://vitest.dev/guide/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [user-event](https://testing-library.com/docs/user-event/intro/), [Jest setup](https://jestjs.io/docs/getting-started), [Cypress testing types](https://docs.cypress.io/app/core-concepts/testing-types), [Playwright browsers](https://playwright.dev/docs/browsers), [Playwright accessibility guidance](https://playwright.dev/docs/accessibility-testing), [Lighthouse throttling](https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md). These establish tool capabilities; the choice and scope are project judgments.

#### Coverage and ownership

**MUST TEST**, when the relevant feature exists:

| Behavior | Primary coverage / acceptance |
| --- | --- |
| Welcome → Village → Workshop → Pathwise; skip delivery and immediate return album | Browser journey; P-01–P-04, P-07. Assert destination/content availability, not every animation frame |
| Welcome → View Projects | Browser journey; P-02. Reaches the same Workshop without a tour |
| Direct `/projects/pathwise`, refresh, useful return, browser Back; invalid project/route recovery | Browser journey; P-03/P-07, V-10. Verify on preview first and actual host later; preview success does not prove hosting rewrites |
| Notebook via keyboard: open, focus containment, Escape/close, opener restoration and navigation to heading | Browser journey and manual keyboard pass; P-05. Do not duplicate the entire flow as component tests |
| Direct `/contact` and Menu → Contact | Browser journey once P3.6 exists; approved link targets, no form, reduced-motion access. Inspect destinations without sending mail or testing third-party profiles |
| Contact copy success/failure and manual fallback | Focused component tests, narrowly mocking clipboard outcomes; announce actual result, retain selectable address. No real email/address fixture needed |
| Chapter renderer: required content/actions, local versus hosted demo, optional preview omitted cleanly | Focused component tests; V-02/V-12. Use a small clearly fictional record, not copied credentials/private data or whole-page snapshots |
| Reduced motion bypasses delivery; content remains available on return and with failed artwork | Small variants of existing browser journeys; P-04, V-07/V-10. Manual review of motion and image fallback remains necessary |
| Uncaught errors and basic accessibility regressions | Check page errors during journeys; axe scans of Welcome, open notebook, chapter and Contact when available. Review all findings; resolve critical/serious issues and record disposition of the rest; P-08, V-06 |

Keep about five small journey groups (exploration, direct chapter/recovery, direct Projects, keyboard notebook, Contact), reusing existing visits for axe and reduced-motion variants. Do not multiply every journey by every viewport/browser. P2 covers implemented prototype routes only; Contact and remaining V1 destinations join when implemented in P3. Check approved resume destination at V1 completion without fabricating a working draft download. External demo availability must not be a dependency of local tests.

**Unit/logic:** this site has little business logic. Test project lookup's unknown-slug behavior or nontrivial route/context transformations only if extracted logic actually exists and has meaningful branches. Prefer the renderer/route check if it already proves the behavior. Do not invent helpers merely to unit-test them.

**NICE TO TEST:** additional context/scroll restoration edge cases, additional content variants or a browser-specific regression after a real defect. Add tests only when their risk justifies ongoing maintenance.

**NOT WORTH AUTOMATING:** decorative SVGs, palette constants, every label/CSS class, pixel-art alignment, every pose/animation frame, internal state/setter calls, third-party router/library internals or remote featured-app workflows. These exclusions do not remove manual art/identity/content review. No coverage percentage target, giant snapshots, load tests, authentication tests or form tests for features outside V1.

#### Manual accessibility and visual review

For each affected interaction and at phase exit, use keyboard alone: skip link, visible unobscured focus, logical order, notebook trap only while open, Escape/return focus and route-heading focus. Inspect page titles, headings/landmarks, readable HTML and alt quality; axe can detect some missing semantics but cannot judge meaningful descriptions or visual reading order. Perform a short screen-reader pass (Windows Narrator available with the OS; record actual tool/browser at execution, or another available reader) across Menu, chapter and copy feedback. No conformance claim from automated results.

Check rendered contrast against PRD 4.5:1 text / 3:1 large text, distinguishable controls/focus, 44px primary-target goal, text resizing/reflow, reduced motion and pause of sustained ambient movement. Check no hidden professional content or animation prerequisite. Review pastel pixel identity, Aditi/bunny features, scenery placement, font readability, pixel scaling and animation feel manually against the approved bounded sample; it is not production artwork proof.

#### Responsive and browser baseline

Routine prototype review uses **360×800 mobile, 768×1024 tablet, 1366×768 desktop**. Phase/V1 review retains the full existing PRD V-05 matrix: **320×568, 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1920×1080 CSS px**. These are layout categories, not a device-model list. Sweep between widths for collisions, check 200% text enlargement and 400% zoom/reflow where applicable, and inspect focus/menu/letter targets without horizontal page scrolling. Confirm desktop plaza recomposes as the vertical mobile path and shares the same content/actions.

Routine E2E: Chromium desktop; run the exploration/direct-content smoke on the mobile viewport too. At phase/release review, run the same small smoke in Firefox and Playwright WebKit where available, then manually check actual current desktop browsers and mobile Chrome/Safari on available devices per V-09. WebKit coverage is not an actual Safari/iPhone pass; device emulation is not physical-device testing. Record unavailable platforms rather than claiming universal compatibility.

Read-only local inventory on 2026-09-17 (file metadata only, browsers not launched): **Chrome 152.0.7977.83**, **Edge 153.0.4234.32**. Firefox was not found at the standard Program Files path; other installs were not established. Actual Safari/mobile devices are unverified. No project test packages or browser binaries are installed. Recheck actual runtime versions at execution; Edge is optional corroboration, not another mandatory Chromium matrix.

Package versions are **not selected/installed yet**: choose mutually compatible stable Node/Vite/React/TypeScript/test-package versions at authorized setup and record exact versions in the lockfile/history. Record Playwright version and its browser revisions, actual browser/OS, Lighthouse version, viewport/DPR and test date alongside results. Do not confuse these future records with the metadata inventory above.

#### Repeatable performance profile — unmeasured

Use the production build on local preview for early diagnostics and on the intended compressed static host before release. Review Welcome and direct Pathwise separately. Retain the roadmap's **390×844** mobile viewport and three cold-cache Lighthouse mobile runs, with the tool's recorded default mobile CPU/network throttling. Explicitly configure/verify the effective viewport rather than assuming Lighthouse's default device matches it; record DPR, simulation method, numeric CPU/network settings, machine/OS, browser and Lighthouse version from each run. Report median LCP/CLS plus individual results. No run or measurement occurs in P1.7.

Preserve **≤1.5 MB compressed first-view transfer**, **≤250 KB compressed initial JS**, **LCP ≤2.5 s**, **CLS ≤0.1**; **INP ≤200 ms only when field measurement exists**. Lab interaction checks/TBT are diagnostics, not field INP. Inspect actual transferred bytes and content encoding; uncompressed local preview cannot certify compressed-host budgets. Build-size summaries alone are insufficient. Check image dimensions/weight, reserved layout space, font/bundle growth and deferred interiors/optional below-fold preview; do not introduce a gallery. Unavailable external demos must not delay portfolio loading. Budget exceptions require documented justification, not silent waivers. Physical phone checks supplement the lab when available.

#### Future files, commands and completion check

Colocate meaningful `*.test.ts` / `*.test.tsx` beside the logic/component. Keep browser journeys in `tests/e2e/*.spec.ts`. One small shared setup for DOM matchers/cleanup only if needed. Use explicit accessible-role queries and user actions; isolate session state between journeys. Name outcomes, e.g. “opens Pathwise directly from its project URL” and “keeps the email selectable when copying fails.” Do not create a custom framework, page-object hierarchy, huge fixtures, broad mocks or duplicate layers of the same assertion.

Expected commands once authorized setup adds scripts (none exist or were executed now):

| Command | Future meaning |
| --- | --- |
| `npm run test` | `vitest run`, one finite unit/component run |
| `npm run test:e2e` | `playwright test` against built preview; build first; future runner configuration manages preview lifecycle |
| `npm run build` | Existing planned `tsc -b` then `vite build`; no TypeScript errors |
| `npm run preview` | Serve built output for manual/production-preview review |

Before completing an implementation task: run build and relevant tests, remove unused/dead code, inspect changed content, and manually check affected keyboard/responsive behavior. Run the small full journey suite at phase exit or when shared navigation changes; perform the full manual matrix/performance pass at their roadmap phases. Record actual results and limitations. No Git hooks, CI workflow, separate visual service, coverage service or automatic Git operations. Aditi performs Git operations manually. The standing simple/readable/explainable-code rule applies equally to test code.

P1.7 planning complete does not mean any test passed. **Exact next task: P2.1 — Create minimal app foundation**, not started here. Installations, configurations, test files and measured evidence remain future authorized work.

Future npm scripts, to be created in P2.1, will support:

| User command | Intended action |
| --- | --- |
| `npm run dev` | Vite development server |
| `npm run build` | TypeScript project check (`tsc -b`) followed by `vite build` |
| `npm run preview` | Vite preview of built `dist` output |

No command above was run; package.json and dist do not exist. Preview requires a successful build and is a local check, not a production server ([Vite deployment guide](https://vite.dev/guide/static-deploy)). Future Node/npm versions must be compatible with the selected packages and recorded in P2.1; P1.7 records the version policy and available-browser inventory; exact installed versions are recorded at authorized setup.

Deploy only static build output to a provider meeting the route contract. No runtime Node service or portfolio API is needed. Provider/domain, redirects, caching details, base path and publication are deferred. Store no secrets in frontend content or build-exposed environment variables. All bundled content is public.

## 11. Prototype flow architecture

Conceptual shared shell: persistent Menu + route outlet + lightweight navigation context. Route views: Welcome, Village, Workshop album and Project chapter. Shared typed records and media feed the album/chapter; layout CSS composes them for each viewport. These are responsibilities, not components created in this task.

1. **Explore:** Welcome → Village → `/projects`; first-session delivery decorates the ready album → `/projects/pathwise` → explicit Back to Workshop restores album context → Back to Village restores its destination context.
2. **Fast:** Welcome View Projects → same `/projects` album immediately available → same Pathwise chapter. Delivery never adds a required activation/wait.
3. **Direct:** `/projects/pathwise` → same chapter without Welcome or delivery → deterministic `/projects` return with album ready.

All use the same route registry, labels, content records, chapter view, keyboard rules and responsive reading surface. The origin affects return context, not project claims or content availability.

## 12. Technologies intentionally not used

No game engine, Canvas/WebGL, physics/pathfinding, movement system, global state library, portfolio backend/database/authentication, CMS, runtime content API, embedded featured applications, complex animation framework, separate mobile app, audio engine or service worker/offline subsystem. Static content and a few local/session UI values meet current needs. P1.6 resolved Q-01 as links-only; a form/service would require a new explicit scope decision. A full-stack career goal alone does not justify portfolio server infrastructure.

## 13. Tradeoffs

The selected SPA needs JavaScript to render its content and a host fallback for clean URLs. Semantic HTML describes the rendered interface, not guaranteed pre-rendered content without JavaScript. Provide an honest noscript message with a GitHub link; this is not a substitute for the interactive portfolio.

Initial metadata can identify Aditi's portfolio, and route titles can change in the browser. Distinct project social-card previews and reliable pre-rendered chapter indexing are not guaranteed by this baseline. If those become release requirements, explicitly evaluate static pre-rendering before hosting; do not quietly add server rendering. Asset size and focus/history correctness remain implementation work; selecting this stack alone does not pass budgets or accessibility tests.

## 14. Deferred decisions

- P1.2: original-art creator/tools, editable formats, export/compression tooling and provenance workflow.
- P1.3: approved avatar/bunny details, typography, final tokens, sample composition and physical delivery staging.
- P1.4/P1.5: actual Pathwise record/links, optional static preview, biography/resume/skills/milestones/contact and other project evidence.
- P1.6: DONE — links-only Mailbox (Q-01 resolved); approved public values still pending in content intake.
- P1.7: DONE — selected baseline in §10; tool version policy, available-browser metadata, viewport matrix and unmeasured lab profile recorded. Actual runtime results remain future work.
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
