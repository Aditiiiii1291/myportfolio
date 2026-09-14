# Aditi's Adventure — Project History

Last updated: 2026-09-14. Stage: P1.1 technical preparation complete; no implementation started.

This file is the project's handoff memory. Read it with [PRD.md](../PRD.md), [PORTFOLIO_MASTER_ROADMAP.md](PORTFOLIO_MASTER_ROADMAP.md), and [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Update it after meaningful development work, accepted decisions, tests, or blockers. Do not store credentials here.

## CURRENT PROJECT STATE

- Brainstorming is complete. The user requested conversion into four product-definition documents and explicitly stopped further brainstorming/full implementation.
- Phase 0 is complete and accepted as the baseline by Aditi's P1.1 request. P1.1 architecture planning is complete in [TECHNICAL_APPROACH.md](TECHNICAL_APPROACH.md). P1.2 and later tasks have not started.
- Initial workspace inspection found no files, application code, original art, package manifest, or `.git` directory in `C:\Users\saksh\Desktop\portfolio`. This task creates documentation only. No framework, dependencies, hosting configuration or asset-generation workflow has been installed.
- A preliminary Git-status command failed with a working-directory error. No clean Git status, branch, commit or initialized repository is claimed.
- No fixed launch date. Product direction is a compact but complete V1, preceded by one playable Workshop prototype.
- React/Vite/TypeScript with React Router and HTML/CSS/image rendering is selected for future implementation. Art-production method and hosting remain unselected.
- Current filesystem also contains an existing `.git` directory and a minimal `README.md`, added after the initial document creation. No Git commands were run during P1.1; branch, remote and commit state were not verified. No `.gitignore` exists yet; ignore rules must be established before later generated/private files are staged.
- Personal content may be supplied later in stages; required launch content remains a release gate.

## COMPLETED WORK

### Brainstorming and project research

- Defined name, exact welcome line, world premise, personalized human host and bunny relationship.
- Selected separate Welcome, elevated 2D central plaza, clickable V1 navigation, notebook menu, five locations, shelves/album Workshop, shareable chapters, mobile vertical village and gentle motion.
- Recorded Aditi's interests (painting, arts and crafts, tennis, cozy pastel room/candles), engineering studies, and full-stack career direction.
- Reviewed public repository structures, READMEs and selected implementation files for Pathwise, TrafficIQ and MarketMind. These were read-only reviews, not full application audits or test runs.
- Aditi confirmed she built all three projects independently. She supplied two hosted URLs and identified MarketMind as a local demo.
- Visited the hosted addresses. Pathwise authenticated successfully; dashboard and interventions loaded. One student-profile view failed due to a missing model artifact. TrafficIQ remained on its hosting startup screen during the check.
- Signed out of Pathwise after read-only inspection. No application records were created, edited or deleted.

### Product-definition documents

- 2026-09-13: Began extracting finalized decisions and drafting `PRD.md` with all 39 requested topic sections.
- 2026-09-14: Continued on user instruction; completed the roadmap and design-system drafts and created this history. Added an explicit decision ledger and documented conflicts resolved from the conversation.
- Calculated candidate palette contrast ratios in memory. Cocoa on the proposed light surfaces exceeds the ordinary-text threshold; white on pink and cocoa directly on wood are unsuitable for ordinary body text. This is color arithmetic, not a UI test.
- No implementation, imagery, prototype, deployment, or additional project files were created in this stage.
- 2026-09-14: Verified exactly four workspace files, all 39 numbered PRD sections, all ten required history sections, valid relative document links, valid text encoding and absence of the supplied login credentials. Reviewed decision provenance, scope, candidate-token labels, project verification limits and next-task consistency across the set.

### P1.1 — prototype technical approach, 2026-09-14

