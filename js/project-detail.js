/**
 * OKINAWA MAP LANGUAGE SWITCH
 * On the Okinawa project page, show the English or Japanese artwork.
 * This is separate from the website-wide EN / 日本語 navigation.
 */

document.documentElement.classList.add('js');
const buttons = [...document.querySelectorAll('[data-map-language]')];
const figures = [...document.querySelectorAll('[data-map]')];

function showLanguage(language) {
  // Highlight the selected button for both visual and screen-reader users.
  buttons.forEach((button) => {
    const selected = button.dataset.mapLanguage === language;
    button.setAttribute('aria-pressed', String(selected));
  });

  // Hide the non-selected map image while retaining it in the page.
  figures.forEach((figure) => {
    figure.hidden = figure.dataset.map !== language;
  });
}

if (buttons.length) {
  buttons.forEach((button) => {
    button.addEventListener('click', () => showLanguage(button.dataset.mapLanguage));
  });

  // Initial map matches the language of the current page.
  showLanguage(document.documentElement.lang === 'ja' ? 'ja' : 'en');
}
