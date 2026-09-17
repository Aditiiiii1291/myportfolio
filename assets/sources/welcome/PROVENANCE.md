# P2.2 Welcome illustration — revision 02 current; revision 01 retained

## Revision 02 — pixel-rendering edit, 2026-09-17

User requested a more visibly pixel-art-like game-opening illustration without page/pose/palette changes. Built-in image_gen edited revision 01 as the input. Source: `welcome-aditi-v02.png` (1254×1254); revision 01 preserved. Current delivery export: `../../../src/assets/welcome-aditi.webp`, 161,200 bytes, same dimensions, Chrome canvas WebP quality 0.92, no crop/resize. Source remains flattened raster. Status: **IN REVIEW — P2.2 still awaiting visual approval**.

Inspected desktop 1366×768 and mobile 360×800: more deliberate stepped contours and simpler hair/jeans/bunny/background shade clusters, middle part and cat-eye frames remain readable; tapered long-diamond face direction retained for user likeness review. Same holding pose and pastel composition. Tagline remains Times New Roman, normal weight/style; no CSS/layout/routing changes. No overflow or awkward tagline wrapping observed; strict TypeScript/production build passed. No dependencies or P2.3 work.

Exact built-in edit prompt:

Edit this exact Welcome illustration. Preserve composition, full-body pose, framing, outfit, pink headphones, cream bunny held in arms, pastel Strawberry Cream palette, background placement and welcoming expression. Change ONLY rendering into visibly crisper intentional pixel art for a polished cozy indie-game start screen: coherent pixel grid like a carefully drawn 256x256 art enlarged cleanly, visible stair-step contours, compact clusters, 3-4 deliberate shades per material, no painterly blending, no smooth gradients or fine noisy texture. Retain enough face detail: LONG DIAMOND-shaped face with wider cheekbones and tapered chin, MIDDLE PART clearly centered at crown, distinctly upswept CAT-EYE frames not round. Keep eyes and smile readable, bunny soft via fluffy stepped silhouette rather than blended fur. Hair big readable pixel locks, jeans simpler clean shade clusters. Preserve pink trees and flower ground as simplified pixel clusters. Attractive soft cozy pixel-game opening, not harsh arcade, not crude mosaic filter. No text, UI, new props, different layout, extra characters or poses. Square image.

## Historical revision 01

Date: 2026-09-17. Producer: Codex with built-in image_gen (model identifier not exposed). Not hand-drawn by Aditi. Status: **IN REVIEW**, local implementation preview only; not approved for publication. P1.3 approval is not transferred to this revision.

Reference: our own approved `../reviews/exports/p1-3-direction-v03-pixel.png`; no third-party game artwork used. Source: `welcome-aditi-v01.png`, 1254×1254, 1,558,488 bytes. Original tool output retained separately in the session's generated_images folder. This is a flattened raster source, not a layered character master or animation sheet; reusable body-part cleanup remains outstanding if required for production. No claim of editor-layer validation or external backup.

Local review export: `../../../src/assets/welcome-aditi.webp`, 1254×1254, 187,526 bytes. Chrome canvas WebP quality 0.92, no crop/resize/repainting. Original PNG retained; duplicate delivery PNG removed. Reviewed at desktop/tablet/mobile sizes: full pose and bunny visible, middle part and upswept frames visible; tapered chin/face interpretation requires Aditi's likeness review. No motion variants. HTML alt describes Aditi holding bunny; trees/flowers do not receive separate noisy alternatives.

This export is temporarily integrated only to make the requested Welcome concrete and reviewable. ART_WORKFLOW's approved-export publication gate remains open; do not treat local preview integration as final asset acceptance. User must review this exact revision, including the long diamond-shaped face direction. No bulk future assets were made.

## Exact generation prompt

Use the approved revision 03 as reference; generate one original pixel-art Aditi holding cream bunny, long diamond-shaped face, middle-parted brunette hair, cat-eye glasses, pink headphones, black sleeveless high-neck top, flared jeans and dark sneakers; pastel blush trees/flowers; no text, other poses, map, UI or extra characters.

## Font

Pixelify Sans variable TTF, 79,160 bytes as downloaded from Google Fonts `ofl/pixelifysans/PixelifySans[wght].ttf`, 2026-09-17. Project authors credited in the bundled SIL OFL 1.1 at `../../../src/assets/fonts/OFL.txt`. Source: https://github.com/google/fonts/tree/main/ofl/pixelifysans. Unmodified local font, no third-party font requests at runtime. Implementation candidate, not a claim of final user font approval.
