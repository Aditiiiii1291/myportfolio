# P2.8 — Verify prototype

Date: 2026-09-24. **Status: DONE. Verdict: the first playable prototype satisfies P-01–P-08 and the Phase 2 exit for the tested environment.** This is prototype acceptance, not full V1, cross-browser, accessibility-conformance or deployment certification.

## Scope and identified revision

Verified the current P2.7 application with the revision-specific P2.2–P2.6 visual approvals intact. Production output identifies the tested implementation as `index-q1B_OvbA.js` and `index-DpUjszeb.css`. No application code, copy, styling, artwork, dependencies or configuration changed during P2.8. No application code changes were required.

Read the PRD, roadmap, history, technical approach, design system, art workflow, visual sample review, canonical Pathwise chapter, and current application. The PRD's latest short-chapter and site-wide Pixelify Sans decisions supersede earlier detailed-content/serif directions. Earlier dated next-task statements in those documents are historical.

Method: interactive browser checks through the Codex in-app Chromium browser on Windows, actual top-level CSS viewport overrides, DOM geometry/focus inspection, screenshots and captured console logs. Normal flows ran against `npm run preview -- --host 127.0.0.1 --port 4173`, serving the production build. Fresh tabs established separate first-entry sessions. No iframe viewport fixture or new test packages were needed. Actual Safari, Firefox, physical mobile devices and screen-reader testing were not available/performed; these are not claimed as passes. P1.7's selected automation suite remains a plan; this bounded P2.8 request explicitly permits documented manual verification without installing it.

## Acceptance matrix

Requirements are from PRD §37, interpreted with its latest explicit scope updates.

| ID | Requirement | Test and observed evidence | Result |
| --- | --- | --- | --- |
| P-01 | Exact Welcome title/tagline, working entry/Projects/Menu and honest Resume availability | Rendered title “Aditi's Adventure” and exact “A little world of things I build, ideas I explore, and things I love.” Both route links activated. Menu opened. Resume is readable “not available yet” text, not a broken download. | PASS |
| P-02 | Exploration and direct Projects journeys work; Projects one activation from Welcome; no mandatory animation wait | Fresh keyboard journey reached Village → Workshop → shelf → album → Pathwise. Fresh Welcome → View Projects went directly to `/projects`; Skip delivery opened the same album and Pathwise. Album links were already available while delivery ran. | PASS |
| P-03 | Stable real chapter, direct refresh, verified content, correct source and honest demo access | Fresh `/projects/pathwise` loaded without prior entry, then refreshed successfully. Title, end-to-end role, JavaScript/Python, verified tools and two correct URLs matched the approved short scope. Source repository opened; live site reached its startup screen, not a verified authenticated workflow. Existing access/missing-model caveat remains accurate. | PASS |
| P-04 | First-entry delivery, skip, immediate return album, reduced-motion bypass | Fresh shelf activation produced `.delivering` with computed 1.1s duration while album was visible. Both pre-delivery skip and active “Skip animation” worked; active skip removed delivery and focused `album-title`. Return album remained open. Fresh simulated reduced-motion entry showed album immediately, no delivery class, animation `none`. See simulation limit below. | PASS |
| P-05 | Keyboard access; notebook opening/closing/focus restoration; no inappropriate traps | Actual Tab/Enter-only main journey, hint dismissal, chapter actions/return and notebook navigation. Visible cocoa focus on entry, Workshop sign and chapter links. Notebook focused Close; available links were tab-reachable, unavailable spans/decorative art were not; Escape returned visible focus to Menu. Route selection closed notebook. No background application control activated while modal was open. | PASS |
| P-06 | Required desktop/tablet/phone sizes have no clipped/overlapping essential content or horizontal scroll | Four routes plus album and notebook checked at 1366×768, 768×1024, 360×800 and additional 320×568. All measured document widths were at or below viewport width. Screenshots/geometry confirmed readable controls; long content remained vertically scrollable. | PASS |
| P-07 | Useful Workshop/Village returns, restored context, browser Back and direct-entry return | Explicit chapter return restored open album and `project-pathwise` focus; recorded y=364 in one keyboard flow. Browser Back restored that link and y≈466 in a separate pointer flow; Forward returned to chapter. Fresh direct chapter return opened album and focused `album-title`. Village session return omitted intro/hints; Workshop link remained available. | PASS |
| P-08 | No uncaught portfolio errors; external-demo unavailability cannot crash portfolio | Normal keyboard, fast and responsive production tabs returned empty warning/error log arrays. Slow/failure navigation reached Pathwise. After visiting external live/source destinations, browser Back restored the chapter. No uncaught application errors observed. | PASS |

