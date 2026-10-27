(() => {
  const buttons = document.querySelectorAll("[data-set-language]");
  const parts = document.querySelectorAll("[data-language]");

  function setLanguage(language) {
    document.documentElement.lang = language;
    parts.forEach((part) => {
      part.hidden = part.dataset.language !== language;
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLanguage === language));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLanguage));
  });

  setLanguage("ja");
})();
