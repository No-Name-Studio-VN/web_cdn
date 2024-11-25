(async()=>{let e=window.location.pathname.split("/").pop(),i=$("#share-btn"),a=$("#download-btn"),l=$("#fileContainer"),o=$("#file-viewer");var t=$("#loading");let r=$("#file-uploadedtime"),s=$("#file-info"),d=$("#user-info"),c=$("#paymentModal"),n=$("#paymentModalTitle"),h=$("#paymentModalbody"),m=$("#paymentModalfooter"),p=(t,e,i)=>{n.text(t),h.html(e),m.html(i),c.modal("show")},u=async i=>{i=`/api/files/${i}/download`;try{var n=await fetch(i);if(!n.ok)throw new Error("HTTP error! status: "+n.status);var a=await n.blob(),l=n.headers.get("Content-Disposition")?.includes('filename="')?decodeURIComponent(n.headers.get("Content-Disposition").split('filename="')[1].replace('"',"")):"download";let t=window.URL.createObjectURL(a),e=document.createElement("a");return e.style.display="none",e.href=t,e.download=l,document.body.appendChild(e),e.click(),setTimeout(()=>{document.body.removeChild(e),window.URL.revokeObjectURL(t)},100),!0}catch(t){return console.error("Download error:",t),window.NotificationHandler.show({title:"Lỗi tải",content:"HTTP error! status: 400"===t.message?"Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu":"Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",type:"error"}),!1}},g=async()=>{try{return await $.post("/api/users/@me/payment",{amount:1}),window.NotificationHandler.show({title:"Thanh toán thành công",content:"Bạn đã mua thêm 1 lượt tải tài liệu",type:"success"}),!0}catch(t){return window.NotificationHandler.show({title:"Lỗi thanh toán",content:"Đã có lỗi xảy ra khi thanh toán, vui lòng thử lại sau",type:"error"}),!1}},y=async t=>{t.isVerified?t.downloadsRemaining<1?(p("Hết lượt tải",`
                <div class="alert alert-danger text-center" role="alert"><i class="ti ti-alert-circle me-2"></i>Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu.</div>
                <div class="d-flex justify-content-center mb-3">
                    <img style="width: 12rem; height: 12rem; position: relative; display: inline-block; border: .5rem solid var(--body-bg-theme); background: var(--body-bg-theme); border-radius: .5rem;" src="${client.cdn}/static/media/qr.png" alt="QR">
                </div>
                <div class="text-center">
                    <h4 class="my-2 text-success">LE HA TRANG</h4>
                    <h6 class="my-2 text-muted">8810097640</h6>
                    <span class="my-2 text-muted">BIDV - CN CAU GIAY PGD HOANG QUOC VIET</span>
                </div>
                <div class="text-center">
                    <h4 class="my-2">Thanh toán 1 lượt tải tài liệu với giá 5000đ</h4>
                    <span class="my-2">Nội dung thanh toán: <strong>Mã sinh viên</strong></span>
                    <input type="file" class="form-control my-2" id="paymentFile" accept=".jpg,.jpeg,.png,.gif,.webp">
                </div>
                `,`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">Đóng</button>
                 <button type="button" class="btn btn-primary" id="paymentBtn">Thanh toán</button>`),$("#paymentBtn").one("click",async()=>{$("#paymentFile")[0].files[0]?await g()&&y({...t,downloadsRemaining:t.downloadsRemaining+1}):window.NotificationHandler.show({title:"Lỗi thanh toán",content:"Vui lòng cung cấp minh chứng thanh toán",type:"error"})})):(p("Tải tài liệu",`
            <div class="alert alert-info text-center" role="alert"><i class="ti ti-alert-circle me-2"></i>Bạn có chắc chắn muốn tải tài liệu này?</div>
            <div class="text-center">
                <h6 class="my-2 text-muted">Số lượt tải còn lại: ${t.downloadsRemaining}</h6>
            </div>`,`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">Đóng</button>
             <button type="button" class="btn btn-primary" id="downloadbtn">Xác nhận</button>`),$("#downloadbtn").one("click",async()=>{await u(e)&&c.modal("hide"),window.ContentHandler.ToggleLoading(a,!1)})):p("Xác thực tài khoản",'<div class="alert alert-danger text-center" role="alert"><i class="ti ti-alert-circle me-2"></i>Tài khoản của bạn chưa được xác thực. Vui lòng xác thực tài khoản để tải tài liệu.</div>',`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">Đóng</button>
                 <a href="/profile" class="btn btn-primary">Xác thực tài khoản</a>`)};var w=n=>{var t;n||l.html(`
    <div class="col-12 text-center p-5">
      <h2 class="mb-4 fw-normal">Không tìm thấy tài liệu</h2>
    </div>`),$("#isDocumentVerified").html(`<span class="badge rounded-pill btn-label-${(t=n?.isVerified)?"primary":"danger"} verifyLabel">${t?"Đã duyệt":"Chưa duyệt"}</span>`),$("#file-title").text(n?.fileTitle||"Untitled"),$("#likesCount").text(n?.likes||0),$("#dislikesCount").text(n?.dislikes||0),r.text((t=n?.uploadedAt,moment(t).fromNow())),s.empty(),Object.entries(FILE_ATTRIBUTES).forEach(([t,e])=>{var i;s.append((i=n,`
        <div class="d-flex align-items-center">
            <i class="ti ${(e=e).icon} me-2"></i>
            <span id="file-${t}">${i?e.getValue(i):e.default}</span>
        </div>
    `))}),(t=>{if(!t.fileUrl)return o.html('<div class="text-center p-5">Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>');var e;t.fileType?.startsWith("image/")?o.html(`<img src="${t.fileUrl}" class="img-fluid" alt="${t.fileTitle}">`):OFFICE_FORMATS.has(t.fileType)?(e="https://view.officeapps.live.com/op/embed.aspx?src="+encodeURIComponent(t.fileUrl),o.html(`
                <iframe 
                    src="${e}" 
                    width="100%" 
                    height="600px" 
                    frameborder="0"
                    onerror="this.parentElement.innerHTML='<div class='text-center p-5'>Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>'"
                ></iframe>
            `)):"application/pdf"===t.fileType?o.html(`<object data="${t.fileUrl}" type="application/pdf" width="100%" height="600px"><p>Trình duyệt của bạn không hỗ trợ xem tệp tin này.</p></object>`):o.html('<div class="text-center p-5">Trình duyệt của bạn không hỗ trợ xem tệp tin này.</div>')})(n),rxjs.fromEvent(a,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(a,!0)),rxjs.debounceTime(1e3),rxjs.switchMap(async()=>{try{var t=(await $.get("/api/users/@me")).data;t?await y(t):window.location.href="/login?returnurl="+encodeURIComponent(window.location.pathname)}catch(t){throw 401===t.status&&(window.location.href="/login?returnurl="+encodeURIComponent(window.location.pathname)),t}}),rxjs.catchError(t=>(logger.error("Error downloading",t),window.NotificationHandler.show({title:"Lỗi tải",content:"Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",type:"error"}),rxjs.EMPTY)),rxjs.finalize(()=>window.ContentHandler.ToggleLoading(a,!1))).subscribe(),c.on("hidden.bs.modal",()=>{window.ContentHandler.ToggleLoading(a,!1)}),$.get("/api/users/"+n.uploadedBy).then(({data:t})=>{t&&d.html(`
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
            `)}),i.on("click",()=>{window.ContentHandler.Share(window.location.href)})};try{var b=(await $.get("/api/files/"+e)).data;w(b)}catch(t){logger.error("Error loading file:",t),w(null)}finally{t.hide()}})();