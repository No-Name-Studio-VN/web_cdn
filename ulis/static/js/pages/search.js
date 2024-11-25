(()=>{async function t(t){var i=document.getElementById("search-results");let a=document.getElementById("type-filter").value,l=document.getElementById("department-filter").value,n=document.getElementById("year-filter").value;try{var s=(await $.get(t?"/api/search/"+t:"/api/search")).data;let e=s;a&&(e=e.filter(e=>e.type===a)),l&&(e=e.filter(e=>e.department===l)),(e=n?e.filter(e=>e.schoolYear===n):e).length?i.innerHTML=e.map(e=>{return`
            <div class="col-12 mb-3">
                <article class="postcard light blue">
                    <a class="postcard__img_link" href="/files/file/${e._id}">
                        <img class="postcard__img" src="${e.previewUrl||client.cdn+"/static/media/nopreview.png"}" alt="${e.fileTitle}" />
                    </a>
                    <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue"><a href="/files/file/${e._id}">${e.fileTitle}</a></h1>
                        <div class="postcard__subtitle small">
                            <time datetime="${e.uploadedAt}">
                                <i class="ti ti-calendar mr-2"></i>${moment(e.uploadedAt).format("hh/mm - DD/MM/YYYY")}
                            </time>
                            <span class="ms-2"><i class="ti ti-eye mr-2"></i>${e.views||0}</span>
                            <span class="ms-2">${((e,t)=>{t=e-t;return`<span class="${0<=t?"text-success":"text-danger"}"><i class="${0<=t?"ti ti-thumb-up":"ti ti-thumb-down"}"></i> ${(0<t?e/t*100:100).toFixed(0)}%</span>`})(e.likes,e.dislikes)}</span>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt">${e.description||"Mô tả không tồn tại"}</div>
                        <ul class="postcard__tagbox">
                            ${t=e,Object.entries(FILE_ATTRIBUTES).filter(([,e])=>e.getValue(t)).map(([,e])=>`
                <li class="tag__item">
                    <i class="ti ${e.icon} mr-2"></i>${e.getValue(t)}
                </li>
            `).join("")}
                        </ul>
                    </div>
                </article>
            </div>
            `;var t}).join(""):i.innerHTML=`<div class="col-12 text-center p-5">
                    <h2 class="mb-4 fw-normal">Tìm kiếm của bạn - <span class="fw-bold">${decodeURIComponent(t)}</span> - không khớp với bất kỳ tài liệu nào.</h2>
                    <div class="text-start text-muted">
                        <h4>Một số mẹo cho bạn</h4>
                        <ul>
                            <li>Đảm bảo tất cả các từ được viết đúng chính tả</li>
                            <li>Thử các từ khóa khác</li>
                            <li>Gỡ bỏ các bộ lọc tìm kiếm bạn đã đặt</li>
                            <li>Nếu bạn đang tìm kiếm một khóa học, hãy thử tìm bằng mã khóa học</li>
                        </ul>
                    </div>
                </div>`}catch(e){console.error("Error fetching search results:",e),i.innerHTML='<div class="col-12"><h3>Lỗi khi tìm kiếm kết quả trên./h3></div>'}}var e=document.getElementById("search-header2"),i=e.cloneNode(!0);e.parentNode.replaceChild(i,e),i.value=window.location.pathname.split("/search/")[1]||"";let a=((t,i)=>{let a;return function(...e){clearTimeout(a),a=setTimeout(()=>{clearTimeout(a),t(...e)},i)}})(e=>{window.history.pushState({},"",e?"/search/"+e:"/search"),t(e)},300);i.addEventListener("input",e=>{a(e.target.value)}),t(i.value||"");{let t=document.getElementById("type-filter"),i=document.getElementById("department-filter"),a=document.getElementById("year-filter");ULISconstant.types.forEach(e=>{t.innerHTML+=`<option value="${e}">${e}</option>`}),ULISconstant.departments.forEach(e=>{i.innerHTML+=`<option value="${e}">${e}</option>`}),ULISconstant.schoolYears.forEach(e=>{a.innerHTML+=`<option value="${e}">${e}</option>`})}["type-filter","department-filter","year-filter"].forEach(e=>{e=$("#"+e);window.ContentHandler.ToggleMultiSelect(e,{isDisabled:!1,placeholder:e.attr("placeholder")}),e.on("change",()=>{t(document.getElementById("search-header2").value)})})})();