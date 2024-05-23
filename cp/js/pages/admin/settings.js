(()=>{window.InjectCSS(`
    .object-fit-cover {
        -o-object-fit: cover !important;
        object-fit: cover !important;
    }`),$.ajax({url:"/api/bot",method:"GET",contentType:"application/json"}).done(function({data:e}){t(e,"banner","botbanner"),t(e,"avatar","botavatar"),$("#botglobal_name").text(e.global_name),$("#botusername").text(e.username),$("#botid").text("ID: "+e.id),e.bio?$("#botbio").text(e.bio).attr("nns-markdown",""):$("#botbio").remove(),e.verified&&$(".botTagVerified").addClass("verified"),ContentHandler.toggleMainContent("#infocard",!0)}).fail(function(e){window.NotificationHandler.show({type:"error",content:e.responseJSON.error})});var e=(e,t,o)=>{var a=$(e);a.fileinput({showPreview:!0,showUpload:!0,browseOnZoneClick:!0,layoutTemplates:{footer:`
    <div class="file-thumbnail-footer" style ="height:94px">
      <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">
      <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}
      {indicator}
      {actions}
    </div>`},maxFileSize:16777216,elErrorContainer:e+"-errors",allowedFileExtensions:["jpeg","jpg","png","gif"],uploadUrl:t,uploadExtraData:()=>({name:$(".kv-input:visible.file-name").val()})}),a.on("fileuploaded",(e,{response:t})=>{$(o).attr("src",t.data)})};function t(e,t,o){e[t]?(e=`https://cdn.discordapp.com/${t}s/${e.id}/${e[t]}.webp?size=1024`,$("#"+o).attr("src",e)):$("#"+o).remove()}e("#upbanner","/api/bot/banner","#botbanner"),e("#upavatar","/api/bot/avatar","#botavatar")})();