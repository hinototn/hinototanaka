/**
 * HOMEPAGE GALLERY
 * The project information comes from projects.js (English) or
 * projects-ja.js (Japanese). This script turns that list into the cards.
 * You normally do not need to edit this file to add a new project.
 */

// Keep project titles and image descriptions safe when inserting HTML.
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

const grid = document.getElementById('project-grid');

// Only build the gallery when this page has a project grid and a project list.
if (grid && typeof projects !== 'undefined') {
  grid.innerHTML = projects.map((project) => `
    <a class="project" href="${escapeHtml(project.page)}">
      <div class="project-image">
        <img
          src="${escapeHtml(project.image)}"
          alt="${escapeHtml(project.imageAlt)}"
          loading="lazy"
          decoding="async">
      </div>
      <h3>${escapeHtml(project.title)}</h3>
    </a>
  `).join('');
}
