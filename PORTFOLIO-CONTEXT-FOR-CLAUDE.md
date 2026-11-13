# Portfolio redesign — complete context for Claude Code

**Use this as the single-file handoff for the existing GitHub repository `hinototn/hinototanaka`.**

This document combines all written instructions, project inventories, and planning material assembled for the user. It does **not** contain binary image assets or a copy of the current site code. Read the existing repository for code and images. Do not replace current files with any historical snapshot. Begin by auditing the repository and proposing an editorial/content plan **before modifying site files**. Create changes on a new branch for review.

Current site: https://hinototn.github.io/hinototanaka/
WordPress archive: https://hinototanaka.wordpress.com/

---

# Claude working instructions

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


---

# Reference: brief.md

# Portfolio project brief (2026-11-12)

## Purpose
A professional, approachable record of Hinoto Tanaka's cartography, GIS, geospatial research and visual storytelling, to share with graphics journalists, cartographers, researchers, employers and mentors. A visitor should immediately understand the work, the methods, the actual contribution, and where to see more.

## Feedback received from Drew An-Pham (user's own account)
- Include the full body of work, not only four showcase pieces. People should be able to see the range of projects completed.
- Explain skills used, research and design process, and meaningful outcomes on *each project page*.
- Optimize for information retrieval: readers can scan quickly for tools, responsibilities, output and decisions.
- Drew shared reference portfolios: Carl Churchill, Weiyi Cai, Chris Alcantara, Zach Levitt, and his own. Don't copy their appearance.

## Critical editorial interpretation
Comprehensive doesn't mean the homepage needs to be exhaustive in visual weight. Show a carefully ordered selection up top, then keep a plain, browseable archive of remaining finished work. Let project pages carry the detail. Avoid hiding the actual maps or process behind visual gimmicks.

## Personal voice and visual identity (user-confirmed)
- Minimal, grounded, human, not promotional or formulaic. No heavy blocks of marketing text.
- Centered simple gallery; consistent 4:3 homepage thumbnails. Do not crop key cartographic information; consider purpose-made crops.
- Quiet warm-white/black-gray palette with sole UI accent `#744B59` (Kawagoe satsumaimo purple).
- Personal stamp beside name. Keep stamp art unchanged; avoid adding more ornamental flourishes.
- Helvetica-like sans-serif, small clean labels, restrained typography. Do not replicate Drew's site.
- Language toggle EN / 日本語 at every route, keeping visitors on the same page. Japanese no です・ます, simple but nuanced.
- No dedicated About or Contact pages. Email and LinkedIn can remain in intro or footer.
- Website should remain editable by someone with no prior coding experience.

## Proposed information architecture (initial idea — verify with user)
1. Short name/stamp + language toggle + concise self-introduction/contact.
2. **Selected work** — 4–6 strongest pieces (recommended initial order: Okinawa, The Danish Kollektiv, Re-Drawing Voting Access, Redlined Chicago, Lines of Power). The fifth can rotate depending on application (GIS vs graphics). All should have a one-line specific description.
3. **More work / Studies** — Green Spaces by the Border, Mapping Housing Potential, Mapping the Gaps, Cartographic Studies, Downtown Derby; refine ordering and grouping with user.
4. Every project accessible via the gallery without an unnecessary second About page, heavy menus, filters or a full design system.
5. Each project page: hero map + two-line abstract; very short facts row (year / role / tools / output); 2–4 meaningful process steps (with maps/sketches); concise results and what they show; credits and links.

## Avoid
- Blind 'dump' of every WIP into public view.
- Inflating early class exercises to sound like major institutional research.
- Misrepresenting group work as solo authorship or independently claiming others' data.
- Overly long academic writing, vague claims, stock imagery, placeholder text, giant animated/interactive UI.
- Duplicating all content twice by hand if a simple manageable bilingual content structure can keep it synchronized. However prioritize no-build local editing; discuss before refactoring.

