# Aditi's Adventure — Product Requirements Document

Status: Product-definition baseline; implementation has not started.  
Created: 2026-09-13. Document set finalized: 2026-09-14. Owner: Aditi. Release: compact V1, no fixed deadline.

This document defines WHAT to build and WHY. It derives from the completed brainstorming conversation and subsequent project/demo review. It does not authorize implementing or publishing the site. The [master roadmap](docs/PORTFOLIO_MASTER_ROADMAP.md) defines delivery work; the [design system](docs/DESIGN_SYSTEM.md) defines visual rules; [project history](docs/PROJECT_HISTORY.md) records state and evidence.

## Decision provenance and interpretation

User selections take precedence over earlier suggestions. A requirement marked **confirmed** reflects an explicit choice or a repeatedly accepted direction. **Strong preference** guides design without making every example mandatory. **Optional** is polish within the existing concept. **Future** is excluded from V1. **TBD** is unresolved. Numeric test targets and data-field definitions below are product-definition baselines introduced to make the selected experience verifiable; they are not presented as verbatim brainstorming decisions.

| Classification | Extracted decisions |
| --- | --- |
| Confirmed | Aditi's Adventure; exact artistic welcome line; separate welcome screen; human Aditi avatar with pet bunny; holding bunny on welcome and nearby elsewhere; host rather than movable player in V1; elevated illustrated 2D world; central plaza; five locations; Adventure Board name; notebook menu; projects on shelves; bunny-delivered Things I've Built album; project chapters with URLs; cozy personal Cottage; skill seed packets; grouped milestone notices; Strawberry Cream; chunky/blocky illustration; vertical mobile village; gently alive atmosphere; compact complete V1; content may arrive later. |
| Strong preferences | Pink-led warmth; clear cocoa outlines; handmade detail; Workshop prominence; painting/crafts/tennis/candles in the Cottage; gentle bunny grooming and curiosity; professional content and direct navigation above game mechanics. |
| Optional within V1 | Personal-object notes, candle glow, cloud/flower movement, butterfly encounter, decorative paper texture, extra contextual avatar poses. None is a prerequisite for reading content. |
| Future/V2 | Optional character movement, click-to-walk/WASD, deer and fluffy cat residents, richer interiors, additional bunny/bug behaviors, small easter eggs, optional sound off by default. |
| Unresolved | Exact fonts, final hex tokens, bunny markings/accessories/name, art-production method, hosting, final contact method, missing personal content, public demo access. Local implementation stack was resolved in P1.1; see section 39. |
| Rejected/superseded | Animal-only protagonist; bunny held in every scene; strict top-down/isometric/platform world; river/bridge as the main layout; immediate village or embedded welcome replacing the title screen; pinned project sheets/cards as the main Workshop metaphor; skills hidden behind mystery plants; freeform cluttered notice board; required game movement; tiny scaled-down mobile map; branch/degree-led welcome copy; generic dark/cyberpunk/desktop/8-bit styling; copied reference/game assets. |

### Resolved interpretation conflicts

1. Early welcome suggestions included a degree/professional subtitle. The user replaced this with artistic copy. Academic and career context belongs in About and project content, not a compulsory welcome subtitle.
2. The Workshop was initially proposed as cards or pinned sheets. The user selected shelves and a delivered book. The collection can contain readable project entries, but its primary presentation must remain the album and shelves.
3. Early skills suggestions mentioned revealing names on tap. The selected packets must expose names before interaction; taps may reveal evidence or details.
4. A full book event on every visit was refined to a first-visit delivery and a ready album on return, accepted by the user. Animations must never gate access.
5. The gentle-animation direction is confirmed; every proposed idle behavior is not a mandatory launch deliverable. Grooming is the initial idle candidate; butterfly and bug scenes remain lower priority.
6. The user built all three projects solo. Two have hosted URLs; MarketMind is local. Runtime observations qualify demo readiness, not authorship.
7. Direct email/social links were recommended, but the user selected the palette in that exchange rather than explicitly choosing contact functionality. Links-only is a proposed default, not a settled form requirement.

## 1. Product Overview

Aditi's Adventure is a professional personal portfolio presented as an original cute pastel game-like village. A small illustrated world hosts About, Projects, Skills, Experience/Achievements, Resume, and Contact. The experience layer creates recognition and personality; the professional layer supplies clear evidence of Aditi's work.

One shared content model serves exploration and direct navigation. These are two ways into the same portfolio, not separately maintained websites.

## 2. Product Vision

Visitors should feel invited into Aditi's own cozy universe, recognize her avatar and bunny, and discover substantial technical projects underneath the playful presentation. The world should feel warm, handmade, and intentional. A visitor evaluating work must be able to bypass the exploration journey immediately.

Aditi is studying Electronics and Telecommunications engineering and pursuing full-stack roles. This guides project emphasis and About content, without dictating the artistic welcome wording. Do not invent an institution, graduation date, job title, or employment history.

## 3. Product Goals

