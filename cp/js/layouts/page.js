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

  p { margin-top: 0.25rem }

  .el-element-overlay .el-card-item .el-overlay-2 { cursor: default }
  .el-element-overlay .el-card-item .el-overlay-2 img {
  height: auto;
  -webkit-transition: all .4s linear;
  transition: all .4s linear;
  }
  .el-element-overlay .el-card-item .el-overlay-2 .el-info {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  text-decoration: none;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  transform: translateY(-50%) translateZ(0);
  -webkit-transform: translateY(-50%) translateZ(0);
  -ms-transform: translateY(-50%) translateZ(0)
  }
  .el-element-overlay .el-card-item .el-overlay-2 .el-info .el-item .el-link { padding: 12px 15px 10px }
  .el-element-overlay .el-card-item .el-overlay-2 .el-info .el-item .el-link:hover { border-color: var(--bs-primary); background: var(--bs-primary) }
  .el-element-overlay .el-card-item .el-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out
  }
  .el-element-overlay .el-card-item .el-overlay-2:hover .el-overlay {
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0)
  }
  .el-element-overlay .el-card-item .el-overlay-2 .scrl-dwn { top: -100% }
  .el-element-overlay .el-card-item .el-overlay-2 .scrl-up { top: 100%; height: 0 }
  .el-element-overlay .el-card-item .el-overlay-2:hover .scrl-dwn { top: 0 }
  .el-element-overlay .el-card-item .el-overlay-2:hover .scrl-up { top: 0; height: 100% }`);var{origin:t,pathname:a}=window.location;const r=document.querySelector(".articlecontent"),o=r.querySelectorAll("h1, h2, h3, h4, h5, h6");for(let e=0;e<o.length;e++)o[e].classList.add("mt-3");var l=r.querySelectorAll(".anchor");for(let e=0;e<l.length;e++){l[e].setAttribute("nns-toclipboard","");var n=t+a+l[e].getAttribute("href");l[e].setAttribute("nns-toclipboard-data",n)}var e=r.querySelectorAll("pre code"),i=(0<e.length&&(e.forEach(e=>{"language-ejs"===e.className&&(e.className="language-html")}),window.LoadHandler.js("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js").then(()=>{window.LoadHandler.css("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"),hljs.highlightAll()})),r.querySelectorAll("img"));for(let e=0;e<i.length;e++)i[e].style.borderRadius="var(--bs-border-radius-xl)";window.addEventListener("DOMContentLoaded",async function(){$(".image-popup-vertical-fit").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0},title:function(){return this.st.el.attr("title")},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0});var e=r.innerText.trim().split(/\s+/).length,e=Math.ceil(e/225);document.getElementById("readtime").innerText=e+` min${1<e?"s":""} read`,setTimeout(()=>{var e=window.urlHandler.getHash();e&&(e=document.querySelector(`div a[href="${e}"]`))&&e.scrollIntoView({behavior:"smooth"})},500);const l={};await o.forEach((e,t)=>{var a=parseInt(e.tagName.slice(1)),r=e.querySelector(".anchor").getAttribute("href");l[e.textContent]||(l[e.textContent]={level:a,href:r,subheadings:{}}),o[t+1]&&a<(r=parseInt(o[t+1].tagName.slice(1)))&&(l[e.textContent].subheadings[o[t+1].textContent]={level:r,href:o[t+1].querySelector(".anchor").getAttribute("href"),subheadings:{}})}),document.querySelector("#toc").innerHTML=(await s(l)).outerHTML,new bootstrap.ScrollSpy(r,{target:"#toc_body"}).refresh()});const s=async e=>{const l=document.createElement("nav");return l.classList.add("nav","flex-column","nav-tabs"),l.id="toc_body",Object.entries(e).forEach(([e,t])=>{var a,r;l.appendChild((e=e,a=t.level,r=t.href,t.subheadings,(t=document.createElement("a")).classList.add("nav-item","ms-"+(1===(a=a)?0:2*(a-1)),"me-3","w-100"),t.style.marginBottom="-0.15rem",t.href=r,(a=document.createElement("span")).classList.add("nav-link","fs-3"),a.style.wordWrap="initial",a.textContent=e,t.appendChild(a),t))}),l}})();