// MY PROJECT PAGE TEMPLATE
// Every project uses this one template. The address says which project to show,
// e.g. project.html?id=okinawa-twice-colonized. I load projects/<id>.js, which
// calls project({ … }) below with that project's text and images.
// The title, subtitle and year come from js/projects.js, so they live in one place.

const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
const root = lang === 'ja' ? '../' : '';   // the Japanese pages live one folder down
const id = new URLSearchParams(location.search).get('id');
const info = projects.find((p) => p.id === id);
const main = document.getElementById('project');

// The few words the template itself needs, in both languages.
const words = {
  en: { sources: 'Sources', notFound: 'Project not found.', open: 'Click to open full size.' },
  ja: { sources: '出典', notFound: '作品が見つからない。', open: 'クリックすると原寸で開く。' },
};

// One image that opens full size when clicked.
function image(img) {
  const src = `${root}images/projects/${img.file}`;
  return `<figure>
    <a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${img.alt[lang]}" loading="lazy"></a>
    ${img.caption ? `<figcaption>${img.caption[lang]}</figcaption>` : ''}
  </figure>`;
}

// A row of colour chips (I only use this on Okinawa).
function colors(row) {
  return `<p class="swatch-label">${row.label[lang]}</p>
    <ul class="swatches">${row.chips.map((c) =>
      `<li><span style="background:${c.hex}"></span>${c.name[lang]}</li>`).join('')}</ul>`;
}

// One section of writing: a heading, paragraphs, and any images that go with it.
// The CSS keeps images small: 1 image is centered, 2 (or 4) sit two across, 3+ make a grid of three.
function section(s) {
  const imgs = s.images || [];
  const columns = imgs.length === 4 ? 2 : Math.min(imgs.length, 3);   // 4 images look best as 2 × 2
  return `<section>
    <h2>${s.heading[lang]}</h2>
    ${s.text[lang].map((p) => `<p>${p}</p>`).join('')}
    ${(s.colors || []).map(colors).join('')}
    ${imgs.length ? `<div class="images images-${columns}">${imgs.map(image).join('')}</div>` : ''}
  </section>`;
}

// The big map at the top. It never gets taller than the screen; a project can
// also set width: (in pixels) to make it smaller. If the project has a second version (Okinawa's
// Japanese edition), I add two buttons to switch between them.
function hero(h) {
  const versions = [h, h.other].filter(Boolean);
  const buttons = versions.length > 1
    ? `<div class="hero-switch">${versions.map((v, i) =>
        `<button type="button" data-show="${i}" aria-pressed="${i === 0}">${v.button}</button>`).join('')}</div>`
    : '';
  return `${buttons}${versions.map((v, i) => `
    <figure class="hero" data-version="${i}" ${i ? 'hidden' : ''} ${v.width ? `style="max-width:${v.width}px"` : ''}>
      <a href="${root}images/projects/${v.file}" target="_blank" rel="noopener"><img src="${root}images/projects/${v.file}" alt="${v.alt[lang]}"></a>
      <figcaption>${v.caption[lang]} ${words[lang].open}</figcaption>
    </figure>`).join('')}`;
}

// Content files call this function with their project.
function project(p) {
  document.title = `${info.title[lang]} — Hinoto Tanaka`;
  document.querySelector('meta[name="description"]').content = p.intro[lang];

  main.innerHTML = `
    <p class="back"><a href="index.html#work">← ${lang === 'ja' ? '作品一覧へ' : 'Work'}</a></p>
    <h1>${info.title[lang]}</h1>
    <p class="project-intro">${p.intro[lang]}</p>
    ${hero(p.hero)}
    <div class="prose">
      <dl class="facts">
        <dt>${lang === 'ja' ? '年' : 'Year'}</dt><dd>${info.year}</dd>
        ${p.facts.map((f) => `<dt>${f.label[lang]}</dt><dd>${f.text[lang]}</dd>`).join('')}
      </dl>
      ${p.about[lang].map((t) => `<p>${t}</p>`).join('')}
      ${p.workflow ? `<p class="workflow"><span>${lang === 'ja' ? '制作の流れ' : 'Process'}</span>${p.workflow.map((w) => w[lang]).join(' → ')}</p>` : ''}
      ${p.sections.map(section).join('')}
      ${p.sources.length ? `<section class="sources"><h2>${words[lang].sources}</h2>
        <ul>${p.sources.map((s) => `<li>${s[lang]}</li>`).join('')}</ul></section>` : ''}
    </div>
    <p class="back bottom-back"><a href="index.html#work">← ${lang === 'ja' ? '作品一覧へ' : 'Back to work'}</a></p>`;

  // The hero switch buttons: show the chosen version, hide the other.
  main.querySelectorAll('.hero-switch button').forEach((b) => b.addEventListener('click', () => {
    main.querySelectorAll('.hero').forEach((f) => { f.hidden = f.dataset.version !== b.dataset.show; });
    main.querySelectorAll('.hero-switch button').forEach((x) => x.setAttribute('aria-pressed', x === b));
  }));
}

// Point the EN / 日本語 toggle at the same project in the other language.
document.querySelectorAll('.lang-switch a').forEach((a) => { a.href += `?id=${id}`; });

// Load this project's content file (or say it doesn't exist).
if (info) {
  const script = document.createElement('script');
  script.src = `${root}projects/${id}.js`;
  document.body.appendChild(script);
} else {
  main.innerHTML = `<p class="project-intro">${words[lang].notFound} <a href="index.html">←</a></p>`;
}
