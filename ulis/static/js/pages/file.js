(async()=>{let a=window.location.pathname.split("/").pop(),e=$("#share-btn"),n=$("#download-btn"),o=$("#fileContainer"),l=$("#file-viewer");var t=$("#loading");let s=$("#file-uploadedtime"),r=$("#file-info"),d=$("#user-info"),c=$("#paymentModal"),i=$("#paymentModalTitle"),h=$("#paymentModalbody"),m=$("#paymentModalfooter"),p=(t,e,n)=>{i.text(t),h.html(e),m.html(n),c.modal("show")},u=async n=>{n=`/api/files/${n}/download`;try{var i=await fetch(n);if(!i.ok)throw new Error("HTTP error! status: "+i.status);var a=await i.blob(),o=i.headers.get("Content-Disposition")?.includes('filename="')?decodeURIComponent(i.headers.get("Content-Disposition").split('filename="')[1].replace('"',"")):"download";let t=window.URL.createObjectURL(a),e=document.createElement("a");return e.style.display="none",e.href=t,e.download=o,document.body.appendChild(e),e.click(),setTimeout(()=>{document.body.removeChild(e),window.URL.revokeObjectURL(t)},100),!0}catch(t){return console.error("Download error:",t),window.NotificationHandler.show({title:"Lỗi tải",content:"HTTP error! status: 400"===t.message?"Bạn đã hết lượt tải tài liệu. Vui lòng thanh toán để tải thêm tài liệu":"Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",type:"error"}),!1}},g=async()=>{try{return await $.post("/api/users/@me/payment",{amount:1}),window.NotificationHandler.show({title:"Thanh toán thành công",content:"Bạn đã mua thêm 1 lượt tải tài liệu",type:"success"}),!0}catch(t){return logger.error("Payment error:",t),window.NotificationHandler.show({title:"Lỗi thanh toán",content:"Đã có lỗi xảy ra khi thanh toán, vui lòng thử lại sau",type:"error"}),!1}},w=async t=>{t.isVerified?t.downloadsRemaining<1?(p("Hết lượt tải",`
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
                    <input type="file" class="form-control my-2" id="paymentFile" accept=".jpg,.jpeg,.png,.gif,.webp" placeholder="Chứng minh thanh toán">
                </div>
                `,`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">Đóng</button>
                 <button type="button" class="btn btn-primary" id="paymentBtn">Thanh toán</button>`),$("#paymentBtn").one("click",async()=>{$("#paymentFile")[0].files[0]?await g()&&w({...t,downloadsRemaining:t.downloadsRemaining+1}):window.NotificationHandler.show({title:"Lỗi thanh toán",content:"Vui lòng cung cấp minh chứng thanh toán",type:"error"})})):(p("Tải tài liệu",`
            <div class="alert alert-info text-center" role="alert"><i class="ti ti-alert-circle me-2"></i>Bạn có chắc chắn muốn tải tài liệu này?</div>
            <div class="text-center">
                <h6 class="my-2 text-muted">Số lượt tải còn lại: ${t.downloadsRemaining}</h6>
            </div>`,`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">Đóng</button>
             <button type="button" class="btn btn-primary" id="downloadbtn">Xác nhận</button>`),$("#downloadbtn").one("click",async()=>{await u(a)&&c.modal("hide"),window.ContentHandler.ToggleLoading(n,!1)})):p("Xác thực tài khoản",'<div class="alert alert-danger text-center" role="alert"><i class="ti ti-alert-circle me-2"></i>Tài khoản của bạn chưa được xác thực. Vui lòng xác thực tài khoản để tải tài liệu.</div>',`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">Đóng</button>
                 <a href="/profile" class="btn btn-primary">Xác thực tài khoản</a>`)};var v=i=>{var t;i||o.html(`
    <div class="col-12 text-center p-5">
      <h2 class="mb-4 fw-normal">Không tìm thấy tài liệu</h2>
    </div>`),$("#isDocumentVerified").html(`<span class="badge rounded-pill btn-label-${(t=i?.isVerified)?"primary":"danger"} verifyLabel">${t?"Đã duyệt":"Chưa duyệt"}</span>`),$("#file-title").text(i?.fileTitle||"Untitled"),$("#description_loading").toggle(!1),$("#description").html(`
            <div class="d-flex justify-content-center mb-2">
              <img class="d-block position-relative w-100 rounded-1" src="${i?.integrityFileUrl}" alt="Image Description">
            </div>
            <div class="">
              <span class="fs-5">${i?.description}</span>
            </div>
            `).toggle(!0),$("#upCount").text(i?.votes?.upvotes?.length||"0"),$("#downCount").text(i?.votes?.downvotes?.length||"0"),i?.votes?.hasUpvoted?$("#upvotebtn").addClass("active"):i?.votes?.hasDownvoted&&$("#downvotebtn").addClass("active"),s.text((t=i?.uploadedAt,moment(t).fromNow())),r.empty(),Object.entries(FILE_ATTRIBUTES).forEach(([t,e])=>{var n;r.append((n=i,`
        <div class="d-flex align-items-center">
            <i class="ti ${(e=e).icon} me-2"></i>
            <span id="file-${t}">${n?e.getValue(n):e.default}</span>
        </div>
    `))}),l.html('<div class="text-center p-5">Chức năng xem trước tài liệu hiện không khả dụng.</div>'),rxjs.fromEvent(n,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(n,!0)),rxjs.debounceTime(1e3),rxjs.switchMap(async()=>{try{var t=(await $.get("/api/users/@me")).data;t?await w(t):window.location.href="/login?returnurl="+encodeURIComponent(window.location.pathname)}catch(t){throw 401===t.status&&(window.location.href="/login?returnurl="+encodeURIComponent(window.location.pathname)),t}}),rxjs.catchError(t=>(logger.error("Error downloading",t),window.NotificationHandler.show({title:"Lỗi tải",content:"Đã có lỗi xảy ra khi tải tài liệu, vui lòng thử lại sau",type:"error"}),rxjs.EMPTY)),rxjs.finalize(()=>window.ContentHandler.ToggleLoading(n,!1))).subscribe(),$(".votebtn").each(function(){let i=$(this);rxjs.fromEvent(i[0],"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(i,!0)),rxjs.debounceTime(1500),rxjs.switchMap(async()=>{var t=i.hasClass("active"),e=await fetch(`/api/files/${a}/vote`,{method:t?"DELETE":"POST",headers:{"Content-Type":"application/json"},body:t?null:JSON.stringify({action:i.data("vote-action")})});if(!e.ok)throw n=(await e.json().catch(t=>"Could not parse error message")).error,n;var n=(await e.json()).data,e=(window.ContentHandler.ToggleLoading(i,!1),Array.isArray(n.upvotes)?n.upvotes.length:0),n=Array.isArray(n.downvotes)?n.downvotes.length:0;t?i.removeClass("active"):($(".votebtn").removeClass("active"),i.addClass("active")),$("#upCount").text(e.toString()),$("#downCount").text(n.toString())}),rxjs.catchError(t=>(window.NotificationHandler.show({content:t.message||"Đã có lỗi xảy ra khi bình chọn, vui lòng thử lại sau",type:"error",title:"Không thể bình chọn"}),rxjs.EMPTY))).subscribe()}),c.on("hidden.bs.modal",()=>{window.ContentHandler.ToggleLoading(n,!1)}),$.get("/api/users/"+i.uploadedBy).then(({data:t})=>{t&&d.html(`
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
            `)}),e.on("click",()=>{window.ContentHandler.Share(window.location.href)})};try{var y=(await $.get("/api/files/"+a)).data;v(y)}catch(t){logger.error("Error loading file:",t),v(null)}finally{t.hide()}})();