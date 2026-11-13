# How my site is organized

Plain HTML, CSS and a little JavaScript. No build step: I edit a file on GitHub, commit, and GitHub Pages updates in a minute or two.

```
index.html             English homepage (intro text lives here)
ja/index.html          Japanese homepage
about.html             About page (my name and stamp in the header link here)
ja/about.html          Japanese About page
project.html           English project page: one template for every project
ja/project.html        Japanese project page: same template
css/styles.css         all styling; fonts and colors at the top
js/projects.js         my project list: order, titles, subtitles, years, thumbnails
js/home.js             builds the homepage cards from js/projects.js
js/project.js          builds a project page from its file in projects/
projects/<id>.js       one file per project, with English and Japanese side by side
images/thumbs/         homepage thumbnails, 1200 × 900 (4:3)
images/projects/       full maps and process images
```

## Change a project's writing or images
Open `projects/<id>.js`. Every piece of text has an `en:` and a `ja:` version next to each other. A project has:
- `intro`: the line under the title
- `hero`: the big map at the top
- `facts`: the short list (Context, Team, Tools, Data). The year is added automatically.
- `about`: a paragraph or two
- `sections`: each has a `heading`, `text` (a list of paragraphs) and optional `images`
- `sources`

Images in a section stay small on purpose: one is centered, two sit side by side, three or more make a grid.

## Reorder projects, or change a title, subtitle or thumbnail
Open `js/projects.js`. The homepage shows projects in exactly this order.

## Add a project
1. Put its images in `images/projects/` and a 1200 × 900 thumbnail in `images/thumbs/`.
2. Copy any file in `projects/`, rename it (e.g. `projects/my-new-map.js`) and change the text and image names.
3. Copy one block in `js/projects.js` and set `id: "my-new-map"` (the same name as the file).

The project's address is `project.html?id=my-new-map`.

## Fonts
At the top of `css/styles.css`. English uses Helvetica Neue; Japanese uses Noto Sans JP, loaded in each page's `<head>`.

## The header
My name, stamp and the Work / About links are written in each page's `<header>` (index, project, about, in both languages). If I change them, I change all six.

## If something breaks
- Blank project page: a missing comma or quote in `projects/<id>.js`, or the `id` in `js/projects.js` doesn't match the file name.
- Broken image: check the file name and its capitalization.
