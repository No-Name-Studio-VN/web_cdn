function t_i(e){let t=e.split(".").reduce((e,t)=>(e||{})[t],window.__locales);return t=t.replace(/\$t\((.*?)\)/g,function(e,t){return t_i(t)})}$(function(){let t=document.documentElement.lang;$.ajax({url:`/locales/resources.json?lng=${t}&ns=translation`,method:"GET",contentType:"application/json",success:function(e){window.__locales=e[t].translation}})}),(()=>{var t=document.getElementsByTagName("html");try{t[0].setAttribute("data-bs-theme",localStorage.getItem("theme")?localStorage.getItem("theme"):"light"),localStorage.getItem("theme")||localStorage.setItem("theme","light"),"auto"==localStorage.getItem("theme")?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?t[0].setAttribute("data-bs-theme","dark"):t[0].setAttribute("data-bs-theme","light"):t[0].setAttribute("data-bs-theme",localStorage.getItem("theme"))}catch(e){logger.error("Error setting theme",e.message),t[0].setAttribute("data-bs-theme","light"),localStorage.setItem("theme","light")}})(),(()=>{function e(){let e=document.getElementById("preloader");e.className+=" fade",setTimeout(function(){e.style.display="none",document.body.style.overflow="auto"},200)}document.addEventListener("DOMContentLoaded",e),setTimeout(e,5e3)})();