- User authorized architecture/planning only and explicitly excluded P1.2+, scaffolding, packages, artwork and implementation.
- Read all baseline documents and README. Added a dedicated technical approach with alternatives, route contract, shared data, assets, responsive behavior, motion, accessibility, preview commands, tradeoffs and acceptance mapping.
- Selected React + Vite + TypeScript, React Router declarative BrowserRouter, plain CSS, semantic HTML and separate image/SVG layers. No engine, portfolio backend, CMS or global state library.
- One `/projects` Workshop/album and stable `/projects/pathwise` chapter serve explore, fast and direct flows. Future V1 routes are planned only. Explicit returns are deterministic; small shell state restores context, and per-tab session state prevents repeated delivery. Direct chapter visits make the return album ready.
- Typed static content modules will supply both album summaries and chapters; no actual content modules were created. Preserve prior demo limitations, source evidence and private-credential exclusion.
- Asset handling uses future imported `src/assets` exports, separate nondeployed editable sources and stable public document links. Export tools and original-art production remain P1.2.
- Future commands: `npm run dev`, `npm run build` (typecheck + Vite build), `npm run preview`. None executed; no package manifest exists.
- Official Vite, React Router and Next.js documentation informed build/routing tradeoffs; sources are linked in the technical document. Clean-URL host fallback and client-rendering/metadata limitations are explicit.
- Updated roadmap status/next task and PRD Q-02 resolution; did not change the design system or unrelated product decisions.

## DESIGN & TECHNICAL DECISIONS

### Confirmed product baseline

| Topic | Decision |
| --- | --- |
| Name | Aditi's Adventure |
| Exact welcome line | A little world of things I build, ideas I explore, and things I love. |
| Welcome | Separate game-like scene, Aditi holding bunny, Enter My World, View Projects, Resume, Menu |
| Professional context | Full-stack ambitions and engineering background belong in About/project content; no forced branch subtitle on Welcome |
| Human avatar | Long layered brunette hair, glasses, pink headphones, preferably black sleeveless high-neck top, flared blue jeans, dark sneakers, pale warm/yellowish skin tone |
| Companion | Fluffy bunny; held on Welcome, nearby elsewhere, delivers project album; final markings/accessories TBD |
| Movement | Aditi hosts composed scenes; no player movement V1 |
| World | Gently elevated illustrated 2D, central plaza, short winding loop, prominent Workshop |
| Locations | Aditi's Cottage, Project Workshop, Skills Garden, Adventure Board, Mailbox |
| Menu | Adventure notebook opened by explicitly labeled Menu control |
| Projects | Shelves; bunny-delivered Things I've Built album; readable chapters with stable URLs |
| Cottage | Cozy pastel creative room/journal with painting/crafts, tennis racket, and warm candles |
| Skills | Labeled seed packets on a potting bench; names visible before interaction |
| Board | Grouped dated notice cards, not scattered unreadable notes |
| Visuals | Strawberry Cream; chunky/blocky original illustrations; clean body text |
| Mobile | Separate Welcome then vertical village; readable one-column content and persistent navigation |
| Animation | Gently alive; brief signature delivery, idle behavior and opening feedback; optional additional scenery motion |
| Release | Compact complete V1, no calendar deadline |

### Proposed baselines and unresolved choices

- Links-only Mailbox is recommended but unconfirmed (Q-01); no form is authorized by this documentation.
- Fonts, exact hex acceptance, avatar facial details and bunny markings/name/accessories remain TBD. Candidate token values have not been accepted as final artwork.
- Q-02 local stack/rendering is resolved in [TECHNICAL_APPROACH.md](TECHNICAL_APPROACH.md); hosting remains P5.3. Art workflow/sample remains Q-03/P1.2–P1.3. Numerical spacing/timing/performance/test criteria remain documented baselines pending implementation validation.
- First-delivery behavior is operationalized as once per browsing session; repeated visits keep the album open, and reduced motion bypasses the sequence. Record any refinement of session semantics.
- Content records are shared by both navigation paths; no portfolio database/backend/CMS is assumed.

### Conflicts resolved explicitly

