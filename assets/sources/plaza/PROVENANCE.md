# P2.3 small plaza — revision 01

Date: 2026-09-17. Producer: Codex using built-in image_gen (model identifier not exposed).
Status: **in-review / local preview integration; awaiting Aditi's visual approval**. Welcome revision 02 approval does not approve these new scene assets.

## Sources and exports

| Asset | Raw source | Web export | Dimensions | Export bytes |
| --- | --- | --- | --- | --- |
| Arrival scene with Aditi and bunny nearby | plaza-arrival-v01.png | ../../../src/assets/plaza/plaza-arrival.webp | 1536 × 1024 | 447,412 |
| Separate Workshop exterior | workshop-exterior-v01.png | ../../../src/assets/plaza/workshop-exterior.webp | 1254 × 1254 | 329,834 |

Original generated PNGs retained unchanged. WebP exports use browser encoding at quality 0.92, original dimensions, no repaint or resampling. Workshop alpha retained. Raw sources are flattened rasters, not Krita/body-part animation masters. No layered master or external backup was created; original generator files also remain in the local Codex generated_images directory. No private data or third-party downloaded art is included.

References: our approved Welcome revision 02 (`../welcome/welcome-aditi-v02.png`) for identity, and bounded P1.3 revision 03 (`../reviews/exports/p1-3-direction-v03-pixel.png`) for environment. New AI-assisted art, not traced/extracted third-party game assets. No blanket originality/legal-rights guarantee is inferred from generation.

## Review and integration

Two useful layers only: static ground/host/bunny scene and independent Workshop exterior. The latter is inside a real HTML navigation link; its label is HTML, not baked text. Other locations are not drawn or linked. This is a bounded local prototype scene, not the complete production village or reusable pose library.

Aditi retains the intended tapered long diamond-face direction, middle-part brunette hair, upswept cat-eye frames, pink headphones, black top and flared jeans; bunny stands beside her. Likeness at village scale and both new images still require Aditi's review. Welcome art is unchanged.

Desktop/tablet use layered scenery; mobile crops the background to the arrival area and places the same Workshop below it. Background has meaningful scene alt text; Workshop image is decorative within its visible named link. No motion assets or animation.

## Exact generation prompts

### Arrival
Use case: stylized-concept. Create a landscape 1536x1024 pixel-art background for a SMALL cozy portfolio village plaza. Reference 1 is Aditi identity and pixel rendering; reference 2 is environmental palette only, do NOT recreate full village or UI. Elevated 2D view with cream circular paving clearing at lower left, winding cream path leading right to a large EMPTY grassy area reserved for a separately layered workshop. Strawberry Cream pink ground, gentle sage bushes, pink blossom trees along outer left/top edges, modest flowers and one bench. Aditi standing on left plaza with her cream lop bunny BESIDE her feet, not held. Aditi occupies about 25% image height, readable middle-part brunette hair, long diamond-shaped tapered face, upswept cat-eye glasses, pink headphones, black sleeveless top, blue flared jeans. Preserve identity from reference. Crisp visible pixel clusters, simple pixel shading, no painterly blur. Calm spacious scene, flat soft lighting. Right half must remain open ground for building overlay; no buildings, no signs, no text, no UI, no borders, no extra characters. Full-bleed rectangular scene.

### Workshop
Use case: stylized-concept. Asset: a single cozy Project Workshop exterior cutout for a layered pixel-art portfolio village. Use supplied concept board ONLY as environmental style reference. Generate just ONE building, not board or village. Elevated three-quarter 2D view, front doorway and right wall visible, strawberry-pink tiled roof, cream plaster, warm timber beams, sage ivy and small cream/pink flowers, small exterior wooden workbench with a few tools and stacked books indicating a maker's workshop. Blank small cream sign above door, absolutely NO text or lettering. No people, no bunny, no other buildings. Crisp obvious pixel-art edges and simple pixel shading clusters matching reference, no smooth painterly rendering. Full building centered, uncropped, with small ground-contact shadow and plants tightly around base; compact 1:1 framing, generous 5% clear padding. Actual transparent alpha background, not a checkerboard or white background. Soft cozy Strawberry Cream palette, calm indie game environment asset.

