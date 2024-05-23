function buttonActions(t,e,a){return`
    <div class="action-btn">
      <button type="button" title="share" class="btn btn-icon btn-label-primary" nns-share nns-share-url='https://n2cc.me/${t}' data-id="${t}" data-action="share" >
          <i class="ti ti-share"></i>
      </button>
      <button type="button" title="edit" class="btn btn-icon btn-label-primary" data-id="${t}" data-action="edit" data-bs-toggle="modal" data-bs-target="#urlEditModal" >
        <i class="ti ti-edit"></i>
      </button>
      <button type="button" title="delete" class="btn btn-icon btn-label-danger" data-id="${t}" data-action="delete" data-bs-toggle="modal" data-bs-target="#urlDeleteModal" >
        <i class="ti ti-circle-minus"></i>
      </button>
    </div>`}function formatshortUrl(t,e,a){return`<a class="text-break" href='https://n2cc.me/${t}'>${t}</a> <span><a class="copy-shorturl" data-bs-toggle="tooltip" data-bs-title="Copy" href="javascript:void(0)" nns-toclipboard nns-toclipboard-data='https://n2cc.me/${t}'><i class="ti ti-copy ms-1"></i></a></span>`}(()=>{const e=document.getElementById("addurlBtn"),a=($.ajax({url:"/shortlink/data",method:"GET",contentType:"application/json",success:function(t){t=t.data;document.getElementById("urlBox").innerHTML=`
            <div class="table-responsive">
              <div id="sl_table_toolbar"></div>
              <table class="table align-middle text-nowrap" id="sl_table" data-flat="true">
                <thead class="header-item">
                  <tr>
                    <th data-field="shortUrl" data-sortable="true" data-formatter="formatshortUrl" scope="col">Shortened URL</th>
                    <th data-field="origUrl" data-sortable="true" data-formatter="formatTextBreakUrl" scope="col">Original URL</th>
                    <th data-field="timestamp" data-sortable="true" data-formatter="bt_dateformatter" scope="col">Created at</th>
                    <th data-field="clicks" data-sortable="true" scope="col">Clicked</th>
                    <th data-field="shortUrl" data-formatter="buttonActions" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="sl_table_content"></tbody>
              </table>
            </div>`,$("#sl_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"shortlink_table",toolbar:"#sl_table_toolbar",data:t}),e.removeAttribute("disabled"),e.innerHTML='<i class="ti ti-plus"></i>'},error:function(t){window.NotificationHandler.show({content:res.responseJSON.error,type:"error"})}}),document.getElementById("shortlinkform").addEventListener("submit",function(t){if(t.preventDefault(),!this.checkValidity())return t.stopPropagation();$.ajax({url:"/api/shortlink/usercreate",method:"POST",data:{origUrl:document.getElementById("origUrl").value,shortUrl:document.getElementById("shortUrl").value},success:function(t){window.NotificationHandler.show({content:"Successfully created a new URL",type:"success"}),$("#sl_table").bootstrapTable("append",t.data),$("#urlAddModal").modal("hide")},error:function(t){window.logger.error("Error creating a new shortlink",t),window.NotificationHandler.show({content:res.responseJSON.error,type:"error"})}})}),document.getElementById("urlDeleteModal")),o=(a.addEventListener("show.bs.modal",t=>{const e=t.relatedTarget.getAttribute("data-id");a.querySelector(".modal-body").innerHTML=`
        <div class="text-center p-3">
            <i class="icon icon-lg text-danger ti ti-alert-triangle mb-2"></i>
            <h4 class="mb-3">Are you sure?</h4>
            <div class="fw-normal">Are you sure you want to delete this url?</div>
        </div>`,a.querySelector(".modal-footer").innerHTML=`
        <div class="w-100">
          <div class="row">
            <div class="col">
              <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
            </div>
            <div class="col">
              <button class="btn btn-danger w-100" type="button" id="del_btn_${e}">Confirm</button>
            </div>
          </div>
        </div>`,document.getElementById("del_btn_"+e).addEventListener("click",async function(){$.ajax({url:"/shortlink/manage/"+e,method:"POST",data:{method:"delete"},success:function(t){window.NotificationHandler.show({type:"success",content:"Successfully deleted the URL"}),$("#sl_table").bootstrapTable("remove",{field:"shortUrl",values:[e]}),$("#urlDeleteModal").modal("hide")},error:function(t){window.NotificationHandler.show({content:t.responseJSON.error,type:"error"})}})})}),document.getElementById("urlEditModal"));o.addEventListener("show.bs.modal",t=>{const a=t.relatedTarget.getAttribute("data-id");$.ajax({url:"/shortlink/manage/"+a,method:"GET",contentType:"application/json",success:function(t){o.querySelector("#edit_origUrl").value=t.data.origUrl,o.querySelector("#edit_shortUrl").value=t.data.shortUrl,o.querySelector(".modal-footer").innerHTML=`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
                <button class="btn btn-primary" type="button" id="edit_btn_${a}" >Save</button>`,document.getElementById("edit_btn_"+a).addEventListener("click",async function(){$.ajax({url:"/shortlink/manage/"+a,method:"POST",data:{method:"update",origUrl:o.querySelector("#edit_origUrl").value,newshortUrl:o.querySelector("#edit_shortUrl").value},success:function(t){window.NotificationHandler.show({type:"success",content:"Successfully edited the URL"}),$("#urlEditModal").modal("hide");var e=document.createElement("tr");e.setAttribute("url-id",t.data.shortUrl),e.className="search-items",e.innerHTML=addItem(t.data),$(`tr[url-id="${a}"]`).replaceWith(e)},error:function(t){window.NotificationHandler.show({content:t.responseJSON.error,type:"error"})}})})},error:function(t){window.NotificationHandler.show({content:t.responseJSON.error,type:"error"})}})})})();