1. Artistic welcome copy supersedes earlier engineering-role subtitle suggestions.
2. Shelves and bunny-delivered album supersede project cards/pinned sheets as the main Workshop concept.
3. Visible technology names supersede hover/tap-only skill discovery.
4. First-visit delivery plus immediate return access supersedes a full repeated animation on every entry.
5. Chunky/blocky direction supersedes treating the world as delicate storybook-only or pixel-first art.
6. Human Aditi plus pet bunny supersedes an animal-only protagonist or always-held pet in every scene.
7. Demo existence and full runtime verification are distinct: MarketMind is local; Pathwise has a demonstrated error; TrafficIQ functionality was not verified.
8. Optional butterflies, candles and extra poses are not expanded into mandatory large animation inventories. More complex bug antics remain future polish.
9. The chosen palette direction does not finalize every suggested hex; the proposed contact method does not become a silently accepted requirement.

## CURRENTLY WORKING ON

P1.1 architecture documentation is complete. No active implementation or art work. Next is P1.2 when authorized.

## NEXT TASKS

1. **P1.2 — Define original-art workflow:** creator/tools, editable source format, export process and provenance; preserve originality and selected avatar identity. Not started.
2. P1.3: create/review the bounded Aditi/bunny + Workshop/album visual sample after the workflow is defined. Not started.
3. P1.7: select and record the test baseline before P2 foundation; existing budgets and acceptance criteria remain.
4. P1.4: prepare one real Pathwise chapter with approved media and accurate demo limitations.
5. Collect missing content progressively; resolve Q-01 before Contact implementation.
6. Only then begin the P2 playable prototype; do not implement the full village immediately.

The Pathwise deployment issue is an external project issue, not the next authorized portfolio task. Do not fix it or modify its repository without a separate in-scope request.

## FUTURE BACKLOG

DEFERRED: optional character movement, click-to-walk/WASD, deer/fluffy-cat residents, richer interiors, extra bunny/bug behaviors, small easter eggs, optional sound off by default, and possible seasonal variants. No V1 phase depends on these. NPC systems, large maps, physics, combat, multiplayer and visitor accounts are excluded from V1.

## KNOWN ISSUES

### Featured applications — observed during this conversation, not continuously monitored

