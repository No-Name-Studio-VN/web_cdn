(async()=>{let i=window.location.pathname.split("/").pop(),e=$("#share-btn"),a=$("#download-btn"),o=$("#fileContainer"),l=$("#file-viewer");var t=$("#loading");let r=$("#file-uploadedtime"),s=$("#file-info"),d=$("#user-info"),c=$("#paymentModal"),n=$("#paymentModalTitle"),h=$("#paymentModalbody"),p=$("#paymentModalfooter"),m=(t,i,e)=>{n.text(t),h.html(i),p.html(e),c.modal("show")},u=async e=>{e=`/api/files/${e}/download`;try{var n=await fetch(e);if(!n.ok)throw new Error("HTTP error! status: "+n.status);var a=await n.blob(),o=n.headers.get("Content-Disposition")?.includes('filename="')?decodeURIComponent(n.headers.get("Content-Disposition").split('filename="')[1].replace('"',"")):"download";let t=window.URL.createObjectURL(a),i=document.createElement("a");return i.style.display="none",i.href=t,i.download=o,document.body.appendChild(i),i.click(),setTimeout(()=>{document.body.removeChild(i),window.URL.revokeObjectURL(t)},100),!0}catch(t){return console.error("Download error:",t),window.NotificationHandler.show({title:"Lỗi tải",content:"HTTP error! status: 400"===t.message?"Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu":"Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",type:"error"}),!1}},g=async()=>{try{return await $.post("/api/users/@me/payment",{amount:1}),window.NotificationHandler.show({title:"Thanh toán thành công",content:"Bạn đã mua thêm 1 lượt tải tài liệu",type:"success"}),!0}catch(t){return window.NotificationHandler.show({title:"Lỗi thanh toán",content:"Đã có lỗi xảy ra khi thanh toán, vui lòng thử lại sau",type:"error"}),!1}},w=async t=>{t.isVerified?t.downloadsRemaining<1?(m("Hết lượt tải",`
                <div class="alert alert-danger" role="alert"><i class="ti ti-alert-circle me-2"></i>Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu.</div>
                <div class="d-flex justify-content-center mb-3">
                    <img style="width: 12rem; height: 12rem; position: relative; display: inline-block; border: .5rem solid var(--body-bg-theme); background: var(--body-bg-theme); border-radius: .5rem;" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR">
                </div>
                <div class="text-center">
                    <h4 class="my-2">Thanh toán 1 lượt tải tài liệu với giá 5000đ</h4>
                    <span class="my-2">Nội dung thanh toán: <strong>Mã sinh viên</strong></span>
                    <input type="file" class="form-control" id="paymentFile" accept=".jpg,.jpeg,.png,.gif,.webp" required>
                </div>
                `,`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                 <button type="button" class="btn btn-primary" id="paymentBtn">Thanh toán</button>`),$("#paymentBtn").one("click",async()=>{await g()&&w({...t,downloadsRemaining:t.downloadsRemaining+1})})):(m("Tải tài liệu",`<p>Bạn có chắc chắn muốn tải tài liệu này?</p>
             <p>Số lượt tải còn lại: ${t.downloadsRemaining}</p>`,`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
             <button type="button" class="btn btn-primary" id="downloadbtn">Xác nhận</button>`),$("#downloadbtn").one("click",async()=>{await u(i)&&c.modal("hide"),window.ContentHandler.ToggleLoading(a,!1)})):m("Xác thực tài khoản","<p>Tài khoản của bạn chưa được xác thực. Vui lòng xác thực tài khoản để tải tài liệu.</p>",`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                 <a href="/profile" class="btn btn-primary">Xác thực tài khoản</a>`)};var b=n=>{var t;n||o.html(`
    <div class="col-12 text-center p-5">
      <h2 class="mb-4 fw-normal">Không tìm thấy tài liệu</h2>
    </div>`),$("#isDocumentVerified").html(`<span class="badge rounded-pill btn-label-${(t=n?.isVerified)?"primary":"danger"} verifyLabel">${t?"Đã duyệt":"Chưa duyệt"}</span>`),$("#file-title").text(n?.fileTitle||"Untitled"),$("#likesCount").text(n?.likes||0),$("#dislikesCount").text(n?.dislikes||0),r.text((t=n?.uploadedAt,moment(t).fromNow())),s.empty(),Object.entries(FILE_ATTRIBUTES).forEach(([t,i])=>{var e;s.append((e=n,`
        <div class="d-flex align-items-center">
            <i class="ti ${(i=i).icon} me-2"></i>
            <span id="file-${t}">${e?i.getValue(e):i.default}</span>
        </div>
    `))}),(t=>{if(!t.fileUrl)return l.html('<div class="text-center p-5">Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>');var i;t.fileType?.startsWith("image/")?l.html(`<img src="${t.fileUrl}" class="img-fluid" alt="${t.fileTitle}">`):OFFICE_FORMATS.has(t.fileType)?(i="https://view.officeapps.live.com/op/embed.aspx?src="+encodeURIComponent(t.fileUrl),l.html(`
                <iframe 
                    src="${i}" 
                    width="100%" 
                    height="600px" 
                    frameborder="0"
                    onerror="this.parentElement.innerHTML='<div class='text-center p-5'>Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>'"
                ></iframe>
            `)):"application/pdf"===t.fileType?l.html(`<object data="${t.fileUrl}" type="application/pdf" width="100%" height="600px"><p>Trình duyệt của bạn không hỗ trợ xem tệp tin này.</p></object>`):l.html('<div class="text-center p-5">Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>')})(n),rxjs.fromEvent(a,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(a,!0)),rxjs.debounceTime(1e3),rxjs.switchMap(async()=>{try{var t=(await $.get("/api/users/@me")).data;t?await w(t):window.location.href="/login?returnurl="+encodeURIComponent(window.location.pathname)}catch(t){throw 401===t.status&&(window.location.href="/login?returnurl="+encodeURIComponent(window.location.pathname)),t}}),rxjs.catchError(t=>(logger.error("Error downloading",t),window.NotificationHandler.show({title:"Lỗi tải",content:"Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",type:"error"}),rxjs.EMPTY)),rxjs.finalize(()=>window.ContentHandler.ToggleLoading(a,!1))).subscribe(),c.on("hidden.bs.modal",()=>{window.ContentHandler.ToggleLoading(a,!1)}),$.get("/api/users/"+n.uploadedBy).then(({data:t})=>{t&&d.html(`
                <div class="d-flex align-items-center">
                    <i class="ti ti-user me-2"></i>
                    <span>${t.displayName}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="ti ti-id me-2"></i>
                    <span>${t.studentId}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="ti ti-building me-2"></i>
                    <span>${t.department}</span>
                </div>
                <div class="d-flex align-items-center">
                    <i class="ti ti-school me-2"></i>
                    <span>${t.course}</span>
                </div>
            `)}),e.on("click",()=>{window.ContentHandler.Share(window.location.href)})};try{var y=(await $.get("/api/files/"+i)).data;b(y)}catch(t){logger.error("Error loading file:",t),b(null)}finally{t.hide()}})();