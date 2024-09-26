function buttonActions(t,a,e){return`<div class="action-btn">
  <button type="button" class="btn btn-icon btn-label-primary" data-bs-toggle="modal" data-bs-target="#commands_Modal" data-name="${t.name}" data-dir="${t.folder}" data-action="info" >
    <i class="ti ti-info-circle" ></i>
  </button>
  <button type="button" class="btn btn-icon btn-label-primary" data-name="${t.name}" data-dir="${t.folder}" data-action="reload" >
    <i class="ti ti-reload" ></i>
  </button>
  <button type="button" class="btn btn-icon btn-label-danger" data-name="${t.name}" data-dir="${t.folder}" data-action="delete" >
    <i class="ti ti-circle-minus" ></i>
  </button>
</div>`}function TitleButtonPill(t,a,e){return`<span class="badge rounded-pill btn-label-primary">${t=t.charAt(0).toUpperCase()+t.slice(1)}</span>`}(()=>{let n=window.location.pathname.includes("/admin/commands");function i(t,a,e){return"en"!==t&&e?e[t]:a}let d=(t,a)=>`<div class="row">
      <label for="${t}" class="col-lg-2 form-label">${t}</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="${t}" value="${a}" readonly>
      </div>
    </div>`,l={1:"Slash Command",2:"Context Menu",3:"User Action"},s=getLang(),r=($.ajax({url:"/commands/list",method:"GET",contentType:"application/json",success:async function(t){var t=t.data,a=document.getElementById("cmdBox"),e=`
      <div class="table-responsive">
        <div id="cmds_table_toolbar"></div>
        <table class="table align-middle text-nowrap" id="cmds_table" data-flat="true">
          <thead class="header-item">
            <tr>
              <th data-field="folder" data-sortable="true" scope="col" data-formatter="TitleButtonPill">Folder</th>
              <th data-field="name" data-sortable="true" scope="col">Name</th>
              <th data-field="description" data-sortable="true" scope="col">Description</th>
              <th data-field="type" data-sortable="true" scope="col">Type</th>
              <th data-field="cooldown" data-sortable="true" scope="col">Cooldown</th>
              ${n?'<th data-field="action" scope="col" data-formatter="buttonActions">Action</th>':""}
            </tr>
          </thead>
          <tbody id="cmdstablecontent"></tbody>
        </table>
      </div>`;a.innerHTML=e;let o=[];await t.flatMap(n=>n.files.map(t=>{var a=i(s,t.name,t.nameLocalizations),e=i(s,t.description,t.descriptionLocalizations);o.push({folder:n.folder,name:a,description:e,type:l[t.type]||"Message Command",cooldown:t.cooldown||0,action:{name:t.name,folder:n.folder}})})),$("#cmds_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"commands_table",toolbar:"#cmds_table_toolbar",data:o}),n&&(c(),$("#cmds_table").on("all.bs.table",function(t,a){c()}))},error:function(t){NotificationHandler.show({content:t.responseJSON.error,type:"error"})}}),$("#commands_Modal"));function c(){$(".btn[data-action]").off("click").on("click",function(a){let o=$(this).attr("data-action");$.ajax({url:"/admin/commands",method:"POST",contentType:"application/json",data:JSON.stringify({name:$(this).attr("data-name"),dir:$(this).attr("data-dir"),action:o}),success:async function(t){if("delete"===o)a.preventDefault(),$(this).parents(".search-items").remove(),NotificationHandler.show({content:t.data,type:"success"});else if("reload"===o)NotificationHandler.show({content:t.data,type:"success"});else if("info"===o){t=t.data;let a=r.find(".modal-body #cmd_detail");a.html("");var e=i(s,t.name,t.nameLocalizations),n=i(s,t.description,t.descriptionLocalizations);a.append(d("Id",t.id)),a.append(d("Name",e)),a.append(d("Description",n)),a.append(d("Type",l[t.type]||"Message Command")),a.append(d("Version",t.version)),t.defaultMemberPermissions&&(e=t.defaultMemberPermissions.map(async t=>{var a=await DiscordAPIHandler.findPermission(t);return a?a.name:t}),Promise.all(e).then(t=>{t=t.join(", ");a.append(d("Permissions",t))})),t.options?.length&&a.append(d("Options",t.options.map(t=>t.name).join(", "))),r.find(".modal-footer").html(`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>`),window.ContentHandler.ToggleMainContent("#cmd_detail",!0)}},error:function(t){NotificationHandler.show({content:t.responseJSON.error,type:"error"})}})})}r.on("hidden.bs.modal",function(t){window.ContentHandler.ToggleMainContent("#cmd_detail",!1)})})();