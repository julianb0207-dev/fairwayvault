// FairwayVault – main.js
// DE/EN Language Toggle

(function () {
  let currentLang = localStorage.getItem('fv-lang') || 'de';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fv-lang', lang);

    // Update all data-de / data-en elements
    document.querySelectorAll('[data-de]').forEach(el => {
      el.textContent = lang === 'de' ? el.dataset.de : el.dataset.en;
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update button label
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        applyLanguage(currentLang === 'de' ? 'en' : 'de');
      });
    }
    // Apply saved language on load
    applyLanguage(currentLang);
  });
})();
