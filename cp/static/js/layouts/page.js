(()=>{window.AnimationHandler.Add("HorizontalMove"),InjectCSS(`
  :root,[data-bs-theme="light"] {
    --bd-violet: #712cf9;
    --bd-toc-color: var(--bd-violet);
  }
  [data-bs-theme="dark"] {
    --bd-violet: #9461fb;
    --bd-toc-color: var(--bs-emphasis-color);
  }
  #toc_wrapper {
    z-index: auto!important; top: calc(calc(70px + 18px) + 1rem);
    height: 80vh; overflow-y: auto!important; overflow-x: hidden!important;
  }
  #toc_body a.nav-item {
    display: block;
    color: inherit;
    text-decoration: none;
    border-left: .125rem solid transparent
  }
  #toc_body a.nav-item.active {
    color: var(--bd-toc-color);
    border-left-color: var(--bd-toc-color)
  }
  h1:hover .anchor, h2:hover .anchor, h3:hover .anchor, h4:hover .anchor, h5:hover .anchor, h6:hover .anchor,
  h1 .anchor:focus, h2 .anchor:focus, h3 .anchor:focus, h4 .anchor:focus, h5 .anchor:focus, h6 .anchor:focus {
  visibility: visible;
  }

  h1 .anchor, h2 .anchor, h3 .anchor, h4 .anchor, h5 .anchor, h6 .anchor {
  visibility: hidden;
  }

  p { margin-top: 0.25rem }`);var{origin:t,pathname:o}=window.location;let r=document.querySelector(".articlecontent"),l=r.querySelectorAll("h1, h2, h3, h4, h5, h6");for(let e=0;e<l.length;e++)l[e].classList.add("mt-3");var n=r.querySelectorAll(".anchor");for(let e=0;e<n.length;e++){n[e].setAttribute("nns-toclipboard","");var a=t+o+n[e].getAttribute("href");n[e].setAttribute("nns-toclipboard-data",a)}var e=r.querySelectorAll("pre code"),i=(0<e.length&&(e.forEach(e=>{"language-ejs"===e.className&&(e.className="language-html")}),LoadHandler.js("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js").then(()=>{LoadHandler.css("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"),hljs.highlightAll()})),r.querySelectorAll("img"));for(let e=0;e<i.length;e++)i[e].style.borderRadius="var(--bs-border-radius-xl)";window.addEventListener("DOMContentLoaded",async function(){let n=new PhotoSwipeLightbox({gallery:".articlecontent",children:"a",initialZoomLevel:"fit",secondaryZoomLevel:5,maxZoomLevel:10,pswpModule:PhotoSwipe});n.on("uiRegister",function(){n.pswp.ui.registerElement({name:"zoom-level-indicator",order:9,onInit:(t,o)=>{o.on("zoomPanUpdate",e=>{e.slide===o.currSlide&&(t.innerText="Zoom level is "+Math.round(100*o.currSlide.currZoomLevel)+"%")})}}),n.pswp.ui.registerElement({name:"custom-caption",order:9,isButton:!1,appendTo:"root",html:"Caption text",onInit:(r,e)=>{n.pswp.on("change",()=>{var e,t=n.pswp.currSlide.data.element;let o="";t&&(e=t.querySelector(".hidden-caption-content"),o=e?e.innerHTML:t.querySelector("img").getAttribute("alt")),r.innerHTML=o||""})}})}),n.init();var e=r.innerText.trim().split(/\s+/).length,e=Math.ceil(e/225);document.getElementById("readtime").innerText=e+` min${1<e?"s":""} read`,setTimeout(()=>{var e=window.UrlHandler.getHash();e&&(e=document.querySelector(`div a[href="${e}"]`))&&e.scrollIntoView({behavior:"smooth"})},500);let a={};await l.forEach((e,t)=>{var o=parseInt(e.tagName.slice(1)),r=e.querySelector(".anchor").getAttribute("href");a[e.textContent]||(a[e.textContent]={level:o,href:r,subheadings:{}}),l[t+1]&&o<(r=parseInt(l[t+1].tagName.slice(1)))&&(a[e.textContent].subheadings[l[t+1].textContent]={level:r,href:l[t+1].querySelector(".anchor").getAttribute("href"),subheadings:{}})}),document.querySelector("#toc").innerHTML=(await c(a)).outerHTML,new bootstrap.ScrollSpy(r,{target:"#toc_body"}).refresh()});let c=async e=>{let n=document.createElement("nav");return n.classList.add("nav","flex-column","nav-tabs"),n.id="toc_body",Object.entries(e).forEach(([e,t])=>{var o,r;n.appendChild((e=e,o=t.level,t=t.href,(r=document.createElement("a")).classList.add("nav-item","ms-"+(1===(o=o)?0:2*(o-1)),"me-3","w-100"),r.style.marginBottom="-0.15rem",r.href=t,(o=document.createElement("span")).classList.add("nav-link","fs-3"),o.style.wordWrap="initial",o.textContent=e,r.appendChild(o),r))}),n}})();