1. Make Aditi and her work memorable through an original world and recognizable host/companion.
2. Demonstrate full-stack capability through understandable problems, contributions, architecture, screenshots, and evidence.
3. Express painting, arts and crafts, tennis, and affection for animals through intentional details.
4. Encourage voluntary discovery while retaining immediate Projects, Resume, and menu access.
5. Provide thoughtful desktop, tablet, and mobile experiences.
6. Keep essential content accessible, readable, and usable while assets load or motion is reduced.

Priority order: access to content, strong pastel identity, original avatar/bunny/world, exploration, then decorative polish.

## 4. Non-Goals

The portfolio is not a commercial village simulator, a large game, a visitor-account product, or a replacement for the featured applications. It does not need a portfolio backend merely because Aditi is seeking full-stack roles. It will not repair or redeploy Pathwise, TrafficIQ, or MarketMind as part of building the portfolio. Their readiness issues are tracked separately.

Do not transform the project into a corporate template, dark neon dashboard, retro operating-system desktop, full 8-bit RPG, or copied game world. Section 34 defines explicit V1 exclusions.

## 5. Target Users

| Visitor | Need | Product response |
| --- | --- | --- |
| Recruiter / internship or employment reviewer | Understand work, contribution, and availability quickly | Direct Projects/Resume; concise summaries and contact |
| Developer / technical reviewer | Inspect implementation decisions and boundaries | Project chapters, architecture, repository links, honest limitations |
| Hackathon judge | Understand problem, originality, solo contribution, and demonstrated outcome | Clear case-study structure and recorded/live evidence |
| Teacher | See engineering learning, scope, and reflection | Education context, decisions, and lessons without invented grades |
| Potential collaborator | Understand interests and reach Aditi | Personal Cottage, project interests, explicit contact actions |
| Student / designer / casual visitor | Enjoy the world and learn about its creator | Optional exploration, original artwork, easy navigation |

## 6. Design Inspiration

