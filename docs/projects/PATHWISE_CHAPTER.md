# Pathwise — P1.4 chapter preparation

Status: **DONE — content preparation only**. Prepared 2026-09-16.
Scope: one Pathwise chapter for the illustrated album. No portfolio code, packages, UI, routing, animation, gallery or other chapter. This document is the canonical Pathwise content/evidence record; other planning files link here.

Source project subtitle/alternate name: AI-Based Drop-Out Prediction and Counselling System (README, S01).

Authority: [PRD](../../PRD.md), [roadmap](../PORTFOLIO_MASTER_ROADMAP.md), [static content contract](../TECHNICAL_APPROACH.md). Aditi explicitly confirms end-to-end authorship. The latest user request authorizes P1.4 and supersedes the earlier “do not start P1.4” handoff.

## A. Evidence boundary and project status

**Status wording:** Full-stack student-retention prototype with a live deployment and a previously observed assessment limitation. Current authenticated assessment behavior remains unverified. Do not call it production-ready.

Primary implementation reviewed: public repository `Aditiiiii1291/Pathwise`, default branch `main`, pinned revision **b386704476c0b6aaffc4f6ddd69082bbe13054e1**, dated 2026-08-25. Repository metadata and public page were checked on 2026-09-16. A source archive was inspected in temporary storage; no Git commands, clone, checkout, application execution or package installation was used.

**Version distinction:** the existing local `C:/Users/saksh/Desktop/Pathwise` is a different foundation-stage version: its README describes a future closed-loop platform, its backend currently exposes a health endpoint, and its frontend is a Phase 1 shell. Its planned TypeScript/recommendation/case/audit features are not proof about the linked public prototype. This chapter describes the pinned public implementation, whose frontend uses JavaScript/JSX. Neither source tree was modified. Local execution of the public implementation was not verified.

“CONFIRMED” below means supported by inspected implementation or a specifically recorded HTTP observation, not every feature freshly runtime-tested. “PARTIALLY CONFIRMED” distinguishes code/metadata from unverified runtime behavior. “PLANNED / NOT IMPLEMENTED” identifies intent without an implementation in the reviewed revision. “UNKNOWN” is retained where evidence cannot settle the claim.

### Factual claim ledger

