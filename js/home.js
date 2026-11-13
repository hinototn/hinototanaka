// MY HOMEPAGE GRID
// I build the project cards from the list in js/projects.js, in that order.
// The same file works for both homepages: the page's lang="en" or lang="ja"
// tells me which language to show.

const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
const root = lang === 'ja' ? '../' : '';   // the Japanese pages live one folder down

document.getElementById('project-grid').innerHTML = projects.map((p) => `
  <a class="project" href="project.html?id=${p.id}">
    <div class="project-image">
      <img src="${root}images/thumbs/${p.thumb}" alt="${p.thumbAlt[lang]}" width="1200" height="900" loading="lazy">
    </div>
    <h3>${p.title[lang]}</h3>
    <p class="project-subtitle">${p.subtitle[lang]}</p>
    <p class="project-year">${p.year}</p>
  </a>`).join('');