## Journey and interaction evidence

- **Main, keyboard only:** initial Tab sequence Skip to content → Menu → Enter My World; Enter opened first-entry village dialog with Yes focused. Enter confirmed; focus moved to Workshop. Tab reached Next hint then Dismiss; Enter dismissed and returned Workshop focus. Enter opened Workshop; Tab reached Back then shelf. Enter opened album and focused its heading. Tab reached Skip animation during delivery; after completion focus returned to album heading, then Tab reached Pathwise. Enter opened chapter. Tab reached Live then Source; reverse Tab reached the return link. Enter returned to the album's Pathwise link. Decorations did not enter the sequence.
- **Notebook:** reverse Tab from album reached shelf, Back, Menu. Enter opened it on Close. Tab traversed Welcome, Village and Projects; inactive destinations were skipped. The native modal cycle briefly left document focus for browser chrome before returning to Close; no underlying app element gained actionable focus. Escape returned Menu focus. Reopening and choosing Village with Tab/Enter closed the notebook and focused the route heading. Mouse open/Close and available-route navigation also worked. Projects used `aria-current="page"` and visible Here on `/projects`; the chapter is not falsely marked as the exact `/projects` route.
- **Fast:** a fresh Welcome tab activated View Projects once, saw the shelf directly, skipped delivery and opened Pathwise. Village confirmation was never required.
- **Direct:** a fresh chapter tab loaded/ refreshed the production deep link, retained content/actions, and returned usefully to the ready album. Menu remained available. Local preview fallback is verified; future hosting rewrites are not.
- **Session/returns:** ready album persisted across route returns and reload in the same tab. First-entry village confirmation/hints did not repeat after return. A fresh tab still offered first-entry delivery. Both native browser Back/Forward and semantic return links worked without replacing browser history.
- **Hints:** Next hint advanced through Workshop availability, Menu and keyboard advice; Got it and Dismiss removed hints and focused Workshop. At 320×568, the first-entry dialog and hint controls remained usable; fresh shelf skip was 44px tall and reachable by normal vertical scrolling.

## Reduced motion and loading resilience

Native OS controls and native browser media emulation are not exposed by the available browser tool. **Only the application-level media-query simulation was tested**, not a Windows preference change or browser-native CSS media emulation.

A temporary, dependency-free loopback server on port 4174 served the identical `dist` assets. For `?qa=reduce` only, its HTML response installed a `matchMedia` adapter before application startup, returning a matching native MediaQueryList for the reduced-motion query. Fresh Workshop displayed the album immediately, had no `.delivering` element, and computed animation name was `none`. Menu, first-entry Village/hint dismissal and return to Workshop worked without animation prerequisites. The existing CSS `prefers-reduced-motion` rule was inspected separately; the test does not claim native CSS preference switching. This is the explicitly permitted fallback method in the P2.8 request.

The same temporary server delayed only the Welcome portrait response by **15 seconds** for `?qa=slow`. Observed `complete=false`, `naturalWidth=0`, reserved 360×360 portrait box, readable title/actions, and successful View Projects navigation before image completion. This is a fault-injection check, not a network performance benchmark.

For `?qa=fail`, that portrait returned a deliberate HTTP 503. The existing text fallback replaced it: “Aditi and her bunny are welcoming you. The illustration couldn't load, but you can still explore.” View Projects → skip → Pathwise still worked. The injected resource failure is intentional, not an unexplained production failure; no JavaScript error was captured. P2.7's broader village/bunny failure evidence remains historical, not falsely described as re-run here.

The temporary server was stopped and `.p28-check.cjs` removed. No source, index, Vite configuration or production asset was modified to inject these cases. Browser viewport override was reset. No overrides ship with the application.