| Claim | Classification | Evidence and publication boundary |
| --- | --- | --- |
| Aditi built Pathwise end-to-end | CONFIRMED | Explicit user statement. Role is end-to-end developer/builder; no team allocation or unknown-contribution placeholder. |
| Student-support/retention prototype for technical institutes; hackathon/research context | CONFIRMED | S01 and implemented academic/risk/intervention flows. No specific event, award, institution, real adoption or retention improvement claimed. |
| React/Vite frontend, JavaScript/JSX, Tailwind CSS, Recharts | CONFIRMED | S02–S07: dependencies, routes, API-backed pages and chart usage. Do not mislabel this revision as TypeScript. |
| Python/FastAPI API, SQLAlchemy ORM | CONFIRMED | S08–S10, S22, S38 and ORM models S39–S41. API routes are wired, not just proposed. |
| Relational student, attendance, marks, fees, attempts, mentor, risk and intervention records | CONFIRMED | S10, S13, S39–S41 and imported related models. Risk snapshots retain rule score, ML probability, combined score, tier and trend. |
| SQLite default; PostgreSQL configuration support | CONFIRMED | S10 normalizes PostgreSQL URLs and uses dialect-specific connection settings; S08 includes the driver. Actual deployed database engine is UNKNOWN; deployment instructions do not prove the live database configuration. |
| CSV/XLSX ingestion, column mapping, validation and unified student histories | CONFIRMED | S11–S13: upload API, pandas parsing, validation and persistence, then ordered profile assembly. No upload was performed in this review. |
| Temporal attendance/marks/backlog features | CONFIRMED | S14 and S34; specific semantics/limits below. |
| Fee context, paid percentage and pending records | CONFIRMED | S14–S16. It produces administrative-verification signals, not a diagnosis of a student's finances. |
| Fee-overdue term count in routine assessments | PARTIALLY CONFIRMED | S14 computes overdue counts only with a reference date. S17 supplies one during training; S22 calls feature extraction without one, so overdue count remains zero there. Do not claim complete date-aware overdue analysis in the live assessment path. |
| Configurable deterministic risk rules | CONFIRMED | S15–S16: attendance, marks, backlogs, fees and trends; department configuration loading and weighted 0–100 score. These rules are not ML. |
| Random Forest classifier, 26 input features, probability output | CONFIRMED | S17–S19 and S44: training/inference code, saved metadata and a 333,705-byte committed model artifact. Artifact presence is verified; it was not deserialized/executed. |
| Synthetic training data and evaluation method | CONFIRMED | S17–S18, S27–S28: 500 generated students, stratified 80/20 split, 400 training/100 held-out records; development evaluation only. |
| Stored model accuracy and other metrics | PARTIALLY CONFIRMED | S18 records accuracy 0.87, precision 0.75, recall 0.8276, F1 0.7869 and ROC-AUC 0.9126. Training/evaluation was not rerun. Omit these numbers from recruiter copy; they are not institutional validation. |
| Combined rule/ML score and separate trend category | CONFIRMED | S20–S22: default 50/50 weighted combination, four score tiers, independent feature-based trend classification. A combined score is not a calibrated probability. |
| Student explanations and supportive recommendations | CONFIRMED | S23 derives student-specific factors from rules/features; global model importance is shown separately. This is template/rule-based explanation, not an LLM or student-specific SHAP analysis. |
| Dashboard, filters, student profile/charts | CONFIRMED | S04–S06, S38 and student endpoints: connected views for cohort/department risk, priority students and individual histories. Current authenticated runtime not retested. |
| Intervention records, status, notes, mentor link and follow-up dates | CONFIRMED | S07, S24, S41 and wired intervention API. |
| Before/after intervention assessment comparison | CONFIRMED | S25–S26: baseline/post snapshots, score change and awaiting/insufficient-data states. Observational comparison, not proof that counselling caused improvement. |
| Authenticated access and role checks | CONFIRMED | S03–S04, S11, S37; unauthenticated assessment returned HTTP 401 today. This is not a security audit or claim of comprehensive per-record authorization. |
| Notifications and optional SMTP dispatch | PARTIALLY CONFIRMED | S42 has in-app creation and conditional SMTP code. Live mail configuration/delivery unverified; omit email-delivery promises from chapter copy. |
| Automated test implementation | CONFIRMED | S33–S36 and additional backend tests cover features, inference, fusion, API/auth and integration. No test suite executed; do not repeat README's test-count/pass claim as verified. API TestClient integration is not browser end-to-end coverage. |
| Containerization and deployment integration | PARTIALLY CONFIRMED | S30–S32, S45–S46 provide Docker/Nginx/Render setup; live frontend/bundle and backend health responded. Exact deployed revision, container path and database configuration are unverified. |
| Downloadable CSV templates described in project roadmap | PLANNED / NOT IMPLEMENTED | S43 describes `data/templates/`; absent from the reviewed tree. Existing synthetic CSVs are distinct. Exclude from copy. |
| Local reconstruction's later case/recommendation/audit modules | PLANNED / NOT IMPLEMENTED | Local README and empty/foundation modules describe later work. Not part of this chapter's public revision. |
| Real-world predictive performance, improved retention, production readiness, current local full-stack execution | UNKNOWN | No suitable measured evidence or fresh execution. No fabricated claims. |

## B. Technical verification notes (editorial evidence, not all public copy)

### ML and temporal behavior

