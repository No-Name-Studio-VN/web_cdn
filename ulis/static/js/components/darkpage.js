(() => {
  document.documentElement.setAttribute("data-bs-theme", "dark");
  InjectCSS(`body {background: url("${client.cdn}/static/img/loading_bg${Math.floor(Math.random() * 3)}.jpg") no-repeat center fixed;}`);
})();