(()=>{InjectCSS(`
        .object-fit-cover {
            -o-object-fit: cover !important;
            object-fit: cover !important;
        }
        /* Make horizontal scrollbar, decorations overview ruler and vertical scrollbar arrows opaque */
        .monaco-editor .monaco-scrollable-element .scrollbar.horizontal,
        .monaco-editor .decorationsOverviewRuler,
        .monaco-editor .monaco-scrollable-element .scrollbar.vertical .arrow-background
        {
            background: rgba(230, 230, 230, 255);
        }
        /* Make vertical scrollbar transparent to allow decorations overview ruler to be visible */
        .monaco-editor .monaco-scrollable-element .scrollbar.vertical {
            background: rgba(0, 0, 0, 0);
        }`),$.ajax({url:"/api/bot",method:"GET",contentType:"application/json"}).done(function({data:e}){o(e,"banner","botbanner"),o(e,"avatar","botavatar"),$("#botglobal_name").text(e.global_name),$("#botusername").text(e.username),$("#botid").text("ID: "+e.id),e.bio?$("#botbio").text(e.bio).attr("nns-markdown",""):$("#botbio").remove(),e.verified&&$(".botTagVerified").addClass("verified"),window.ContentHandler.ToggleMainContent("#infocard",!0)}).fail(function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})});var e=(e,o,a)=>{var t=$(e);t.fileinput({language:getLang(),showPreview:!0,showUpload:!0,browseOnZoneClick:!0,layoutTemplates:{footer:`
    <div class="file-thumbnail-footer" style ="height:94px">
      <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">
      <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}
      {indicator}
      {actions}
    </div>`},maxFileSize:16777216,elErrorContainer:e+"-errors",allowedFileExtensions:["jpeg","jpg","png","gif"],uploadUrl:o,uploadExtraData:()=>({name:$(".kv-input:visible.file-name").val()})}),t.on("fileuploaded",(e,{response:o})=>{$(a).attr("src",o.data)})};function o(e,o,a){e[o]?(e=`https://cdn.discordapp.com/${o}s/${e.id}/${e[o]}.webp?size=1024`,$("#"+a).attr("src",e)):$("#"+a).remove()}e("#upbanner","/api/bot/banner","#botbanner"),e("#upavatar","/api/bot/avatar","#botavatar"),$.ajax({url:"/api/bot/metadata",method:"GET",contentType:"application/json"}).done(function({data:e}){e=JSON.stringify(e,null,4);monaco.editor.create(document.getElementById("metadata_editor"),{value:e,language:"javascript",automaticLayout:!0,scrollbar:{useShadows:!1,verticalHasArrows:!0,horizontalHasArrows:!0,vertical:"visible",horizontal:"visible",verticalScrollbarSize:17,horizontalScrollbarSize:17,arrowSize:30}});window.ContentHandler.ToggleMainContent("#metadata_editor_holder",!0)}).fail(function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})}),$("#save_metadata").on("click",function(){var e=monaco.editor.getModels()[0].getValue();$.ajax({url:"/api/bot/metadata",method:"POST",contentType:"application/json",data:JSON.stringify({metadata:encodeURIComponent(JSON.stringify(e))})}).done(function({data:e}){window.NotificationHandler.show({type:"success",content:e})}).fail(function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})})}),$("#refresh_cache").on("click",async function(){try{window.ContentHandler.ToggleMainContent("#refresh_cache",!1),a="/api/bot/reloadcache",await new Promise((e,o)=>{$.ajax({url:a,method:"POST",contentType:"application/json"}).done(e).fail(o)}),window.NotificationHandler.show({type:"success",content:"Cache reset successfully!"}),window.ContentHandler.ToggleMainContent("#refresh_cache",!0)}catch(e){logger.error(e),window.NotificationHandler.show({type:"error",content:e})}var a})})();