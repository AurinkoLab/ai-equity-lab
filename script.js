// Language titles match the editable content in index.html.
const pageTitles = {
  en: "STEM Without Barriers",
  fi: "STEM ilman esteitä",
  sv: "STEM utan barriärer"
};

function setLanguage(language) {
  if (!pageTitles[language]) {
    language = "en";
  }

  document.documentElement.lang = language;
  document.title = `${pageTitles[language]} | AurinkoLab`;
  document.getElementById("brand-title").textContent = pageTitles[language];

  document.querySelectorAll(".language-page").forEach((page) => {
    page.hidden = page.lang !== language;
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  try {
    localStorage.setItem("stem-language", language);
  } catch (error) {
    // The page still works when browser storage is unavailable.
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

try {
  setLanguage(localStorage.getItem("stem-language") || "en");
} catch (error) {
  setLanguage("en");
}