- **Training:** S17 uses `RandomForestClassifier` with 200 trees, max depth 8 and balanced class weights. A fixed seed and stratified 20% hold-out produce accuracy, precision, recall, F1, ROC-AUC and confusion matrix metadata. These are synthetic development results, not cross-institutional or prospective validation.
- **Source of labels:** S27 creates synthetic trajectories and probabilistic labels; data is not an institutional dataset. S17 reuses ingestion/profile/feature services and explicitly selects 26 numeric features, excluding identity, dropout label and trajectory type from inputs. This does not remove the limitations of synthetic data.
- **Inputs:** current/mean attendance, slopes, peak-to-latest declines, recent-versus-earlier attendance, consecutive declines, acceleration and history flags; normalized marks/current mean, slopes, relative change, failures/history; active/total/new backlogs, backlog trend and attempts; fee paid percentage, overdue and pending counts.
- **Attendance timing:** ordered weekly records feed slope/acceleration over record indices, not elapsed calendar intervals. Do not promise gap-aware time-series modeling.
- **Marks timing:** normalized subject scores are ordered by configured exam stage and attempt; overall slopes combine subject slopes. “Recent” means exam-stage order, not arbitrary timestamps.
- **Backlog timing:** trend summarizes active backlog counts grouped by semester; it is not a full event-sourced history of changes to backlog status.
- **Fees:** pending/paid context exists; overdue count needs an explicit reference date. The assessment route omits it (see ledger). Do not promote fee context as evidence of personal hardship or fully implemented overdue detection.
- **Inference:** S19 orders features using saved metadata and calls `predict_proba` for the positive class. S22 uses it during on-demand assessment; GET reads without saving, POST persists a new snapshot and evaluates notification triggers.
- **Rules versus ML:** S15 produces a configurable 0–100 rule score. S20 converts ML probability to a 0–100 scale and combines the two, defaulting to equal weights (S21). Tiers are LOW/MEDIUM/HIGH/CRITICAL; temporal labels are separate STABLE/IMPROVING/GRADUALLY_DETERIORATING/RAPIDLY_DETERIORATING categories.
- **Explanation:** S23 ranks actual rule/feature observations and selects supportive recommendations. Global Random Forest feature importance must not be presented as an individual student's causal explanation.
- **Interventions:** S25 compares the last pre-intervention snapshot with a later assessment and uses a five-point tolerance for change; S26 explicitly rejects causal interpretation.

### Deployment and demo status — checked 2026-09-16

