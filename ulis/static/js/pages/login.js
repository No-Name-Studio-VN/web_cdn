(() => {  
  const params = new URLSearchParams(window.location.search);
  const returnUrl = params.get('returnurl');
  let redirectUrl = '/';
  
  if (returnUrl) {
      localStorage.setItem('returnurl', returnUrl);
      redirectUrl = decodeURIComponent(returnUrl);
  } else {
      localStorage.removeItem('returnurl');
  }
  
  const features = `width=${window.outerWidth / 1.3}, height=${window.outerHeight / 1.2}, location=0, resizable, scrollbars, toolbar=0, menubar=0, popup=true`;

  let verifyToken = "";
  turnstile.render('#loadverify', {
    sitekey: '0x4AAAAAAAFZF3YYiB8JTQ4R',
    callback: token => verifyToken = token,
  });

  const signinButton = document.getElementById('signinbutton');
  const alert = document.getElementById('alert');

  rxjs.fromEvent(signinButton, 'click').pipe(
    rxjs.tap(() => {
      if (!verifyToken || verifyToken === "") {
        alert.innerText = i18next.t('dashboard.captcha.require');
        throw new Error('Captcha required');
      }
      alert.innerText = "";
      signinButton.disabled = true;
      signinButton.innerHTML = `
        <div>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">${i18next.t('dashboard.loading')}...</span>
            </div>
          </div>
        </div>`;
    }),
    rxjs.switchMap(() => {
      const popup = window.open("", "Login With Google", features);
      popup.document.write(`
        <html>
          <body>
            <p>Logging in...</p>
            <form id="myForm" action="/login" method="post">
              <input type="hidden" name="cf-turnstile-response" value="${verifyToken}">
              <input type="hidden" name="returnurl" value="${returnUrl}">
            </form>
            <script>document.getElementById('myForm').submit();</script>
          </body>
        </html>`);
  
      return rxjs.interval(1000).pipe(
        rxjs.takeWhile(() => !popup.closed),
        rxjs.tap({
          complete: () => {
            signinButton.disabled = false;
            signinButton.innerHTML = `<i class="ti ti-brand-google"></i>`;
          }
        })
      );
    })
  ).subscribe({
    error: (err) => {
      logger.error(err);
      signinButton.disabled = false;
      signinButton.innerHTML = `<i class="ti ti-brand-google"></i>`;
    }
  });
  
  rxjs.fromEvent(window, 'message').pipe(
    rxjs.filter(event => event.data === "Logged in" && event.origin === window.location.origin)
  ).subscribe(event => {
    alert.innerText = i18next.t('dashboard.login.redirect');
    window.location.href = redirectUrl;
  });
})();