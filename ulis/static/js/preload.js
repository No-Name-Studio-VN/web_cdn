$(function () {
  const lang = document.documentElement.lang;
  $.ajax({
    url: `/locales/resources.json?lng=${lang}&ns=translation`,
    method: "GET",
    contentType: "application/json",
    success: function (data) {
      window.__locales = data[lang].translation;
    }
  });
});

// eslint-disable-next-line no-unused-vars
function t_i(key) {
  const keys = key.split('.');
  let res = keys.reduce((obj, k) => (obj || {})[k], window.__locales);

  // Check if res contains a string like $t(dashboard.login.signin)
  const regex = /\$t\((.*?)\)/g;
  res = res.replace(regex, function (match, p1) {
    return t_i(p1);
  });

  return res;
}

(function () {
  const html = document.getElementsByTagName("html");
  try {
    html[0].setAttribute("data-bs-theme", localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
    if (localStorage.getItem("theme") == "auto") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html[0].setAttribute("data-bs-theme", "dark");
      } else {
        html[0].setAttribute("data-bs-theme", "light");
      }
    } else {
      html[0].setAttribute("data-bs-theme", localStorage.getItem("theme"));
    }
  } catch (err) {
    logger.error("Error setting theme", err.message);
    html[0].setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  }
})();

(function () {
  /* if(window.location.pathname == "/" || window.location.pathname == "/dashboard" || window.location.pathname.split("/")[1] == "profile"){
    document.body.style.overflow = 'hidden';
    preloader.style.display = null;
    window.addEventListener("load", function () {
      preloader.className += " fade";
      setTimeout(function () {
        preloader.style.display = "none";
        document.body.style.overflow = null;
      }, 500);
    });
  } */

  document.addEventListener('DOMContentLoaded', removePreloader);

  // set a timer if after 5 seconds the page still not loaded, remove the preloader
  setTimeout(removePreloader, 5000);

  function removePreloader() {
    const preloader = document.getElementById("preloader");
    preloader.className += " fade";
    setTimeout(function () {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
    }, 200);
  }
})();
