(()=>{InjectCSS(".milk-404 {max-height: 100vh;}#mouth-frown {visibility: hidden;}"),document.getElementById("back").addEventListener("click",function(){window.history.back()}),MorphSVGPlugin.convertToPath("ellipse","circle");(new TimelineMax).to("#milk-spill--large",60,{scale:1.25,transformOrigin:"right",ease:Power1.easeInOut}),new TimelineMax({yoyo:!0,repeat:-1}).to("#milk-face",10,{yPercent:-15,ease:Power1.easeInOut});var e=new TimelineMax({repeatDelay:5,repeat:-1,yoyo:!0});e.to(["#eye-left-open","#eye-right-open"],.1,{transformOrigin:"center",scaleY:0,ease:Power4.easeNone,repeat:1,yoyo:!0},0),new TimelineMax({repeatDelay:8,repeat:-1,yoyo:!0}),e.to("#mouth",3,{morphSVG:{shape:"M368.4 240.8s-15.4-10.5-27.3 3.5"},ease:Back.easeOut.config(1.7)}),new TimelineMax({SVG2GIF:!0,repeat:0}).timeScale(1)})();