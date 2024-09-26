(async()=>{let l=window.location.pathname.split("/")[2],d=document.getElementById("addsub_form");var t=$("#allowedPlatforms");let s={youtube:{holderId:"#ytsublist",platform:"youtube",title:"Youtube Subscription",description:"Automatically notify people when someone posts a YouTube video",color:"danger"},twitch:{holderId:"#twsublist",platform:"twitch",title:"Twitch Subscription",description:"Automatically notify people when someone goes live on Twitch"},twitter:{holderId:"#twitsublist",platform:"twitter",title:"Twitter Subscription",description:"Automatically notify people when someone tweets",color:"info"},instagram:{holderId:"#igsublist",platform:"instagram",title:"Instagram Subscription",description:"Automatically notify people when someone posts on Instagram",color:"warning"},reddit:{holderId:"#rdtsublist",platform:"reddit",title:"Reddit Subscription",description:"Automatically notify people when someone posts on Reddit",color:"success"}};t.html(Object.keys(s).map(t=>`
  <div class="col-md-auto col-6">
    <input type="radio" class="btn-check" name="${t}" id="add_${t}" autocomplete="off">
    <label class="btn btn-outline-${s[t].color||"primary"}" for="add_${t}">
      <i class="ti ti-brand-${t}"></i> ${t=t,t.charAt(0).toUpperCase()+t.slice(1)}
    </label>
  </div>
  `).join(""));let c,i=(await window.DiscordAPIHandler.getChannels(l,{channelType:"GuildText"}).then(t=>{(c=t).forEach(t=>{$("#channelselect").append(new Option(t.name,t.id))})}).catch(t=>{window.NotificationHandler.show({title:"Error",content:t.message,type:"error"})}),Object.entries(s).forEach(async([t,e])=>{var a,i;[a,{holderId:i,title:t,description:e}]=[t,e],await $("#main_body").append(((t,e,a,i)=>{var o=`<div class="d-flex justify-content-center p-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">${i18next.t("dashboard.loading")}</span>
        </div>
      </div>`;return t=$("<div>",{class:"card my-3"}).append($("<div>",{class:"card-header"}).append($("<div>",{class:"d-flex align-items-center justify-content-between"}).append($("<div>").append($("<h4>",{class:"card-title"}).html(`<i class="ti ti-brand-${t} text-red"></i> `+e),$("<h6>",{class:"card-subtitle text-muted"}).text(a)),$("<div>",{class:"list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start gap-3"}).append($("<button>",{class:"btn btn-primary mb-4","data-bs-toggle":"modal","data-bs-target":"#AddSubModal"}).html('<i class="ti ti-square-rounded-plus-filled"></i> Add')))),$("<div>",{class:"card-body"}).append($("<div>",{class:"row"}).append($("<div>",{class:"col"}).append($("<div>",{class:"list-group",id:i.replace("#","")}).append(o)))))})(a,t,e,i)),await $.get(`/dashboard/${l}/autoalert/${a}/list`,function(t){var e=$(i).empty(),t=t.data;t?.length?t.forEach(t=>r({platform:a,data:t,holderDiv:i})):e.append(window.ContentHandler.createAlert("No subscriptions found for this platform"))}).fail(function(t){logger.error(t),window.NotificationHandler.show({title:"Error fetching data",content:t.responseJSON.error,type:"error"})})}),document.getElementById("editsub_modal")),o=(i.addEventListener("show.bs.modal",t=>{t=t.relatedTarget;t.classList.add("active","modalactive");let e=$(i).find(".modal-body");var a=$(i).find(".modal-footer");if("#editsub_modal"===t.getAttribute("data-bs-target")){let i=t.getAttribute("data-bs-platform");t=t.getAttribute("data-bs-id");t!=e.find("#ytid").val()&&($.ajax({url:`/dashboard/${l}/autoalert/${i}/update/`+t,method:"GET",contentType:"application/json",success:function(t){let e=t.data;var t=e.message,a=t.embed,t=($("#update_ytid").val(e._id),$("#update_ytmsgtoggle").prop("checked",t.msg.toggle),$("#update_ytmsg").val(t.msg.content),$("#update_edittoggle").prop("checked",a.toggle),$("#update_editsection").toggleClass("d-none",!a.toggle),$("#update_titleem").val(a.title),$("#update_titleurlem").val(a.titleurl),$("#update_desem").val(a.description),$("#update_authorname").val(a.authorname),$("#update_authoricon").val(a.authoricon),$("#thumbem").val(a.thumbnail),$("#imageem").val(a.image),$("#update_ftem").val(a.footer),$("#update_footericon").val(a.footericon),$("#update_tsem").prop("checked",a.timestamp),$("#form").attr("action",`/dashboard/${l}/autoalert/${i}/update/`+e._id),$("#update_edittoggle").on("change",function(){$("#update_editsection").toggleClass("d-none")}),c.map(t=>({id:t.id,text:t.name,value:t.id})));$("#ch_update").empty(),t.forEach(t=>{$("#ch_update").append(new Option(t.text,t.value,!1,e.channelId===t.id))})},error:function(t){e.html(window.ContentHandler.createAlert(t.responseJSON.error))}}),a.html(`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
      <button type="submit" class="btn btn-danger" name="ytdelete">Delete</button>
      <button type="submit" class="btn btn-warning" name="ytupdate">Update</button>`))}}),i.addEventListener("hidden.bs.modal",t=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")}),$(".validation-wizard").show());async function r({platform:t,data:a,holderDiv:i}){if(t&&a&&i){var o=$("<a>",{role:"button","data-bs-toggle":"modal","data-bs-target":"#editsub_modal","data-bs-platform":t}).addClass("list-group-item list-group-item-action"),e=$("<div>").addClass("d-flex gap-2 w-100 justify-content-between mt-1 mb-1"),n=$("<h5>").addClass("mb-0"),d=$("<span>").addClass("badge text-bg-primary"),n=(n.append(d),$("<div>").append(n)),s=$("<small>").addClass("opacity-50 text-nowrap"),r=$("<span>").addClass("badge bg-secondary-subtle text-secondary-emphasis rounded-pill");if(s.append(r),e.append(n,s),o.append(e),"youtube"===t){let{channelId:e,_id:t}=a;n=c.find(t=>t.id===e).name,s=await(async(a,i)=>{if(a&&i)return new Promise((e,t)=>{$.ajax({url:`/dashboard/${l}/autoalert/${a}/fetch/`+i,method:"GET",contentType:"application/json",success:function(t){e(t.data)},error:function(t){logger.error(t.responseJSON?.error?.message||t.message),e(i)}})})})("youtube",t);o.attr("data-bs-id",t),o.attr("id",t),d.text(s?.title||t),r.text(n),$(i).append(o)}}}$(".validation-wizard").steps({headerTag:"h6",bodyTag:"section",transitionEffect:"fade",titleTemplate:'<span class="step">#index#</span> #title#',labels:{finish:"Submit"},onStepChanging:function(t,e,a){return a<e||!(3===a&&Number($("#age-2").val())<18)&&(e<a&&(o.find(".body:eq("+a+") label.error").remove(),o.find(".body:eq("+a+") .error").removeClass("error")),o.validate().settings.ignore=":disabled,:hidden",o.valid())},onFinishing:function(t,e){return o.validate().settings.ignore=":disabled",o.valid()},onFinished:async function(t,e){if(d.checkValidity()){d.classList.add("was-validated");var a=d.getAttribute("action"),i=a.split("/")[4];if(a){var o=new FormData(d),o={...Object.fromEntries(o.entries()),add_type:i};try{var n=await $.ajax({url:a,type:"POST",contentType:"application/json",data:JSON.stringify(o)});if(!n.data)throw new Error("No data returned from server");r({platform:i,data:n.data,holderDiv:s[i].holderId}),window.NotificationHandler.show({type:"success",content:"Subscription added successfully",title:"Subscription added"}),d.reset(),$("#AddSubModal").modal("hide")}catch(t){logger.error(t.responseJSON?.error?.message||t.message),window.NotificationHandler.show({type:"error",content:t.responseJSON?.error?.message||t.message,title:"Unable to add subscription"})}}else window.NotificationHandler.show({type:"error",content:"Please select a subscription type",title:"Unable to add subscription"})}else t.preventDefault(),t.stopPropagation(),d.classList.remove("was-validated")}}),$(".validation-wizard").validate({ignore:"input[type=hidden]",errorClass:"invalid-feedback",successClass:"text-success",highlight:function(t,e){$(t).removeClass(e)},unhighlight:function(t,e){$(t).removeClass(e)},errorPlacement:function(t,e){t.insertAfter(e)},rules:{email:{email:!0}}}),$("#ytembedtoggle").on("change",function(){$("#emsection").toggleClass("d-none")}),$(".btn-check").on("click",function(){$(".btn-check").not(this).prop("checked",!1),d.setAttribute("action",`/dashboard/${l}/autoalert/${this.name}/add`)})})();