| Target | Observed result | Meaning |
| --- | --- | --- |
| [GitHub repository](https://github.com/Aditiiiii1291/Pathwise) | HTTP 200; public GitHub API metadata/tree and pinned archive accessible | Source link verified. Latest inspected commit is stated above. |
| [Live project](https://pathwise-1-sibf.onrender.com) | HTTP 200; HTML title “Pathwise - Early Warning Intelligence”; linked JS bundle also HTTP 200 | Frontend assets reachable, not a complete browser workflow pass. |
| [Backend health](https://pathwise-92ht.onrender.com/health) | First request timed out after 25 seconds; bounded retry returned HTTP 200 with healthy service response | Backend reachable on retry; no verified cause for initial delay. Health handler does not check model availability. |
| [Assessment authentication boundary](https://pathwise-92ht.onrender.com/api/students/1/assessment) | HTTP 401 without a token | Assessment requires authentication; this does not test inference or confirm student existence. |

The backend address was obtained from the served public JS bundle and agrees with S32. Browser automation could not initialize (local tool runtime error), so no newly rendered UI, login or protected workflow is claimed. No credentials were entered, reused or published; no remote data was mutated.

**Earlier observation:** the portfolio's 2026-09-14 review recorded successful login, overview and interventions, followed by a student-profile failure reporting a missing trained-model artifact. This is historical evidence from [project history](../PROJECT_HISTORY.md), not a new reproduction.

**Source-supported explanation, not a confirmed live diagnosis:** S22 raises that missing-model error; S06 loads profile and live assessment together with `Promise.all`, so a failed assessment can block the profile view. S29 can seed baseline snapshots without a model using rule-score-derived probabilities. Therefore a populated dashboard does not prove live ML inference works. S30 copies only the backend app; S31's backend build context excludes the repository-root ML directory expected by S19. This is consistent with a packaging problem in that Docker configuration, but the actual live build/configuration was not inspected. Do not assert that this is the verified Render root cause, that the model is absent from source, or that it definitely works locally.

No repair, reseeding, login, training, test execution or deployment was attempted. The source contains both a trained artifact and the prediction pipeline; current authenticated inference remains unknown.

## C. Chapter-ready copy

Only this section is intended as visible chapter prose. Evidence, mapping and checks elsewhere are editorial material, not extra album pages. Put the two actions by the opening; their separate headings below identify the content fields, not a requirement to repeat the buttons.

### 1. What Pathwise is

**Title:** Pathwise  
**Descriptor:** Early Warning & Intervention Intelligence for Student Retention  
**Summary:** Pathwise brings student records, risk signals and mentor follow-ups into one application. I built it end-to-end, combining attendance and academic trends with rules and machine learning to help staff prioritize support.

**Context:** Hackathon/research prototype for technical-institute student support.  
**Role:** End-to-end developer / builder  
**Technology tags:** React · Vite · Tailwind CSS · Recharts · Python · FastAPI · SQLAlchemy · SQLite · pandas · NumPy · scikit-learn · Docker  
**Status:** Full-stack prototype with a live deployment; assessment access and limitations noted below.

### 2. The problem

Attendance, marks, backlogs and fee records can sit in separate spreadsheets. A single low score gives limited context: a student who is steadily declining may need different support from someone who is recovering. Pathwise brings these signals together for review.

### 3. What I built

I built the React dashboard and student views, FastAPI endpoints, relational data model and spreadsheet-ingestion pipeline. I also implemented temporal features, configurable risk rules, Random Forest inference, combined scoring, explanations and intervention follow-ups, along with backend tests and deployment configuration.

### 4. How it works

Student spreadsheets → validated records and unified histories → temporal features → rule score + ML estimate → combined risk, trend and explanation → staff review and intervention → later assessment comparison.

### 5. Technical architecture

The React interface calls a FastAPI JSON API. Python services handle ingestion, assessment and interventions; SQLAlchemy stores records and risk snapshots. A saved scikit-learn model runs inside the backend. SQLite is the default database, with PostgreSQL configuration support.

This separation keeps data processing reusable across training and assessment while the interface focuses on review and action.

### 6. ML / risk intelligence

A Random Forest estimates risk from 26 engineered inputs covering attendance, marks, backlogs and fee context. Configurable rules produce a separate score; both are combined with equal default weights. Trend labels also describe whether a student's records are improving or deteriorating.

The model was trained and evaluated on synthetic student data. It is a prototype signal, not a validated prediction of a real student's future.

### 7. What makes it interesting

- **Change over time:** slopes, declines and recent-versus-earlier comparisons add context beyond current values.
- **Separate signals:** rule scores, ML estimates and trend labels remain distinguishable.
- **Readable explanations:** student-specific observations are separated from global model importance.
- **Follow-through:** interventions, follow-up dates and later assessments connect risk review to staff action.

### 8. Current limitations

The model needs evaluation on real institutional data. Before/after risk changes do not prove that an intervention caused improvement.

**Demo note:** Sign-in required. The live frontend and backend health check responded on 16 September 2026. An earlier review found a missing-model error in student assessment; authenticated assessment has not been reverified.

### 9. Open Live Project

[Open Live Project](https://pathwise-1-sibf.onrender.com)

### 10. View GitHub / Source Code

[View GitHub / Source Code](https://github.com/Aditiiiii1291/Pathwise)

## D. Mapping to the future static project record

This is an editorial mapping, not a TypeScript/JSON application file. Reuse C's prose once rather than maintaining duplicate summaries or rendering every record field as a separate section. Labels such as context, role, howItWorks and mlSummary can map into existing `chapterSections` without changing P1.1's architecture.

| Existing field / requested concept | Prepared value or canonical source |
| --- | --- |
| id, slug | `pathwise`, `pathwise` |
| title, subtitle | C1 title and descriptor; subtitle can remain opening section copy |
| summary | C1 Summary; use for album scanning and chapter opening |
| fullDescription | C1–C8 content, rendered only once in the chapter |
| role, context | C1 Role/Context; role also belongs to `contribution` |
| problem | C2 |
| solution | C1 summary + C4 flow, referenced rather than repeated |
| contribution | C3, with confirmed end-to-end role |
| technologies | C1 tags; SQLite means default/source configuration, not asserted deployed DB |
| features | Ingestion; unified student histories; temporal features; rule/ML/fused scoring; dashboard; explanations; intervention follow-ups |
| howItWorks | C4 as one short text flow; later diagram optional, no interaction prerequisite |
| architecture | C5 |
| decisions | Shared feature services between training/inference; separate rule/ML/trend outputs; separate feature explanations/global importance. These are observed design choices, not invented personal motivations |
| technicalHighlights | C7, mapped to `chapterSections` |
| mlSummary | C6, mapped to `chapterSections` |
| result | Source demonstrates a connected full-stack prototype; live assets/health reachable. No measured retention improvement or production-readiness claim |
| limitations | C8 plus B's editorial caveats; preserve the short demo note beside the live link |
| reflection / lessons | Technical takeaway: assessment/model packaging needs verification independently of service health, and synthetic evaluation is distinct from real institutional validation. Editorial synthesis from inspected evidence, not an invented first-person learning story; no extra visible reflection section required |
| githubUrl | `https://github.com/Aditiiiii1291/Pathwise` |
| demoUrl → demo.url | `https://pathwise-1-sibf.onrender.com` |
| demo.type | `hosted` |
| demo.accessNote | Sign-in required; no approved public visitor credentials supplied |
| demo.verificationStatus | Public assets and health reachable; protected assessment unverified |
| demo.verifiedAt | `2026-09-16`, scoped only to the HTTP checks in B |
| demo.limitations | C8 Demo note; B records the prior error and present verification boundary |
| implementationStatus | A's status wording |
| featuredOrder | `1` (existing suggested album ordering; not a performance ranking) |
| previewImage / optionalPreview | Omitted. No suitable existing static preview identified; not a blocker |
| evidence | Ledger and S01–S46 references below; pin implementation claims to the inspected revision |
| chapterSections | C1–C8 with C9/C10 actions surfaced at the opening; normal readable content and existing Back to Workshop/Menu navigation later |

## E. Optional media and unresolved facts

No screenshot asset was found in the reviewed public source tree; prior browser screenshots were not saved as portfolio assets. No screenshot was made or required. No gallery, Project Moments, carousel or screenshot dependency is introduced.

**Necessary input to complete P1.4: none.** End-to-end ownership is settled. Personal reflections, event details and institutional results are not invented or needed to complete this concise chapter.

Later publication verification still needs current authenticated assessment status and a deliberately approved visitor-access method if an interactive public demonstration is promised. Do not request or expose administrator credentials. Public DB configuration, actual deployed revision, SMTP delivery and successful clean local execution remain unknown and are not claimed. These limits are recorded rather than blocking content preparation.

## F. Validation and handoff

- Claims were classified before chapter drafting against pinned source implementation; roadmap text was used only to distinguish intent from code.
- Recruiter scan: C1 identifies product, purpose, author role, technical differentiator and stack; both CTAs are to appear beside it. C2–C8 provide concise deeper context without a mini-game.
- Rule scoring, ML inference, fusion and trend classification remain distinct. Synthetic development metrics are confined to evidence notes.
- Source test files were inspected, not executed. No assertion that README test counts pass; no local-runtime or browser-test claim.
- Optional media remains optional. No fake screenshots, UI, code, packages, styling, routes or animations.
- P1.1–P1.3 choices preserved. No later task, repository mutation, Git command, commit or push.
- Validation passed: 58 relative documentation links resolved; all 46 pinned evidence-file targets exist in the inspected archive; all ten chapter topics and required classifications/record fields are present. The chapter-copy block is 531 whitespace-delimited words including headings, labels and editorial placement note; evidence notes are not public chapter pages. Changed-file scope was compared against pre-edit hashes without Git commands.

**Next task: P1.5 — Stage content intake.** Its existing status is WAITING FOR CONTENT. It progressively gathers approved resume, About/education, confirmed skills, milestones, public contact and remaining project reflections/evidence, recording missing versus approved items. Optional media stays optional. **Do not start P1.5 in this task.**

## G. Pinned primary source index

All S references below point to the inspected public revision, not mutable branch links. A directory/file existing alone is not treated as proof of runtime success.

- **S01** — [Purpose/context](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/README.md) — `README.md`.
- **S02** — [Frontend dependencies](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/package.json) — `frontend/package.json`.
- **S03** — [Frontend routes and health gate](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/src/App.jsx) — `frontend/src/App.jsx`.
- **S04** — [API client and session integration](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/src/utils/api.js) — `frontend/src/utils/api.js`.
- **S05** — [Dashboard UI](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/src/pages/OverviewPage.jsx) — `frontend/src/pages/OverviewPage.jsx`.
- **S06** — [Student profile UI](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/src/pages/StudentProfilePage.jsx) — `frontend/src/pages/StudentProfilePage.jsx`.
- **S07** — [Intervention UI](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/src/pages/InterventionsPage.jsx) — `frontend/src/pages/InterventionsPage.jsx`.
- **S08** — [Backend dependencies](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/requirements.txt) — `backend/requirements.txt`.
- **S09** — [API routing](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/api/api.py) — `backend/app/api/api.py`.
- **S10** — [Database configuration](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/core/database.py) — `backend/app/core/database.py`.
- **S11** — [Upload endpoint](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/api/endpoints/uploads.py) — `backend/app/api/endpoints/uploads.py`.
- **S12** — [Ingestion and validation](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/ingestion.py) — `backend/app/services/ingestion.py`.
- **S13** — [Unified student histories](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/fusion.py) — `backend/app/services/fusion.py`.
- **S14** — [Temporal feature engineering](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/features.py) — `backend/app/services/features.py`.
- **S15** — [Rule scoring](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/rules.py) — `backend/app/services/rules.py`.
- **S16** — [Rule weights/thresholds](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/schemas/rules.py) — `backend/app/schemas/rules.py`.
- **S17** — [Training pipeline](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/ml/training/train.py) — `ml/training/train.py`.
- **S18** — [Saved model metadata](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/ml/models/metadata.json) — `ml/models/metadata.json`.
- **S19** — [Inference service](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/ml_predictor.py) — `backend/app/services/ml_predictor.py`.
- **S20** — [Risk fusion and trends](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/fusion_engine.py) — `backend/app/services/fusion_engine.py`.
- **S21** — [Fusion defaults](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/schemas/risk.py) — `backend/app/schemas/risk.py`.
- **S22** — [Assessment pipeline and missing-model error](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/api/endpoints/assessment.py) — `backend/app/api/endpoints/assessment.py`.
- **S23** — [Explanations/recommendations](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/explainer.py) — `backend/app/services/explainer.py`.
- **S24** — [Intervention service](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/interventions.py) — `backend/app/services/interventions.py`.
- **S25** — [Before/after risk comparison](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/intervention_effectiveness.py) — `backend/app/services/intervention_effectiveness.py`.
- **S26** — [Causality disclaimer](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/schemas/intervention_effectiveness.py) — `backend/app/schemas/intervention_effectiveness.py`.
- **S27** — [Synthetic generator](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/ml/data_generation/generator.py) — `ml/data_generation/generator.py`.
- **S28** — [Synthetic cohort metadata](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/data/raw/synthetic/metadata.json) — `data/raw/synthetic/metadata.json`.
- **S29** — [Demo seeding and fallback](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/scripts/seed_demo_data.py) — `backend/app/scripts/seed_demo_data.py`.
- **S30** — [Backend container](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/Dockerfile) — `backend/Dockerfile`.
- **S31** — [Container composition](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/docker-compose.yml) — `docker-compose.yml`.
- **S32** — [Deployment documentation](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/docs/DEPLOYMENT.md) — `docs/DEPLOYMENT.md`.
- **S33** — [ML tests](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/tests/test_ml.py) — `backend/tests/test_ml.py`.
- **S34** — [Feature tests](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/tests/test_features.py) — `backend/tests/test_features.py`.
- **S35** — [Risk-fusion tests](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/tests/test_fusion_engine.py) — `backend/tests/test_fusion_engine.py`.
- **S36** — [API integration tests](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/tests/test_e2e_integration.py) — `backend/tests/test_e2e_integration.py`.
- **S37** — [Authentication dependency](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/api/deps.py) — `backend/app/api/deps.py`.
- **S38** — [Dashboard aggregation API](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/api/endpoints/dashboard.py) — `backend/app/api/endpoints/dashboard.py`.
- **S39** — [Risk snapshot model](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/models/risk.py) — `backend/app/models/risk.py`.
- **S40** — [Student model](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/models/student.py) — `backend/app/models/student.py`.
- **S41** — [Intervention model](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/models/intervention.py) — `backend/app/models/intervention.py`.
- **S42** — [Notifications and optional SMTP](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/backend/app/services/notifications.py) — `backend/app/services/notifications.py`.
- **S43** — [Original project roadmap (intent only)](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/ROADMAP.md) — `ROADMAP.md`.
- **S44** — [Committed model artifact (not executed)](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/ml/models/dropout_detector.joblib) — `ml/models/dropout_detector.joblib`.
- **S45** — [Frontend container](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/Dockerfile) — `frontend/Dockerfile`.
- **S46** — [Frontend Nginx configuration](https://github.com/Aditiiiii1291/Pathwise/blob/b386704476c0b6aaffc4f6ddd69082bbe13054e1/frontend/nginx.conf) — `frontend/nginx.conf`.
