(async () => {
  $(".scroll-link").on("click", function (t) {
    const o = $(this);
    $("html, body").stop().animate({
      scrollTop: $(o.attr("href")).offset().top - 10
    }, 1e3), t.preventDefault();
  });

  AOS.init({
    once: true,
    mirror: false
  });

  $("#searchbar").on("keydown", function (t) {
    if (13 === t.keyCode) {
      const o = $(this).val();
      window.location.href = `/search/${o}`;
    }
  });

  $("#searchbarbutton").on("click", function () {
    const t = $("#searchbar").val();
    window.location.href = `/search/${t}`;
  });
})();