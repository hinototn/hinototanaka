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
