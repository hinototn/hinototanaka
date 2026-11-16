// MY HOMEPAGE GRID
// I build the project cards from the list in js/projects.js.
// - Projects marked selected: true go in the "Selected work" row, in the order they're listed.
// - Everything else goes under "More work", newest year first
//   (projects from the same year keep the order they have in js/projects.js).
// The same file works for both homepages: the page's lang="en" or lang="ja"
// tells me which language to show.

const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
const root = lang === 'ja' ? '../' : '';   // the Japanese pages live one folder down

// One card: thumbnail, title, subtitle, year.
const card = (p) => `
  <a class="project" href="project.html?id=${p.id}">
    <div class="project-image">
      <img src="${root}images/thumbs/${p.thumb}" alt="${p.thumbAlt[lang]}" width="1200" height="900" loading="lazy">
    </div>
    <h3>${p.title[lang]}</h3>
    <p class="project-subtitle">${p.subtitle[lang]}</p>
    <p class="project-year">${p.year}</p>
  </a>`;

const selected = projects.filter((p) => p.selected);
const more = projects.filter((p) => !p.selected).sort((a, b) => b.year - a.year);

document.getElementById('selected-grid').innerHTML = selected.map(card).join('');
document.getElementById('more-grid').innerHTML = more.map(card).join('');
