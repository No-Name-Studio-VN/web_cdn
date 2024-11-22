(() => {
  (() => {
    logger.debug(`
      _
       .__(.)< (MEOW)
        \___)`);
    logger.info("Version Number:", client.version);
    // =================================
    // Popover
    // =================================
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    // eslint-disable-next-line no-unused-vars
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    // increment & decrement
    $(".minus,.add").on("click", function () {
      const $qty = $(this).closest("div").find(".qty"),
        currentVal = parseInt($qty.val()),
        isAdd = $(this).hasClass("add");
      !isNaN(currentVal) &&
        $qty.val(
          isAdd ? ++currentVal : currentVal > 0 ? --currentVal : currentVal
        );
    });

    // ==============================================================
    // Collapsable cards
    // ==============================================================
    $('a[data-action="collapse"]').on("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".card")
        .find('[data-action="collapse"] i')
        .toggleClass("ti-minus ti-plus");
      $(this).closest(".card").children(".card-body").collapse("toggle");
    });
    // Toggle fullscreen
    $('a[data-action="expand"]').on("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".card")
        .find('[data-action="expand"] i')
        .toggleClass("ti-arrows-maximize ti-arrows-maximize");
      $(this).closest(".card").toggleClass("card-fullscreen");
    });
    // Close Card
    $('a[data-action="close"]').on("click", function () {
      $(this).closest(".card").removeClass().slideUp("fast");
    });

    /*change layout boxed/full */
    const $containerFluid = $(".container-fluid");
    const $fullWidth = $(".full-width");
    const $fullWidthIcon = $(".full-width i");
    const $boxedWidth = $(".boxed-width");
    const $boxedWidthIcon = $(".boxed-width i");

    $fullWidth.on("click", () => {
      $containerFluid.addClass("mw-100");
      $fullWidthIcon.addClass("text-primary");
      $boxedWidthIcon.removeClass("text-primary");
    });

    $boxedWidth.on("click", () => {
      $containerFluid.removeClass("mw-100");
      $fullWidthIcon.removeClass("text-primary");
      $boxedWidthIcon.addClass("text-primary");
    });


    /*Card border/shadow*/
    const $cardBorder = $(".cardborder");
    const $cardShadow = $(".cardshadow");
    const $changeColorsLinks = $(".change-colors li a");

    $cardBorder.on("click", () => {
      $("body").addClass("cardwithborder");
      $cardShadow.find("i").addClass("text-dark-emphasis");
      $cardBorder.find("i").addClass("text-primary");
    });

    $cardShadow.on("click", () => {
      $("body").removeClass("cardwithborder");
      $cardBorder.find("i").removeClass("text-primary");
      $cardShadow.find("i").removeClass("text-dark-emphasis");
    });

    $changeColorsLinks.on("click", function () {
      $changeColorsLinks.removeClass("active-theme");
      $(this).addClass("active-theme");
    });

  })();

  /*Dark/Light theme*/
  const html = document.querySelector("html");
  const radios = document.querySelectorAll("[name='bodytheme']");
  const currentTheme = localStorage.getItem("theme") || "auto";
  
  const themeElement = document.getElementById(`${currentTheme}-theme`);
  if (themeElement) {
    themeElement.checked = true;
  }
  
  const setTheme = (theme) => {
    const resolvedTheme = theme === "auto"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;
    html.setAttribute("data-bs-theme", resolvedTheme);
  };
  
  setTheme(currentTheme);
  
  radios.forEach(radio => {
    radio.addEventListener("change", function () {
      const choice = this.id.replace("-theme", "");
      localStorage.setItem("theme", choice);
      setTheme(choice);
    });
  });

  // =================================
  // Increment & Decrement
  // =================================
  const quantityButtons = document.querySelectorAll(".minus, .add");
  if (quantityButtons) {
    quantityButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const qtyInput = this.closest("div").querySelector(".qty");
        let currentVal = parseInt(qtyInput.value);
        const isAdd = this.classList.contains("add");

        if (!isNaN(currentVal)) {
          qtyInput.value = isAdd ? ++currentVal : currentVal > 0 ? --currentVal : currentVal;
        }
      });
    });
  }
})();

window.addEventListener('DOMContentLoaded', function () {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("theme") == "auto") {
      const newColorScheme = e.matches ? "dark" : "light";
      document.querySelector("html").setAttribute("data-bs-theme", newColorScheme);
    }
  });

  $("#search-header2, #search-header3").on("keydown", function (e) {
    if (e.key === "Enter") {
      // redirect to search page
      const searchQuery = this.value;
      if (searchQuery) {
        window.location.href = `/search/${encodeURI(searchQuery)}`;
      }
    }
  });
  
  // Add a function which fetch current user to buttonId use_profile_information
  $("#use_profile_information").on("click", function () {
    $.get("/api/users/@me", function (res) {
      $("#useremail").val(res.localdata.email);
      $("#username").val(res.localdata.username);
      $("#userid").val(res.localdata.id);
      window.NotificationHandler.show({
        content: "Profile information loaded!",
        type: "success"
      });
    }).fail(function () {
      window.NotificationHandler.show({
        content: "Please log in to use this!",
        type: "error"
      });
    });
  });

  // set href for signin btn
  (() => {
    if (window.location.pathname == "/") return;
    const signinBtn = document.getElementsByClassName("signinBtn");
    Array.from(signinBtn).forEach(function (item) {
      const redirectUrl = window.location.href.split(window.location.origin)[1];
      item.setAttribute("href", `/login?returnurl=${encodeURIComponent(redirectUrl)}`);
    });
  })();

  // Set logout action to this button
  (() => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/logout", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("name=deophaixem&pass=ditmemay");
        setTimeout(() => {
          window.NotificationHandler.clear();
          window.location.href = "/";
        }, 1000);
      });
    };
  })();

  (() => {
    //Get the button
    const mybutton = document.getElementById("return-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add("return-to-top-visible");
      } else {
        mybutton.classList.remove("return-to-top-visible");
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  })();
});