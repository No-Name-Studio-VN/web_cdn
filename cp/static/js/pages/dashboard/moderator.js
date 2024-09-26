$("#automod-tab").one("show.bs.tab",function(){$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/automodrules`,method:"GET",contentType:"application/json",success:function(l){for(let t=0;t<l.data.length;t++){var c=l.data[t];let e,a,s=(4===c.triggerType?(e="blockwords",a=`
            <div class="mb-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" name="${c.id}_toggle" id="${c.id}_toggle" ${c.enabled?"checked":""}>
                <label class="form-check-label" for="${c.id}_toggle">Block messages containing these words from being posted.</label>
              </div>
            </div>

            <hr class="my-4">
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="p1[${c.id}]" id="p1[${c.id}]" ${c.triggerMetadata.presets.includes(1)?"checked":""}>
              <label class="form-check-label" for="p1[${c.id}]"><strong>Severe Profanity</strong> - Extreme forms of swearing or cursing</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="p2[${c.id}]" id="p2[${c.id}]" ${c.triggerMetadata.presets.includes(2)?"checked":""}>
              <label class="form-check-label" for="p2[${c.id}]"><strong>Insults & Slurs</strong> - Personally insulting terms and terms that may be considered hate speech</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="p3[${c.id}]" id="p3[${c.id}]" ${c.triggerMetadata.presets.includes(3)?"checked":""}>
              <label class="form-check-label" for="p3[${c.id}]"><strong>Sexual Content</strong> - Terms that refer to sexually explicit behavior or activity</label>
            </div>
            
            <hr class="my-4">

            <h5 class="mb-3">Response</h5>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sm[${c.id}]" id="sm[${c.id}]" checked>
              <label class="form-check-label" for="sm[${c.id}]">Send a custom message to members.</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sa[${c.id}]" id="sa[${c.id}]">
              <label class="form-check-label" for="sa[${c.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
            </div>
            
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" name="tm[${c.id}]" id="tm[${c.id}]">
              <label class="form-check-label" for="tm[${c.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
            </div>

            <div class="col-12">
              <label for="customMessage[${c.id}]" class="form-label">Custom block message</label>
              <input type="text" name="customMessage[${c.id}]" class="form-control" placeholder="Custom block message" id="customMessage[${c.id}]" value="${c.actions[Object.keys(c.actions)[0]].metadata.customMessage}" required></input>
            </div>

            `):3===c.triggerType?(e="blockspammessage",a=`
            <div class="mb-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" name="${c.id}_toggle" id="${c.id}_toggle" ${c.enabled?"checked":""} >
                <label class="form-check-label" for="${c.id}_toggle">Block messages with spam-like content from being posted.</label>
              </div>
            </div>

            <h5 class="mb-3">Response</h5>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sm[${c.id}]" id="sm[${c.id}]" checked>
              <label class="form-check-label" for="sm[${c.id}]">Send a custom message to members.</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sa[${c.id}]" id="sa[${c.id}]">
              <label class="form-check-label" for="sa[${c.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
            </div>
            
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" name="tm[${c.id}]" id="tm[${c.id}]">
              <label class="form-check-label" for="tm[${c.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
            </div>

            <div class="col-12">
              <label for="customMessage[${c.id}]" class="form-label">Custom block message</label>
              <input type="text" name="customMessage[${c.id}]" class="form-control" placeholder="Custom block message" id="customMessage[${c.id}]" value="${c.actions[Object.keys(c.actions)[0]].metadata.customMessage}" required></input>
            </div>
            `):5===c.triggerType?(e="blockspammention",a=`
            <div class="mb-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" name="${c.id}_toggle" id="${c.id}_toggle" ${c.enabled?"checked":""} >
                <label class="form-check-label" for="${c.id}_toggle">Block messages with an excessive # of role and user mentions</label>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input type="number" name="${c.id}amount" class="form-control" placeholder="Leave a comment here" min=0 max=1000 value=${c.triggerMetadata.mentionTotalLimit}></input>
              <label for="${c.id}amount">Unique mentions (role + user) per message</label>
            </div>
            <h5 class="mb-3">Response</h5>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sm[${c.id}]" id="sm[${c.id}]" checked>
              <label class="form-check-label" for="sm[${c.id}]">Send a custom message to members.</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sa[${c.id}]" id="sa[${c.id}]">
              <label class="form-check-label" for="sa[${c.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
            </div>
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" name="tm[${c.id}]" id="tm[${c.id}]">
              <label class="form-check-label" for="tm[${c.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
            </div>
            <div class="col-12">
              <label for="customMessage[${c.id}]" class="form-label">Custom block message</label>
              <input type="text" name="customMessage[${c.id}]" class="form-control" placeholder="Block message" id="customMessage[${c.id}]" value="${c.actions[Object.keys(c.actions)[0]].metadata.customMessage}" required></input>
            </div>
            `):1===c.triggerType?(e="blockcustomwords",a=`
            <div class="mb-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" name="${c.id}_toggle" id="${c.id}_toggle" ${c.enabled?"checked":""}>
                <label class="form-check-label" for="${c.id}_toggle">Block messages containing these words from being posted.</label>
              </div>
            </div>

            <hr class="my-4">
            
            <div class="col-12">
              <label for="blw[${c.id}]" class="form-label">Block words</label>
              <textarea type="text" name="blw[${c.id}]" class="form-control" placeholder="Block words" id="blw[${c.id}]" style="height: 370px;" required>${c.triggerMetadata.keywordFilter.join(", ")}</textarea>
            </div>
            
            <hr class="my-4">

            <h5 class="mb-3">Response</h5>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sm[${c.id}]" id="sm[${c.id}]" checked>
              <label class="form-check-label" for="sm[${c.id}]">Send a custom message to members.</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" name="sa[${c.id}]" id="sa[${c.id}]">
              <label class="form-check-label" for="sa[${c.id}]">Sends an alert containing the flagged message to a chosen channel.</label>
            </div>
            
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" name="tm[${c.id}]" id="tm[${c.id}]">
              <label class="form-check-label" for="tm[${c.id}]">Temporarily disables a member's ability to send messages or join voice channels.</label>
            </div>

            <div class="col-12">
              <label for="customMessage[${c.id}]" class="form-label">Custom block message</label>
              <input type="text" name="customMessage[${c.id}]" class="form-control" placeholder="Custom block message" id="customMessage[${c.id}]" value="${c.actions[Object.keys(c.actions)[0]].metadata.customMessage}" required></input>
            </div>

            `):e=c.name.toUpperCase().trim().replace(/\s+/g,""),"");s=!0===c.enabled?`<button type="button" class="btn btn-warning" data-bs-toggle="modal" btn-type="disable" data-bs-target="#modal" data-bs-name="${e}" data-bs-id="${c.id}" >Disable</button>`:`<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal" btn-type="enable" data-bs-name="${e}" data-bs-id="${c.id}" >Enable</button>`;c=`
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${c.id}" aria-expanded="false" aria-controls="${c.id}">
                <strong>${c.name} <span class="badge rounded-pill ${!0===c.enabled?" bg-primary":"bg-secondary"}">${!0===c.enabled?"Enabled":"Disabled"}</span></strong>
              </button>
            </h2>
            <div id="${c.id}" class="accordion-collapse collapse">
              <div class="accordion-body">
                ${a}
                <div class="d-flex mt-3 mb-3 gap-3">
                  ${s}
                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal" data-bs-name="${e}" btn-type="delete" data-bs-id="${c.id}">Delete</button>
                </div>
              </div>
            </div>
          </div>
          `;$("#accordion").append(c)}},error:function(e){console.log(e.responseJSON.error)}});let s=document.getElementById("modal");s.addEventListener("show.bs.modal",e=>{let t=e.relatedTarget,l=t.getAttribute("data-bs-id"),a=(s.querySelector(".modal-body").innerHTML=`Are you sure you want to ${t.getAttribute("btn-type")} the "${t.getAttribute("data-bs-name")}" AutoMod rule?`,s.querySelector(".modal-footer").innerHTML=`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
      <button class="btn btn-danger" type="button" id="btn_${l}">Confirm</button>`,$("#btn_"+l));rxjs.fromEvent(a,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(a,!0)),rxjs.debounceTime(1e3),rxjs.switchMap(()=>new Promise((a,s)=>{$.ajax({url:`${window.location.pathname}/automodrules/${l}/edit`,method:"POST",contentType:"application/json",data:JSON.stringify({enabled:"enable"===t.getAttribute("btn-type")}),success:function(e){e.data&&window.location.reload(),a(e)},error:function(e){window.NotificationHandler.show({type:"danger",content:e.responseJSON.error}),s(e)}})})),rxjs.tap(()=>window.ContentHandler.ToggleLoading(a,!1))).subscribe()})});