## Existing links
- Current website: https://hinototn.github.io/hinototanaka/
- Repository: https://github.com/hinototn/hinototanaka
- WordPress (richer source text): https://hinototanaka.wordpress.com/
- Interactive Kollektiv map: https://hinototn.github.io/kollektiv-denmark-interactive-map/
- LinkedIn: https://www.linkedin.com/in/hinoto-tanaka/
- Email: htanaka@middlebury.edu

**Status:** GitHub and live GitHub Pages could not be fetched for this handoff, so inspect `main` before editing. All content suggestions are drafts for user's review.


---

# Reference: project-inventory.md

# Content inventory — existing 10 project pages

Sources: archived local GitHub site snapshot, WordPress pages where retrievable, and the user’s project context. Treat as a **fact-check checklist**, not ready-to-publish prose. The site already includes project images under `images/projects/`.

## Okinawa, Twice Colonized (2025)

- **Proposed placement:** Feature / strong lead
- **Current file:** `projects/okinawa-twice-colonized.html`; Japanese counterpart `ja/projects/okinawa-twice-colonized.html`
- **Skills/tools to surface (confirm exact role):** Cartography, GIS overlay, source integration, bilingual design; QGIS, Illustrator
- **Methods and findings currently supported:** Man and Palmer military bases; JAXA EORC 10m land cover; UNEP-WCMC corals. Visual design simplifies layers at output scale. Four detailed focus sites: Camp Gonsalves, Kadena, Henoko, Futenma.
- **Assets/outputs to show:** English/Japanese map, early sketch, early map version; NACIS 2025.
- **Clarifications / credits needed:** Check exact source years, credit of dataset, status of presented versions; include original process and why color/hierarchy changed.

## The Danish Kollektiv (2026)

- **Proposed placement:** Feature / strong lead
- **Current file:** `projects/the-danish-kollektiv.html`; Japanese counterpart `ja/projects/the-danish-kollektiv.html`
- **Skills/tools to surface (confirm exact role):** Survey cleaning/standardizing, geocoding, exploratory spatial analysis, cartographic design, interactive map; QGIS, (verify other software used)
- **Methods and findings currently supported:** 125 survey responses; 108 mapped sites in Copenhagen urban area. Central apartment kollektivs vs more peripheral detached houses; other shared amenities, establishment date and living space explored.
- **Assets/outputs to show:** NACIS 2026 poster, four exploratory thematic maps; ICSA 2026 interactive national map.
- **Clarifications / credits needed:** List exact team roles/credits, affiliations, tools for Leaflet map, dataset consent/method limitations, captions for each analytical layer.

## Re-Drawing Voting Access (2025)

- **Proposed placement:** Feature
- **Current file:** `projects/re-drawing-voting-access.html`; Japanese counterpart `ja/projects/re-drawing-voting-access.html`
- **Skills/tools to surface (confirm exact role):** GIS spatial analysis and modeling; QGIS; methodology of address distance, polling locations and alternative siting
- **Methods and findings currently supported:** Richmond polling stations, precincts, addresses, roads, carless households (ACS); one-mile comparison and alternative locations. Mean address inaccessibility 22.9%→21.2%; 40 precincts improved; 15 worsened.
- **Assets/outputs to show:** Before/after/change maps, carless-households map and result chart.
- **Clarifications / credits needed:** Verify exact distance definition (walking network vs straight line); avoid claim of practical/site viability without checking; explain why siting is a model rather than recommendation.

## Redlined Chicago (2025)

- **Proposed placement:** Feature
- **Current file:** `projects/redlined-chicago.html`; Japanese counterpart `ja/projects/redlined-chicago.html`
- **Skills/tools to surface (confirm exact role):** R, tidycensus, QGIS, QuickOSM; spatial join, thematic mapping, historical-context analysis
- **Methods and findings currently supported:** Tract-level race, rents, historic redlining, access to green space, Burgess vs Hoyt models. Show north/south-west directional patterns; no simple center-distance explanation.
- **Assets/outputs to show:** Redlining, rents, race/ethnicity, green access comparison, GIS working screen.
- **Clarifications / credits needed:** Get exact redlining index source and measure, green-access methods, study limitations. Explain selection of multiple side-by-side maps.

