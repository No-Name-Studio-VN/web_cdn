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
</div>`}function TitleButtonPill(t,a,e){return`<span class="badge rounded-pill btn-label-primary">${t=t.charAt(0).toUpperCase()+t.slice(1)}</span>`}(()=>{const n=window.location.pathname.includes("/admin/commands");function d(t,a,e){return"en"!==t&&e?e[t]:a}const s=(t,a)=>`<div class="row">
      <label for="${t}" class="col-lg-2 form-label">${t}</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="${t}" value="${a}" readonly>
      </div>
    </div>`,l={1:"Slash Command",2:"Context Menu",3:"User Action"},c=getLang(),r=($.ajax({url:"/commands/list",method:"GET",contentType:"application/json",success:async function(t){var t=t.data,a=document.getElementById("cmdBox"),e=`
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
      </div>`;a.innerHTML=e;const o=[];await t.flatMap(n=>n.files.map(t=>{var a=d(c,t.name,t.nameLocalizations),e=d(c,t.description,t.descriptionLocalizations);o.push({folder:n.folder,name:a,description:e,type:l[t.type]||"Message Command",cooldown:t.cooldown||0,action:{name:t.name,folder:n.folder}})})),$("#cmds_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"commands_table",toolbar:"#cmds_table_toolbar",data:o}),n&&(i(),$("#cmds_table").on("all.bs.table",function(t,a){i()}))},error:function(t){NotificationHandler.show({content:t.responseJSON.error,type:"error"})}}),$("#commands_Modal"));function i(){$(".btn[data-action]").off("click").on("click",function(o){const i=$(this).attr("data-action");$.ajax({url:"/admin/commands",method:"POST",contentType:"application/json",data:JSON.stringify({name:$(this).attr("data-name"),dir:$(this).attr("data-dir"),action:i}),success:async function(t){if("delete"===i)o.preventDefault(),$(this).parents(".search-items").remove(),NotificationHandler.show({content:t.data,type:"success"});else if("reload"===i)NotificationHandler.show({content:t.data,type:"success"});else if("info"===i){t=t.data;const n=r.find(".modal-body #cmd_detail");n.html("");var a=d(c,t.name,t.nameLocalizations),e=d(c,t.description,t.descriptionLocalizations);n.append(s("Id",t.id)),n.append(s("Name",a)),n.append(s("Description",e)),n.append(s("Type",l[t.type]||"Message Command")),n.append(s("Version",t.version)),t.defaultMemberPermissions&&(a=t.defaultMemberPermissions.map(async t=>{var a=await DiscordAPIHandler.findPermission(t);return a?a.name:t}),Promise.all(a).then(t=>{t=t.join(", ");n.append(s("Permissions",t))})),t.options?.length&&n.append(s("Options",t.options.map(t=>t.name).join(", "))),r.find(".modal-footer").html(`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>`),ContentHandler.toggleMainContent("#cmd_detail",!0)}},error:function(t){NotificationHandler.show({content:t.responseJSON.error,type:"error"})}})})}r.on("hidden.bs.modal",function(t){ContentHandler.toggleMainContent("#cmd_detail",!1)})})();