/**
 * HOMEPAGE GALLERY
 * The project information comes from projects.js (English) or
 * projects-ja.js (Japanese). This script turns that list into cards,
 * in the same order as the list.
 * You normally do not need to edit this file to add a new project.
 */

// Keep project titles and image descriptions safe when inserting HTML.
function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

// Build the HTML for one project card: thumbnail, title, subtitle, year.
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

const grid = document.getElementById('project-grid');

// Only build the gallery when this page has a grid and a project list.
if (grid && typeof projects !== 'undefined') {
  grid.innerHTML = projects.map(projectCard).join('');
}