## Lines of Power (2026)

- **Proposed placement:** Feature/candidate
- **Current file:** `projects/lines-of-power.html`; Japanese counterpart `ja/projects/lines-of-power.html`
- **Skills/tools to surface (confirm exact role):** GIS, congressional district comparison, choropleth symbolization and data interpretation
- **Methods and findings currently supported:** California Republican vote share using 2021 vs proposed AB 604 congressional districts, constant measure different boundaries; not future prediction.
- **Assets/outputs to show:** Side-by-side maps and selected-district table.
- **Clarifications / credits needed:** Clarify AB 604 status and data provenance as of 2026; do not call it enacted or an election forecast without sources; distinguish redistricting from gerrymandering claim.

## Mapping the Gaps (2025)

- **Proposed placement:** More/fieldwork
- **Current file:** `projects/mapping-the-gaps.html`; Japanese counterpart `ja/projects/mapping-the-gaps.html`
- **Skills/tools to surface (confirm exact role):** Field observation, spatial inventory, QGIS, OSM, campus accessibility mapping
- **Methods and findings currently supported:** September 2025 field survey with Mimi and Arlo; identified locations with and without tactile paving at crossing, paths, steps and slopes.
- **Assets/outputs to show:** Single map using blue presence, red absence.
- **Clarifications / credits needed:** Specify survey coverage and limitations; do not generalize all campus sites or assert legal compliance; credit collaborators.

## Mapping Housing Potential (2026)

- **Proposed placement:** More/GIS methods
- **Current file:** `projects/mapping-housing-potential.html`; Japanese counterpart `ja/projects/mapping-housing-potential.html`
- **Skills/tools to surface (confirm exact role):** GIS suitability screening, land-use analysis, accessibility buffers
- **Methods and findings currently supported:** Addison County existing residential land, distances to K-12 schools (0.5 mi) and grocery stores (5 mi); includes wetlands.
- **Assets/outputs to show:** Single site-potential map.
- **Clarifications / credits needed:** Clarify criteria, source dates, constraints, whether distances are buffers (not network), not a zoning/development endorsement.

## Green Spaces by the Border (2026)

- **Proposed placement:** More/cartographic study
- **Current file:** `projects/green-spaces-by-the-border.html`; Japanese counterpart `ja/projects/green-spaces-by-the-border.html`
- **Skills/tools to surface (confirm exact role):** Parcel/land development analysis, cartographic design
- **Methods and findings currently supported:** Pownal Vermont, large low-impervious parcels, roads and borders with locator context.
- **Assets/outputs to show:** Single green-space / large-parcels map.
- **Clarifications / credits needed:** Confirm parcel/ownership sources, imperviousness metric, whether true public access is measured; avoid calling private land public green space.

## Cartographic Studies (2025)

- **Proposed placement:** More/design practice
- **Current file:** `projects/map-design.html`; Japanese counterpart `ja/projects/map-design.html`
- **Skills/tools to surface (confirm exact role):** Illustrator vector symbol recreation, type taxonomy, cartographic hierarchy
- **Methods and findings currently supported:** Two exercises: reconstructed symbols from published maps, analyzed typography in NatGeo High Arctic Caving map.
- **Assets/outputs to show:** Two annotated study sheets.
- **Clarifications / credits needed:** Link credit Annika Hoerner / National Geographic source; clearly label as studies of others’ published visual work, not original chart designs.

## Downtown Derby (2026)