| Reference | Intended influence | Exclusions |
| --- | --- | --- |
| [Lily Oglesby](https://lilyoglesby.com/) | Portfolio-as-world and direct-access alternative | No copied map, sprites, code, battles, or onboarding sequence |
| [Rose Dryad](https://rosedryad.com/) | Strongest atmospheric reference: pastel, fairy-like, handmade scenery | No copied artwork/layout or fixed-desktop-only assumptions |
| [Strawberry Reverie](https://strawberryreverie.neocities.org/) | Recognizable character identity integrated into the site | No copied characters/art; current homepage differs from the earlier reference experience |
| Animal Crossing emotional influence | Peaceful village, friendly animals, rounded welcoming environment | No characters, sprites, logos, fonts, UI, music, sound effects, backgrounds, or other game assets |

All new character, environment, and custom interface artwork must be original. Real screenshots of Aditi's projects remain factual project media. Use appropriately licensed fonts and tools; record asset provenance.

## 7. Design Principles

- Content access never depends on movement, precise clicking, dialogue, sound, or discovery of hidden objects.
- Important text is selectable HTML, including labels over illustrated signs.
- A consistent interactive treatment distinguishes destinations from scenery on touch and keyboard as well as mouse.
- The world supports professional reading: quiet backgrounds and generous content space.
- Return visits preserve context; routine navigation does not replay long introductions.
- Personality comes from Aditi's interests and the bunny's behavior, not unrelated stickers.
- Mobile is recomposed, not miniaturized.
- Art and motion must earn their loading and maintenance cost.
- Do not invent achievements, project metrics, employment, proficiency scores, or demo verification.

## 8. Final World Concept

**World name:** Aditi's Adventure.  
**Exact welcome line:** “A little world of things I build, ideas I explore, and things I love.”

The world is a compact, cozy village representing where Aditi builds, learns, reflects, and shares. Visitors are guests. A short winding loop connects five destinations around a central plaza. The Workshop is visually prominent and close to arrival. Aditi and her bunny appear by the plaza on entry.

Perspective is gently elevated illustrated 2D: visible building fronts and expressive characters, without strict isometric geometry. Pink, cream, plants, cottages, paths, and warm wood establish the atmosphere. Exact coordinates and the plaza's decorative centerpiece are TBD; a fountain was only an example, not a requirement.

## 9. Mascot and Human Host

### Confirmed human-avatar identity

A stylized Aditi with long layered brunette hair, glasses, pink headphones, a preferably black sleeveless high-neck top, flared blue jeans, dark sneakers, and a pale warm/yellowish skin tone. Preserve these identifying features when simplifying at small scale. Exact face, proportions, glasses shape, and illustration colors require an art sample; do not invent a photo likeness.

### Bunny companion

Species is bunny; appearance is fluffy. Aditi holds it on the welcome screen. In other scenes it may rest nearby or perform an appropriate action. It is a pet companion, not a second human protagonist or compulsory tutorial guide.

Personality direction: curious, affectionate, gently playful. Expression candidates: ear tilt, blink, attentive gaze, sleepy rest. The Workshop delivery is its signature function. Bunny color, markings, name, bow/collar/satchel, and precise expressions are TBD. None of the suggested accessories was finalized.

### Motion and restrictions

V1 contains a short album delivery and a restrained idle repertoire, with grooming as the first behavior to explore. A butterfly encounter is optional polish; further bug-chasing/shooing behavior is future polish. No combat system, autonomous following, required dialogue, or character controls. Keep static equivalents for reduced motion and asset failure.

## 10. Information Architecture

| Content destination | World representation | Direct access |
| --- | --- | --- |
| Welcome | Separate title scene | Welcome/Home entry |
| Main World | Central plaza and locations | Village entry |
| About | Aditi's Cottage | About |
| Projects | Project Workshop and album | Projects |
| Individual project | Expanded project chapter | Stable project URL |
| Skills | Skills Garden potting bench | Skills |
| Experience / education / achievements | Adventure Board | Experience & Achievements |
| Resume | Visible action plus Cottage folder | Welcome and menu Resume |
| Contact | Mailbox letter | Contact |

Exact pathname spellings are an implementation detail; stable slugs and direct project deep links are required. Main navigation and world entry points resolve to the same content. Do not maintain duplicate records or descriptions.

## 11. World Locations

### 11.1 Aditi's Cottage

- **Purpose:** Introduce Aditi, her interests, education, direction, and resume.
- **Content:** About, what she enjoys building, full-stack goals, painting/crafts/tennis, confirmed education details, resume and GitHub.
- **Visual metaphor:** One cozy pastel room vignette with an already-open personal journal, creative desk, window corner, art supplies, paintings, tennis racket, and warm candles.
- **User interactions:** Open Cottage; read journal; access resume/GitHub; return. Personal objects may reveal short optional notes.
- **Required UI:** Heading, readable biography, explicit links, return control, notebook menu.
- **Optional decoration:** Sketchbook artwork, racket note, candle glow, curtains, plants, bunny rug. Full walkable interior is excluded.
- **Mobile:** Room illustration above normal-flow journal text; no text embedded inside a tiny desk image.
- **Accessibility:** Optional objects use labeled controls; decorative scenery is ignored by assistive technology; journal is readable without object exploration.

### 11.2 Project Workshop

- **Purpose:** Showcase completed and in-progress work professionally.
- **Content:** Project collection and chapters with accurate implementation status, contribution, stack, media, and links.
- **Visual metaphor:** Projects on shelves; bunny delivers the album **Things I've Built** to a workbench. The album opens into a browsable collection.
- **User interactions:** Select Workshop, optionally observe/skip delivery, scan entries, select a project, open repository/demo, return.
- **Required UI:** Labeled album/project entries, readable summaries, chapter links, return controls, meaningful loading/error/missing-media states.
- **Optional decoration:** Tools, sketches, shelf props, small return greeting; no mandatory interaction with each prop.
- **Mobile:** Single-column album reading with normal vertical scrolling; shelves stay recognizable but never squeeze content.
- **Accessibility:** Album opens without pointer choreography; keyboard can skip delivery and select entries; no drag-only page turns.

### 11.3 Skills Garden

- **Purpose:** Make Aditi's capabilities and supporting project evidence easy to inspect.
- **Content:** Confirmed skills grouped into relevant categories; technology names visible immediately.
- **Visual metaphor:** Illustrated seed packets on a potting bench with category signs and surrounding beds.
- **User interactions:** Read all names; optionally open evidence/details or a related project.
- **Required UI:** Category headings, technology labels, optional evidence links, return and menu.
- **Optional decoration:** Plants, soil tools, flowers and small environmental motion.
- **Mobile:** Packets reflow into readable rows or a single column; avoid tiny labels or horizontal dragging.
- **Accessibility:** No hover-only names, mystery icons, color-only categories, or plant heights used as proficiency ratings.

### 11.4 Adventure Board

- **Purpose:** Present education, experience, achievements, competitions, and certificates.
- **Content:** Only categories with real records; each entry has title, organization/event, dates, role where applicable, and contribution/outcome.
- **Visual metaphor:** Neatly grouped pinned notices on warm wood with restrained handmade flower details. A descriptive subtitle identifies Experience & Achievements.
- **User interactions:** Scan essential facts and open supporting detail/credential links.
- **Required UI:** Category labels, ordered cards, dates, clear links, return/menu.
- **Optional decoration:** Pins, ribbon accents, a single settling note; no cluttered scrapbook reading order.
- **Mobile:** Cards stack by category; chronology is preserved within categories.
- **Accessibility:** Semantic headings/lists, readable date text, logical focus order, no important information in image-only certificates.

### 11.5 Mailbox

- **Purpose:** Let visitors contact Aditi or view professional profiles.
- **Content:** Approved public contact information only.
- **Visual metaphor:** Mailbox opens into a letter, with a brief flag/envelope interaction.
- **User interactions:** Open contact, choose an explicitly named action, return.
- **Required UI:** Contact heading, public actions once supplied, useful copy/open feedback, return/menu.
- **Proposed default/TBD:** Email Aditi, visible email, Copy Email, LinkedIn and GitHub; final contact mechanism awaits confirmation. A form is not an approved V1 requirement.
- **Optional decoration:** Flowers, envelope details, a small bunny pose. “Say hello” and “Send a Letter” are candidate copy, not fixed final labels.
- **Mobile:** Letter occupies available reading width; actions have comfortable targets.
- **Accessibility:** Letter text is HTML; copied state is announced; icons supplement action names; animation is unnecessary to reach links.

## 12. Landing Experience

The canonical homepage is a separate game-like welcome scene. It shows a pastel sky, a distant glimpse of the village, the exact world title and welcome line, and a prominent Aditi holding her bunny.

Primary action: **Enter My World**. Secondary actions: **View Projects** and **Resume**. A clearly labeled Menu opens the notebook. Do not insert the branch-led subtitle rejected during brainstorming.

Enter My World triggers a brief soft fade into the plaza. Direct project/section links bypass this transition. No autoplay audio, setup wizard, forced device selection, required mascot dialogue, or artificial loading countdown. Controls remain usable as nonessential artwork loads.

## 13. First 10 Seconds

This is an immediate-comprehension goal, not a timed animation script. Visitors should identify Aditi, recognize portfolio access from View Projects/Resume, understand that Enter My World explores the village, and see an alternative Menu.

Once the initial interface is rendered, Projects and Resume each require one activation from Welcome. No animation or assets may deliberately add a ten-second wait. The welcome may have one restrained gesture; nothing automatically changes the visitor's destination.

## 14. Explore Mode

V1 uses direct click/tap/keyboard activation of locations. Aditi is a host in composed scenes. Location labels remain visible; hover/focus adds feedback rather than revealing the only label. No precise movement, collision detection, joystick, click-to-move, WASD, or pathfinding is required.

After a section or chapter, explicit return controls restore the relevant collection/map context. Return from a project to Workshop keeps the album open and restores the previous reading position where practical. Returning to Village does not replay Welcome.

## 15. Quick Portfolio Navigation

A persistent, safely inset **Menu** control opens an adventure notebook. Planned placement is a consistent viewport corner that does not cover content, keyboard focus, or mobile browser controls; exact side is a layout detail to validate.

Entries: Welcome, Village, About, Projects, Skills, Experience & Achievements, Resume, Contact. Desktop uses a compact readable panel; mobile uses a full-width panel within the viewport. The same destinations and labels are available across modes.

If presented as a modal, opening moves focus inside, Escape closes, background controls are not reachable, and closing restores focus to the opener. Clearly distinguish navigation links from close/toggle buttons. Do not expose a backpack-only or icon-only ambiguous menu.

## 16. Project Workshop Content

The shelf/album metaphor is fixed; individual entries must still support scanning. Each entry includes title, short purpose, relevant screenshot/preview, concise solo contribution, main technologies, and a chapter link. Repository and hosted-demo actions are explicit where available. Long feature lists and technical explanation belong in chapters.

### Initial project inventory and evidence

All three are solo projects according to Aditi. Suggested order is Pathwise, TrafficIQ, MarketMind; final ordering can follow verified presentation readiness without changing the collection concept.

| Project | Verified source / supplied demo | Content boundary |
| --- | --- | --- |
| Pathwise | [Repository](https://github.com/Aditiiiii1291/Pathwise), [hosted demo](https://pathwise-1-sibf.onrender.com) | Student-support platform; React/FastAPI/data/auth/assessment/intervention source reviewed. Login, overview and interventions loaded during browser review. Student profile failed with missing trained-model artifact. The observed 500-record cohort is demonstration evidence, not 500 real users or proven retention impact. |
| TrafficIQ | [Repository](https://github.com/Aditiiiii1291/TrafficIQ), [hosted URL](https://ai-emergency-vehicle-priority-system.onrender.com) | Traffic-video analytics and simulated emergency-priority recommendations. Current code includes React/TypeScript, FastAPI, database integration and CV processing. Hosted visit remained on Render startup; workflow not runtime-verified. README contains outdated architecture statements and inconsistent test counts. No claim of actual traffic-light control. |
| MarketMind | [Repository](https://github.com/Aditiiiii1291/MarketMind); local demo per Aditi | Customer-review analytics and concept simulation. Backend, React auth/dashboard, and Streamlit prototype present. React Products, Uploads, Analysis are placeholders in reviewed public code. Identify the local interface being demonstrated before writing final workflow claims. No hosted Live Demo button. |

Repository source review is not a full runtime test, security audit, or proof of business outcomes. No project tests were executed in this portfolio planning workspace. Account credentials supplied for inspection must not appear in documents, content, screenshots, or public demo instructions.

## 17. Project Detail

Each project opens as a chapter with a stable shareable URL and a full reading view styled as an expanded workshop document. Direct visits render the chapter without Welcome, map traversal, or album delivery. Deep-link refresh must work on the eventual host.

Structure: at-a-glance summary and links; problem and intended users; solution/features; personal contribution; architecture and important decisions; screenshots; results with evidence; limitations and lessons. Allow shorter chapters for smaller projects. Do not invent metrics to fill a template.

Desktop may use chapter framing/bookmarks; body content must not be constrained to a tiny book spread. Mobile is continuous vertical reading. Provide Back to Workshop and Menu. A direct visitor's return control navigates deterministically to Workshop rather than depending solely on browser history.

## 18. About Experience

The Cottage journal introduces Aditi's engineering studies, full-stack interests, painting, crafts, tennis, and goals. Exact biography, degree dates, institution, and public full name beyond Aditi are content TBD.

Resume and GitHub are visible links; the document/computer objects offer optional duplicate entry points into the same destinations. A sketchbook may show supplied artwork, and a racket may reveal a short personal note. Do not make visitors search through furnishings for the main biography.

## 19. Skills Experience

Seed packets group technologies under categories that actually fit Aditi's confirmed experience, such as languages, frontend, backend, databases, tools, and AI/ML. A technology appearing in a dependency file is candidate evidence, not automatic personal proficiency. Confirm the final list with Aditi.

No percentages, stars, plant-growth levels, or unsupported expertise claims. Optional project references show use in context. Skills names remain visible before selecting a packet.

## 20. Experience / Education / Achievements

Adventure Board uses grouped notice cards. Proposed categories: Experience, Education, Achievements & Events, and a smaller Certificates collection where relevant. Include internships/work, hackathons, competitions and milestones only when supplied.

Within categories, use consistent date order. Essential facts are visible on the card; expanded details and credentials are optional. Omit empty public categories. Missing work experience is not a reason to fabricate entries or relabel coursework as employment.

## 21. Contact

The Mailbox opens a readable letter. Contact labels must explain the actual destination: Email, Copy Email, LinkedIn, GitHub. These constitute the proposed links-only V1 default, pending the explicit choice in Q-01.

Do not build a contact form, inbox, mail delivery service, or visitor account without resolving Q-01 and documenting scope impact. Public contact values are content TBD. Do not use demo credentials or infer a public email from usernames.

## 22. Desktop Experience

Large desktop: composed plaza with all five destinations identifiable in the principal map area, Workshop prominent and labels legible. Limit world width rather than stretching illustrations indefinitely. Content chapters use a readable text measure.

Normal laptop: reduce peripheral scenery and gaps before shrinking text/targets. If the plaza cannot retain readable destinations, switch to the vertical layout. Keyboard focus and the Menu must not be obscured by fixed artwork.

## 23. Tablet Experience

Wide tablets may retain a compact plaza; narrow tablets use the vertical village. Touch activation is primary and labels do not depend on hover. Portrait/landscape changes preserve the current destination and content. Album spreads collapse before columns become narrow. No forced landscape-orientation prompt.

## 24. Mobile Experience

Maintain the separate Welcome, with avatar/bunny, title, exact line, Enter My World, Projects and Resume. Allow normal scrolling on short screens rather than clipping controls to a fixed viewport height.

After entry, the plaza introduces a vertical path. Planning order: Workshop, Cottage, Skills Garden, Adventure Board, Mailbox. This is presentation order, not a required progression. Menu provides every destination immediately.

Buildings and labels become large tap destinations. No map dragging or joystick. Interiors sit above content; project chapters, journals, letters, packets, and notices reflow into normal reading layouts. Simplify background props and tiny animation before reducing legibility. Keep avatar identity and bunny recognizable.

Return navigation restores village/collection scroll position. Support small widths, browser zoom, and dynamic browser controls. External demos open through explicit links rather than embedded applications that could slow the portfolio.

## 25. Typography

Confirmed direction: chunky/blocky/cute display lettering; strong readable labels; clean body text. Use at most two font families as the initial design-system baseline: one display and one readable family with weights for UI/body. Actual families and licensing are TBD.

Do not use pixel fonts for paragraphs, long all-caps descriptions, or proprietary game fonts. Starting body baseline is 16 CSS px with approximately 1.5–1.7 line height; text remains resizable and never baked into art. Exact scale is defined as provisional in the design system.

## 26. Color Direction

Strawberry Cream is confirmed; individual hex shades were proposed but not visually finalized. Pink is primary for focal accents, cream for paper/backgrounds, lavender/blue/sage/peach for supporting scenery, cocoa for readable text/outlines, warm brown for wood.

Candidate tokens and measured flat-color ratios are in the design system. Do not assume pastel-on-pastel text is readable. State changes need text/shape as well as color. Final token acceptance requires inspecting the actual components and images.

## 27. UI Language

Use rounded cream surfaces, chunky cocoa borders, softly squared forms, tactile controls, restrained shadows, and occasional flowers/stars/paper details. Each metaphor shares control anatomy, spacing, text hierarchy, and navigation conventions.

Signs retain visible HTML names. Hover/focus indicates usefulness; decorative objects do not impersonate controls. Focus is more than a subtle glow. Pressed feedback is brief and does not move a target away. Speech bubbles are short, nonessential, and never recurring blockers.

Loading, missing media, unavailable demo, and empty-content states are plain and useful. Never show a fake functional button for missing content. A draft may mark content pending; a public release must not expose broken Resume/Contact actions.

## 28. Animation Requirements

### Required V1 behavior

- Brief Welcome-to-Village transition, with an immediate reduced-motion equivalent.
- Bunny delivery of Things I've Built on the first Workshop visit in a browsing session, immediately skippable; repeat visits show the open album. This session policy is the initial implementation baseline for the accepted first-visit behavior.
- Mailbox/letter opening feedback, with content accessible without waiting.
- Clear interaction state feedback and a restrained bunny idle behavior. Grooming is the selected first design candidate; exact frames remain artwork work.

### Optional polish

Cloud drift, a swaying flower patch, candle glow, a butterfly encounter, a small return greeting, subtle sign movement, extra avatar gestures. Keep quiet intervals and avoid simultaneous motion around reading content.

### Future

More complex bug/butterfly pursuit, autonomous residents, walking loops tied to movement, richer room transitions, and optional audio. No combat/battle system.

Respect system reduced motion. Stop nonessential offscreen/background-tab animation. If continuous ambient animation is implemented, provide a discoverable pause control. Content must not depend on an animation-completion event to become available.

## 29. Accessibility Requirements

Operational target: WCAG 2.2 AA for the implemented experience; do not claim conformance before evaluation.

- Semantic headings, landmarks, links and buttons; a skip-to-content route; logical reading/tab order.
- Keyboard access to every important action, visible unobscured focus, and correct focus handling for notebook/other dialogs.
- Ordinary text contrast at least 4.5:1; large text at least 3:1. Interactive boundaries and focus treatments remain distinguishable against their actual surroundings. See [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- Aim for at least 44 × 44 CSS px for primary touch controls and destination hit areas as a project usability target, not a claim that WCAG AA universally requires 44 px. Smaller inline links must still meet applicable spacing/target rules. See [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- Useful alternatives for informative project images; decorative images have empty alternatives or are hidden from assistive technology. Do not read out every leaf and flower.
- Readable HTML content outside scenery/canvas, text resizing, reflow, no hover-only information or color-only meaning.
- Honor reduced motion, offer pause for sustained ambient movement, no flashing or required sound.
- Loading and copy confirmations are announced without repeatedly interrupting reading.

## 30. Performance Requirements

Optimize raster art to suitable modern formats and viewport sizes; use SVG for appropriate simple/scalable shapes and interface assets, without forcing every textured illustration into a complex SVG. Separate essential art from background details. Avoid a single enormous composite image containing UI text.

Load initial content and main navigation first. Defer project galleries, other interiors, and nonessential animation. Reserve image dimensions to prevent layout shifts. Avoid large animation video/GIF files and unnecessary game-engine dependencies. Use shared props and font subsets where appropriate.

Initial engineering budgets: no more than 1.5 MB compressed first-view transfer including essential welcome art/fonts/code; no more than 250 KB compressed initial JavaScript. These are testable planning targets, to validate against the first art sample; a justified change must be recorded rather than silently waived.

Target LCP ≤2.5 s and CLS ≤0.1 in documented representative mobile testing; target INP ≤200 ms when field measurement exists. [Web Vitals](https://web.dev/articles/vitals) defines the metrics; lab checks before launch are not equivalent to field certification. The eventual roadmap defines a repeatable test profile. Hosted project cold starts must not delay the portfolio itself.

## 31. Content Requirements

| Content | Available | Still needed / release treatment |
| --- | --- | --- |
| Identity | Aditi, avatar description, final title/tagline | Preferred full public name and final biography |
| Background | Electronics and Telecommunications studies; full-stack direction | Institution, degree dates, graduation, opportunity wording |
| Interests | Painting, crafts, tennis, cozy pastel room | Optional artwork/photos and personal notes |
| Resume | Required action selected | Actual approved resume file; publication gate |
| Projects | Three solo projects, repositories, two hosted URLs, one local demo | Final descriptions, decisions/challenges, truthful results, screenshots, updated verification |
| Skills | Candidate technologies observed in projects | User-confirmed claims and evidence links |
| Board | Education category relevant | Exact education and any genuine work/events/certificates |
| Contact | GitHub supplied | Approved public email/LinkedIn and Q-01 resolution |

Content can arrive in stages and does not block document creation. Clearly marked draft placeholders are permitted during preparation; do not invent values. Missing optional categories are omitted at launch. Resume, working public contact, and sufficient real project content are release gates.

## 32. Data Requirements

These are content contracts, not a prescribed database or implementation language. Maintain one source of truth for each record. A static collection is sufficient unless later needs justify more.

### Project record

| Field | Requirement |
| --- | --- |
| id, slug | Required stable unique identifiers; slug supports a direct URL |
| title, summary, fullDescription | Required accurate content; summary suitable for album scanning |
| problem, solution, contribution | Required; contribution records solo ownership plus specific work |
| technologies, features | Required arrays of actual implemented items; distinguish planned work |
| architecture, decisions, lessons | Required substantive chapter material before publication, proportionate to project |
| result, limitations | Required honest account; result may be qualitative; metrics need evidence |
| screenshots | Required useful preview before launch; each has src, alt, caption, optional width/height |
| githubUrl | Required for these three public repositories |
| demo | Type: hosted/local/none; optional URL and walkthrough URL; access note; verification status, date and limitations |
| implementationStatus | Description grounded in current version; independent of whether it is hosted |
| featuredOrder | Explicit ordering, not inferred from repository update time |
| evidence | Sources/date for claims, measurements, screenshots or known demo issues; never credentials |

### Other records

- **Skill:** id, name, category, optional projectIds and description; no numerical proficiency.
- **Milestone:** id, type, title, organization, start/end/date as applicable, role, summary, contribution/outcome, optional credentialUrl/media, displayOrder. Missing dates must not be fabricated.
- **Profile:** displayName, biography, education references, interests, goals, resume asset, approved public links.
- **Contact link:** type, visibleLabel, destination, optional public display value; no authentication secrets.
- **World location:** id, label, descriptiveName, destination, asset reference, optional short description; desktop/mobile order may differ while content IDs remain stable.
- **Asset metadata:** id/path, role, creator/source, usage rights, variants, dimensions, alt/decorative designation, motion/still relationships.

## 33. V1 Scope

Compact but complete: separate Welcome, one plaza, five location experiences, personalized host and bunny, direct navigation, three project chapters, resume access, contact, and responsive layouts. One composed Cottage interior and Workshop shelf/album scene suffice; no multiple-room production.

Accessibility, accurate content, basic error states, deep-link hosting behavior, media optimization, and a small animation set are part of V1 rather than later repairs. The local stack is recorded in the P1.1 technical approach; art tooling remains open. No calendar deadline is imposed.

## 34. V1 Non-Goals

- Free movement, WASD, click-to-walk, joystick, collision/pathfinding/physics.
- Large map, full interiors for every building, or multiple explorable rooms.
- NPC dialogue systems, autonomous animal populations, combat or bug battles.
- Collectibles, visitor achievements, multiplayer, visitor registration/accounts.
- Seasonal worlds, elaborate easter eggs, sound/music, or headphone audio controls.
- Mandatory page-turn gestures, hidden skills, hidden resume/contact, repeated blocking intros.
- A contact form unless Q-01 changes scope; a CMS/admin panel without an established need.
- Fixing/redeploying featured applications as part of portfolio implementation.

## 35. Future / V2

Relevant optional ideas: character movement if still desired, deer and very fluffy cat residents, more bunny antics, richer Cottage/Workshop interiors, small easter eggs, optional sound off by default. Seasonal variants were discussed only as future possibilities, not committed features.

Future work must preserve direct content access, mobile usability, and original identity. These are not backlog promises or prerequisites for launch.

## 36. First Playable Prototype

Prove one complete journey using **Pathwise** as the initial real chapter, with honest demo status and useful project media:

Welcome → Enter My World → minimal plaza → Workshop → bunny album delivery → Pathwise chapter → GitHub / explicitly labeled hosted demo → Back to Workshop → Village.

Also prove Welcome → View Projects → same album/chapter, and direct chapter URL → content without Welcome.

Include recognizable Aditi/bunny art, notebook menu, desktop and vertical mobile layouts, keyboard access, reduced-motion alternatives, and return position behavior. Other locations may appear as clearly marked prototype destinations; they must not pretend to be finished. A demo requiring login must disclose access requirements and offer screenshots; never publish admin credentials.

The prototype succeeds by validating the selected visual/content/navigation approach, not by completing all five location interiors. A visual sample can precede coding; implementation starts only after this document set is accepted as accurate.

## 37. Acceptance Criteria

The following turn the brainstorm into measurable product-definition criteria.

### Prototype

| ID | Check |
| --- | --- |
| P-01 | Welcome shows the exact title/tagline and working Enter My World, View Projects, Resume treatment appropriate to draft availability, and Menu. No invented resume or broken placeholder link. |
| P-02 | Both prototype journeys in section 36 work. Projects is one activation away from Welcome; no mandatory animation wait. |
| P-03 | One real project chapter has a stable URL, refreshes directly, contains required verified content, and links to its correct repository. Demo status/access is accurate. |
| P-04 | First Workshop entry offers the bunny delivery; it can be skipped. Return entry exposes the album immediately. Reduced motion bypasses the sequence. |
| P-05 | Keyboard reaches every implemented action; notebook opens/closes correctly and restores focus. No trap outside a properly implemented modal. |
| P-06 | At 360×800, 768×1024 and 1366×768 CSS px, no essential text/control is clipped or overlapped; no unintended horizontal page scroll. |
| P-07 | Return to Workshop/Village restores context; browser Back and direct-entry return both lead somewhere useful. |
| P-08 | Implemented portfolio flows produce no uncaught JavaScript errors; unavailable external demos do not crash the portfolio. |

### Complete V1

| ID | Check |
| --- | --- |
| V-01 | All five locations work through the world and Menu. No unlabeled required hotspots or movement requirement. |
| V-02 | Pathwise, TrafficIQ and MarketMind have truthful chapters, previews, solo contributions and repository links. Hosted/local/verification status matches evidence. |
| V-03 | Resume and at least one public contact method work; draft placeholders and invented personal/achievement content are absent. |
| V-04 | Welcome remains separate; direct links bypass it; transitions are brief and skippable/instant under reduced motion. |
| V-05 | Test 320×568, 360×800, 390×844, 768×1024, 1024×768, 1366×768 and 1920×1080 CSS px, plus text zoom/reflow. Location labels, content, controls and focus stay readable and reachable. |
| V-06 | Body text meets contrast targets; primary targets meet the 44 px project goal; informative image alternatives and semantic headings are present. Perform automated and manual keyboard/screen-reader checks; resolve critical/serious findings. |
| V-07 | Reduced motion removes nonessential movement; sustained ambient motion can be paused; no audio is required. |
| V-08 | Initial transfer/JavaScript budgets and mobile LCP/CLS targets in section 30 are measured using a recorded profile. No offscreen project galleries load at startup. Record any approved budget revision. |
| V-09 | Current desktop Chromium, Firefox, Safari and mobile Safari/Chrome are checked where available; record actual versions and any untested platform rather than claiming universal compatibility. |
| V-10 | Direct project URL refresh, invalid-route recovery, missing-image fallback, browser Back, and navigation after failed demo access work on the chosen host. |
| V-11 | Asset provenance is recorded; custom art is original and no reference/game assets are copied. |
| V-12 | No credentials are in site content or documentation. Demo access is deliberately approved for public use. Content remains evaluable independently of demo availability. |

## 38. Risks

Likelihood/impact are planning judgments, not measured probabilities.

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Art styles diverge | High | High | Avatar/bunny/building sample sheet before bulk asset creation; shared outlines/perspective |
| Decoration consumes the project | High | High | Prototype with real content first; explicit polish backlog and V1 boundaries |
| Mobile loses clarity/charm | Medium | High | Recompose alongside desktop; evaluate labels and hit areas at smallest sizes |
| Professional content is buried | Medium | High | Direct navigation, scannable chapters, screenshots and visible contribution |
| Large imagery/animation slows entry | Medium | High | Budgets, asset variants, lazy loading, still alternatives |
| Animation becomes repetitive or inaccessible | Medium | Medium/High | First-visit policy, pauses, reduced motion, motion-free content access |
| Content/claims are overstated | Medium | High | Evidence fields, confirmed skills, no invented metrics, separate source/runtime findings |
| Demos fail or require privileged access | Medium | High | Media alternatives, verification before publication, separate restricted public access |
| Books/panels break navigation | Medium | High | Stable chapter URLs, state restoration, keyboard/dialog tests |
| Missing personal material delays publication | Medium | Medium | Stage content intake; mark draft gaps; explicit release gates |

Known featured-project issues are recorded in project history and are not authorization to modify those applications.

## 39. Open Questions

Settled identity/world decisions are closed. No unanswered question prevents these documents from existing.

| ID | Unresolved item | Timing / effect |
| --- | --- | --- |
| Q-01 | Confirm links-only Mailbox or explicitly request a form | Resolve before Contact implementation; proposed default is public email/copy/social links |
| Q-02 | Local prototype resolved by P1.1: React/Vite/TypeScript, HTML/CSS with layered images, React Router and typed static content; see [technical approach](docs/TECHNICAL_APPROACH.md). Eventual hosting remains open | Local architecture documented 2026-09-14; host and clean-route fallback configuration remain P5.3; no game engine |
| Q-03 | Choose art-production workflow; approve final avatar/bunny sample, fonts, and exact color tokens | Resolve before bulk art/component production; preserve confirmed appearance/style |
| Q-04 | Provide missing biography, dates, resume, public contact, skills and milestones | Staged content intake; required publication content is a launch gate |
| Q-05 | Clarify MarketMind's current local-demo interface/version; provide project media and final case-study evidence | Resolve before final project copy/media approval |
| Q-06 | Resolve Pathwise public-demo access/model issue and verify TrafficIQ workflow | Pre-launch presentation gate: repair separately or clearly provide non-live evidence and accurate status |

Next authorized deliverable after this PRD is the linked roadmap, design system and history. The next development-preparation task is defined in the roadmap; no portfolio implementation is part of this document-creation stage.