## Responsive, visual and usability review

| CSS viewport | Welcome / Village / Workshop + album / Pathwise | Notebook | Finding |
| --- | --- | --- | --- |
| 1366×768 | PASS | PASS | Landscape world; readable title/actions; chapter and album scroll naturally where needed. |
| 768×1024 | PASS | PASS | Portrait world; side-by-side Welcome content/portrait; album text fits. |
| 360×800 | PASS | PASS | Stacked Welcome, visible Workshop sign, single-column album/chapter; actions remain reachable. |
| 320×568 | PASS | PASS | Vertical scrolling retains all content; narrow chapter wraps without horizontal scroll; first-entry controls work. Notebook bounds x=22..304, y=76..524.8. |

No unintended horizontal overflow in any measured route/size. Floating Home/Menu did not obscure the tested focused return controls; the narrow chapter return was at y=96..140. Notebook remained within viewport bounds. Main chapter text computed Pixelify Sans; source defines 17px / 1.6 line height. Primary buttons/return actions measured at least 44px tall. The album's inline project-name links measure about 33.6px tall: **MINOR**, below the preferred 44px target goal but comfortably isolated and usable in these checks; no approved visual redesign undertaken.

**ACCEPTABLE:** approved Strawberry Cream world, faded/blurred Welcome background, crisp foreground Aditi holding bunny, middle-parted hair and cat-eye identity, landscape/portrait village, warm Workshop/shelf, cream album/pink binding/page edges and shared Pixelify Sans remain coherent. Small village avatar details are naturally simplified; this review preserves the identified approval rather than approving future character variants. No accidental white website panel, corporate navigation block or lasting stretched/missing artwork found. Screenshot capture sometimes caught an incomplete paint or produced stitched/scaled artifacts; settled viewport captures and image-ready/geometry checks were used rather than treating those capture artifacts as product defects.

**Usability:** entry and View Projects are explicit; Workshop is a named semantic destination; Menu is consistently visible; shelf invitation and album project names explain the next action. Hints are brief, untimed, dismissible and truthful about unavailable destinations. First entry uses the approved short confirmation, with direct Projects bypass. Return labels are explicit. No added tutorial or layout change was warranted. Long album descriptions produce more scrolling on a small phone; this is acceptable for the approved prototype, not authorization to rewrite content.

## Pathwise content and external links

Compared visible content with [canonical prepared chapter](projects/PATHWISE_CHAPTER.md) and PRD's 2026-09-22/23 overrides:

- Title/summary, student-support purpose, confirmed end-to-end role, JavaScript/Python and React/FastAPI/SQLAlchemy/scikit-learn are supported.
- Full problem, implementation breakdown, workflow, architecture and ML/risk explanation are **not visible as separate sections**. This is the intentional user-approved simplification, not a missing-feature defect. Detailed canonical material remains internal evidence. The short chapter makes no unsupported accuracy, deployed-database or production-readiness claims.
- The sign-in requirement and historical missing-model limitation remain visible; authenticated assessment is still unverified. No screenshot/gallery required or introduced.
- **Live:** clicking Open Live Project reached `https://pathwise-1-sibf.onrender.com`, rendering Pathwise / Student Retention & Early Warning / “Starting Pathwise...” / “Verifying Pathwise service availability”. It remained in startup at the later bounded observation. Public frontend is reachable; login and authenticated workflow were not verified. No credentials entered or protected endpoints probed. Do not describe the older missing-model issue as fixed or newly reproduced.
- **Source:** clicking View GitHub / Source Code reached the public `https://github.com/Aditiiiii1291/Pathwise` repository, showing main and latest commit `b386704`, consistent with the pinned canonical source. No sign-in was needed to view it.
- Browser Back from both external destinations returned to the intact chapter. External startup did not affect local portfolio rendering.

## Build, console and transfer baseline

`npm run build` passed TypeScript and Vite 8.3.0 production bundling, **37 modules**. Initial sandboxed attempt failed with Node EPERM on `C:\Users\saksh`; the authorized run outside the sandbox passed. This was an environment permission failure, not an application build defect. Node reported v22.14.0. `npm run preview -- --host 127.0.0.1 --port 4173` served the actual main/direct flows and refreshed chapter successfully.

