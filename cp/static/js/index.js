(()=>{{window.logger.info("Version Number:",client.version),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)}),$(".minus,.add").on("click",function(){const e=$(this).closest("div").find(".qty"),t=parseInt(e.val()),o=$(this).hasClass("add");isNaN(t)||e.val(o?++t:0<t?--t:t)}),$('a[data-action="collapse"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ti-minus ti-plus"),$(this).closest(".card").children(".card-body").collapse("toggle")}),$('a[data-action="expand"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="expand"] i').toggleClass("ti-arrows-maximize ti-arrows-maximize"),$(this).closest(".card").toggleClass("card-fullscreen")}),$('a[data-action="close"]').on("click",function(){$(this).closest(".card").removeClass().slideUp("fast")});const a=$(".container-fluid");var e=$(".full-width");const n=$(".full-width i");var t=$(".boxed-width");const i=$(".boxed-width i"),s=(e.on("click",()=>{a.addClass("mw-100"),n.addClass("text-primary"),i.removeClass("text-primary")}),t.on("click",()=>{a.removeClass("mw-100"),n.removeClass("text-primary"),i.addClass("text-primary")}),$(".cardborder")),l=$(".cardshadow"),c=$(".change-colors li a");s.on("click",()=>{$("body").addClass("cardwithborder"),l.find("i").addClass("text-dark-emphasis"),s.find("i").addClass("text-primary")}),l.on("click",()=>{$("body").removeClass("cardwithborder"),s.find("i").removeClass("text-primary"),l.find("i").removeClass("text-dark-emphasis")}),c.on("click",function(){c.removeClass("active-theme"),$(this).addClass("active-theme")})}const o=document.querySelector("html");e=document.querySelectorAll("[name='bodytheme']"),t=localStorage.getItem("theme")||"auto",t=document.getElementById(t+"-theme");t&&(t.checked=!0),e.forEach(e=>{e.addEventListener("change",function(){var e,t=this.id.replace("-theme","");localStorage.setItem("theme",t),"auto"===t?(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",o.setAttribute("data-bs-theme",e)):o.setAttribute("data-bs-theme",t)})})})(),window.addEventListener("DOMContentLoaded",function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{"auto"==localStorage.getItem("theme")&&(e=e.matches?"dark":"light",html[0].setAttribute("data-bs-theme",e))});const t=$("#siteSearchModal"),o=$("#search-header");function a(){var e=new bootstrap.Modal(t[0],{keyboard:!1});"block"===t.css("display")?e.hide():(e.show(),setTimeout(()=>{o.focus()},800))}var e;$("#search-header2, #search-header3").on("click",a),t.one("show.bs.modal",function(){var o=window.location,a=o.href,n=[],i=["#","javascript:void(0)","javascript:;",a+"#",o.origin+"/"],s=document.querySelectorAll("a");for(let e=0,t=s.length;e<t;e++){const c=s[e].href;if(c&&c!==a&&!i.includes(c)){const r=s[e].textContent.replace(/\s+/g," ").trim();n.find(e=>e.name===r)||n.find(e=>e.url===c)||n.push({name:r,url:c})}}for(let t=0;t<n.length;t++){let e=n[t].url;e.startsWith(o.origin)&&(e=e.split(o.host)[1]);var l=n[t].name;$("#searchbarcontent").append($(`<li class="p-1 mb-1 bg-hover-light-black rounded-4">
        <a href="${e}" class="py-2 px-3 d-flex align-items-center dropdown-item">
          <div class="rounded-1 text-bg-light p-2 me-3">
            <span class="icon rounded-circle ti ti-box"></span>
          </div>
          <div class="d-inline-block v-middle">
            <h6 class="mb-1 fw-semibold">${l}</h6>
            <span class="fs-2 d-block text-break">${e}</span>
          </div>
        </a>
      </li>`))}}),window.addEventListener("keydown",function(e){e.ctrlKey&&"k"==e.key&&(e.preventDefault(),a())}),$("#use_profile_information").on("click",function(){$.ajax({url:"/api/users/@me",method:"GET",contentType:"application/json",success:function(e){$("#useremail").val(e.localdata.email),$("#username").val(e.localdata.username),$("#userid").val(e.localdata.id),window.NotificationHandler.show({content:"Profile information loaded!",type:"success"})},error:function(e){window.NotificationHandler.show({content:"Please log in to use this!",type:"error"})}})}),"/"!=window.location.pathname&&(e=document.getElementsByClassName("signinBtn"),Array.from(e).forEach(function(e){var t=window.location.href.split(window.location.origin)[1];e.setAttribute("href","/login?returnurl="+encodeURIComponent(t))})),(e=document.getElementById("logoutBtn"))&&e.addEventListener("click",function(){var e=new XMLHttpRequest;e.open("POST","/logout",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("name=deophaixem&pass=ditmemay"),setTimeout(()=>{window.NotificationHandler.clear(),window.location.href="/"},1e3)});{const n=document.getElementById("return-to-top");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?n.classList.add("return-to-top-visible"):n.classList.remove("return-to-top-visible")},n.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})}});