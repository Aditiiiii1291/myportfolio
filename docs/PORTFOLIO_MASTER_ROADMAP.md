# Aditi's Adventure — Portfolio Master Roadmap

Status: Delivery plan defined; implementation not started.  
Updated: 2026-09-14. No fixed launch date or assumed weekly availability.

## Purpose and authority

This is the HOW for [PRD.md](../PRD.md). It does not redefine the product. Use the [design system](DESIGN_SYSTEM.md) for visual rules and [project history](PROJECT_HISTORY.md) for actual progress. The PRD's confirmed decisions control scope. Candidate visual values and technical choices remain explicitly provisional until resolved.

Do not treat writing this roadmap as authorization to implement or deploy the full site. This stage ends with accurate documents and a handoff. Future sessions update the history and task statuses as evidence is produced.

## Status vocabulary and working rules

- **DONE:** Deliverable exists and its acceptance checks passed.
- **READY:** Dependencies are satisfied; execution has not begun.
- **NOT STARTED:** Planned, with dependencies outstanding.
- **WAITING FOR CONTENT:** Requires user-supplied publication material, not invented substitutes.
- **BLOCKED:** A concrete unresolved dependency prevents the task; explain it in history.
- **DEFERRED:** Explicitly outside V1, not secretly added to the release gate.

Only document-definition work is DONE. No app, art, runtime, deployment or application test is complete. Phase 1 is queued for the next authorized development-preparation stage. Content tasks can proceed alongside design once that stage begins.

Keep requirements traceable through PRD section numbers and acceptance IDs P-01–P-08 / V-01–V-12. Numeric visual/performance baselines are documented proposals for implementation validation, not historical user quotes. Record any necessary change and its reason in all affected documents.

## Dependency map

P0 Product definition → P1 Prototype preparation → P2 First playable prototype → P3 Complete village → P4 Polish and accessibility/performance completion → P5 Release verification and publication handoff.

Content intake starts in P1 and gates relevant P3/publication tasks. Featured-demo issues are external prerequisites for honest presentation; the portfolio can use clearly described screenshots/walkthroughs while those applications are addressed separately. Demo uptime must not block the portfolio page from loading.

## Phase 0 — Product definition

Purpose: Convert the completed brainstorm into a faithful, reviewable baseline.

| Task | Status | Dependency | Deliverable / acceptance |
| --- | --- | --- | --- |
| P0.1 Extract decision provenance | DONE | Completed conversation | Confirmed/preferences/optional/future/TBD/rejected ledger in PRD; superseded choices explained |
| P0.2 Write PRD | DONE | P0.1 | All 39 requested sections; detailed locations, content contracts, acceptance criteria and open questions |
| P0.3 Write roadmap | DONE | P0.2 | Phases, task IDs, dependencies, statuses, deliverables and exit gates |
| P0.4 Write design system | DONE | P0.2 | Confirmed visual rules separated from candidate numeric values and unselected fonts |
| P0.5 Record history and check consistency | DONE | P0.2–P0.4 | History has required handoff sections; links, scope, project status and terminology checked; documentation only |

Exit: Four documents accurately represent the selected concept. Aditi has not yet reviewed this new document set; user review is the handoff checkpoint before implementation. Do not label artwork or app tests passed because document checks passed.

## Phase 1 — Prototype preparation

Purpose: Resolve the few execution choices and gather enough real content/art to prove one journey. Do not reopen name, welcome, mascot role, shelves, map perspective, mobile model or palette direction.

| Task | Status | Dependency | Deliverable / acceptance |
| --- | --- | --- | --- |
| P1.1 Define prototype technical approach | NOT STARTED | P0 + document-set review | Record framework, scene-rendering method, route/content approach and local preview method in history. Preserve HTML content, direct URLs, elevated 2D art and vertical mobile layout. Resolve Q-02 for local prototype; no game engine or backend by default |
| P1.2 Define original-art workflow | NOT STARTED | P0 + document-set review | Resolve Q-03 production method: creator/tools, editable source format, export process and provenance. Confirm original assets and selected avatar identity |
| P1.3 Create bounded visual sample | NOT STARTED | P1.2 | One Aditi-with-bunny sample, one Workshop/shelf sample, album surface, control and typography sample; desktop/mobile composition thumbnails. Review with Aditi before bulk art |
| P1.4 Prepare one real chapter | NOT STARTED | P0 | Pathwise content record conforming to PRD §32, source references, actual contribution, useful screenshot and known demo limitations; no invented outcome or credentials |
| P1.5 Stage content intake | WAITING FOR CONTENT | PRD §31 | Collect resume, About/education, confirmed skills, milestones, contact and project reflection/media progressively; maintain missing/approved status |
| P1.6 Resolve Mailbox method | NOT STARTED | Q-01 | Confirm proposed public email/copy/social links before Contact implementation. A requested form requires documented scope/dependency changes |
| P1.7 Select test baseline | NOT STARTED | P1.1 | Record tool/browser versions, viewport matrix, measured lab profile and accessible test approach. Preserve PRD budgets or document justified adjustment |