Captured normal production warning/error arrays were empty after keyboard, fast and responsive journeys; **0 uncaught application errors observed**. No React, missing-key or routing warning surfaced. This is the observed browser run, not proof against all possible errors. Browser automation had a transient click/screenshot capture failure; state was re-inspected and the action/capture succeeded without application changes.

Decimal kB/MB below. Exact raw production total: **1,934,079 bytes (1.934 MB)**, across eight files. All images total **1,564,344 bytes**; font **79,160 bytes**. Both village variants are intentionally distinct responsive exports, not duplicate identical art.

| Production file | Raw bytes | Vite reported gzip | Measured local HTTP response body with `Accept-Encoding: gzip, br` |
| --- | ---: | ---: | ---: |
| index.html | 402 | 0.27 kB | 402 |
| index-q1B_OvbA.js | 274,616 | 86.90 kB | 86,029 (gzip) |
| index-DpUjszeb.css | 15,557 | 4.10 kB | 4,081 (gzip) |
| PixelifySans-lrcDQVzA.ttf | 79,160 | — | 79,160 |
| welcome-aditi-CbcWhMOd.webp | 161,200 | — | 161,200 |
| village-hub-v01-43Wd0B9E.webp | 655,260 | — | 655,260 |
| village-hub-portrait-v02-BumMvOtT.webp | 708,396 | — | 708,396 |
| bunny-album-v01-DPJ8NI-s.webp | 39,488 | — | 39,488 |

HTTP checks used fresh command-line requests against the production preview; all assets returned 200. Gzip headers and actual downloaded body bytes were inspected for JS/CSS, separately from Vite's compression estimates. These are **response-body measurements**, excluding HTTP/TLS overhead, not a browser HAR/cold-cache waterfall. Browser resource-timing inspection was unavailable through the read-only browser scope, so no measured browser total is invented.

Calculated first-view body baselines from the measured responses and route asset selection: shared HTML/JS/CSS/font **169,672 bytes**; Welcome with landscape+portrait character **986,132 bytes**; Welcome with portrait-world+character **1,039,268 bytes**; direct Pathwise **169,672 bytes** (no chapter image). These sums assume only the applicable world variant, and exclude cache/protocol effects; they are not observed browser transfer totals. The entire dist folder is not downloaded on every first view. Preview JS body is below the 250 KB compressed target; calculated Welcome bodies are below 1.5 MB, but release-host/cold-browser budgets are not certified by these sums.

Performance sanity: largest files are the 708 KB and 655 KB world exports. Build JS/CSS hashes and reported sizes match the P2.7 baseline; no accidental bundle growth or extra dependency was introduced. No prototype-blocking asset size issue was observed. Further image/font optimization and real cold-cache/Lighthouse/LCP/CLS/field-INP/physical-phone work remain their later roadmap scope; no scores or metrics are fabricated.

## Issues, scope and handoff

- **FIXED DURING P2.8:** no application defects required code fixes. Sandbox/capture tooling interruptions were recovered; temporary verification harness removed.
- **DEFERRED / MINOR:** album project-name target height below preferred 44px goal; native reduced-motion and broader browser/device/screen-reader coverage; compressed-host/cold-browser measurement and image/font optimization. Live demo startup/authenticated assessment remains an external limitation, disclosed rather than repaired in the portfolio.
- **BLOCKING:** none for the tested Phase 2 prototype acceptance.

Permanent changes: this evidence document, [roadmap](PORTFOLIO_MASTER_ROADMAP.md), [history](PROJECT_HISTORY.md). Generated `dist` was rebuilt; application files/artwork remain unchanged. No packages, full automation suite, later chapters/interiors, content intake, hosting/deployment, Git operations, commit or push.

Exact next numbered task: **P3.1 — Complete village composition**. Roadmap scope: **five identifiable locations, short loop, prominent Workshop; mobile route reflows without shrinking labels**. It is not started. P3.1 does not itself include P3.2's other project chapters, P3.3–P3.6's interiors/content, release optimization or deployment. Existing exterior landmarks do not mean those later destinations are implemented. This verification does not authorize advancing to that task.
