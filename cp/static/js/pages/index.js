(async()=>{if($(".scroll-link").on("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-10},1e3),e.preventDefault()}),AOS.init({once:!0,mirror:!1}),$(".production-slider .owl-carousel").owlCarousel({nav:!1,dots:!0,loop:!0,items:1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0}),$(".review-slider .owl-carousel").owlCarousel({loop:!0,margin:0,dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsive:{0:{items:1},768:{items:2},1200:{items:3}}}),window.addEventListener("DOMContentLoaded",function(){function e(t){const i=window.countUp.CountUp,a=document.getElementById(t).textContent;document.getElementById(t).textContent=0,setTimeout(()=>{var e=new i(t,a,{duration:3});e.error?console.error(e.error):e.start()},3e3)}e("memberCount"),e("serverCount"),$(".mplayer").css("display",""),setTimeout(()=>{var e=window.UrlHandler.getHash();e&&(e=document.querySelector(`div a[href="${e}"]`))&&e.scrollIntoView({behavior:"smooth"})},1e3)}),"true"===window.UrlHandler.getQuery("uwu")){logger.event("uwu mode activated"),$(".video-section").append(`
    <div class="video-wrap">
      <video autoplay="" loop="" muted="" id="videobg" class="custom-video" poster="">
        <!-- <source src="${client.cdn}/static/media/video/frierendance.mov" type='video/mp4; codecs="hvc1"'> -->
        <source src="${client.cdn}/static/media/video/bg/stelle.webm" type="video/mp4">

        Your browser does not support the video tag.
      </video>
    </div>
    `);const t=document.querySelector("#videobg"),i=t.querySelector("source"),a=["frierendance.webm","stelle.webm","frierenvibe.webm","chottomate.webm","1.webm","2.webm","robin.mp4"],o=client.cdn+"/static/media/video/bg/";$("#replacebg").on("click",function(){let e;for(;(e=o+a[Math.floor(Math.random()*a.length)])===i.getAttribute("src"););i.setAttribute("src",e),t.load(),t.play()}),$("#fungif_holder").html(`
    <div class="col-6">
      <div class="banner-img-1 slideup">
        <img src="${client.cdn}/static/media/aris-dancing.gif" alt="" class="img-fluid">
      </div>
      <div class="banner-img-1 slideup">
        <img src="${client.cdn}/static/media/aris-dancing.gif" alt="" class="img-fluid">
      </div>
    </div>
    <div class="col-6">
      <div class="banner-img-2 slideDown">
        <img src="${client.cdn}/static/media/aris-dancing.gif" alt="" class="img-fluid">
      </div>
      <div class="banner-img-2 slideDown">
        <img src="${client.cdn}/static/media/aris-dancing.gif" alt="" class="img-fluid">
      </div>
    </div>
    `),await LoadHandler.js("https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/jquery.jplayer.min.js"),await LoadHandler.js("https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/add-on/jplayer.playlist.min.js"),LoadHandler.css(client.cdn+"/static/css/libs/jplayer.css"),$("#musicplayer_holderofholder").append(`
<div class="d-sm-flex align-items-center gap-3" data-aos="fade-up" data-aos-once="true" data-aos-delay="600" data-aos-duration="700">
  <div class="text-center">
    <div class="mplayer">
      <div id="jp_container_N" class="jp-video-270p jp-state-no-volume">
        <div class="jp-type-playlist">
          <div id="jplayer_N" class="jp-jplayer hide"></div>
          <div class="jp-gui">
            <div class="jp-interface">
              <h5 class="mt-3 mb-0 jp-title fw-semibold fs-5"></h5>
              <span class="opacity-75 fs-3 jp-artist"></span>
              <div class="jp-controls">
                <div>
                  <a role="button" id="replacebg" class="btn border-0 round-sm rounded-circle" title="Replace Background">
                    <i class="ti ti-replace fs-4 text-primary"></i>
                  </a>
                </div>
                <div>
                  <a role="button" class="jp-repeat btn border-0 round-sm opacity-75 rounded-circle" title="repeat">
                    <i class="ti ti-repeat fs-4"></i>
                  </a>
                  <a role="button" class="jp-repeat-off hide btn border-0 round-sm rounded-circle" title="repeat off">
                    <i class="ti ti-repeat fs-4 text-primary"></i>
                  </a>
                </div>
                <div>
                  <a role="button" class="jp-previous btn border-0 round-sm opacity-75 rounded-circle">
                    <i class="ti ti-player-skip-back fs-4"></i>
                  </a>
                </div>
                <div>
                  <a role="button" class="jp-play btn border-0 bg-white text-primary round-sm rounded-circle">
                    <i class="ti ti-player-play fs-4"></i>
                  </a>
                  <a role="button" class="jp-pause btn border-0 bg-white text-primary round-sm rounded-circle">
                    <i class="ti ti-player-pause"></i>
                  </a>
                </div>
                <div>
                  <a role="button" class="jp-next btn border-0 round-sm opacity-75 rounded-circle">
                    <i class="ti ti-player-skip-forward fs-4"></i>
                  </a>
                </div>
                <div>
                  <a role="button" class="jp-shuffle btn border-0 round-sm opacity-75 rounded-circle" title="shuffle">
                    <i class="ti ti-arrows-shuffle fs-4 text-primary"></i>
                  </a>
                  <a role="button" class="jp-shuffle-off hide btn border-0 round-sm rounded-circle" title="shuffle off">
                    <i class="ti ti-arrows-shuffle fs-4"></i>
                  </a>
                </div>
                <div>
                  <a role="button" class="btn border-0 round-sm opacity-75 rounded-circle" title="Youtube" id="youtubeplayer" data-bs-toggle="modal" data-bs-target="#youtubeplayerModal">
                    <i class="ti ti-brand-youtube fs-4 text-primary"></i>
                  </a>
                </div>
              </div>
              <div class="jp-progress hidden-xs">
                <div class="jp-seek-bar w-100">
                  <div class="jp-play-bar play-progress w-0"></div>
                  <div class="jp-current-time current-time"></div>
                  <div class="jp-duration duration"></div>
                </div>
              </div>
              <div class="jp-volume-controls">
                <a class="jp-mute" title="mute">
                  <i class="ti ti-volume fs-4 text-primary"></i>
                </a>
                <a class="jp-unmute" title="unmute">
                  <i class="ti ti-volume-off text-muted fs-4"></i>
                </a>
              </div>
              <div class="jp-progress hidden-xs">
                <div class="jp-volume-bar w-100">
                  <div class="jp-volume-bar-value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jp-playlist dropup" id="playlist">
          <ul class="dropdown-menu bg-inverse m-b-0">
            <li class="list-group-item"></li>
          </ul>
        </div>
        <div class="jp-no-solution hide">
          <span>Update Required</span> To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
        </div>
      </div>
    </div>
  </div>
</div>
`);var e=new jPlayerPlaylist({jPlayer:"#jplayer_N",cssSelectorAncestor:"#jp_container_N"},[{title:"Robin OST",artist:"Hoyomix",webm:client.cdn+"/static/media/music/robinost.webm",wav:client.cdn+"/static/media/music/robinost.wav"},{title:"If I Can Stop One Heart From Breaking",artist:"Hoyomix",webm:client.cdn+"/static/media/music/ificanstoponeheartfrombreaking.webm",wav:client.cdn+"/static/media/music/ificanstoponeheartfrombreaking.wav"},{title:"Usagi Flap",artist:"Nor",mp3:client.cdn+"/static/media/music/usagi.mp3",webm:client.cdn+"/static/media/music/usagi.webm",poster:client.cdn+"/static/media/aris-dancing.gif"},{title:"Kuru Kuru",artist:"Raphiiel",mp3:client.cdn+"/static/media/music/kurukuru.mp3",webm:client.cdn+"/static/media/music/kurukuru.webm",poster:client.cdn+"/static/media/kururin.gif"}],{playlistOptions:{enableRemoveControls:!0,autoPlay:!1},supplied:"webm, mp3, wav",smoothPlayBar:!0,keyEnabled:!0,audioFullScreen:!1});$(document).on($.jPlayer.event.pause,e.cssSelector.jPlayer,function(){$(".musicbar").removeClass("animate"),$(".jp-play-me").removeClass("active"),$(".jp-play-me").parent("li").removeClass("active")}),$(document).on($.jPlayer.event.play,e.cssSelector.jPlayer,function(){$(".musicbar").addClass("animate")}),$("#playlist").on("shown.bs.dropdown",function(){$(".mplayer .jp-playlist.open ul").css({left:"auto",right:"-21px",width:"300px"})})}const s=document.getElementById("youtubeplayerModal");s.addEventListener("shown.bs.modal",function(){"true"!==s.getAttribute("data-loaded")&&LoadHandler.check("videojs").then(()=>{const e=document.getElementById("youtubelink");var t=document.createElement("video");t.id="youtubevidplayer",t.classList.add("video-js","vjs-cosmos","vjs-16-9"),t.setAttribute("controls",""),t.setAttribute("preload","lazy"),t.setAttribute("data-setup",'{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=zoEtcR5EW08"}], "youtube": { "customVars": { "wmode": "transparent" } } }'),document.getElementById("ytbvidholder").appendChild(t);const i=videojs("youtubevidplayer");function a(){i.src({type:"video/youtube",src:e.value})}i.contextmenuUI({content:[{href:"https://cp.nnsvn.me/invite",label:"Invite Bot"}]}),i.mobileUi(),i.posterTime(),i.controlBar.addChild("QualitySelector"),document.getElementById("youtubeplayerbtn").addEventListener("click",()=>{a()}),e.addEventListener("keyup",function(e){"Enter"===e.key&&(e.preventDefault(),a())}),s.setAttribute("data-loaded","true")})})})();