(()=>{{logger.debug(`
      _
       .__(.)< (MEOW)
        ___)`),logger.info("Version Number:",client.version),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)}),$(".minus,.add").on("click",function(){const e=$(this).closest("div").find(".qty"),t=parseInt(e.val()),a=$(this).hasClass("add");isNaN(t)||e.val(a?++t:0<t?--t:t)}),$('a[data-action="collapse"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ti-minus ti-plus"),$(this).closest(".card").children(".card-body").collapse("toggle")}),$('a[data-action="expand"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="expand"] i').toggleClass("ti-arrows-maximize ti-arrows-maximize"),$(this).closest(".card").toggleClass("card-fullscreen")}),$('a[data-action="close"]').on("click",function(){$(this).closest(".card").removeClass().slideUp("fast")});let e=$(".container-fluid");var l=$(".full-width");let t=$(".full-width i");var s=$(".boxed-width");let a=$(".boxed-width i"),o=(l.on("click",()=>{e.addClass("mw-100"),t.addClass("text-primary"),a.removeClass("text-primary")}),s.on("click",()=>{e.removeClass("mw-100"),t.removeClass("text-primary"),a.addClass("text-primary")}),$(".cardborder")),n=$(".cardshadow"),i=$(".change-colors li a");o.on("click",()=>{$("body").addClass("cardwithborder"),n.find("i").addClass("text-dark-emphasis"),o.find("i").addClass("text-primary")}),n.on("click",()=>{$("body").removeClass("cardwithborder"),o.find("i").removeClass("text-primary"),n.find("i").removeClass("text-dark-emphasis")}),i.on("click",function(){i.removeClass("active-theme"),$(this).addClass("active-theme")})}let a=document.querySelector("html");l=document.querySelectorAll("[name='bodytheme']"),s=localStorage.getItem("theme")||"auto",s=document.getElementById(s+"-theme"),s&&(s.checked=!0),l.forEach(e=>{e.addEventListener("change",function(){var e,t=this.id.replace("-theme","");localStorage.setItem("theme",t),"auto"===t?(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",a.setAttribute("data-bs-theme",e)):a.setAttribute("data-bs-theme",t)})}),s=document.querySelectorAll(".minus, .add");s&&s.forEach(function(e){e.addEventListener("click",function(){var e=this.closest("div").querySelector(".qty");let t=parseInt(e.value);var a=this.classList.contains("add");isNaN(t)||(e.value=a?++t:0<t?--t:t)})})})(),window.addEventListener("DOMContentLoaded",function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{"auto"==localStorage.getItem("theme")&&(e=e.matches?"dark":"light",html[0].setAttribute("data-bs-theme",e))});let t=$("#siteSearchModal"),a=$("#search-header");function o(){var e=new bootstrap.Modal(t[0],{keyboard:!1});"block"===t.css("display")?e.hide():(e.show(),setTimeout(()=>{a.focus()},800))}$("#search-header2, #search-header3").on("click",o);let e=document.getElementById("searchbarcontent");var n;t.one("show.bs.modal",function(){let o=window.location;var n=o.href,i=[],l=["#","javascript:void(0)","javascript:;",n+"#",o.origin+"/"],s=document.querySelectorAll("a");for(let e=0,t=s.length;e<t;e++){let a=s[e].href;if(a&&a!==n&&!l.includes(a)){let t=s[e].textContent.replace(/\s+/g," ").trim();i.find(e=>e.name===t)||i.find(e=>e.url===a)||i.push({name:t,url:a})}}let r=document.createDocumentFragment();i.forEach(({url:e,name:t})=>{e.startsWith(o.origin)&&(e=e.split(o.host)[1]);var a=document.createElement("li");a.className="p-1 mb-1 bg-hover-light-black rounded-3",a.innerHTML=`
        <a href="${e}" class="py-2 px-3 d-flex align-items-center dropdown-item">
          <div class="rounded-1 text-bg-light p-2 me-3">
            <span class="icon rounded-circle ti ti-box"></span>
          </div>
          <div class="d-inline-block v-middle">
            <h6 class="mb-1 fw-semibold">${t}</h6>
            <span class="fs-2 d-block text-break">${e}</span>
          </div>
        </a>
      `,r.appendChild(a)}),e.appendChild(r)}),window.addEventListener("keydown",function(e){e.ctrlKey&&"k"==e.key&&(e.preventDefault(),o())}),$("#use_profile_information").on("click",function(){$.get("/api/users/@me",function(e){$("#useremail").val(e.localdata.email),$("#username").val(e.localdata.username),$("#userid").val(e.localdata.id),window.NotificationHandler.show({content:"Profile information loaded!",type:"success"})}).fail(function(){window.NotificationHandler.show({content:"Please log in to use this!",type:"error"})})}),"/"!=window.location.pathname&&(n=document.getElementsByClassName("signinBtn"),Array.from(n).forEach(function(e){var t=window.location.href.split(window.location.origin)[1];e.setAttribute("href","/login?returnurl="+encodeURIComponent(t))})),(n=document.getElementById("logoutBtn"))&&n.addEventListener("click",function(){var e=new XMLHttpRequest;e.open("POST","/logout",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("name=deophaixem&pass=ditmemay"),setTimeout(()=>{window.NotificationHandler.clear(),window.location.href="/"},1e3)});{let e=document.getElementById("return-to-top");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?e.classList.add("return-to-top-visible"):e.classList.remove("return-to-top-visible")},e.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})}});