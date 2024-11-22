let fileList=$("#fileList"),formatFileSize=e=>{var t;return 0===e?"0 Bytes":(t=Math.floor(Math.log(e)/Math.log(1024)),parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB"][t])};function createFileElement(e){let{fileTitle:t,fileType:i,uploadedAt:a,_id:s,fileSize:l}=e,n="/files/file/"+s;var e=`
    <li class="list-group-item">
        <div class="row align-items-center py-3">
          <div class="col-auto">
            <span class="position-relative">
              <img width="40" height="40" src="${FILE_ICONS[i]}" />
            </span>
          </div>

          <div class="col">
            <h5 class="mb-0">
              <a href="${n}">${t}</a>
            </h5>
            <ul class="list-inline list-separator small text-body">
              <li class="list-inline-item">${moment(a).fromNow()}</li>
              <li class="list-inline-item">${formatFileSize(l)}</li>
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
      </li>`,o=document.createElement("template");o.innerHTML=e.trim();let d=o.content.firstElementChild;var e=d.querySelector(".share"),o=d.querySelector(".down"),r=d.querySelector(".delete");e.addEventListener("click",()=>{window.ContentHandler.Share(n)}),o.addEventListener("click",()=>{window.location.href=n}),r.addEventListener("click",async()=>{try{var e;window.confirm("Bạn có chắc chắn muốn xóa tệp tin này không?")&&(e=(await $.post(`/api/files/${s}/delete`)).success,e?d.remove():window.NotificationHandler.show({content:"Không thể xóa tệp tin này.",type:"error"}))}catch(e){window.NotificationHandler.show({content:"Không thể xóa tệp tin này.",type:"error"})}}),fileList.append(d)}(async()=>{var e=(await $.get("/api/users/@me/files")).data;e?e.forEach(e=>createFileElement(e)):fileList.append("<li class='list-group-item'>Không có tệp tin nào.</li>")})();