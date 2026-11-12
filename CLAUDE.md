# Claude Code instructions — Hinoto Tanaka portfolio

Read `docs/portfolio/brief.md`, `roadmap.md`, `project-inventory.md`, `user-edits.md`, `voice-and-japanese.md`, and `qa-checklist.md` before changing this site. See `reference-portfolios.md` and `wordpress-source-notes.md` for editorial context.

## Working relationship
- The user is new to coding. Explain changes in plain language. Keep code readable, well-commented around content editing, and easy to maintain.
- **The live repository is canonical.** The earlier ChatGPT-produced ZIP/site snapshot may be out of date. Always inspect actual files in GitHub first and preserve the user's subsequent edits.
- Before a major refactor, provide a plan and get approval. Favor incremental, reviewable changes and a PR rather than pushing directly to `main`.
- Never fabricate skills, collaborators, citations, research findings, data sources, publication dates, or links. Mark unknown details as `NEEDS CONFIRMATION` and ask.

## Technical constraints
- Static GitHub Pages site at `https://hinototn.github.io/hinototanaka/`. Repository: `hinototn/hinototanaka`.
- Preserve bilingual EN/日本語 functionality throughout ALL pages (including metadata, project cards, captions, navigation, links). Maintain language on switching page-to-page.
- Preserve relative URLs so the site works under `/hinototanaka/`, not only at domain root. No custom domain until one is purchased and DNS is set.
- Keep code light; prefer plain HTML/CSS/vanilla JS. Do not add React, build systems, frameworks, analytics, forms, or external dependencies without discussing a specific need.
- Keep images high quality but web-optimized. Homepage thumbs consistent ratio; full artwork on project pages not cropped.
- Preserve existing personal stamp, quiet satsumaimo-purple accent (`#744B59`), Helvetica-like type, restrained whitespace and minimal navigation. No separate About/Contact page unless user explicitly changes preference; contact info can live in introduction/footer.
- Verify keyboard operation, mobile widths, image alt text, heading hierarchy, language tags, missing files, and Pages builds.

## Editorial direction
- Complete body of *finished, publishable* work accessible in an organized archive, not literally all work dumped into one noisy homepage.
- Strongest ~4–6 pieces first; remaining existing work easy to find. A visitor should see what each project demonstrates at a glance.
- Each project: what/why, role and collaborators, skills/tools, verifiable data/method, key design decisions, output/result, relevant maps/process artifacts, credits/references, external demo when one exists.
- Distinguish independently authored work from teamwork and research contributions.
- Every word serves a purpose; avoid vague filler and invented storytelling.
- Japanese: concise, natural plain style, **no です/ます**, avoid unnecessarily dense 熟語, preserve specificity and nuance.
- Research such as Ainu toponymy or IUCN assessments is NOT automatically cleared for public portfolio use; ask first, check permissions/ethics/attribution.

## Known implementation issue in older snapshot
`js/projects.js` and `js/projects-ja.js` store `description`, `group`, year and categories, but older `js/main.js` rendered ONLY title/image/alt/link. Confirm whether the current repository fixed this before making changes. The user separately proposed edits and ordering; see `docs/portfolio/user-edits.md`.
