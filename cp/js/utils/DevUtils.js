(e=>{let l=[];e.disableAllCSS=function(){Array.from(document.getElementsByTagName("link")).forEach(e=>{"stylesheet"===e.rel&&(l.push(e),e.disabled=!0)}),Array.from(document.getElementsByTagName("style")).forEach(e=>{l.push(e),e.disabled=!0})},e.enableAllCSS=function(){l.forEach(e=>{e.disabled=!1}),l=[]}})(window);