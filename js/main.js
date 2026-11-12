/**
 * HOMEPAGE GALLERY
 * The project information comes from projects.js (English) or
 * projects-ja.js (Japanese). This script turns that list into cards.
 * You normally do not need to edit this file to add a new project.
 *
 * The homepage has one empty grid per group, for example:
 *   <div class="project-grid" data-group="selected"></div>
 *   <div class="project-grid" data-group="more"></div>
 * Each project goes into the grid whose data-group matches its "group".
 * A project with a missing or misspelled group goes into the first grid,
 * so it never silently disappears.
 */

// Keep project titles and image descriptions safe when inserting HTML.
function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

// Build the HTML for one project card.
function projectCard(project) {
  const size = project.imageWidth && project.imageHeight
    ? ` width="${escapeHtml(project.imageWidth)}" height="${escapeHtml(project.imageHeight)}"`
    : '';
  const subtitle = project.description
    ? `<p class="project-subtitle">${escapeHtml(project.description)}</p>`
    : '';
  const year = project.year
    ? `<p class="project-year">${escapeHtml(project.year)}</p>`
    : '';
  return `
    <a class="project" href="${escapeHtml(project.page)}">
      <div class="project-image">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}"${size} loading="lazy" decoding="async">
      </div>
      <h3>${escapeHtml(project.title)}</h3>
      ${subtitle}
      ${year}
    </a>`;
}

const grids = [...document.querySelectorAll('.project-grid[data-group]')];

// Only build the gallery when this page has grids and a project list.
if (grids.length && typeof projects !== 'undefined') {
  const known = grids.map((grid) => grid.dataset.group);

  grids.forEach((grid, index) => {
    const items = projects.filter((project) => {
      const group = known.includes(project.group) ? project.group : known[0];
      return group === grid.dataset.group;
    });
    grid.innerHTML = items.map(projectCard).join('');
    // Hide a section (heading included) if it ends up empty.
    const section = grid.closest('section');
    if (section && !items.length) section.hidden = true;
  });
}