| Project | Evidence and limitation | Portfolio action |
| --- | --- | --- |
| [Pathwise](https://github.com/Aditiiiii1291/Pathwise) | [Demo](https://pathwise-1-sibf.onrender.com) reached login and loaded overview/interventions. Opening a sample student profile displayed: “Trained ML model artifact not found. Please run training pipeline.” Supplied account was ADMIN; signed out after inspection. Exact deployment root cause not investigated. | Resolve model availability separately or document the limitation; provide screenshots/walkthrough. Use deliberately restricted public demo access, never the reviewed admin credentials. |
| [TrafficIQ](https://github.com/Aditiiiii1291/TrafficIQ) | [Hosted URL](https://ai-emergency-vehicle-priority-system.onrender.com) stayed on Render startup during the check. Source contains React/FastAPI/database integration absent from older README description; test counts conflict. | Reverify actual workflow before claiming a verified live demo; refresh project documentation separately; use media independent of demo uptime. |
| [MarketMind](https://github.com/Aditiiiii1291/MarketMind) | Local demo per user. Reviewed React Products, Uploads and Analysis pages are placeholders; backend and other UI/prototype code exists. Local demo interface/version not yet clarified. | Distinguish backend/Streamlit/current React scope, request media, no hosted Live Demo button. |

No real-world retention improvement, validated traffic-control capability, commercial market prediction or precise test-pass metrics have been established by this review. Do not use demo cohort counts as real user adoption.

### Portfolio preparation gaps

Public biography/resume/contact, exact education dates, confirmed skill list, milestones, approved project media and personal case-study reflections are pending. Q-01–Q-06 in PRD §39 are authoritative. These do not block the document set; relevant items gate production/publication.

## ASSET INVENTORY

### Existing workspace deliverables

| Path | State | Type |
| --- | --- | --- |
| `PRD.md` | Created | Product requirements and decision provenance |
| `docs/PORTFOLIO_MASTER_ROADMAP.md` | Created | Delivery plan and acceptance traceability |
| `docs/DESIGN_SYSTEM.md` | Created | Confirmed style rules and provisional tokens |
| `docs/PROJECT_HISTORY.md` | Created | Current state and handoff memory |
| `docs/TECHNICAL_APPROACH.md` | Created in P1.1 | Selected architecture and planning validation |
| `README.md` | Existing, unchanged in P1.1 | Minimal repository title; not setup instructions |

### Planned visual/media inventory — none created locally

| Group | Needed | State |
| --- | --- | --- |
| Avatar | Welcome holding bunny; simplified village pose; optional contextual variants | PLANNED |
| Bunny | Welcome/rest/idle, album delivery and still; optional butterfly encounter | PLANNED |
| World | Welcome sky/distant village, central plaza/path, five destination illustrations, reusable scenery | PLANNED |
| Cottage | One room vignette, journal, desk/computer, art/craft props, racket, candles | PLANNED |
| Workshop | Shelves, workbench, project books, Things I've Built album | PLANNED |
| Garden/Board/Mailbox | Packets/signs, grouped notices, mailbox/envelope/letter | PLANNED |
| Shared UI | Notebook, controls, labels, focus/interaction states, original icons as needed | PLANNED |
| Project media | Current Pathwise/TrafficIQ/MarketMind screenshots and optional recordings | WAITING FOR CONTENT |
| Personal assets | Resume; optional paintings/craft photos | WAITING FOR CONTENT |

Browser screenshots were used for inspection but are not saved portfolio assets. Existing project repositories are references, not cloned code in this workspace. Editable art sources, rights and exported variants must be inventoried as they are actually produced.

## TESTING STATUS

- P1.1 documentation validation: **PASSED** on 2026-09-14. Reviewed architectural coverage of P-01–P-08 and V-01–V-12, all 15 technical-document sections, roadmap sequencing and remaining decisions. Checked 21 relative document links with zero missing targets. Workspace inventory contains six documentation files and existing Git metadata; no application/data files, packages, generated art or build output. This is planning support, not runtime proof. No Git commands, installations, builds or application tests were executed in P1.1.
- Application builds/tests: **NOT RUN — no portfolio code exists.**
- UI accessibility, responsiveness, performance and cross-browser tests: **NOT RUN — planned in roadmap.**
- Featured repository tests: **NOT RUN in this task.**
- Demo review: partial read-only browser inspection as described above; not full workflow validation.
- Palette calculation: **COMPLETE for flat candidate color pairs**, not a rendered accessibility pass.
- Documentation validation: **PASSED** on 2026-09-14 for four required files, 39 PRD sections, ten required history sections, local links, consistent settled terminology/scope, no detected credential leakage, no accidental implementation files. This validates documents, not app functionality or full accessibility conformance.

## HANDOFF FOR NEXT SESSION

Read the four baseline documents and TECHNICAL_APPROACH.md before taking action. Brainstorming is closed: do not reopen the world name, artistic tagline, human host/bunny, separate Welcome, central plaza, shelves/album, notebook menu, Strawberry Cream/blocky art, or vertical mobile layout.

This session's authorized scope was P1.1 architecture documentation, consistency checking and reporting. It is complete. The exact next task is P1.2 original-art workflow; it was explicitly excluded from this session and has not begun. Follow with P1.3 sample and P1.4 real chapter, plus the required test baseline before P2. Do not jump directly to implementation or hosting.

Preserve TBDs. Ask for material content when its phase needs it; do not demand all personal information before preparation. Keep project-status claims accurate and all credentials out of saved material. Update this file with actual completed work, checks, open issues and the next concrete task at the end of each development session.
