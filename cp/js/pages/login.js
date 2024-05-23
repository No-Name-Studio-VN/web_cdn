(()=>{document.documentElement.setAttribute("data-bs-theme","dark");const i=new URLSearchParams(window.location.search).get("returnurl");let o="/";i?(localStorage.setItem("returnurl",i),o=decodeURIComponent(i)):localStorage.removeItem("returnurl");const d=`width=${window.outerWidth/1.3}, height=${window.outerHeight/1.2}, location=0, resizable, scrollbars, toolbar=0, menubar=0, popup=true`;let r="";window.addEventListener("DOMContentLoaded",()=>{turnstile.render("#loadverify",{sitekey:"0x4AAAAAAAFZF3YYiB8JTQ4R",callback:e=>r=e})});const a=document.getElementById("signinbutton"),s=document.getElementById("alert");a.addEventListener("click",e=>{if(r&&""!=r){s.innerText="",a.disabled=!0,a.innerHTML=`
      <div>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">${i18next.t("dashboard.loading")}...</span>
          </div>
        </div>
      </div`;const t=window.open("","Login With Discord",d),n=(t.document.write(`
      <html>
        <body>
          <p>Logging in...</p>
          <form id="myForm" action="/login" method="post">
            <input type="hidden" name="cf-turnstile-response" value="${r}">
            <input type="hidden" name="returnurl" value="${i}">
          </form>
          <script>document.getElementById('myForm').submit();</script>
        </body>
      </html>`),setInterval(()=>{t.closed&&(clearInterval(n),a.disabled=!1,a.innerHTML='<i class="ti ti-brand-discord fa-1x"></i> '+i18next.t("dashboard.login.with_discord"))},1e3));window.addEventListener("message",e=>{"Logged in"==e.data&&e.origin==window.location.origin&&(s.innerText=i18next.t("dashboard.login.redirect"),window.location.href=o)},!1)}else s.innerText=i18next.t("dashboard.captcha.require")})})();