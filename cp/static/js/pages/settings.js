(()=>{const l={desktop:"ti ti-device-laptop",mobile:"ti ti-device-mobile",tablet:"ti ti-device-ipad",default:"ti ti-device-tv"};$("#pills-security-tab").one("show.bs.tab",function(){LoadHandler.js("https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js").then(()=>{$.ajax({url:"/auth/sessions",method:"GET",contentType:"application/json",success:function(e){var s=e.user_sessions;const i=$("#sessions_box");if(i.empty(),0===s.length)i.append('<p class="text-center">No sessions found</p>');else{var n=new UAParser;i.append(`
            <div class="d-flex align-items-center justify-content-between border-bottom">
              <div class="d-flex align-items-center gap-3">
                <div>
                  <h5 class="fs-5 fw-semibold mb-0">Devices</h5>
                  <p class="mb-3">There might be multiple activity sessions from the same device.</p>
                </div>
              </div>
              <div class="dropdown">
                <a role="button" data-bs-toggle="dropdown" aria-expanded="false" class="text-secondary fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" style="width: 200px;">
                  <div class="position-relative">
                    <div class="py-2 px-3 d-flex align-items-center">
                      <button id="signout_all" type="button" class="btn btn-danger justify-content-center w-100 btn-rounded d-flex align-items-center text-nowrap gap-2"><i class='ti ti-alert-triangle'></i> Remove all devices</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `);let t='<div class="">';for(let e=0;e<s.length;e++){var a=s[e],o=(n.setUA(a.agent),n.getResult()),d=`
                <div class="d-flex align-items-center justify-content-between py-3 border-bottom">
                  <div class="d-flex align-items-center gap-3">
                    <i class="${d=o.device.type,l[d]||l.default} text-secondary d-block fs-7" width="26" height="26"></i>
                    <div>
                      <h5 class="fs-4 fw-semibold mb-0">${o.os.name} ${o.os.version} - ${o.browser.name}</h5>
                      <p class="mb-0">IP: ${a.ip}</p>
                      <p class="mb-0">Location: ${a.location||"N/A"}</p>
                      <p class="mb-0" nns-dateformatter>${a.timestamp}</p>
                    </div>
                  </div>
                  <a class="text-secondary fs-6 d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle" href="javascript:void(0)">
                    <i class="ti ti-dots-vertical"></i>
                  </a>
                </div>
                `;t+=d}t+="</div>",i.append(t),i.append(`
            <div class='mt-3'>
              <a href="https://bot.nnsvn.me/support" class="btn btn-light-primary text-primary w-100 py-1">Need Help ?</a>
            </div>
            `),$("#signout_all").on("click",function(){$.ajax({url:"/auth/sessions",method:"DELETE",contentType:"application/json",success:function(e){i.empty(),i.append('<p class="text-center">No sessions found</p>')},error:function(e){logger.error(e),NotificationHandler.show({content:"Failed to remove all devices",type:"error"})}})})}}})})})})();