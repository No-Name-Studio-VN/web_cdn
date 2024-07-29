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
    }`);monaco.editor.create(document.getElementById("terminal_editor"),{language:"javascript",automaticLayout:!0,scrollbar:{useShadows:!1,vertical:"auto",horizontal:"auto",verticalScrollbarSize:17,horizontalScrollbarSize:17,arrowSize:30}});window.ContentHandler.toggleMainContent("#terminal_editor_holder",!0),$("#run").on("click",function(){var o,e=monaco.editor.getModels()[0].getValue();(o=e)&&o.trim()&&0<o.length?$.ajax({url:window.location.pathname,method:"POST",contentType:"application/json",data:JSON.stringify({com:encodeURIComponent(e)})}).done(function({data:o}){$("#output").html(`<code class="language-js">${decodeURIComponent(o)}</code>`),hljs.highlightAll()}).fail(function(o){window.NotificationHandler.show({type:"error",content:o.responseJSON.error})}):window.NotificationHandler.show({type:"error",content:"Invalid string"})})})();