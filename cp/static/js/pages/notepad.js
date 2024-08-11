(async()=>{InjectCSS(`  
.note-has-grid .nav-link {
  padding: .5rem
}

.note-has-grid .single-note-item .card {
  border-radius: 10px
}

.note-has-grid .single-note-item .favourite-note {
  cursor: pointer
}

.note-has-grid .single-note-item.note-favourite .favourite-note {
  color: var(--bs-warning)
}

.note-has-grid .single-note-item .side-stick {
  position: absolute;
  width: 3px;
  height: 35px;
  left: 0;
  background-color: rgba(73, 80, 87, .5)
}

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
.btn-action.disabled, .btn-action:disabled {
    pointer-events: none;
    user-select: none;
    opacity: var(--bs-btn-action-disabled-opacity);
}
.btn-action-white { filter: var(--bs-btn-action-white-filter); }
[data-bs-theme="dark"] .btn-action { filter: var(--bs-btn-action-white-filter); }`);const a=io(),t=(a.on("connect",()=>{logger.debug("Connected to server","Socket ID is",a.id)}),a.on("sendnotepad",function(e){console.log(e);var t=e;t=k(e.content),f.render(t)}),$("#btn-n-add")),e=$("#save_edited_note"),d=document.getElementById("editnote_form"),r=$("#currentWordsCount"),c=$("#editnotesmodal"),n=c.find(".modal-header"),o=c.find(".modal-dialog"),i=c.find(".modal-content");var s=$("#editnote_maximize");const l=s.find("i"),p=$("#editnote_reload");var z=$("#note_metadata");const B=$("#edit_title"),q=$("#edit_description"),g=document.getElementById("addsub_form"),u=$("#addnotesmodal"),m=$("#addNoteTitle"),A=$("#addNoteDescription"),F=$("#mainTab"),J=$("#mainTabContent"),b={general:{tag:"general",title:i18next.t("notepad.notetopics.general"),icon:"ti ti-file"},favorite:{tag:"favorite",title:i18next.t("notepad.notetopics.favourite"),icon:"ti ti-star"},pinned:{tag:"pinned",title:i18next.t("notepad.notetopics.pinned"),icon:"ti ti-pin"},locked:{tag:"locked",title:i18next.t("notepad.notetopics.locked"),icon:"ti ti-lock"},archived:{tag:"archived",title:i18next.t("notepad.notetopics.archived"),icon:"ti ti-archive"},deleted:{tag:"deleted",title:i18next.t("notepad.notetopics.deleted"),icon:"ti ti-recycle"}};Object.keys(b).forEach(e=>{var t,e=b[e];F.append($("<li>",{class:"list-group-item border-0 p-0 mx-9 rounded-3 mb-2",html:`
                <a class="d-flex align-items-center gap-6 list-group-item-action px-3 py-6 rounded-3" data-type="${e.tag}" id="${e.tag}-tab" data-bs-toggle="pill" href="#${e.tag}-tab-pane" data-bs-target="#${e.tag}-tab-pane" type="button" role="tab" aria-controls="${e.tag}-tab-pane">
                    <i class="${e.icon}"></i> ${e.title}
                </a>`})[0]),J.append((t=e,$("<div>",{class:"tab-pane fade",id:t.tag+"-tab-pane",role:"tabpanel","aria-labelledby":t.tag+"-tab",tabindex:"0",html:`
            <div class="px-4 pt-9 pb-4">
                <div class="position-relative">
                    <input type="search" class="form-control py-2 ps-5" placeholder="${i18next.t("notepad.label.search")}" aria-label="${i18next.t("notepad.label.search")}" id="notesearch_${t.tag}">
                    <i class="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 ms-3"></i>
                </div>
            </div>
            <div>
                <div id="note-full-container-${t.tag}" class="note-has-grid row g-3" nns-search-list nns-search-input="notesearch_${t.tag}"></div>
            </div>
            <div class="position-relative overflow-hidden d-flex align-items-center justify-content-center d-none noNoteFound">
                <div class="d-flex align-items-center justify-content-center w-100">
                    <div class="row justify-content-center w-100">
                        <div class="col-lg-4">
                            <div class="text-center">
                                <div><img src="/static/img/NotFound.webp" class="img-fluid"></div>
                                <h5 class="fw-semibold mb-7">${i18next.t("notepad.messages.noNotes")}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`})[0])),window.ContentHandler.ToggleMainContent("#note-full-container-"+e.tag,!1)}),document.getElementById(b.general.tag+"-tab").click();const f=new EditorJS({...window.CustomEditorJS_Config,holder:"editorjs",onReady:async function(){logger.debug("Editor.js is ready to work!");try{new window.Undo({editor:f}),new window.DragDrop(f)}catch(e){logger.error("Editor.js is not ready to work!",e)}window.ContentHandler.DisableContextMenu(n),$.ajax({url:j.list,type:"GET",contentType:"application/json",success:async function(e){var e=e.data||{},e=(e?.length&&await e.forEach(N),Object.keys(b).forEach(e=>{e=b[e].tag;window.ContentHandler.ToggleMainContent("#note-full-container-"+e,!0)}),L(),UrlHandler.getQuery("id"));e&&((e=document.getElementById(e))?e.click():window.NotificationHandler.show({content:i18next.t("notepad.messages.error.fetch"),type:"error"}))},error:function(){window.NotificationHandler.show({content:i18next.t("notepad.messages.error.fetch"),type:"error"})}})},onChange:async function(e,t){"block-changed"===t.type&&f.save().then(e=>{var t;e=e,(t=C())&&(a.emit("savenotepad",{id:t,content:e}),t=E(e.blocks),r.text(t))}).catch(e=>{logger.error("Saving error",e)})}});let h=null,v=null,w={top:0,left:0},x={width:0,height:0};var y=window.location.pathname;const j={list:y+"/list",get:y+"/fetch",add:y+"/add",edit:y+"/edit",delete:y+"/delete"},M={placeholder:!0,delimiter:";",paste:!0,searchEnabled:!0,searchChoices:!0,editItems:!0,maxItemCount:10,removeItemButton:!0,addItems:!0,loadingText:i18next.t("dashboard.loading"),noResultsText:i18next.t("dashboard.no_search_result"),noChoicesText:i18next.t("dashboard.choices.noChoicesText"),itemSelectText:i18next.t("dashboard.choices.itemSelectText"),uniqueItemText:i18next.t("dashboard.choices.uniqueItemText"),customAddItemText:i18next.t("dashboard.choices.customAddItemText")};function T(e){$("html").css("overflow-y",e?"":"hidden")}function k(e){return e=JSON.parse(decodeURI(e))}function U(e){return"text"in e.data}function E(e){return e.filter(U).reduce((e,t)=>e+=t.data.text.length,0)}function C(){return document.getElementById("note-id").innerText}function S(e){e&&(e.setValue([]),e.clearStore(),e.clearInput())}function H(e){e=new Date(e);if(isNaN(e))throw new Error("Invalid date");return e.toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}function N(e){const{title:t,description:n,_id:o,modifiedAt:i,tags:a}=e;var r=H(i),s=_(a),e=(e=e)?e.isDeleted?"deleted":e.isArchived?"archived":e.isFavorite?"favorite":e.isPinned?"pinned":e.isLocked?"locked":"general":"general",r=`
        <div class="col-md-4 single-note-item" id="${o}" data-notetype=${e}>
          <div class="card card-body card-hover cursor-pointer p-4">
            <span class="side-stick"></span>
            <div class="d-flex align-items-start justify-content-between">
              <div class="position-relative w-100">
                <h6 class="note-title text-truncate mb-0">${t}</h6>
                <p class="note-date mb-2 fs-2">${r}</p>
              <div class="position-relative note-tags mb-2">${s}</div>
              </div>
            </div>
            <div class="note-content">
              <p class="note-inner-content text-truncate">${n}</p>
            </div>
            <div class="d-flex align-items-center">
                <div class="note-toolbar">
                    <a href="javascript:void(0)" class="link fs-4 me-1 favourite-note" title="Favourite"><i class="ti ti-star"></i></a>
                    <a href="javascript:void(0)" class="link fs-4 text-danger ms-2 me-1 delete-note" title="Delete"><i class="ti ti-trash"></i></a>
                    <a href="javascript:void(0)" class="link fs-4 text-info ms-2 me-1 share-note" title="Share"><i class="ti ti-share"></i></a>
                    ${"deleted"==e?'<a href="javascript:void(0)" class="link fs-4 text-success ms-2 restore-note" title="Restore"><i class="ti ti-restore"></i></a>':""}
                </div>
              <div class="ms-auto"></div>
            </div>
          </div>
        </div>`;const d=$(r);rxjs.fromEvent(d,"click").subscribe(async function(e){e.stopPropagation();e=C();o===e?(c.modal("show"),O(!0)):await D(o)}),rxjs.fromEvent(d.find(".delete-note"),"click").subscribe(function(e){e.stopPropagation(),$.ajax({url:j.delete,type:"POST",contentType:"application/json",data:JSON.stringify({id:o}),success:function(e){"object"==typeof e.data?(d.attr("data-notetype",b.deleted.tag),d.find(".note-toolbar").append('<a href="javascript:void(0)" class="link fs-4 text-success ms-2 restore-note"><i class="ti ti-restore"></i></a>'),I(d,b.deleted.tag)):d.remove(),window.NotificationHandler.show({content:i18next.t("notepad.messages.noteDeleted"),type:"success"}),L()},error:function(){window.NotificationHandler.show({content:i18next.t("notepad.messages.error.delete"),type:"error"})}})}),rxjs.fromEvent(d.find(".restore-note"),"click").subscribe(function(e){e.stopPropagation(),$.ajax({url:j.edit,type:"POST",contentType:"application/json",data:JSON.stringify({id:o,isDeleted:!1}),success:function(e){d.attr("data-notetype",b.general.tag),d.find(".restore-note").remove(),I(d,b.general.tag),window.NotificationHandler.show({content:i18next.t("notepad.messages.noteRestored"),type:"success"})},error:function(){window.NotificationHandler.show({content:i18next.t("notepad.messages.error.restore"),type:"error"})}})}),rxjs.fromEvent(d.find(".share-note"),"click").subscribe(function(e){e.stopPropagation(),window.ContentHandler.Share(window.location.origin+window.location.pathname+"?id="+o)}),rxjs.fromEvent(d.find(".favourite-note"),"click").subscribe(function(e){e.stopPropagation(),$(e.currentTarget).parents(".single-note-item").toggleClass("note-favourite")}),I(d,e),S(h)}function I(e,t){!e instanceof jQuery&&(e=$(e)),$("#note-full-container-"+t).append(e)}function _(e){let n="";return e.forEach((e,t)=>{3<t||(n+=`<span class="badge text-bg-primary rounded-3 fs-2 fw-semibold me-1">${e}</span>`)}),DOMPurify.sanitize(n)}async function D(i){var e;i&&(window.UrlHandler.setQuery("id",i),c.modal("show"),e=C(),S(v),e&&a.emit("leavenotepad",C()),e=i,$.ajax({url:j.get+"/"+e,type:"GET",contentType:"application/json"}).done(async function(e){var t,e=e.data;try{await f.clear(),a.emit("joinnotepad",e.accessToken),t=i,document.getElementById("note-id").innerText=t,B.val(e.title),q.val(e.description),p.attr("id",i),v.setValue(e.tags);var n=k(e.content)||{},o=(f.render(n),E(n.blocks)||0);r.text(o)}catch(e){logger.error(e)}O(!0)}).fail(function(e){logger.error(e),window.NotificationHandler.show({content:i18next.t("notepad.messages.error.fetch"),type:"error"})}))}function O(e){$("#editorjs_loading").toggle(!e),$("#editorjs").toggle(e)}function P(e){e=document.querySelector("#"+e);return e?new Choices(e,{...M,placeholderValue:e.getAttribute("placeholder"),classNames:{item:"badge rounded-pill choices-"+e.dataset.color+" me-2 mb-2"}}):null}function L(){Object.keys(b).forEach(e=>{var e=b[e],e=$(`#${e.tag}-tab-pane`),t=e.find(".noNoteFound");0===e.find(".single-note-item").length?t.removeClass("d-none"):t.addClass("d-none")})}o.draggable({handle:".modal-header"}),i.resizable({minHeight:300,minWidth:300}),z.resizable({maxWidth:600,handles:"e, w"}),rxjs.merge(rxjs.fromEvent(s,"click"),rxjs.fromEvent(n,"dblclick")).pipe(rxjs.tap(()=>{l.hasClass("ti-maximize")?(w={top:o.css("top"),left:o.css("left")},x={width:i.css("width"),height:i.css("height")},o.css({top:0,left:0}),i.animate({width:"100%",height:"100%"}),o.draggable({disabled:!0}),T(!0)):(o.animate(w),i.animate(x),o.draggable({handle:".modal-header",disabled:!1}),T(!1)),o.toggleClass("modal-fullscreen"),l.toggleClass("ti-maximize ti-minimize")})).subscribe(),h=P("choices-tags"),v=P("edit_tags"),u.on("hidden.bs.modal",function(){m.val(""),A.val(""),t.prop("disabled",!0)}),c.on("hidden.bs.modal",function(){O(!1),window.UrlHandler.removeQuery("id"),T(!0)}),$("#add-notes").on("click",function(){u.modal("show"),$("#btn-n-save").hide(),t.show()}),rxjs.fromEvent(m,"keyup").pipe(rxjs.tap(()=>{t.prop("disabled",""===m.val())})).subscribe(),rxjs.fromEvent(e,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(e,!0)),rxjs.debounceTime(1e3),rxjs.switchMap(async()=>{var e=C();if(!e)throw new Error("No note ID found");var o,t=document.getElementById(e),n=t.querySelector(".note-title"),i=t.querySelector(".note-inner-content"),a=n.innerText,r=i.innerText,s=Object.fromEntries(new FormData(d).entries());s.id=e,(s.title!==a||s.description!==r)&&(o=s,e=await new Promise((t,n)=>{$.ajax({url:j.edit,type:"POST",contentType:"application/json",data:JSON.stringify(o),success:function(e){t(e.data)},error:function(e){logger.error(e),window.NotificationHandler.show({content:i18next.t("notepad.messages.error.save"),type:"error"}),n(e)}})}))&&(n.innerText=e.title,i.innerText=e.description,t.querySelector(".note-date").innerText=H(e.modifiedAt),t.querySelector(".note-tags").innerHTML=_(e.tags),window.NotificationHandler.show({content:i18next.t("notepad.messages.noteSaved"),type:"success"}))}),rxjs.catchError(e=>(logger.error("Error updating note:",e),window.NotificationHandler.show({content:i18next.t("notepad.messages.error.save"),type:"error"}),[])),rxjs.tap(()=>window.ContentHandler.ToggleLoading(e,!1))).subscribe(),rxjs.fromEvent(t,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(t,!0)),rxjs.debounceTime(1e3),rxjs.switchMap(async()=>{var e=Object.fromEntries(new FormData(g).entries()),e=await $.ajax({url:g.getAttribute("action"),type:"POST",contentType:"application/json",data:JSON.stringify(e)});return t.prop("disabled",!0),t.hide(),$("#btn-n-save").show(),u.modal("hide"),L(),e.data}),rxjs.catchError(e=>(logger.error("Error adding note:",e),window.NotificationHandler.show({content:i18next.t("notepad.messages.error.save"),type:"error"}),[])),rxjs.tap(()=>window.ContentHandler.ToggleLoading(t,!1))).subscribe(N),rxjs.fromEvent(p,"click").pipe(rxjs.tap(()=>window.ContentHandler.ToggleLoading(p,!0)),rxjs.debounceTime(1e3),rxjs.tap(async e=>{e.stopPropagation();e=p.attr("id");e&&(O(!1),await D(e))}),rxjs.tap(()=>window.ContentHandler.ToggleLoading(p,!1))).subscribe()})();