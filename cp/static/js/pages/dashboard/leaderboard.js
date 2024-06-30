$(function(){const i=document.getElementById("lvlModal");i.addEventListener("show.bs.modal",a=>{a=a.relatedTarget;a.classList.add("active","modalactive");const n=a.getAttribute("data-bs-id");a=i.getAttribute("data-bs-id");if(n!=a){const e=i.querySelector(".modal-body");a=i.querySelector(".modal-footer");e.innerHTML=`<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">${i18next.t("dashboard.loading")}...</span></div></div>`,$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/user/`+n,method:"GET",contentType:"application/json",success:function(a){var a=a.data,t=`
        <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="info-tab" data-bs-toggle="tab" data-bs-target="#info-tab-pane" type="button" role="tab" aria-controls="info-tab-pane" aria-selected="true"><span>Detail</span></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="image-tab" data-bs-toggle="tab" data-bs-target="#image-tab-pane" type="button" role="tab" aria-controls="image-tab-pane" aria-selected="true"><span>Image</span></button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="info-tab-pane" role="tabpanel" aria-labelledby="info-tab">
            <div class="row mb-3">
              <label for="exp" class="col-lg-2 col-form-label">EXP</label>
              <div class="col-sm-10">
                <div class="input-group">
                  <input type="number" class="form-control" id="exp" name="exp" value="${a.xp}" aria-label="EXP">
                  <span class="input-group-text">@</span>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label for="level" class="col-lg-2 col-form-label">Level</label>
              <div class="col-sm-10">
                <div class="input-group">
                  <input type="number" class="form-control" id="level" name="level" value="${a.level}" aria-label="Level">
                  <span class="input-group-text">@</span>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="image-tab-pane" role="tabpanel" aria-labelledby="image-tab">
            <div class="row" id="imagecard">
              <div class="d-grid gap-2 col-3 mx-auto">
                <div class="verify" id="loadverify">
                </div>
                <button class="btn btn-primary" type="button" data-bs-id="${a.userId}" id="loadrankcard"><i class="ti ti-download"></i> Load Image</button>
              </div>
            </div>
          </div>
        </div>`;e.innerHTML=t,i.setAttribute("data-bs-id",n),document.getElementById("leaderboardform").setAttribute("action",`/dashboard/${a.guildId}/leaderboard/user/`+a.userId)},error:function(a){e.innerHTML=window.ContentHandler.createAlert(a.responseJSON.error)}}),a.innerHTML=`
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
        <button class="btn btn-danger" type="submit" name="lvldelete" >Delete</button>
        <button class="btn btn-warning" type="submit" name="lvlupdate" >Update</button>
        `,setTimeout(()=>{let t="";turnstile.render("#loadverify",{sitekey:"0x4AAAAAAAFZF3YYiB8JTQ4R",callback:function(a){t=a}});const e=document.getElementById("imagecard");$("#loadrankcard").off("click").on("click",()=>{t?(e.innerHTML=`<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">${i18next.t("dashboard.loading")}...</span></div></div>`,$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/user/${n}/image`,method:"POST",contentType:"application/json; charset=utf-8",data:JSON.stringify({"cf-turnstile-response":t}),dataType:"json",success:function(a){e.innerHTML=`<img src="data:image/png;base64,${a.img}" class="img-fluid" alt="Rank Card">`},error:function(a){e.innerHTML=window.ContentHandler.createAlert(a.responseJSON.error)}})):window.NotificationHandler.showPopup({content:"Please verify that you are not a robot first."})})},3e3)}}),i.addEventListener("hidden.bs.modal",a=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")})});