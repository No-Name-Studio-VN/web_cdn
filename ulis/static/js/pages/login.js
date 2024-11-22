(()=>{let r=new URLSearchParams(window.location.search).get("returnurl"),t="/",i=(r?(localStorage.setItem("returnurl",r),t=decodeURIComponent(r)):localStorage.removeItem("returnurl"),`width=${window.outerWidth/1.3}, height=${window.outerHeight/1.2}, location=0, resizable, scrollbars, toolbar=0, menubar=0, popup=true`),n="",o=(turnstile.render("#loadverify",{sitekey:"0x4AAAAAAAFZF3YYiB8JTQ4R",callback:e=>n=e}),document.getElementById("signinbutton")),a=document.getElementById("alert");rxjs.fromEvent(o,"click").pipe(rxjs.tap(()=>{if(!n||""===n)throw a.innerText=i18next.t("dashboard.captcha.require"),new Error("Captcha required");a.innerText="",o.disabled=!0,o.innerHTML=`
        <div>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">${i18next.t("dashboard.loading")}...</span>
            </div>
          </div>
        </div>`}),rxjs.switchMap(()=>{let e=window.open("","Login With Google",i);return e.document.write(`
        <html>
          <body>
            <p>Logging in...</p>
            <form id="myForm" action="/login" method="post">
              <input type="hidden" name="cf-turnstile-response" value="${n}">
              <input type="hidden" name="returnurl" value="${r}">
            </form>
            <script>document.getElementById('myForm').submit();</script>
          </body>
        </html>`),rxjs.interval(1e3).pipe(rxjs.takeWhile(()=>!e.closed),rxjs.tap({complete:()=>{o.disabled=!1,o.innerHTML='<i class="ti ti-brand-google"></i>'}}))})).subscribe({error:e=>{logger.error(e),o.disabled=!1,o.innerHTML='<i class="ti ti-brand-google"></i>'}}),rxjs.fromEvent(window,"message").pipe(rxjs.filter(e=>"Logged in"===e.data&&e.origin===window.location.origin)).subscribe(e=>{a.innerText=i18next.t("dashboard.login.redirect"),window.location.href=t})})();