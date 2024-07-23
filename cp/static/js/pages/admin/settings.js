(()=>{InjectCSS(`
    .object-fit-cover {
    -o-object-fit: cover !important;
    object-fit: cover !important;
    }
    /* Make horizontal scrollbar, decorations overview ruler and vertical scrollbar arrows opaque */
    .monaco-editor .monaco-scrollable-element .scrollbar.horizontal,
    .monaco-editor .decorationsOverviewRuler,
    .monaco-editor
    .monaco-scrollable-element
    .scrollbar.vertical
    .arrow-background {
    background: rgba(230, 230, 230, 255);
    }
    /* Make vertical scrollbar transparent to allow decorations overview ruler to be visible */
    .monaco-editor .monaco-scrollable-element .scrollbar.vertical {
    background: rgba(0, 0, 0, 0);
    }`),$.ajax({url:"/api/bot",method:"GET",contentType:"application/json"}).done(function({data:o}){e(o,"banner","botbanner"),e(o,"avatar","botavatar"),$("#botglobal_name").text(o.global_name),$("#botusername").text(o.username),$("#botid").text("ID: "+o.id),o.bio?$("#botbio").text(o.bio).attr("nns-markdown",""):$("#botbio").remove(),o.verified&&$(".botTagVerified").addClass("verified"),window.ContentHandler.toggleMainContent("#infocard",!0)}).fail(function(o){window.NotificationHandler.show({type:"error",content:o.responseJSON.error})});var o=(o,e,a)=>{var t=$(o);t.fileinput({showPreview:!0,showUpload:!0,browseOnZoneClick:!0,layoutTemplates:{footer:`
    <div class="file-thumbnail-footer" style ="height:94px">
      <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">
      <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}
      {indicator}
      {actions}
    </div>`},maxFileSize:16777216,elErrorContainer:o+"-errors",allowedFileExtensions:["jpeg","jpg","png","gif"],uploadUrl:e,uploadExtraData:()=>({name:$(".kv-input:visible.file-name").val()})}),t.on("fileuploaded",(o,{response:e})=>{$(a).attr("src",e.data)})};function e(o,e,a){o[e]?(o=`https://cdn.discordapp.com/${e}s/${o.id}/${o[e]}.webp?size=1024`,$("#"+a).attr("src",o)):$("#"+a).remove()}o("#upbanner","/api/bot/banner","#botbanner"),o("#upavatar","/api/bot/avatar","#botavatar"),$.ajax({url:"/api/bot/metadata",method:"GET",contentType:"application/json"}).done(function({data:o}){o=JSON.stringify(o,null,4);monaco.editor.create(document.getElementById("metadata_editor"),{value:o,language:"javascript",automaticLayout:!0,scrollbar:{useShadows:!1,verticalHasArrows:!0,horizontalHasArrows:!0,vertical:"visible",horizontal:"visible",verticalScrollbarSize:17,horizontalScrollbarSize:17,arrowSize:30}});window.ContentHandler.toggleMainContent("#metadata_editor_holder",!0)}).fail(function(o){window.NotificationHandler.show({type:"error",content:o.responseJSON.error})}),$("#save_metadata").on("click",function(){var o=monaco.editor.getModels()[0].getValue();$.ajax({url:"/api/bot/metadata",method:"POST",contentType:"application/json",data:JSON.stringify({metadata:encodeURIComponent(JSON.stringify(o))})}).done(function({data:o}){window.NotificationHandler.show({type:"success",content:o})}).fail(function(o){window.NotificationHandler.show({type:"error",content:o.responseJSON.error})})})})();