"use strict";

(() => {
  const translations = window.FORNO_TRANSLATIONS || {};
  const textEntries = [];
  const attributeEntries = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  // Retain original text nodes so repeated switches never lose source content.
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const source = node.textContent;
    const english = translations[source.trim()];
    if (english && !node.parentElement.closest('script, style')) textEntries.push({ node, source, english });
  }
  document.querySelectorAll('[alt], [aria-label], meta[name="description"]').forEach(element => {
    for (const attribute of ['alt', 'aria-label', 'content']) {
      const source = element.getAttribute(attribute);
      if (source && translations[source]) attributeEntries.push({ element, attribute, source, english: translations[source] });
    }
  });
  const germanTitle = document.title;
  const buttons = [...document.querySelectorAll('[data-lang]')];
  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'de';
    for (const entry of textEntries) entry.node.textContent = english ? entry.source.replace(entry.source.trim(), entry.english) : entry.source;
    for (const entry of attributeEntries) entry.element.setAttribute(entry.attribute, english ? entry.english : entry.source);
    document.title = english ? translations[germanTitle] : germanTitle;
    document.querySelector('.language-switch').setAttribute('aria-label', english ? 'Language' : 'Sprache');
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    try { localStorage.setItem('forno-language', language); } catch { /* Private browsing still works. */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  let savedLanguage = 'de';
  try { if (localStorage.getItem('forno-language') === 'en') savedLanguage = 'en'; } catch { /* Use German. */ }
  setLanguage(savedLanguage);
})();
