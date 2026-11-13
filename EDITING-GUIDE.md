# Your portfolio: how to edit it

This website is intentionally small. You do **not** need Cursor, Node.js, React, or any other coding tool. It's ordinary HTML (text and page structure), CSS (appearance), and a little JavaScript (the project grid and Okinawa map switch).

**Make a backup of the entire folder before you change files.** Open text files in any plain-text editor (TextEdit in plain-text mode, VS Code, or another code editor), save, then refresh the browser to see your changes.

## File map

| Want to change… | Edit this file |
|---|---|
| English homepage introduction | `index.html` |
| Japanese homepage introduction | `ja/index.html` |
| English project titles, order, thumbnail images | `js/projects.js` |
| Japanese project titles and image descriptions | `js/projects-ja.js` |
| English project explanation and photo captions | `projects/PROJECT-NAME.html` |
| Japanese project explanation and photo captions | `ja/projects/PROJECT-NAME.html` |
| Background, typography, accent color, image sizes, spacing | `css/styles.css` |
| Stamp image | `images/hinoto-stamp.png` |
| Full maps and homepage thumbnails | `images/projects/` and `images/thumbs/` |

The gallery-building code is in `js/main.js`. Usually **leave it alone**. The Okinawa English/Japanese map image switch lives in `js/project-detail.js`.

## 1. Edit your homepage introduction

Open `index.html`. Find `<section class="intro">`. Change only the words between the HTML tags, for example the text between `<p>` and `</p>`. Keep the tags themselves.

Repeat in `ja/index.html` if you want the two versions to match.

## 2. Reorder or rename projects

Open `js/projects.js`. The `projects` list contains one block for each item. Moving a whole `{ ... }` block up or down changes its homepage order. You can change the `title` text without touching the HTML.

The homepage shows the projects in exactly the order of this list, so keep the most important ones at the top. Each card shows the `title`, the `description` (the short subtitle) and the `year`.

For Japanese, make the same change in `js/projects-ja.js`. Both lists should have the same order and project-page paths for their respective languages.

**Do not forget commas between project blocks.** For punctuation inside text, use normal quotes carefully.

## 3. Replace a project image

Copy the new map image into `images/projects/` (full-size) or `images/thumbs/` (homepage).

Then change the relevant `image: "images/thumbs/filename.webp"` line in **both** `js/projects.js` and `js/projects-ja.js`, and update `imageAlt` to describe the new image.

Homepage thumbnails should be exported at **1200 × 900 pixels (4:3)** so the gallery stays even. Frame each one on the part of the map that matters. The full artwork on the project page is never cropped.

## 4. Edit a project page

Each project has two ordinary HTML pages: one in `projects/` and one in `ja/projects/`.

Look for paragraphs (`<p>…</p>`), image captions (`<figcaption>…</figcaption>`), and the main heading (`<h1>…</h1>`). Edit only the writing between these tags. Don't remove image filenames or links unless you mean to change them.

The Okinawa page additionally uses `js/project-detail.js` to switch between its two map images.

## 5. Change a color

Open `css/styles.css`. At the top, find:

```css
--accent: #744B59;
```

Change that hex value to use a different purple across links and highlights. Other colors are also defined in the same `:root` section.

## 6. Publish updates

After you've created a GitHub Pages repository, upload the changed files to the **same paths** in that repository. GitHub will redeploy the site from the `main` branch and `/(root)` when you commit the changes.

If you add a new project, upload its images and its **two** HTML pages as well as the updated English/Japanese `projects.js` files.

## 7. If something stops displaying

- Blank homepage grid: check `js/projects.js` and `js/projects-ja.js` for missing commas or quotes.
- Broken image: check the exact filename, spelling and letter case (GitHub treats names as case-sensitive).
- Broken project link: check that the `page` value matches the HTML filename and folder.
- Japanese page not updating: edit its counterpart in the `ja/` folder.
- Files work locally but not online: check that `index.html`, `css/`, `js/`, `images/`, `projects/`, and `ja/` are at the **root** of the repository, not nested inside an extra folder.

## Publish on GitHub Pages (no terminal)

1. Sign into GitHub. Create a **public** repository named `hinototn.github.io` (if `hinototn` is your GitHub username and that repo doesn't already exist).
2. Unzip the site. Open the `hinoto-portfolio` folder and drag **its contents**, including all subfolders, into GitHub's **Add file → Upload files** page. Upload the folder's contents, not the ZIP.
3. Commit the files to `main`.
4. Open **Settings → Pages**, choose **Deploy from a branch**, **main**, `/(root)`, then **Save**.
5. Visit `https://hinototn.github.io/` after publishing completes. If the username repo already exists, use another repository, e.g., `portfolio`, and the corresponding project URL.

GitHub Pages and repository details: https://docs.github.com/en/pages/quickstart