Exit: Prototype architecture and art workflow recorded, visual sample accepted, and one honest project record/media available. Missing optional biography/milestones must not delay P2. Exact font and shade acceptance follows the sample, not silent assumptions.

### Exact next task: P1.1

Read PRD §§12–17, 24, 29–30, 32, 36–39 and this roadmap. Define the smallest technical approach for the Welcome → Village → Workshop → Pathwise chapter journey and direct Projects alternative. Record a concise technical decision in PROJECT_HISTORY.md: selected framework/rendering, routing, shared content, image handling, local preview, and rationale against the existing requirements. The framework and asset pipeline are not selected by these documents.

P1.1 is preparation only: it does not scaffold the full portfolio or add a game engine. P1.2/P1.3 then establish art sufficient for P2. Begin only after the document set is accepted as the baseline.

## Phase 2 — First playable prototype

Purpose: Prove the signature experience with real content before producing all five destinations.

| Task | Status | Dependency | Deliverable / acceptance |
| --- | --- | --- | --- |
| P2.1 Create minimal app foundation | NOT STARTED | P1.1, P1.7 | Chosen local runtime/build, semantic page shell, shared project content, route fallback; no unnecessary service layer |
| P2.2 Implement Welcome | NOT STARTED | P2.1, P1.3 | Exact title/tagline, avatar holding bunny, Enter My World, direct Projects, honest draft Resume treatment and Menu; P-01/P-02 |
| P2.3 Implement small plaza | NOT STARTED | P2.1, P1.3 | Recognizable central arrival and active Workshop; other prototype destinations visibly incomplete rather than fake links |
| P2.4 Implement notebook navigation | NOT STARTED | P2.1 | Semantic controls, correct implemented destinations, focus/close/return behavior; P-05 |
| P2.5 Implement shelf/album interaction | NOT STARTED | P2.3, P1.3 | Bunny delivery, skip/immediate access, first-session/revisit behavior, single-column mobile album; P-04 |
| P2.6 Implement Pathwise chapter | NOT STARTED | P2.1, P1.4, P2.5 | Stable URL, technical content/media, repository and accurately labeled demo access; P-03 |
| P2.7 Implement responsive/state behavior | NOT STARTED | P2.2–P2.6 | Vertical mobile composition, sensible return/Back/scroll handling, loading and asset fallback; P-06/P-07 |
| P2.8 Verify prototype | NOT STARTED | P2.2–P2.7 | P-01–P-08 evidence, initial transfer measurements, art/usability review, no uncaught app errors |

Deliverable: One coherent playable corner of Aditi's Adventure, not a finished five-location site.

Exit: Both exploration and direct entry reach the same real chapter; direct URL refresh and returns work; 360×800, 768×1024 and 1366×768 checks pass; keyboard and reduced motion work. Capture any observed friction and fix it before expanding. Art may be refined within the confirmed direction; do not replace shelves with generic cards to simplify implementation.

## Phase 3 — Complete the compact village

| Task | Status | Dependency | Deliverable / acceptance |
| --- | --- | --- | --- |
| P3.1 Complete village composition | NOT STARTED | P2 exit, P1.3 | Five identifiable locations, short loop, prominent Workshop; mobile route reflows without shrinking labels |
| P3.2 Complete three-project collection | NOT STARTED | P2.6 + approved project content | Pathwise, TrafficIQ, MarketMind chapters; hosted/local status explicit; no automatic Live Demo for local work |
| P3.3 Build Cottage | NOT STARTED | P2 exit + About/resume content | One room/journal experience with painting/crafts/tennis/candles; visible resume/GitHub; optional object notes secondary |
| P3.4 Build Skills Garden | NOT STARTED | P2 exit + confirmed skills | Seed packets, visible technology names, relevant categories, optional project evidence; no proficiency ratings |
| P3.5 Build Adventure Board | NOT STARTED | P2 exit + approved records | Grouped notices with dates, roles, outcomes; empty categories omitted |
| P3.6 Build Mailbox | NOT STARTED | P2 exit, P1.6 + approved public links | Readable letter and actual contact actions; proposed copy feedback if links-only confirmed |
| P3.7 Complete shared navigation/content | NOT STARTED | P3.1–P3.6 | All Menu/world destinations work, resume available, route refresh/invalid routes/return states correct |
| P3.8 Verify complete content journeys | NOT STARTED | P3.7 | V-01–V-05 and V-10/V-12 checked with real content; publication gaps recorded |

Exit: Complete information architecture exists in both layouts. Every important fact is readable without decorative discovery. Do not fill missing biography, results or milestones with fictional values.

## Phase 4 — Visual finish, accessibility and performance

