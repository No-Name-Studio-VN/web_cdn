// eslint-disable-next-line no-unused-vars
function buttonActions(value, row, index) {
    return `<div class="action-btn">
    <button type="button" class="btn btn-icon btn-label-primary" data-id="${value}" data-action="view" >
      <i class="ti ti-eye" ></i>
    </button>
    <button type="button" class="btn btn-icon btn-label-primary" data-id="${value}" data-action="share" >
      <i class="ti ti-share" ></i>
    </button>
    <button type="button" class="btn btn-icon btn-label-danger" data-id="${value}" data-action="delete" >
      <i class="ti ti-circle-minus" ></i>
    </button>
  </div>`;
}

// eslint-disable-next-line no-unused-vars
function formatLongContent(value) {
    return `<span class="text-break">${value}</span>`;
}

function createBtnEvent() {
    $(".btn[data-action]").off("click").on("click", function (event) {
        const dataAction = $(this).attr("data-action");
        const documentId = $(this).attr("data-id");

        
        if (dataAction === "delete") {
            $.get(`/api/files/${documentId}/delete`, (res) => {
                if (res.success) {
                    window.NotificationHandler.show({
                        content: "Đã xóa tài liệu thành công",
                        type: "success",
                    });
                    fetchStats();
                } else {
                    logger.error(res.error);
                    window.NotificationHandler.show({
                        content: "Lỗi khi xóa tài liệu",
                        type: "error",
                    });
                }
            });
        } else if (dataAction === "view") {
            window.location.href = `/files/file/${documentId}`;
        } else if (dataAction === "share") {
            window.ContentHandler.Share(window.location.hostname + `/files/file/${documentId}`);
        }
    });
}

// eslint-disable-next-line no-unused-vars
function TitleButtonPill(value, row, index) {
    // make the first letter of the folder name uppercase
    value = value.charAt(0).toUpperCase() + value.slice(1);
    return `<span class="badge rounded-pill btn-label-primary">${value}</span>`;
}

function countUpAnimation(elementId, countValue) {
    const countUp = window.countUp.CountUp;
    // set count to 0
    document.getElementById(elementId).textContent = 0;

    setTimeout(() => {
        const demo = new countUp(elementId, countValue, {
            duration: 3,
        });
        if (!demo.error) {
            demo.start();
        } else {
            logger.error(demo.error);
        }
    }, 1000);
}

function fetchStats() {
    $.get("/api/admin/stats", (res) => {
        if (res.success) {
            countUpAnimation("documentsCount", res.stats.documents);
            countUpAnimation("usersCount", res.stats.users);
            countUpAnimation("downloadsCount", res.stats.downloads);
            countUpAnimation("viewsCount", res.stats.views);
            countUpAnimation("documentsCountWeek", Math.round(res.stats.documents / 7));
            countUpAnimation("usersCountWeek", Math.round(res.stats.users / 7));
            countUpAnimation("downloadsCountWeek", Math.round(res.stats.downloads / 7));
            countUpAnimation("viewsCountWeek", res.stats.views);



            const isAdminPage = window.location.pathname.includes("/admin");
            const documentBox = document.getElementById("documentBox");
            const tableLayout = `
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
                    ${isAdminPage ? `<th data-field="_id" scope="col" data-formatter="buttonActions">Chức năng</th>` : ""}
                  </tr>
                </thead>
                <tbody id="documents_table_content"></tbody>
              </table>
            </div>`;
            documentBox.innerHTML = tableLayout;

            const data = [];
            res.documents.forEach((document) => {
                data.push({
                    _id: document._id,
                    fileTitle: document.fileTitle,
                    description: document.description,
                    department: document.department,
                    schoolYear: document.schoolYear,
                    fileType: FILE_TYPES_LABELS[document.fileType]
                });
            });

            $("#documents_table").bootstrapTable({
                ...window.CustomBT_Config,
                cookieIdTable: "documents_table",
                toolbar: "#documents_table_toolbar",
                data: data,
            });

            if (isAdminPage) {
                createBtnEvent();
                $("#documents_table").on("all.bs.table", function (name, args) {
                    createBtnEvent();
                });
            }

        } else {
            logger.error(res.error);
            window.NotificationHandler.show({
                content: "Error fetching stats",
                type: "error",
            });
        }
    });
}

fetchStats();