- **Proposed placement:** More/cartographic study
- **Current file:** `projects/downtown-derby.html`; Japanese counterpart `ja/projects/downtown-derby.html`
- **Skills/tools to surface (confirm exact role):** Urban GIS, scale-sensitive basemap and choropleth design, OSM
- **Methods and findings currently supported:** Louisville central housing-density/housing-count map and street/building basemap.
- **Assets/outputs to show:** Two thematic/cartographic maps.
- **Clarifications / credits needed:** Confirm original assignment, data source and exact geographic unit for 50+ housing units.

## Potential work not in the 10-page archive — ask before publishing

- **Ainu municipality toponymy research (2026, ongoing):** 179 municipalities, language/source research and GIS; Indigenous consultation, uncertainty and context are central. Confirm permissions, process, accuracy and ethical presentation before any public visuals.
- **IUCN small mammal species distribution / Red List work (2026):** detailed geospatial scientific work; verify IUCN credit policy, group collaboration, assessor status, confidentiality and sensitive occurrences before any publication.
- **Middlebury nighttime campus lighting map:** a *concept/proposal*, not yet a completed work. Do not present as a finished map.
- **Kollektiv interactive map:** currently a link on Kollektiv page; could warrant independent portfolio tile if the technical implementation is a major skill to show. Confirm user’s exact coding contribution.


---

# Reference: user-edits.md

# User's more recent edits and intended content (important)

The user separately edited the list in `js/projects.js` after the locally saved site ZIP. **Do not overwrite the actual GitHub file with the older ZIP.** These are the specific titles, subtitles, and intended sequence they pasted in chat. Check current repo first; consider as latest expressed editorial preferences.

| Position in pasted list | Title | User's subtitle / description | `group` in pasted data |
|---|---|---|---|
| 01 | Okinawa, Twice Colonized | The Lasting Scars of U.S. Militarization in Okinawa, Japan | selected |
| 02 | The Danish Kollektiv | Spatial Patterns of Kollektiver in Copenhagen, Denmark | selected |
| 03 | Green Spaces by the Border | Land Development and Ownership in Pownal, Vermont | more |
| 04 | Mapping Housing Potential | Identifying Potential Housing Development Zones in Addison County, Vermont | more |
| 05 | Re-Drawing Voting Access | Polling-Place Walkability and Voting Access in Richmond, Virginia | selected |
| 06 | Redlined Chicago | Race, Redlining, Housing, and Green-Space Access in Chicago, Illinois | selected |
| 07 | Mapping the Gaps | Tactile Paving and Pedestrian Accessibility at Middlebury College, Vermont | selected |
| 08 | Lines of Power | Gerrymandering and Congressional Redistricting in California | selected |
| 09 | Cartographic Studies | Cartographic Symbolization and Typography Studies | more |
| 10 | Downtown Derby | Urban Geography and Spatial Analysis in Louisville, Kentucky | more |

These subtitles may benefit from tightening or converting to more direct project questions. **Ask the user before replacing them** and preserve the underlying meaning.

### Important behavior in old code
As of last local ZIP, `js/main.js` builds homepage cards using `project.title`, `project.image`, `project.imageAlt`, and `project.page` only. It does **not** display `project.description`, nor use `project.group` to create Selected/More sections. Therefore editing those fields alone does not change what a visitor sees. Verify actual repo state, then implement if approved.

User wants the full portfolio EN/JA, a centered layout, same-shape gallery images, and their personal stamp. Avoid creating About/Contact pages.


---

# Reference: sample-project-pages.md

# Example page outlines — editorial starting points, not final copy

These demonstrate *format*, not an instruction to write every page this long. The facts are grounded in the local site and the fuller public WordPress pages. Ask the user to review any role, credit, or methodological detail before publishing.

## A reusable project-page structure

**Title and one-sentence point.** Say what you mapped or asked, not just the city.

**At a glance** (small typographic line or sparse two-column details; no colored badges): Year | Role and collaborators | Tools | Type of output. These are field labels, not necessarily separate large sections.

**Full-resolution final work.** Show the most important map immediately. If original has text too small on mobile, offer tap-to-expand/fullscreen.

