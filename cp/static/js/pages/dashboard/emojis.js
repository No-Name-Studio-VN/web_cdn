(()=>{window.AnimationHandler.Add("HorizontalMove");let l=0;var e=window.location.pathname.split("/");const a=`/dashboard/${e[2]}/`+e[3],s=$("#accordion");function t(e){const{animated:i,id:t,name:n}=e;var o=!0===i?"gif":"png",e=`https://cdn.discordapp.com/emojis/${e.id}.`+o,e=`
    <div class="col-lg-1 col-md-2 col-4 mb-3 emojis-items" emoji-id="${n}">
      <div class="card card-hover overflow-hidden h-100">
        <div class="el-card-item">
          <div class="el-card-avatar el-overlay-1 w-100 overflow-hidden position-relative text-center">
            <img src="${e}" class="d-block position-relative w-100" title="${n}" alt="${n}" filetype="${o}" loading="lazy">
            <div class="el-overlay w-100 overflow-hidden">
              <ul class="list-style-none el-info text-white text-uppercase d-inline-block p-0">
                <li class="el-item d-inline-block my-0 mx-1">
                  ${`
    <a class="btn default btn-outline image-popup-vertical-fit el-link text-white border-white el-link text-white border-white" href="${e}" data-effect="mfp-move-horizontal">
      <i class="ti ti-search"></i>
    </a>
    `}
                </li>
              </ul>
            </div>
          </div>
          <div class="el-card-content p-1">
            <div class="w-100">
              <div class="row g-1">
                <div class="col-12">
                  <input type="text" class="form-control fw-semibold fs-2 emoji-name-edit" value="${n}"></input>
                </div>
                <div class="col-12">
                  <div class="container-fluid p-0">
                    <div class="row g-1">
                      <div class="col-6">
                        <button title="Download emoji" class="btn btn-primary btn-sm w-100 emoji-name-download" type="button" url="${e}" mediaType="${o}" fileName="${n}">
                          <i class="ti ti-download"></i>
                        </button>
                      </div>
                      <div class="col-6">
                        <button title="Delete emoji" class="btn btn-danger btn-sm w-100 emoji-name-delete" type="button">
                          <i class="ti ti-x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,o=(s.append(e),s.find(`[emoji-id="${n}"] .emoji-name-edit`)),e=s.find(`[emoji-id="${n}"] .emoji-name-delete`);o.on("keydown",function(e){var i=$(this).val();"Enter"===e.key&&0<i.length&&i.length<33&&i!==n&&$.ajax({url:a+`/${t}/edit`,method:"POST",contentType:"application/json",data:JSON.stringify({id:t,name:i}),success:function(e){window.NotificationHandler.show({type:"success",content:e.data})},error:function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})}})}),e.on("click",function(){$.ajax({url:a+`/${t}/delete`,method:"POST",contentType:"application/json",success:function(e){window.NotificationHandler.show({type:"success",content:e.data}),s.find(`[emoji-id="${n}"]`).remove()},error:function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})}})})}$.ajax({url:a+"/fetch",method:"GET",contentType:"application/json",success:function(e){var e=e.data,i=(s.empty(),0<e?.length&&e.forEach((e,i)=>{l+=1,t(e)}),$(".image-popup-vertical-fit").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0},gallery:{enabled:!0},title:function(){return this.st.el.attr("title")},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass=this.st.el.attr("data-effect")}},midClick:!0}),$("#emojis_count").text(l),$("#searchemojis"));window.ContentHandler.SearchNoResult(s),window.ContentHandler.PreventSubmitOnEnter(i),i.on("keyup",function(){s.find(".no-result").hide();const e=new RegExp($(this).val(),"i");s.find(".emojis-items").hide(),s.find(".emojis-items").filter(function(){if(!$(this).hasClass("no-result"))return e.test($(this).find($(".emoji-name-edit")).val().toLowerCase())}).show(),0==s.find(".emojis-items:visible").length&&s.find(".no-result").show()}),i.on("change",function(){""==$(this).val()&&s.find(".emojis-items").show()}),0==e?.length&&s.find(".no-result").show()}}),$(document).on("click",".emoji-name-download",function(){d();var e=$(this).attr("url"),i=$(this).attr("fileName");$(this).attr("mediaType");{var n=i;const o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="blob",o.onload=function(e){var i=o.response,t=document.createElement("a"),i=window.URL.createObjectURL(i);t.href=i,t.download=n,t.click(),window.URL.revokeObjectURL(i)},o.send(),c()}}),$(document).on("click","#download_all",async function(){d(),$("#download_all").attr("disabled",!0),$("#download_all").html('<span class="spinner-border spinner-border-sm" role="status"></span>'),"function"!=typeof JSZip&&await LoadHandler.js(client.cdn+"/static/libs/jszip/index.min.js");const o=new JSZip;let a=0;$(".emoji-name-download").each(function(){var e=$(this),i=e.attr("url");const t=e.attr("fileName")+"."+e.attr("mediaType"),n=new XMLHttpRequest;n.open("GET",i,!0),n.responseType="blob",n.onload=e=>{var i;200==n.status&&(i=n.response,o.file(t,i),++a==l)&&o.generateAsync({type:"blob"}).then(e=>{c();const i=$("#download_all");function t(){saveAs(e,"emojis.zip"),i.html('<i class="ti ti-check"></i> Done'),setTimeout(()=>{i.html('<i class="ti ti-download"></i> Download All'),i.attr("disabled",!1)},2e3)}"function"!=typeof saveAs?LoadHandler.js(client.cdn+"/static/libs/filesaver/index.js").then(()=>{t()}):t()})},n.send()})});e=$("#multiplefileupload");function d(){window.NotificationHandler.show({type:"info",content:"Generating your emojis..."})}function c(){window.NotificationHandler.show({type:"success",content:"Your emojis are ready to be claimed!"})}e.fileinput({showPreview:!0,showUpload:!0,browseOnZoneClick:!0,layoutTemplates:{footer:'<div class="file-thumbnail-footer" style ="height:94px">\n  <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">\n   <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}\n{indicator}\n{actions}\n</div>'},maxFileSize:262144,elErrorContainer:"#kartik-file-errors",allowedFileExtensions:["jpg","png","gif"],uploadUrl:a+"/upload",uploadExtraData:function(){return{name:$(".kv-input:visible.file-name").val()}}}),e.on("fileloaded",function(e,i,t,n,o,a){$(".kv-input:visible.file-name").val(function(e){(e=(e=e.replace(/\.[^/.]+$/,"")).replace(/[^a-zA-Z0-9_]/g,"")).length<2&&(e="emj");32<e.length&&(e=e.slice(0,32));return e}(i.name))}),e.on("fileuploaded",function(e,i){i=i.response;i.success&&t(i.data)})})();