| Task | Status | Dependency | Deliverable / acceptance |
| --- | --- | --- | --- |
| P4.1 Finish shared original artwork | NOT STARTED | P3 exit | Consistent chunky/blocky silhouettes, perspective, palette and avatar identity; provenance and still variants |
| P4.2 Complete required gentle motion | NOT STARTED | P3 exit | Delivery/opening/control feedback and restrained idle; quiet intervals; motion pause/reduced-mode behavior |
| P4.3 Add optional polish selectively | NOT STARTED | P4.2 + budgets allow | Butterfly encounter, candle/cloud/flower detail if useful; explicitly removable without failing V1 |
| P4.4 Accessibility review and fixes | NOT STARTED | P3 exit, P4.1–P4.2 | Keyboard/screen-reader review, semantic labels, contrast, targets, reflow and focus; V-06/V-07 |
| P4.5 Performance measurement and optimization | NOT STARTED | P4.1–P4.2 | Asset variants, deferred galleries, font/code budgets, dimension reservation; V-08 |
| P4.6 Responsive/browser review | NOT STARTED | P4.4–P4.5 | Full viewport matrix and actual browser coverage; V-05/V-09; list platforms not available for testing |

Performance starting profile: production build, cold cache, 390×844 viewport, three Lighthouse mobile runs using the tool's recorded default mobile throttling and browser version. Record median LCP/CLS and actual compressed initial transfer/JS. Treat lab interaction checks as diagnostics, not measured field INP. Validate a representative physical phone when available. Do not claim a universal pass from one desktop screenshot.

Exit: Required V1 experience passes accessibility/performance checks. Nice-to-have animation cannot hold the release hostage; it can be removed or deferred while preserving the signature delivery.

## Phase 5 — Release verification and publication handoff

| Task | Status | Dependency | Deliverable / acceptance |
| --- | --- | --- | --- |
| P5.1 Final content and identity review | NOT STARTED | P3/P4 exit + content intake | Aditi confirms biography, skills, dates, resume, public contact and project claims; no placeholder copy |
| P5.2 Featured-demo presentation review | NOT STARTED | Project media/access supplied | Recheck Pathwise profile/model status and restricted visitor access; verify TrafficIQ startup/workflow; identify MarketMind local interface; truthful alternatives if unavailable |
| P5.3 Choose/configure release hosting | NOT STARTED | Q-02 hosting resolution, P4 exit | Document provider and direct-route fallback; no hosting provider assumed in this document stage |
| P5.4 Validate release candidate | NOT STARTED | P5.1–P5.3 | V-01–V-12 evidence, correct URLs, metadata identifying Aditi's portfolio, no credentials, readable failure states |
| P5.5 Publication handoff | NOT STARTED | P5.4 | Reviewable release candidate and deployment action clearly in scope before publishing |
| P5.6 Post-publication verification | NOT STARTED | Explicitly authorized publication | Public welcome and project deep links load; contact/resume work; history records URL, date, checks and remaining limitations |

Do not interpret P5 as current deployment authorization. Do not publish demo admin credentials, silently repair third-party projects, or expose private data to obtain better screenshots.

## Test and acceptance traceability

| Requirement group | Primary tasks | Evidence to record |
| --- | --- | --- |
| Welcome/direct Projects | P2.2, P2.8 | P-01/P-02; exact copy and one-activation Projects route |
| Project URLs/return state | P2.6–P2.8, P3.7 | P-03/P-07; direct refresh, browser Back, explicit return |
| Signature animation | P2.5, P4.2 | P-04; first entry, return, skip, reduced motion |
| All five locations/real content | P3.1–P3.8 | V-01–V-04; accurate chapter fields and publication content |
| Responsive/browser | P2.7, P4.6 | P-06, V-05/V-09; viewport/browser versions and screenshots |
| Accessibility | P2.4/P2.8, P4.4 | P-05, V-06/V-07; automated plus manual checks |
| Performance | P1.7, P4.5 | V-08; tool/profile, compressed transfers, median lab results |
| Asset originality/credential safety | P1.2, P4.1, P5.4 | V-11/V-12; provenance and content inspection |
| Error/fallback behavior | P2.7/P2.8, P5.4 | P-08/V-10; missing media, route fallback, external demo unavailability |

No fixed calendar estimates are justified yet. Artwork/sample production and responsive composition carry the most uncertainty. Reduce peripheral polish before reducing accessibility or professional content.

## Future backlog — DEFERRED

Optional movement, deer/fluffy-cat residents, more complex bunny interactions, deeper interiors, small easter eggs, optional sound off by default, and possible seasonal variations. No planned phase depends on these. Adding one requires a separate scope decision after V1 works.

## Documentation maintenance

After each phase or significant change: update task statuses here; append actual outcomes and next task in history; change PRD only for product decisions; revise design system for accepted visual/token changes. Keep exact tagline, project statuses, pending questions and V1 boundaries aligned across all four files.
