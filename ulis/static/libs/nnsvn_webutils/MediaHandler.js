((global) => {

  function CreateMediaModal(id) {
    const div = document.createElement("div");
    div.className = 'modal fade';
    div.id = id;

    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog modal-dialog-centered modal-lg';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.dataset.bsDismiss = 'modal';
    closeButton.setAttribute('aria-label', 'Close');

    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const dFlex = document.createElement('div');
    dFlex.className = 'd-flex justify-content-center';
    dFlex.id = `${id}_holder`;

    const spinnerBorder = document.createElement('div');
    spinnerBorder.className = 'spinner-border';
    spinnerBorder.role = 'status';

    const visuallyHidden = document.createElement('span');
    visuallyHidden.className = 'visually-hidden';
    visuallyHidden.textContent = i18next.t("dashboard.loading");

    spinnerBorder.appendChild(visuallyHidden);
    dFlex.appendChild(spinnerBorder);
    modalBody.appendChild(dFlex);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalDialog.appendChild(modalContent);

    div.appendChild(modalDialog);

    return div;
  }

  function CreateMusicPlayer({ }) {
    const div = document.createElement("div");
    div.classList.add("mplayer");
    div.style.display = "none";
    div.innerHTML = `
          <div id="jp_container_N" class="jp-video-270p jp-state-no-volume">
            <div class="jp-type-playlist">
              <div id="jplayer_N" class="jp-jplayer hide"></div>
              <div class="jp-gui">
                <div class="jp-interface">
                  <h5 class="mt-3 mb-0 jp-title fw-semibold fs-5"></h5>
                  <span class="opacity-75 fs-3 jp-artist"></span>
                  <div class="jp-controls">
                    <div>
                      <a class="jp-repeat btn border-0 round-sm opacity-75 rounded-circle" title="repeat">
                        <i class="ti ti-repeat fs-4"></i>
                      </a>
                      <a class="jp-repeat-off hide btn border-0 round-sm rounded-circle" title="repeat off">
                        <i class="ti ti-repeat fs-4 text-primary"></i>
                      </a>
                    </div>
                    <div>
                      <a class="jp-previous btn border-0 round-sm opacity-75 rounded-circle">
                        <i class="ti ti-player-skip-back fs-4"></i>
                      </a>
                    </div>
                    <div>
                      <a class="jp-play btn border-0 bg-white text-primary round-sm rounded-circle">
                        <i class="ti ti-player-play fs-4"></i>
                      </a>
                      <a class="jp-pause btn border-0 bg-white text-primary round-sm rounded-circle">
                        <i class="ti ti-player-pause"></i>
                      </a>
                    </div>
                    <div>
                      <a class="jp-next btn border-0 round-sm opacity-75 rounded-circle">
                        <i class="ti ti-player-skip-forward fs-4"></i>
                      </a>
                    </div>
                    <div>
                      <a class="jp-shuffle btn border-0 round-sm opacity-75 rounded-circle" title="shuffle">
                        <i class="ti ti-arrows-shuffle fs-4 text-primary"></i>
                      </a>
                      <a class="jp-shuffle-off hide btn border-0 round-sm rounded-circle" title="shuffle off">
                        <i class="ti ti-arrows-shuffle fs-4"></i>
                      </a>
                    </div>
                  </div>
                  <div class="jp-progress hidden-xs">
                    <div class="jp-seek-bar" style="width: 100%">
                      <div class="jp-play-bar play-progress" style="width: 0%"></div>
                      <div class="jp-current-time current-time"></div>
                      <div class="jp-duration duration"></div>
                    </div>
                  </div>
                  <div>
                    <a class="jp-mute " title="mute">
                      <i class="ti ti-volume fs-4 text-primary"></i>
                    </a>
                    <a class="jp-unmute" title="unmute">
                      <i class="ti ti-volume-off text-muted fs-4"></i>
                    </a>
                  </div>
                  <div class="jp-volume jp-music-volume">
                    <div class="jp-volume-bar">
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
              <span>Update Required</span> To play the media you will need to either update your
              browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
            </div>
          </div>`;
    return div;
  }

  function AddVideo(config) {
    LoadHandler.check("videojs").then(() => {
      let video_modal = document.getElementById("video_modal");
      if (!video_modal) {
        document.body.appendChild(CreateMediaModal("video_modal"));
        video_modal = document.getElementById("video_modal");

        const video = document.createElement("video");
        video.id = "video-modal-js-player";
        video.classList.add("video-js", "vjs-cosmos", "vjs-16-9");
        video.setAttribute("controls", "");
        video.setAttribute("preload", "lazy");
        const video_modal_holder = document.getElementById("video_modal_holder");
        video_modal_holder.innerHTML = "";
        video_modal_holder.appendChild(video);
      }
      const player = videojs('video-modal-js-player');
      player.contextmenuUI({
        content: [{
          href: 'https://cp.nnsvn.me/invite',
          label: 'Invite Bot'
        }]
      });
      player.mobileUi();
      player.posterTime();
      const video_modal_instance = new bootstrap.Modal(video_modal, {
        keyboard: false
      });
      document.getElementById(config.triggerId).addEventListener("click", function () {
        if (player.src() != config.src) player.src({ type: getVideoType(config.src), src: config.src });
        video_modal_instance.show();
      });
    });
  }

  function getVideoType(src) {
    const ext = src.split('.').pop();
    if (ext === "mp4") {
      return "video/mp4";
    } else if (ext === "webm") {
      return "video/webm";
    } else if (ext === "ogg") {
      return "video/ogg";
    }
  }

  function AddImage(config) {
    let image_modal = document.getElementById("image_modal");
    if (!image_modal) {
      document.body.appendChild(CreateMediaModal("image_modal"));
      image_modal = document.getElementById("image_modal");
    }

    const image_modal_holder = document.getElementById("image_modal_holder");
    
    const image_modal_instance = new bootstrap.Modal(image_modal, {
      keyboard: false
    });
    document.getElementById(config.triggerId).addEventListener("click", function () {
      const img = document.createElement("img");
      img.src = config.src;
      img.classList.add("img-fluid");
      image_modal_holder.innerHTML = "";
      image_modal_holder.appendChild(img);

      image_modal_instance.show();
    });
  }

  global.MediaHandler = {
    AddVideo: AddVideo,
    AddImage: AddImage,
  };
})(window);