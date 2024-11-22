const fileList = $("#fileList");

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

function createFileElement(file) {
  const { fileTitle, fileType, uploadedAt, _id, fileSize } = file;
  const previewUrl = "/files/file/" + _id;
  const templateHtml = `
    <li class="list-group-item">
        <div class="row align-items-center py-3">
          <div class="col-auto">
            <span class="position-relative">
              <img width="40" height="40" src="${FILE_ICONS[fileType]}" />
            </span>
          </div>

          <div class="col">
            <h5 class="mb-0">
              <a href="${previewUrl}">${fileTitle}</a>
            </h5>
            <ul class="list-inline list-separator small text-body">
              <li class="list-inline-item">${moment(uploadedAt).fromNow()}</li>
              <li class="list-inline-item">${formatFileSize(fileSize)}</li>
            </ul>
          </div>

          <div class="col-auto">
            <div class="dropdown">
              <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <span class="d-none d-sm-inline-block me-1">Thêm</span>
                <i class="ti ti-chevron-down"></i>
              </button>
              <div class="dropdown-menu">
                <span class="dropdown-header text-muted">Tệp tin</span>
                <a class="dropdown-item share" href="#"><i class="ti ti-share me-1 fs-4"></i>Chia sẻ</a>
                <a class="dropdown-item down" href="#"><i class="ti ti-download me-1 fs-4"></i>Tải về</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger delete" href="#"><i class="ti ti-trash me-1 fs-4"></i>Xóa</a>
              </div>
            </div>
          </div>
        </div>
      </li>`;

  const div = document.createElement("template");
  div.innerHTML = templateHtml.trim();
  
  // Get the actual element from the template
  const element = div.content.firstElementChild;
  
  // Now query the actual element
  const shareButton = element.querySelector(".share");
  const downloadButton = element.querySelector(".down");
  const deleteButton = element.querySelector(".delete");

  shareButton.addEventListener("click", () => {
    window.ContentHandler.Share(previewUrl);
  });

  downloadButton.addEventListener("click", () => {
    window.location.href = previewUrl;
  });


  deleteButton.addEventListener("click", async () => {
    try {
      const prompt = window.confirm("Bạn có chắc chắn muốn xóa tệp tin này không?");
      if (!prompt) return;
      const { success } = await $.post(`/api/files/${_id}/delete`);
      if (success) {
        element.remove();
      } else {
        window.NotificationHandler.show({
          content: "Không thể xóa tệp tin này.",
          type: "error"
        });
      }
    } catch (error) {
      window.NotificationHandler.show({
        content: "Không thể xóa tệp tin này.",
        type: "error"
      });
    }
  });

  fileList.append(element);
}

(async () => {
  const { data } = await $.get("/api/users/@me/files");
  if (data) {
    data.forEach(element => createFileElement(element));
  } else {
    fileList.append("<li class='list-group-item'>Không có tệp tin nào.</li>");
  }
})();