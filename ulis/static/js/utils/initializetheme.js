(() => {
  const html_tree = document.querySelector("html");
  try {
    let theme = localStorage.getItem("theme") || "light";
    if (theme === "auto") theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    html_tree.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    logger.info('Theme initialized', theme);
  } catch (err) {
    html_tree.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
    logger.error("Failed to initialize theme", err);
  }
})();
