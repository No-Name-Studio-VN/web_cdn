function buttonActions(t,e,n){return`<div class="action-btn">
    <button type="button" class="btn btn-icon btn-label-primary" data-id="${t}" data-action="view" >
      <i class="ti ti-eye" ></i>
    </button>
    <button type="button" class="btn btn-icon btn-label-primary" data-id="${t}" data-action="share" >
      <i class="ti ti-share" ></i>
    </button>
    <button type="button" class="btn btn-icon btn-label-danger" data-id="${t}" data-action="delete" >
      <i class="ti ti-circle-minus" ></i>
    </button>
  </div>`}function formatLongContent(t){return`<span class="text-break">${t}</span>`}function createBtnEvent(){$(".btn[data-action]").off("click").on("click",function(t){var e=$(this).attr("data-action"),n=$(this).attr("data-id");"delete"===e?$.get(`/api/files/${n}/delete`,t=>{t.success?(window.NotificationHandler.show({content:"Đã xóa tài liệu thành công",type:"success"}),fetchStats()):(logger.error(t.error),window.NotificationHandler.show({content:"Lỗi khi xóa tài liệu",type:"error"}))}):"view"===e?window.location.href="/files/file/"+n:"share"===e&&window.ContentHandler.Share(window.location.hostname+"/files/file/"+n)})}function TitleButtonPill(t,e,n){return`<span class="badge rounded-pill btn-label-primary">${t=t.charAt(0).toUpperCase()+t.slice(1)}</span>`}function countUpAnimation(e,n){let o=window.countUp.CountUp;document.getElementById(e).textContent=0,setTimeout(()=>{var t=new o(e,n,{duration:3});t.error?logger.error(t.error):t.start()},1e3)}function fetchStats(){$.get("/api/admin/stats",t=>{if(t.success){countUpAnimation("documentsCount",t.stats.documents),countUpAnimation("usersCount",t.stats.users),countUpAnimation("downloadsCount",t.stats.downloads),countUpAnimation("viewsCount",t.stats.views),countUpAnimation("documentsCountWeek",Math.round(t.stats.documents/7)),countUpAnimation("usersCountWeek",Math.round(t.stats.users/7)),countUpAnimation("downloadsCountWeek",Math.round(t.stats.downloads/7)),countUpAnimation("viewsCountWeek",t.stats.views);var n=window.location.pathname.includes("/admin");document.getElementById("documentBox").innerHTML=`
            <div class="table-responsive">
              <div id="documents_table_toolbar"></div>
              <table class="table align-middle text-nowrap" id="documents_table" data-flat="true">
                <thead class="header-item">
                  <tr>
                    <th data-field="fileType" data-sortable="true" scope="col" data-formatter="TitleButtonPill">Loại</th>
                    <th data-field="fileTitle" data-sortable="true" scope="col" data-formatter="formatLongContent">Tên tài liệu</th>
                    <th data-field="description" data-sortable="true" scope="col" data-formatter="formatLongContent">Mô tả</th>
                    <th data-field="department" data-sortable="true" scope="col">Đơn vị</th>
                    <th data-field="schoolYear" data-sortable="true" scope="col">Năm</th>
                    ${n?'<th data-field="_id" scope="col" data-formatter="buttonActions">Chức năng</th>':""}
                  </tr>
                </thead>
                <tbody id="documents_table_content"></tbody>
              </table>
            </div>`;let e=[];t.documents.forEach(t=>{e.push({_id:t._id,fileTitle:t.fileTitle,description:t.description,department:t.department,schoolYear:t.schoolYear,fileType:FILE_TYPES_LABELS[t.fileType]})}),$("#documents_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"documents_table",toolbar:"#documents_table_toolbar",data:e}),n&&(createBtnEvent(),$("#documents_table").on("all.bs.table",function(t,e){createBtnEvent()}))}else logger.error(t.error),window.NotificationHandler.show({content:"Error fetching stats",type:"error"})})}fetchStats();