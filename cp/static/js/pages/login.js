(()=>{document.documentElement.setAttribute("data-bs-theme","dark");let n=new URLSearchParams(window.location.search).get("returnurl"),i="/",d=(n?(localStorage.setItem("returnurl",n),i=decodeURIComponent(n)):localStorage.removeItem("returnurl"),`width=${window.outerWidth/1.3}, height=${window.outerHeight/1.2}, location=0, resizable, scrollbars, toolbar=0, menubar=0, popup=true`),r="",o=(window.addEventListener("DOMContentLoaded",()=>{turnstile.render("#loadverify",{sitekey:"0x4AAAAAAAFZF3YYiB8JTQ4R",callback:e=>r=e})}),document.getElementById("signinbutton")),a=document.getElementById("alert");o.addEventListener("click",e=>{if(r&&""!=r){a.innerText="",o.disabled=!0,o.innerHTML=`
      <div>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">${i18next.t("dashboard.loading")}...</span>
          </div>
        </div>
      </div`;let e=window.open("","Login With Discord",d),t=(e.document.write(`
      <html>
        <body>
          <p>Logging in...</p>
          <form id="myForm" action="/login" method="post">
            <input type="hidden" name="cf-turnstile-response" value="${r}">
            <input type="hidden" name="returnurl" value="${n}">
          </form>
          <script>document.getElementById('myForm').submit();</script>
        </body>
      </html>`),setInterval(()=>{e.closed&&(clearInterval(t),o.disabled=!1,o.innerHTML='<i class="ti ti-brand-discord fa-1x"></i> '+i18next.t("dashboard.login.with_discord"))},1e3));window.addEventListener("message",e=>{"Logged in"==e.data&&e.origin==window.location.origin&&(a.innerText=i18next.t("dashboard.login.redirect"),window.location.href=i)},!1)}else a.innerText=i18next.t("dashboard.captcha.require")})})();