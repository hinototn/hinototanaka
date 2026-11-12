# Suggested stepwise implementation plan — approval required

## Phase 0 — verify first (no edits)
- Inspect current GitHub files, not the local snapshot. Record current homepage, actual list order, descriptions, group rendering, translation files, main branch and live Pages configuration.
- Confirm that `index.html`, `ja/index.html`, relative asset paths and .nojekyll are in the publishing root; test direct navigation to Japanese project routes under `/hinototanaka/`.
- Audit each project against the WordPress content, local image library and actual published map work; flag missing information and credits.
- Present proposed order and sample content for approval.

## Phase 1 — information architecture
- Add a plain `Selected work` gallery and `More work / Studies` archive (or equivalent minimal grouping agreed with user) without hiding projects. Use actual `group` values or an explicit order list rather than silently intermixing.
- Show homepage one-line descriptions (currently unused), with accessible typography and responsive grid. Maintain exact same 4:3 thumbnail shape; don't crop critical content.
- Avoid heavier redesign. Stamp and accent unchanged.

## Phase 2 — consistent project template and two pilot pages
- Build scannable project pages using existing static infrastructure; no framework unless a concrete benefit is approved.
- Pilot **Okinawa** and **Danish Kollektiv**, because their data, process images and external/presentation context are strongest.
- A suggested page rhythm: title; meaningful one-sentence summary; `Year / Role / Tools / Output` facts; full map; short `Question`, `Data & method`, `Design choices`, `What the map shows` sections with supporting images and tight captions; collaborators/data credits; demo link where applicable.
- Test EN and JP before extending template.

## Phase 3 — remaining existing projects
- Re-Drawing Voting Access, Redlined Chicago, Lines of Power, Mapping the Gaps, Housing Potential, Green Spaces, Cartographic Studies, Downtown Derby.
- Include process images where genuinely informative, not just for filler. Distinguish research studies, map exercises and personal art.
- Decide whether `Map Design` should remain a grouped page containing two studies or split it into two pieces for scannability.

## Phase 4 — broader archive (only after explicit user approval)
- Potential additional projects: **Ainu place-name research in Hokkaidō** (ongoing; collaborative and Indigenous consultation sensitive), **IUCN Small Mammal Specialist Group distribution mapping / Red List contributions** (collaborative; confirm permissions, attribution and report status), **campus nighttime lighting study** (idea/in-progress), and **interactive Kollektiv map** (currently linked from project page; evaluate separate entry).
- Do not publish sensitive species occurrence points, consultation notes, unresolved drafts, personal communications or preliminary claims. Confirm rights, approval, resolution/generalization and data policies before posting.
- Goal is comprehensive *finished shareable work*, not uploading internal research files just to make the archive longer.

## Phase 5 — quality / maintenance
- Make content editing self-explanatory for a noncoder; document single source of truth and how to add EN/JP projects.
- Verify every route and image; keyboard/mobile; SEO titles/meta/og images, image alt text; direct deep linking; no dependency on localhost root paths.
- Before merging PR: screenshot-test home, a project page, JP home, JP project page on phone and desktop; verify the `hinototanaka` Pages base path.
- Preserve current custom domain settings; do not type an unowned domain into Pages.
