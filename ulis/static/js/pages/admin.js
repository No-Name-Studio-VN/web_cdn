function docsButtonActions(t,e,a){return`
    <div class="action-btn">
        <button type="button" class="btn btn-icon btn-label-primary docBtn" data-id="${t}" data-action="verify" data-bs-toggle="tooltip" data-bs-title="Duyệt" >
            <i class="ti ti-check"></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-danger docBtn" data-id="${t}" data-action="unverify" data-bs-toggle="tooltip" data-bs-title="Bỏ duyệt">
            <i class="ti ti-x"></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-primary docBtn" data-id="${t}" data-action="view" data-bs-toggle="tooltip" data-bs-title="Xem">
            <i class="ti ti-eye"></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-danger docBtn" data-id="${t}" data-action="delete" data-bs-toggle="tooltip" data-bs-title="Xóa">
            <i class="ti ti-circle-minus"></i>
        </button>
    </div>`}function usersButtonActions(t,e,a){return`
    <div class="action-btn">
        <button type="button" class="btn btn-icon btn-label-primary userBtn" data-id="${t}" data-action="verify" data-bs-toggle="tooltip" data-bs-title="Duyệt">
            <i class="ti ti-check"></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-danger userBtn" data-id="${t}" data-action="unverify" data-bs-toggle="tooltip" data-bs-title="Bỏ duyệt">
            <i class="ti ti-x"></i>
        </button>
        <button type="button" class="btn btn-icon btn-label-danger docBtn" data-id="${t}" data-action="delete" data-bs-toggle="tooltip" data-bs-title="Xóa">
            <i class="ti ti-circle-minus"></i>
        </button>
    </div>`}function formatVerify(t){return`<span class="badge rounded-pill btn-label-${t?"primary":"danger"} verifyLabel">${t?"Đã duyệt":"Chưa duyệt"}</span>`}function formatStudentId(t){return t?`<button type="button" class="btn btn-icon btn-label-primary" data-bs-toggle="tooltip" data-bs-title="Hiện minh chứng" nns-external-window nns-external-url="${t}"><i class="ti ti-eye"></i></button>`:'<span class="badge rounded-pill btn-label-danger">Chưa cập nhật</span>'}function formatLongContent(t){return`<span class="text-break">${t}</span>`}function formatTitle(t){return`<a href="${t.url}" class="text-break">${t.title}</a>`}function TitleButtonPill(t,e,a){return`<span class="badge rounded-pill btn-label-primary">${t=t.charAt(0).toUpperCase()+t.slice(1)}</span>`}(()=>{let o=document.getElementById("documentBox"),n=document.getElementById("usersBox"),i=window.location.pathname.includes("/admin"),r=window.countUp.CountUp;function s(){$(".docBtn[data-action]").off("click").on("click",function(e){var t=$(this).attr("data-action"),a=$(this).attr("data-id");"delete"===t?$.get(`/api/files/${a}/delete`,t=>{t.success?(window.NotificationHandler.show({content:"Đã xóa tài liệu thành công",type:"success"}),c()):(logger.error(t.error),window.NotificationHandler.show({content:"Lỗi khi xóa tài liệu",type:"error"}))}):"view"===t?window.location.href="/files/file/"+a:"verify"===t?$.ajax({url:"/api/files/"+a,method:"PUT",data:{isVerified:!0},success:function(t){t.success&&(window.NotificationHandler.show({content:"Tài liệu đã được xác minh",type:"success"}),$(e.target).closest("tr").find(".verifyLabel").removeClass("btn-label-danger").addClass("btn-label-primary").text("Đã duyệt"))},error:function(t){logger.error(t.responseJSON?.error),window.NotificationHandler.show({content:"Lỗi khi xác minh tài liệu",type:"error"})}}):"unverify"===t&&$.ajax({url:"/api/files/"+a,method:"PUT",data:{isVerified:!1},success:function(t){t.success&&(window.NotificationHandler.show({content:"Tài liệu đã bỏ xác minh",type:"success"}),$(e.target).closest("tr").find(".verifyLabel").removeClass("btn-label-primary").addClass("btn-label-danger").text("Chưa duyệt"))},error:function(t){logger.error(t.responseJSON?.error),window.NotificationHandler.show({content:"Lỗi khi bỏ xác minh tài liệu",type:"error"})}})})}function d(){$(".userBtn[data-action]").off("click").on("click",function(e){var t=$(this).attr("data-action"),a=$(this).attr("data-id");switch(t){case"delete":confirm("Are you sure you want to delete this user?")&&$.ajax({url:"/api/users/"+a,method:"DELETE",success:function(t){t.success&&$(e.target).closest("tr").remove()},error:function(t){alert(t.responseJSON?.error||"Failed to delete user")}});break;case"verify":$.ajax({url:"/api/users/"+a,method:"PUT",data:{isVerified:!0},success:function(t){t.success?(window.NotificationHandler.show({content:"Đã xác minh người dùng",type:"success"}),$(e.target).closest("tr").find(".verifyLabel").removeClass("btn-label-danger").addClass("btn-label-primary").text("Đã duyệt")):window.NotificationHandler.show({content:xhr.responseJSON?.error||"Không thể xác minh người dùng",type:"error"})},error:function(t){logger.error(t.responseJSON?.error||"Không thể xác minh người dùng"),window.NotificationHandler.show({content:t.responseJSON?.error||"Không thể xác minh người dùng",type:"error"})}});break;case"unverify":$.ajax({url:"/api/users/"+a,method:"PUT",data:{isVerified:!1},success:function(t){t.success?(window.NotificationHandler.show({content:"Đã bỏ xác minh người dùng",type:"success"}),$(e.target).closest("tr").find(".verifyLabel").removeClass("btn-label-primary").addClass("btn-label-danger").text("Chưa duyệt")):window.NotificationHandler.show({content:xhr.responseJSON?.error||"Không thể bỏ xác minh người dùng",type:"error"})},error:function(t){logger.error(t.responseJSON?.error||"Không thể bỏ xác minh người dùng"),window.NotificationHandler.show({content:t.responseJSON?.error||"Không thể bỏ xác minh người dùng",type:"error"})}})}})}function l(e,a){document.getElementById(e).textContent=0,setTimeout(()=>{var t=new r(e,a,{duration:3});t.error?logger.error(t.error):t.start()},1e3)}function c(){$.get("/api/admin/stats",t=>{if(t.success){l("documentsCount",t.stats.documents),l("usersCount",t.stats.users),l("downloadsCount",t.stats.downloads),l("viewsCount",t.stats.views),l("documentsCountWeek",Math.round(t.stats.documents/7)),l("usersCountWeek",Math.round(t.stats.users/7)),l("downloadsCountWeek",Math.round(t.stats.downloads/7)),l("viewsCountWeek",t.stats.views);var a=`
            <div class="table-responsive">
              <div id="documents_table_toolbar"></div>
              <table class="table align-middle text-nowrap" id="documents_table" data-flat="true">
                <thead class="header-item">
                  <tr>
                    <th data-field="fileType" data-sortable="true" scope="col" data-formatter="TitleButtonPill">Loại</th>
                    <th data-field="fileTitle" data-sortable="true" scope="col" data-formatter="formatTitle">Tên tài liệu</th>
                    <th data-field="course" data-sortable="true" scope="col"">Môn học</th>
                    <th data-field="description" data-sortable="true" scope="col" data-formatter="formatLongContent">Nhận xét GV</th>
                    <th data-field="department" data-sortable="true" scope="col">Đơn vị</th>
                    <th data-field="schoolYear" data-sortable="true" scope="col">Năm</th>
                    <th data-field="isVerified" data-sortable="true" scope="col" data-formatter="formatVerify">Đã xác minh</th>
                    ${i?'<th data-field="_id" scope="col" data-formatter="docsButtonActions">Chức năng</th>':""}
                  </tr>
                </thead>
                <tbody id="documents_table_content"></tbody>
              </table>
            </div>`,a=(o.innerHTML=a,`
            <div class="table-responsive">
                <div id="users_table_toolbar"></div>
                <table class="table align-middle text-nowrap" id="users_table" data-flat="true">
                    <thead class="header-item">
                        <tr>
                            <th data-field="displayName" data-sortable="true" scope="col">Họ và tên</th>
                            <th data-field="studentId" data-sortable="true" scope="col">Mã sinh viên</th>
                            <th data-field="schoolYear" data-sortable="true" scope="col">Khóa</th>
                            <th data-field="department" data-sortable="true" scope="col">Khoa</th>
                            <th data-field="course" data-sortable="true" scope="col">Ngành</th>
                            <th data-field="class" data-sortable="true" scope="col">Lớp</th>
                            <th data-field="isVerified" data-sortable="true" scope="col" data-formatter="formatVerify">Đã xác minh</th>
                            <th data-field="studentIdFile" data-sortable="true" scope="col" data-formatter="formatStudentId">Ảnh thẻ sinh viên</th>
                            ${i?'<th data-field="_id" scope="col" data-formatter="usersButtonActions">Chức năng</th>':""}
                        </tr>
                    </thead>
                    <tbody id="users_table_content"></tbody>
                </table>
            </div>`);n.innerHTML=a;let e=[];t.documents.forEach(t=>{e.push({_id:t._id,fileTitle:{url:"/files/file/"+t._id,title:t.fileTitle},description:t.description,department:t.department,schoolYear:t.schoolYear,fileType:FILE_TYPES_LABELS[t.fileType],isVerified:t.isVerified,course:t.course})}),$("#documents_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"documents_table",toolbar:"#documents_table_toolbar",data:e}),$("#users_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"users_table",toolbar:"#users_table_toolbar",data:t.users}),i&&(s(),$("#documents_table").on("all.bs.table",function(t,e){s()}),d(),$("#users_table").on("all.bs.table",function(t,e){d()}))}else logger.error(t.error),window.NotificationHandler.show({content:"Error fetching stats",type:"error"})})}c()})();