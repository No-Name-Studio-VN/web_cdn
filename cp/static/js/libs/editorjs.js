const cPreview=function(e){return e.show=function(e,l){e=(e=JSON.stringify(e,null,4)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),console.log(e)},e}({});(async()=>{var e=getLang(),l=window.location.origin+"/api/editor";window.CustomEditorJS_Config={readOnly:!1,placeholder:"Let`s write an awesome story!",inlineToolbar:!0,tools:{header:{class:Header,inlineToolbar:["marker","link"],config:{placeholder:"Header"},shortcut:"CMD+SHIFT+H"},image:SimpleImage,list:{class:List,inlineToolbar:!0,shortcut:"CMD+SHIFT+L"},checklist:{class:Checklist,inlineToolbar:!0},quote:{class:Quote,inlineToolbar:!0,config:{quotePlaceholder:"Enter a quote",captionPlaceholder:"Quote's author"},shortcut:"CMD+SHIFT+O"},warning:Warning,marker:{class:Marker,shortcut:"CMD+SHIFT+M"},code:{class:CodeTool,shortcut:"CMD+SHIFT+C"},delimiter:Delimiter,inlineCode:{class:InlineCode,shortcut:"CMD+SHIFT+C"},linkTool:{class:LinkTool,config:{endpoint:l+"/fetchUrl"}},textVariant:TextVariantTune,strikethrough:Strikethrough,underline:Underline,audioPlayer:AudioPlayer,embed:{class:Embed,inlineToolbar:!0},imageGallery:ImageGallery,hyperlink:{class:Hyperlink,config:{shortcut:"CMD+L",target:"_blank",rel:"nofollow",availableTargets:["_blank","_self"],availableRels:["author","noreferrer"],validate:!1}},table:{class:Table,inlineToolbar:!0,shortcut:"CMD+ALT+T"},tooltip:{class:Tooltip,config:{location:"left",underline:!0,placeholder:"Enter a tooltip",highlightColor:"#FFEFD5",backgroundColor:"#154360",textColor:"#FDFEFE"}},paragraph:{class:Paragraph,inlineToolbar:!0},alert:{class:Alert,inlineToolbar:!0,shortcut:"CMD+SHIFT+A",config:{defaultType:"primary",messagePlaceholder:"Enter something"}},nestedchecklist:editorjsNestedChecklist,columns:{class:editorjsColumns,config:{EditorJsLibrary:EditorJS,tools:{header:Header,alert:Alert,paragraph:{class:Paragraph,inlineToolbar:!0},delimiter:Delimiter}}},translator:{class:Translate,config:{endpoint:l+`/translate?dest=${e}&text=`}}},tunes:["textVariant"]}})();