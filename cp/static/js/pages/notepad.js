(async()=>{InjectCSS(`
    .btn-action {
    --bs-btn-action-color: #000;
    --bs-btn-action-hover-opacity: 0.75;
    --bs-btn-action-focus-shadow: 0 0 0 0.25rem rgba(93, 135, 255, 0.25);
    --bs-btn-action-focus-opacity: 1;
    --bs-btn-action-disabled-opacity: 0.25;
    --bs-btn-action-white-filter: invert(1) grayscale(100%) brightness(200%);
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: var(--bs-btn-action-color);
    background: transparent var(--bs-btn-action-bg) center/1em auto no-repeat;
    border: 0;
    border-radius: 7px;
    opacity: var(--bs-btn-action-opacity);
    }
    .btn-action:hover {
    color: var(--bs-btn-action-color);
    text-decoration: none;
    opacity: var(--bs-btn-action-hover-opacity);
    }
    .btn-action:focus {
    outline: 0;
    box-shadow: var(--bs-btn-action-focus-shadow);
    opacity: var(--bs-btn-action-focus-opacity);
    }
    .btn-action.disabled,
    .btn-action:disabled {
    pointer-events: none;
    user-select: none;
    opacity: var(--bs-btn-action-disabled-opacity);
    }
    .btn-action-white {
    filter: var(--bs-btn-action-white-filter);
    }
    [data-bs-theme="dark"] .btn-action {
    filter: var(--bs-btn-action-white-filter);
    }`);const a=new EditorJS({...window.CustomEditorJS_Config,holder:"editorjs",onReady:async function(){logger.debug("Editor.js is ready to work!");try{new window.Undo({editor:a}),new window.DragDrop(a)}catch(t){logger.error("Editor.js is not ready to work!",t)}window.ContentHandler.DisableContextMenu(".modal-header"),$.ajax({url:s.list,type:"GET",contentType:"application/json",success:async function(t){var t=t.data||{},t=(t?.length&&await t.forEach(N),$("#notefull").remove(),$("#note-full-container").removeClass("d-none"),window.UrlHandler.getQuery("id"));t&&((t=document.getElementById(t))?t.click():window.NotificationHandler.show({content:"Note not found",type:"error"})),O()},error:function(){window.NotificationHandler.show({content:"Error fetching notes",type:"error"})}}),T=D("choices-tags"),C=D("edit_tags")},onChange:async function(t,e){"block-changed"===e.type&&a.save().then(t=>{var e;t=t,(e=k())&&(v.emit("savenotepad",{id:e,content:t}),e=x(t.blocks),r.text(e))}).catch(t=>{logger.error("Saving error",t)})}});var t=window.location.pathname;const s={list:t+"/list",get:t+"/fetch",add:t+"/add",edit:t+"/edit",delete:t+"/delete"},r=$("#currentWordsCount"),c=$("#editnotesmodal");t=c.find(".modal-header");const e=c.find(".modal-dialog"),n=c.find(".modal-content");var o=$("#editnote_maximize");const i=o.find("i"),d=$("#editnote_reload");var l=$("#note_metadata");const u=$("#edit_title"),p=$("#edit_description"),g={placeholder:!0,delimiter:";",paste:!0,searchEnabled:!0,searchChoices:!0,editItems:!0,maxItemCount:10,removeItemButton:!0,addItems:!0,loadingText:i18next.t("dashboard.loading"),noResultsText:i18next.t("dashboard.no_search_result"),noChoicesText:i18next.t("dashboard.choices.noChoicesText"),itemSelectText:i18next.t("dashboard.choices.itemSelectText"),uniqueItemText:i18next.t("dashboard.choices.uniqueItemText"),customAddItemText:i18next.t("dashboard.choices.customAddItemText")};let f={top:0,left:0},m={width:0,height:0};function h(){i.hasClass("ti-maximize")?(f={top:e.css("top"),left:e.css("left")},m={width:n.css("width"),height:n.css("height")},e.css({top:0,left:0}),n.animate({width:"100%",height:"100%"}),e.draggable({disabled:!0})):(e.animate(f),n.animate(m),e.draggable({handle:".modal-header",disabled:!1})),e.toggleClass("modal-fullscreen"),i.toggleClass("ti-maximize ti-minimize")}e.draggable({handle:".modal-header"}),n.resizable({minHeight:300,minWidth:300}),l.resizable({maxWidth:600,handles:"e, w"}),o.on("click",h),t.on("dblclick",h);const b=$("#addnotesmodal"),v=io();async function w(t){return t=JSON.parse(decodeURI(t))}function y(t){return"text"in t.data}function x(t){return t.filter(y).reduce((t,e)=>t+=e.data.text.length,0)}function k(){return document.getElementById("note-id").innerText}function j(t){document.getElementById("note-id").innerText=t}v.on("connect",()=>{logger.debug("Connected to server"),console.log("Socket ID is",v.id)}),v.on("sendnotepad",function(t){console.log(t),async function(t){t=await w(t.content);a.render(t)}(t)});let T=null,C=null;function S(t){t&&(t.setValue([]),t.clearStore(),t.clearInput())}function E(t){return $.ajax({url:s.get+"/"+t,type:"GET",contentType:"application/json"})}function I(t){return new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"})}function N({title:t,description:e,id:n,modifiedAt:o,tags:i}){n=`
        <div class="col-md-4 single-note-item all-category view-note" id="${n}">
          <div class="card card-body card-hover cursor-pointer">
            <span class="side-stick"></span>
            <div class="d-flex align-items-start justify-content-between">
              <div class="position-relative">
                <h6 class="note-title text-truncate w-75 mb-0" data-noteHeading="${t}">
                  ${t}
                </h6>
                <p class="note-date fs-2">${I(o)}</p>
              </div>
              <div class="position-relative note-tags">
                ${H(i)}
              </div>
            </div>
            <div class="note-content">
              <p class="note-inner-content" data-noteContent="${e}">
                ${e}
              </p>
            </div>
            <div class="d-flex align-items-center">
              <a href="javascript:void(0)" class="link fs-4 me-1 favourite-note"><i class="ti ti-star"></i></a>
              <a href="javascript:void(0)" class="link fs-4 text-danger ms-2 me-1 remove-note"><i class="ti ti-trash"></i></a>
              <a href="javascript:void(0)" class="link fs-4 text-info ms-2 share-note"><i class="ti ti-share"></i></a>
              <div class="ms-auto">
                <div class="category-selector btn-group">
                  <a class="nav-link category-dropdown label-group p-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                    <div class="category">
                      <div class="category-business"></div>
                      <div class="category-social"></div>
                      <div class="category-important"></div>
                      <span class="more-options text-dark"><i class="ti ti-dots-vertical fs-5"></i></span>
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right category-menu dropdown-menu-animate-up">
                    <a class="note-business badge-group-item badge-business dropdown-item position-relative category-business" href="javascript:void(0);">Business</a>
                    <a class="note-social badge-group-item badge-social dropdown-item position-relative category-social" href="javascript:void(0);"> Social</a>
                    <a class="note-important badge-group-item badge-important dropdown-item position-relative category-important" href="javascript:void(0);"> Important</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;$("#note-full-container").prepend(n),function n(){async function o(t,i){if(t.stopPropagation(),i){window.UrlHandler.setQuery("id",i),c.modal("show");const e=k();S(C),e&&v.emit("leavenotepad",k()),E(i).done(async function(t){const e=t.data;try{await a.clear(),j(i),u.val(e.title),p.val(e.description),d.attr("id",i),C.setValue(e.tags);const n=await w(e.content)||{},o=(a.render(n),x(n.blocks)||0);r.text(o),v.emit("joinnotepad",e.accessToken)}catch(t){logger.error(t)}_(!0)}).fail(function(t){logger.error(t),window.NotificationHandler.show({content:"Error fetching note",type:"error"})}),n()}}$(".view-note").off("click").on("click",async function(t){const e=$(this).attr("id");if(e){const n=k();e===n?(c.modal("show"),_(!0)):await o(t,e)}});d.off("click").on("click",async function(t){const e=$(this).attr("id");e&&(_(!1),await o(t,e))})}(),$(".remove-note").off("click").on("click",function(t){t.stopPropagation();const e=$(this).parents(".single-note-item").attr("id");$.ajax({url:s.delete,type:"POST",contentType:"application/json",data:JSON.stringify({id:e}),success:function(){$("#"+e).remove(),window.NotificationHandler.show({content:"Note deleted successfully",type:"success"}),O()},error:function(){window.NotificationHandler.show({content:"Error deleting note",type:"error"})}})}),$(".share-note").off("click").on("click",function(t){t.stopPropagation();t=$(this).parents(".single-note-item").attr("id");window.ContentHandler.Share(window.location.origin+window.location.pathname+"?id="+t)}),$(".favourite-note").off("click").on("click",function(t){t.stopPropagation(),$(this).parents(".single-note-item").toggleClass("note-favourite")}),$(".category-selector .badge-group-item").off("click").on("click",function(t){t.preventDefault();var t=$(this).parents(".single-note-item"),e=this.className.split(" ")[0];t.removeClass(["note-business","note-social","note-important"].join(" ")).toggleClass(e)}),S(T)}function H(t){let n="";return t.forEach((t,e)=>{3<e||(n+=`<span class="badge text-bg-primary rounded-3 fs-2 fw-semibold me-1">${t}</span>`)}),DOMPurify.sanitize(n)}function _(t){$("#editorjs_loading").toggle(!t),$("#editorjs").toggle(t)}function D(t){t=document.querySelector("#"+t);return t?new Choices(t,{...g,placeholderValue:t.getAttribute("placeholder"),classNames:{item:"badge rounded-pill choices-"+t.dataset.color+" me-2 mb-2"}}):null}function O(){var t=$(".single-note-item"),e=$("#noNoteFound");0===t.length?e.removeClass("d-none"):e.addClass("d-none")}$(".note-link").on("click",function(t){var e=$("."+this.id).fadeIn();$("#note-full-container > div").not(e).hide(),$(".note-link").removeClass("active"),$(this).addClass("active")}),$("#note-has-title").on("keyup",function(){$("#btn-n-add").prop("disabled",""===$(this).val())}),$("#btn-n-add").on("click",function(t){t.preventDefault();var t=document.getElementById("addsub_form"),e=Object.fromEntries(new FormData(t).entries());$.ajax({url:t.getAttribute("action"),type:"POST",contentType:"application/json",data:JSON.stringify(e),success:function(t){N(t.data),b.modal("hide"),O()},error:function(){window.NotificationHandler.show({content:"Error adding note",type:"error"})}})}),b.on("hidden.bs.modal",function(){$("#note-has-title, #note-has-description").val(""),$("#btn-n-add").prop("disabled",!0)}),c.on("hidden.bs.modal",function(){_(!1),window.UrlHandler.removeQuery("id")}),$("#add-notes").on("click",function(){b.modal("show"),$("#btn-n-save").hide(),$("#btn-n-add").show()}),$("#save_edited_note").on("click",function(){const n=k();var t;n&&(t=document.getElementById("editnote_form"),(t=Object.fromEntries(new FormData(t).entries())).id=n,$.ajax({url:s.edit,type:"POST",contentType:"application/json",data:JSON.stringify(t),success:function(t){window.NotificationHandler.show({content:"Note updated successfully",type:"success"});var e=document.getElementById(n),t=t.data.notepads.find(t=>t.id===n);e.querySelector(".note-title").innerText=t.title,e.querySelector(".note-inner-content").innerText=t.description,e.querySelector(".note-date").innerText=I(t.modifiedAt),e.querySelector(".note-tags").innerHTML=H(t.tags)},error:function(t){logger.error(t),window.NotificationHandler.show({content:"Error updating note",type:"error"})}}))})})();