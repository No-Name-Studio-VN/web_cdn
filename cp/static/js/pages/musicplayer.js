(()=>{window.AnimateBackground({light:"repeating-linear-gradient(45deg, #92c9b1, #92c9b1 20px, #b3e0d2 20px, #b3e0d2 40px)",dark:"repeating-linear-gradient(45deg, #92c9b1, #92c9b1 20px, #b3e0d2 20px, #b3e0d2 40px)",duration:"30s"});const s=$("#lyrics-content").find(".simplebar-content");let t=0,i=!1,a=!1;function r(e){e.empty().append($("<h1>").addClass("my-3").text("🎵⛔ Lyric is unavailable for this song. 🎵⛔"))}const l=document.querySelector("#videobg"),o=l.querySelector("source"),n=client.cdn+"/static/media/video/bg/",c=["frierendance.webm","stelle.webm","frierenvibe.webm","chottomate.webm","1.webm","2.webm"];function d(){var e=$(".current");if(!e?.length)return window.logger.error("No current lyric found");e[0].scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}function p(t){var i=document.querySelectorAll(".song-name");for(let e=0;e<i.length;e++)i[e].textContent=t}function u(t){var i=document.querySelectorAll(".artist-name");for(let e=0;e<i.length;e++)i[e].textContent=t}function m(e){let t="";e?t+=e.map(e=>`<h2 class='my-3' data-timestamp='${e.time}'>${e.line}</h2>`).join(""):t="<h2 class='my-3'>Lyric is unavailable for this song.</h2>",s.html(t),s.find("h2").off("click").on("click",function(){var e=$(this).data("timestamp");e=e/1e3,$("#jplayer_N").jPlayer("play",e)})}async function y(e){var t,i=s.find("h2");i?.length&&(t=await i.filter(function(){return $(this).data("timestamp")<=e}).last(),i.removeClass("current"),t.addClass("current"))}function h(e){const s=[],a="https://spotify-lyrics-api.nnsvn.me/?url="+e;return new Promise((t,i)=>{$.ajax({url:a,type:"GET",success:async function(e){const a=e.lines;if(!a)throw new Error("No lyrics found");await a.map((e,t)=>{var i=parseInt(e.startTimeMs),t=(a[t+1]&&parseInt(a[t+1].startTimeMs),e.words);s.push({time:i,line:t})}),t(s)},error:function(e){i(e)}})})}$("#replacebg").on("click",function(){let e;for(;(e=n+c[Math.floor(Math.random()*c.length)])===o.getAttribute("src"););o.setAttribute("src",e),l.load(),l.play()});var e=window.UrlHandler.getQuery("guildId");if(e)$("#lyrics").css("height","70vh"),$.ajax({url:"/musicplayer/"+e,type:"GET",success:async function(e){const a=e.data;if(!Object.keys(a).length)return window.logger.error("No data found"),r(s);p(a.songDetails.name),u(a.songDetails.artists[0].name),await h(a.songDetails.external_urls.spotify).then(async e=>{if(e){await m(e);let t=moment(a.timeStarted);if(t.isValid()){const i=setInterval(()=>{var e=Date.now(),e=moment(e).diff(t,"seconds");y(1e3*(e+a.currentTime)),d(),e+a.currentTime>=a.songDetails.duration_ms/1e3&&clearInterval(i)},200)}s.find("h2").off("click").on("click",()=>{var e=$(this).data("timestamp")/1e3;t=moment(Date.now()).subtract(e,"seconds")})}}).catch(e=>{window.logger.error(e),r(s)})},error:function(e){window.logger.error(e),r(s)}});else if(window.UrlHandler.getQuery("musicplayer")){setInterval(()=>{i&&a&&d()},200);$("#player_container").append(`
        <div id="player" class="rounded-3 rounded-top-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
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
                            <div class="jp-progress hidden-xs d-flex align-items-center justify-content-center">                                      
                              <div class="jp-volume-bar w-20">
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
            </div>
          </div>
        </div>`);var e={playlistOptions:{enableRemoveControls:!0,autoPlay:!1},supplied:"webm, mp3, wav",smoothPlayBar:!0,keyEnabled:!0,audioFullScreen:!1},g=[{poster:"https://t2.genius.com/unsafe/275x0/https%3A%2F%2Fimages.genius.com%2F76c6355dde0dcc5e9c923b3598a74f81.1000x996x1.jpg",artist:"Daughter",title:"Youth",lyrics:"https://jewel998.github.io/playlist/data/Daughter-Youth.json",mp3:"https://jewel998.github.io/playlist/music/Daughter-Youth.mp3"},{poster:"https://res-4.cloudinary.com/synchtank-com/image/upload/s--ZHu6g1XW--/c_fill,g_auto,h_720,w_720/q_auto:eco/object-70210148.jpg",artist:"Novo Amor",title:"State Lines",lyrics:"https://jewel998.github.io/playlist/data/NovoAmor-StateLines.json",mp3:"https://jewel998.github.io/playlist/music/NovoAmor-StateLines.mp3"},{poster:"https://dvfnvgxhycwzf.cloudfront.net/static/media/SharedImage/imageFull/.f7PO1krW/SharedImage-91162.jpg?t=57753a40748dd1bffc6b",artist:"Lewis Capaldi",title:"Someone You Loved",lyrics:"https://jewel998.github.io/playlist/data/LewisCapaldi-SomeoneYouLoved.json",mp3:"https://jewel998.github.io/playlist/music/LewisCapaldi-SomeoneYouLoved.mp3"},{poster:"https://t2.genius.com/unsafe/275x0/https%3A%2F%2Fimages.genius.com%2F5ca6e4f7d80f35679c4c65b93ea7a9c1.500x496x1.jpg",artist:"Yutaka Yamada",title:"Remembering",lyrics:"https://jewel998.github.io/playlist/data/YutakaYamada-Remembering.json",mp3:"https://jewel998.github.io/playlist/music/YutakaYamada-Remembering.mp3"},{poster:"https://a3-images.myspacecdn.com/images03/33/94c9bc0e578c49f0913d7a14bf335f45/600x600.jpg",artist:"David Choi",title:"By My Side",lyrics:"https://jewel998.github.io/playlist/data/DavidChoi-ByMySide.json",mp3:"https://jewel998.github.io/playlist/music/DavidChoi-ByMySide.mp3"},{poster:"https://upload.wikimedia.org/wikipedia/en/e/e5/Marshmello_and_Bastille_Happier.png",artist:"Marshmello ft. Bastille",title:"Happier",lyrics:"https://jewel998.github.io/playlist/data/Marshmelloft.Bastille-Happier.json",mp3:"https://jewel998.github.io/playlist/music/Marshmelloft.Bastille-Happier.mp3"},{title:"Up Up & Away",artist:"Chance Peña",poster:"https://i.ytimg.com/vi/dXIDKD-qS90/maxresdefault.jpg",lyrics:"https://jewel998.github.io/playlist/data/ChancePena-UpUp&Away.json",mp3:"https://jewel998.github.io/playlist/music/ChancePena-UpUp&Away.mp3"},{poster:"https://images.genius.com/bdc8b41f2277b15a01061aede8cbcef5.939x939x1.jpg",artist:"HONNE",title:"Me & You",lyrics:"https://jewel998.github.io/playlist/data/HONNE-Me&You.json",mp3:"https://jewel998.github.io/playlist/music/HONNE-Me&You.mp3"},{title:"Don't Let Me Fall",artist:"Lenka",poster:"http://lenkamusic.com/wp-content/uploads/2018/09/AlbumPoster.jpg",lyrics:"https://jewel998.github.io/playlist/data/Lenka-DontLetMeFall.json",mp3:"https://jewel998.github.io/playlist/music/Lenka-DontLetMeFall.mp3"},{poster:"https://cdn.shopify.com/s/files/1/1616/2793/t/5/assets/logo-image-file.png?v=14513997102713647500",artist:"Explosions In The Sky",title:"Your Hand In Mine",lyrics:"https://jewel998.github.io/playlist/data/ExplosionsInTheSky-YourHandInMine.json",mp3:"https://jewel998.github.io/playlist/music/ExplosionsInTheSky-YourHandInMine.mp3"},{poster:"https://t2.genius.com/unsafe/275x0/https%3A%2F%2Fimages.genius.com%2F99a8075e5a9ce331bd97e3983a60cbdd.1000x1000x1.jpg",artist:"Birdy",title:"The District Sleeps Alone Tonight",lyrics:"https://jewel998.github.io/playlist/data/Birdy-TheDistrictSleepsAloneTonight.json",mp3:"https://jewel998.github.io/playlist/music/Birdy-TheDistrictSleepsAloneTonight.mp3"},{poster:"https://cdn3.clickthecity.com/images/movies/poster/600/16960.jpg",title:"Shallows",artist:"Daughter",lyrics:"https://jewel998.github.io/playlist/data/Daughter-Shallows.json",mp3:"https://jewel998.github.io/playlist/music/Daughter-Shallows.mp3"}];const v=[...[{title:"Robin OST",artist:"Hoyomix",webm:client.cdn+"/static/media/music/robinost.webm",wav:client.cdn+"/static/media/music/robinost.wav"},{title:"If I Can Stop One Heart From Breaking",artist:"Hoyomix",webm:client.cdn+"/static/media/music/ificanstoponeheartfrombreaking.webm",wav:client.cdn+"/static/media/music/ificanstoponeheartfrombreaking.wav"},{title:"Usagi Flap",artist:"Nor",mp3:client.cdn+"/static/media/music/usagi.mp3",webm:client.cdn+"/static/media/music/usagi.webm",poster:client.cdn+"/static/media/aris-dancing.gif"},{title:"Kuru Kuru",artist:"Raphiiel",mp3:client.cdn+"/static/media/music/kurukuru.mp3",webm:client.cdn+"/static/media/music/kurukuru.webm",poster:client.cdn+"/static/media/kururin.gif"}],...g],b=(v.forEach((e,t)=>{e=e,t=t,$("#playlist_modal").append(`<div songname="${e.title}" class="mb-3 float-song-card" data-index="${t}">
            <div class="card border-primary-hover shadow-soft-3-hover">
              <div class="card-body">
                <div class="d-flex flex-column flex-xl-row gap-10 justify-content-xl-between align-items-xl-center">
                  <div class="d-flex align-items-center gap-3">
                    <div class="avatar-group"><img src="${e.poster}" alt="${e.title}" class="avatar rounded-circle" onerror="this.onerror=null; this.src='https://cdn.discordapp.com/embed/avatars/${Math.floor(6*Math.random())}.png';"></div>
                    <div>
                      <h6>${e.title}</h6>
                      <span class="badge text-bg-primary rounded-pill">${e.artist}</span>
                    </div>
                  </div>
                  <div class="row g-10 g-xl-16 align-items-center justify-content-between"></div>
                </div>
              </div>
            </div>
          </div>`),$(".float-song-card").off("click").on("click",function(){var e;e=$(this).attr("data-index"),b.play(e),$(".jp-play-me").removeClass("active"),$(".jp-play-me").parent("li").removeClass("active"),$(`.jp-play-me[data-index="${e}"]`).addClass("active"),$(`.jp-play-me[data-index="${e}"]`).parent("li").addClass("active")})}),new jPlayerPlaylist({jPlayer:"#jplayer_N",cssSelectorAncestor:"#jp_container_N"},v,e));$("#playlist").on("shown.bs.dropdown",function(){$(".mplayer .jp-playlist.open ul").css({left:"auto",right:"-21px",width:"300px"})}),$(".mplayer").css("display",""),$(document).on($.jPlayer.event.timeupdate,b.cssSelector.jPlayer,function(e){y(t=(e=e.jPlayer.status.currentTime,parseInt(1e3*e)))}),$(document).on($.jPlayer.event.play,b.cssSelector.jPlayer,function(e){$(".musicbar").addClass("animate"),i=!0}),$(document).on($.jPlayer.event.pause,b.cssSelector.jPlayer,function(e){$(".musicbar").removeClass("animate"),$(".jp-play-me").removeClass("active"),$(".jp-play-me").parent("li").removeClass("active"),i=!1}),$(document).on($.jPlayer.event.ended,b.cssSelector.jPlayer,function(e){$(".musicbar").removeClass("animate"),$(".jp-play-me").removeClass("active"),$(".jp-play-me").parent("li").removeClass("active"),t=0,i=!1}),$(document).on($.jPlayer.event.setmedia,b.cssSelector.jPlayer,function(t){p(t.jPlayer.status.media.title),u(t.jPlayer.status.media.artist),e=t.jPlayer.status.media.poster,$("#album-art").attr("src",e);var e=v.find(e=>e.title===t.jPlayer.status.media.title);e?.lyrics?(e=e.lyrics,$.getJSON(e).then(function(e){return e?.lyrics?e.lyrics:null}).then(e=>{a=!0,m(e)}).catch(e=>{a=!1,window.logger.error(e),r(s)})):r(s)})}else{$("#lyrics").css("height","70vh");$("#player_container").append(`
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="search_lyrics" placeholder="Search for a song">
        <button class="btn btn-primary" id="search_lyrics_btn">Search</button>
      </div>
    `),$("#search_lyrics_btn").on("click",async function(){var e,t=$("#search_lyrics").val();if(!t)return window.logger.error("No query provided");e=t,new Promise((t,i)=>{$.ajax({url:"/musicplayer/search",type:"POST",contentType:"application/json",data:JSON.stringify({query:e}),success:function(e){t(e)},error:function(e){i(e)}})}).then(async e=>{return e.error?window.logger.error(e.error):(e=e.track)?(p(e.name),u(e.artists[0].name),void await h(e.external_urls.spotify).then(async e=>{e&&await m(e)}).catch(e=>{window.logger.error(e),r(s)})):window.logger.error("No track found")}).catch(e=>{window.logger.error(e),r(s)})})}})();