**What I did.** Two or three specific paragraphs or bullets, with real evidence. Use meaningful subheadings where helpful: `The question`, `The data`, `Design choices`, `What emerged`.

**Process images and captions.** Pick sketches, alternative symbolization, analysis maps, or iterations that actually explain decisions. Put the explanation next to the image.

**Credits / Sources / Related links.** Name collaborators and data sources, conference or publication, interactive maps. Don't fabricate bibliography entries or working URLs.

## Example A: Okinawa, Twice Colonized

**Quick intro:** A map of how U.S. military bases intersect with Okinawa's land, towns and coastal ecosystems.

**At a glance — draft:** `2025 · Cartography & GIS · QGIS, Adobe Illustrator · Bilingual thematic map · NACIS 2025`.

**Main image:** English/Japanese final artwork switch, both directly downloadable or zoomable.

**Content sequence (English):**

1. **The question:** Conventional base-boundary maps isolate installations from the living landscapes around them. I wanted to show the overlap.
2. **Data and method:** Overlay U.S. installation boundaries from Man and Palmer with JAXA 10 m land cover and UNEP-WCMC coral reef data in QGIS. Simplify/reclassify responsibly at display scale (ask for technical detail; don't invent).
3. **Design:** Explain why the purple/red base shapes, vegetation/settlement classes, a four-site story sequence and dual-language typography were chosen. Include the hand sketch and an earlier draft with one short caption explaining what changed and why.
4. **What the final map shows:** The island-level footprint and four local cases (Camp Gonsalves, Kadena, Henoko, Futenma). Make clear a cartographic comparison is not a causal ecological impact study.
5. **Credits:** Data sources and NACIS presentation. Confirm adviser/collaborator credits and source dates.

**A Japanese intro to revise with user:** `沖縄の米軍基地を、森林や農地、町、サンゴ礁と重ねて描いた。基地の輪郭だけでは見えにくい周囲との関係を示す。`

## Example B: The Danish Kollektiv

**Quick intro:** Mapping where Copenhagen's shared homes are—and why they don't follow a single housing type.

**At a glance — draft:** `2026 · Research & cartography · Survey cleaning, geocoding, QGIS · NACIS poster and interactive map` (verify exact tools and role attribution).

**Main image:** NACIS poster; alternate detailed thematic maps at full width where they are legible.

**Content sequence (English):**

1. **Research question:** What can the locations and housing forms of Copenhagen's kollektiver show about collective living?
2. **The research:** Work with the Danish Association of Kollektivs and research team. 125 survey responses; 108 Copenhagen urban locations. Explain cleaning, matching duplicate names/addresses and geocoding; distinguish the user's own analysis from team work.
3. **What the analysis found:** Apartment kollektiver more central, detached-house ones toward the urban edge. Gardens/workshops and shared space have different patterns; note where a simple relationship was *not* found.
4. **Visual decisions:** Why mapping housing form and urban building density is a clearer story than adding every available survey variable. Include how NACIS feedback or design iteration changed the poster, if the user confirms.
5. **Other outputs:** four exploratory maps; interactive Denmark map; NACIS 2026 and ICSA 2026 presentations. Provide exact original link and credit team.
6. **Limitations:** Survey coverage and incomplete national geocoding; don't imply all Danish kollektiver are included.

**A Japanese intro to revise with user:** `コペンハーゲンの共同生活の住まいを調べ、住宅の種類と場所の関係を地図にした。中心部では集合住宅、郊外では一戸建てが多い。`

**In both examples:** This should read like an interested person explaining their work, *not* a corporate impact report. The process must be truthful and brief; not every project needs five subheadings if a simpler page communicates more effectively.


---

# Reference: wordpress-source-notes.md

# WordPress source archive — richer content than the old GitHub pages

WordPress: https://hinototanaka.wordpress.com/ . The user explicitly identifies this as the *content starting point*, while GitHub is the publishing platform. The WordPress portfolio has 10 projects. Use it to recover detail and provenance, then edit down for clarity. Do **not** copy WordPress's visual theme.

## Verified WordPress page sources (accessed via public text retrieval, 2026-11-12)

- Okinawa — https://hinototanaka.wordpress.com/okinawa-twice-colonized/  
  Original includes QGIS overlay of Man and Palmer military-base boundaries, JAXA 10m land cover, UNEP-WCMC coral reefs; simplified layers at display scale; Adobe Illustrator hierarchy, typography and bilingual layout; four specific sites and early sketches/visual references; NACIS 2025 presentation.
- Danish Kollektiv — https://hinototanaka.wordpress.com/living-kollektively/  
  Original discusses 125 survey responses, 108 mapped Copenhagen urban sites, cleaned/geocoded records, apartment vs detached housing patterns, visual emphasis on housing type and buildings, NACIS 2026 poster, ICSA interactive map and collaboration. Explicitly name collaborators and separate team research from user's cartography/design work.
- Re-Drawing Voting Access — https://hinototanaka.wordpress.com/redrawing-voting-access/  
  Original explains precinct/addresses/roads/water/ACS carless-households GIS, one-mile threshold, tested polling-site pole of inaccessibility, quantitative before/after results, and important geographic limitations.
- Redlined Chicago — https://hinototanaka.wordpress.com/redlined-chicago/  
  Original identifies R, tidycensus, Census tract joins in QGIS, historic redlining, OpenStreetMap parks via QuickOSM; compares Burgess concentric and Hoyt sector models; interprets north vs south/west patterns, recognizing limitations.
- Mapping the Gaps — https://hinototanaka.wordpress.com/mapping-the-gaps/  
  Original: Sept 2025 field survey with Mimi and Arlo of tactile paving presence/absence at campus crossing and elevation-change locations, QGIS + OSM map, specific shortfalls. Avoid claiming an official ADA compliance determination or universal safety conclusion.
- Cartographic Studies — https://hinototanaka.wordpress.com/map-design/  
  Original describes how Jeff Howarth shaped user's approach to ethical/cartographic choice; symbol recreation exercises in Illustrator; type taxonomy analyzing National Geographic High Arctic Caving by Annika Hoerner. Cite the reference graphic and name the original authors; don't misrepresent study as original Nat Geo work.

## Additional WordPress project URLs from its index (full page content was not returned in this retrieval)

- Housing Potential — https://hinototanaka.wordpress.com/mapping-housing-potential/
- Green Spaces by the Border — https://hinototanaka.wordpress.com/green-spaces-by-the-border/
- Downtown Derby — https://hinototanaka.wordpress.com/downtown-derby/
- Lines of Power — https://hinototanaka.wordpress.com/lines-of-power/

For these four, use the existing locally saved project HTML and any original materials the user supplies; verify WordPress content in Claude's browser rather than assuming it was inspected in this handoff.

## Editorial extraction task
For each source, extract (a) goal/question, (b) user's specific role, (c) data and software, (d) method and major design decisions, (e) legitimate finding or output, (f) images/sketches and captions, (g) collaborators/credits, and (h) what still needs confirmation. Don't invent precise data sources, numbers, classification decisions or map types.


---

# Reference: reference-portfolios.md

# Reference portfolios — practical lessons, not layouts to copy

Drew personally recommended these sites. I checked their publicly indexed page text on 2026-11-12; not every site exposed full visual markup to the retrieval tool. Claude should inspect visually in its browser before making specific visual claims.

1. **Carl Churchill** — https://churchillgeo.com/  
   Homepage groups work into WSJ, Woodwell Climate Research Center, personal work, and experiments. A notable process write-up, `https://churchillgeo.com/mapping-the-cloudiest-place-on-earth/`, walks through production and design changes. **Borrow:** simple editorial grouping and useful process documentation; avoid a category maze.

2. **Weiyi “Dawn” Cai** — https://www.caiweiyi.com/work1.html  
   Work archive pairs short project titles with specific one-sentence explanations (e.g., an interactive map, multimedia story or diagram). **Borrow:** immediate clarity, breadth of work without over-explaining each tile.

3. **Chris Alcantara** — https://chrisalcantara.com/  
   Recommended by Drew; live content wasn't text-accessible in this review. **Claude task:** inspect layout and interaction firsthand; do not infer design patterns from the name alone.

4. **Zach Levitt** — https://zachlevitt.com/  
   Minimal first-person introduction, short professional background, direct contact information and a very long, plain selected-work archive. **Borrow:** easy scan and deep body of work, no needless UI layers.

5. **Drew An-Pham** — https://drewanpham.com/  
   Friendly brief self-introduction, identity/experience, contact links and work. The user previously noticed the current GitHub prototype looked *too much like Drew's*. **Borrow:** conversational economy and immediacy, NOT the visual structure word-for-word. Let Hinoto's personal stamp and maps define visual identity.

## Synthesis
Calm homepage, concise labels, comprehensive discoverability and rich but tightly edited project pages with credible process materials. Make a recruiter find software/skills in 3 seconds and let a cartographer spend 3 minutes examining decisions.


---

# Reference: asset-manifest.md

# Website image inventory (historical local snapshot)

**Check current GitHub assets before replacing anything.** This list reflects the Nov 2026 local handoff ZIP. All paths are relative to website root.

| Asset | Size (KB) |
|---|---:|
| `images/hinoto-stamp.png` | 149 |
| `images/projects/PLACE-IMAGES-HERE.txt` | 0 |
| `images/projects/addison-housing.webp` | 193 |
| `images/projects/california-2021.webp` | 68 |
| `images/projects/california-ab604.webp` | 70 |
| `images/projects/california-compare.webp` | 62 |
| `images/projects/california-table.webp` | 79 |
| `images/projects/chicago-green-access.webp` | 23 |
| `images/projects/chicago-groups.webp` | 109 |
| `images/projects/chicago-process.webp` | 154 |
| `images/projects/chicago-redlining.webp` | 33 |
| `images/projects/chicago-rent.webp` | 233 |
| `images/projects/design-symbols.webp` | 135 |
| `images/projects/design-typography.webp` | 90 |
| `images/projects/kollektiv-establishment.webp` | 118 |
| `images/projects/kollektiv-living-space.webp` | 125 |
| `images/projects/kollektiv-poster.webp` | 260 |
| `images/projects/kollektiv-types.webp` | 110 |
| `images/projects/kollektiv-workshop-garden.webp` | 108 |
| `images/projects/louisville-basemap.webp` | 680 |
| `images/projects/louisville-housing.webp` | 125 |
| `images/projects/okinawa-early.webp` | 125 |
| `images/projects/okinawa-english.webp` | 136 |
| `images/projects/okinawa-japanese.webp` | 135 |
| `images/projects/okinawa-jpn-portfolio.webp` | 135 |
| `images/projects/okinawa-portfolio.webp` | 136 |
| `images/projects/okinawa-sketch.webp` | 199 |
| `images/projects/pownal-green.webp` | 168 |
| `images/projects/richmond-after.webp` | 79 |
| `images/projects/richmond-before.webp` | 77 |
| `images/projects/richmond-carless.webp` | 112 |
| `images/projects/richmond-change.webp` | 89 |
| `images/projects/richmond-stats.webp` | 34 |
| `images/projects/tactile-map.webp` | 194 |
| `images/thumbs/downtown-derby.webp` | 56 |
| `images/thumbs/green-spaces-by-the-border.webp` | 54 |
| `images/thumbs/lines-of-power.webp` | 26 |
| `images/thumbs/map-design.webp` | 41 |
| `images/thumbs/mapping-housing-potential.webp` | 122 |
| `images/thumbs/mapping-the-gaps.webp` | 77 |
| `images/thumbs/okinawa-twice-colonized.webp` | 55 |
| `images/thumbs/re-drawing-voting-access.webp` | 42 |
| `images/thumbs/redlined-chicago.webp` | 31 |
| `images/thumbs/the-danish-kollektiv.webp` | 79 |

Original exports provided separately in `optional-original-assets/` are for reference/re-export, not automatically for GitHub (larger file sizes).


---

# Reference: voice-and-japanese.md

# Writing and bilingual editorial style

## English
- Voice should sound like an actual student/researcher/cartographer speaking to a curious reader, not a sales pitch.
- Use simple active verbs: `mapped`, `compared`, `surveyed`, `geocoded`, `designed`, `tested` (only if actually done).
- Start with the question or work, not an elaborate justification of maps in general.
- Be specific about dataset names, time and scale when these help the reader; strip unnecessary adjectives.
- A short info row is fine: `2026 · Research & cartography · QGIS, Illustrator`. Crediting collaborators is essential.
- If something was a class assignment, label it as such when appropriate. If a study is exploratory, say that. State limits of analysis.
- Avoid filler: `leveraging`, `passionate about`, `innovative`, `compelling narrative`, `uniquely positioned`, `utilized various`, `transformative`, `robust analysis`.
- Prefer 1–3 sentences under a heading, with captions that say *what the reader should see* rather than `Map 2`.

## Japanese
- Natural, concise plain form. **Do not use です・ます**.
- Preserve the subject and nuance; don't mechanically translate English sentences or add high-register 熟語.
- Prefer everyday readable Japanese where precise: `地図をつくる`, `調べる`, `比べる`, `位置を示す`, `見える`, `使う`.
- Preserve technical terms accurately when needed: `GIS`, `QGIS`, `アイヌ語地名`, `米軍基地`, `投票所`, `共同生活`, `地理情報`.
- Avoid inappropriate oversimplification of historically sensitive terms and avoid invented Japanese names or etymologies.
- Translate headings, captions, alt text, metadata, buttons, category labels, and links. Preserve the same number and order of projects in both languages.
- Preserve proper nouns and names with natural Japanese conventions. `kollektiv` can be introduced as `コレクティブ（共同生活の住まい）` once; use context thereafter.
- Keep texts equally informative in both languages, not necessarily sentence-for-sentence identical.

## Example (draft, verify with user)
EN: `I combined base boundaries, 10-meter land cover and coral reef data to show how military land intersects with Okinawa's communities and ecosystems.`
JA: `基地の境界に10m解像度の土地被覆とサンゴ礁のデータを重ね、沖縄の暮らしや自然と基地の関係を地図にした。`


---

# Reference: roadmap.md

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


---

# Reference: qa-checklist.md

# Pre-merge checklist

- [ ] Start from the **current connected GitHub repo**. No blanket overwrite from an old ZIP.
- [ ] Preserve stamp, purple `#744B59`, quiet background, centered consistent gallery, no About/Contact pages.
- [ ] All project titles, descriptions, and order reviewed by user; all finished works discoverable.
- [ ] `description` and `group` fields actually render/function if chosen as content model.
- [ ] For each project, credible role, year, methods/software, key design choices, deliverables, credits; no invented details.
- [ ] EN and JP home + corresponding project pages switch to the same item, captions, alt text and navigation translated.
- [ ] JP phrasing plain-form (no です/ます); meaning preserved.
- [ ] Images load under `/hinototanaka/`, homepage tiles all 4:3, project maps fully visible; alt text meaningful.
- [ ] Test internal links and case-sensitive file paths, including `ja/projects/...` direct URLs.
- [ ] Mobile/desktop appearance and keyboard focus states/skip links checked.
- [ ] Page remains lightweight, readable and accessible without adding build tools unless approved.
- [ ] GitHub Pages deploy passes; no forced push or changes to DNS/custom-domain settings.
- [ ] README updated with plain-English instructions for noncoders; describe how to edit/order/add one bilingual project.
- [ ] Work delivered as a reviewable branch/PR; don't merge until user confirms.
