(async()=>{$(".scroll-link").on("click",function(o){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top-10},1e3),o.preventDefault()}),AOS.init({once:!0,mirror:!1}),$("#searchbar").on("keydown",function(o){13===o.keyCode&&(o=$(this).val(),window.location.href="/search/"+o)}),$("#searchbarbutton").on("click",function(){var o=$("#searchbar").val();window.location.href="/search/"+o})})();