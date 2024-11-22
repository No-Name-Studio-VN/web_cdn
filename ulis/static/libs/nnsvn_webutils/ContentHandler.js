((global) => {
    global.DivMemory = new Map();
    /**
     * PreloadRemove - Description of what this function does.
     * @function
     */
    function PreloadRemove(timeout = 200) {
        const preloader = document.getElementById("preloader");
        if (!preloader) return;
        preloader.classList.add("fade");
        setTimeout(function () {
            preloader.style.display = "none";
            document.body.style.overflow = null;
        }, timeout);
    }

    function PreloadAdd() {
        const preloader = document.getElementById("preloader");
        if (!preloader) return;
        document.body.style.overflow = "hidden";
        preloader.style.display = null;
        setTimeout(function () {
            preloader.classList.remove("fade");
        }, 200);
    }

    // create a no result element to show when there is no result in search-table
    function SearchNoResult(element) {
        const noResult = document.createElement("div");
        noResult.classList.add("no-result", "search-items", "text-center", "text-muted", "py-3");
        noResult.textContent = i18next.t("dashboard.no_search_result");
        $(element).append(noResult);
        // hide no result element
        $(element).find(".no-result").hide();
    }

    function PreventSubmitOnEnter(element) {
        $(element).on("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
            }
        });
    }

    /** Toggle loading state on an element
     * @param {JQuery<HTMLDivElement>} element 
     * @param {Boolean} state
     */
    function ToggleLoading(element, state = true) {
        // Ensure element is a jQuery object
        const $element = element instanceof jQuery ? element : $(element);
        $element.find(".waves-ripple").remove(); // Remove waves effect if present

        if (state) {
            // Generate a unique ID for the element if it doesn't have one
            if (!$element.data("loading-id")) {
                const randomID = Math.random().toString(36).substring(2, 16);
                $element.data("loading-id", randomID);
            }

            const loadingId = $element.data("loading-id");
            global.DivMemory.set(loadingId, $element.html());
            $element.html('<span class="spinner-border spinner-border-sm" role="status"></span>').prop("disabled", true);
        } else {
            const loadingId = $element.data("loading-id");
            if (loadingId) {
                const originalHTML = global.DivMemory.get(loadingId);
                $element.html(originalHTML).prop("disabled", false);
                global.DivMemory.delete(loadingId);
                $element.removeData("loading-id");
            }
        }
    }

    function ToggleValidation(target, state) {
        const $target = $(target); // Convert target to jQuery element
        if (state) {
            $target.addClass('is-valid').removeClass('is-invalid');
        } else {
            $target.addClass('is-invalid').removeClass('is-valid');
        }
    }

    function ToggleMultiSelect(element, data) {
        // check if element is not a jquery object
        if (!(element instanceof jQuery)) element = $(element);
        // check if select2 is loaded
        if (typeof $.fn.select2 === "undefined") console.error("Select2 is not loaded");
        const { isDisabled, placeholder } = data;
        const select2Options = {
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: placeholder,
            closeOnSelect: false,
            allowClear: true,
            disabled: isDisabled || false,
        };

        element.select2(select2Options);
        // this helps animate the dropdown but is now being disabled due to issue when using with other select2
        /*           .on('select2:open', () => {
                    $('.select2-dropdown').hide();
                    setTimeout(() => {
                      jQuery('.select2-dropdown').slideDown("200");
                    }, 0);
                  })
                  .on('select2:closing', (e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      jQuery('.select2-dropdown').slideUp("200", () => {
                        $(element).select2('destroy').select2(select2Options);
                      });
                    }, 0);
                  }); */
    }

    function OpenExternalWindow(url, title = "External Window") {
        const features = ' width=' + window.outerWidth / 1.3 + ', height=' + window.outerHeight / 1.2 + ',location=0, resizable, scrollbars, toolbar=0, menubar=0, popup=true';
        return window.open(url, title, features); // Opens a new popup
    }

    function MarkdownToHTML(text) {
        const markdown = DOMPurify.sanitize(text);

        const html = markdown
            /** Markdown */
            .replace(/!\[(.*?)\]\((.*?)\)/g, '<img class="d-block position-relative w-100 my-1" src="$2" alt="$1" />')
            .replace(/&#60;:\w+:(\d{17,19})&#62;/g, '<img class="emoji" src="https://cdn.discordapp.com/emojis/$1.png"/>')
            .replace(/&#60;a:\w+:(\d{17,20})&#62;/g, '<img class="emoji" src="https://cdn.discordapp.com/emojis/$1.gif"/>')
            .replace(/~~(.+?)~~/g, '<s>$1</s>')
            .replace(/\*\*\*(.+?)\*\*\*/g, '<em><strong>$1</strong></em>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/__(.+?)__/g, '<u>$1</u>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/_(.+?)_/g, '<em>$1</em>')
            // Replace >>> and > with block-quotes. &#62; is HTML code for >
            .replace(/^(?: *&#62;&#62;&#62; ([\s\S]*))|(?:^ *&#62;(?!&#62;&#62;) +.+\n)+(?:^ *&#62;(?!&#62;&#62;) .+\n?)+|^(?: *&#62;(?!&#62;&#62;) ([^\n]*))(\n?)/mg, (all, match1, match2, newLine) => {
                return `<div class="blockquote"><div class="blockquoteDivider"></div><blockquote>${match1 || match2 || newLine ? match1 || match2 : all.replace(/^ *&#62; /gm, '')}</blockquote></div>`;
            })

            /** Mentions */
            .replace(/&#60;#\d+&#62;/g, () => `<span class="mention channel interactive">channel</span>`)
            .replace(/&#60;@(?:&#38;|!)?\d+&#62;|@(?:everyone|here)/g, match => {
                if (match.startsWith('@')) return `<span class="mention">${match}</span>`;
                else return `<span class="mention interactive">@${match.includes('&#38;') ? 'role' : 'user'}</span>`;
            })
            // parse text in brackets and then the URL in parentheses.
            .replace(/\[([^\[\]]+)\]\((.+?)\)/g, `<a title="$1" target="_blank" class="anchor" href="$2">$1</a>`)

            // match the hash/pound sign at the beginning of a line followed by a space and then replace it with the corresponding HTML header tag (max limited is 3 caused discord not allowed more?)
            .replace(/^(#{1,3}) (.*)$/gm, (match, hashes, content) => {
                const level = hashes.length; // Number of hashes determines header level
                return `<h${level}>${content}</h${level}>`;
            });
        return html;
    }

    function DisableContextMenu(element) {
        // if element is not a jquery object convert it to one
        if (!(element instanceof jQuery)) element = $(element);
        element.on("contextmenu", function (e) {
            e.preventDefault();
        });
    }

    function createAlert(message, id = '') {
        return $('<div>', {
            class: 'alert alert-danger d-flex align-items-center alert-dismissible m-3 fade show',
            role: 'alert',
            id: id
        }).append(
            $('<div>').append(
                $('<i>', { class: 'ti ti-alert-triangle-filled me-2' }),
                $('<strong>').text(message)
            ),
            $('<button>', {
                type: 'button',
                class: 'btn-close',
                'data-bs-dismiss': 'alert',
                'aria-label': 'Close'
            })
        );
    };

    function createShareModal() {
        // Create elements
        const modalDiv = document.createElement('div');
        const dialogDiv = document.createElement('div');
        const contentDiv = document.createElement('div');
        // ... create other elements as needed

        // Set attributes
        modalDiv.setAttribute('class', 'modal fade');
        modalDiv.setAttribute('id', 'shareModal');
        modalDiv.setAttribute('aria-labelledby', 'shareModal');
        dialogDiv.setAttribute('class', 'modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable');
        contentDiv.setAttribute('class', 'modal-content shadow-3');
        // ... set attributes for other elements as needed

        // create the modal header
        const modalHeader = document.createElement('div');
        modalHeader.setAttribute('class', 'modal-header gap-3');
        modalHeader.innerHTML = `
        <div class="round rounded bg-primary d-flex align-items-center justify-content-center">
          <i class="ti ti-world text-white fs-7"></i>
        </div>
        <div>
            <h5 class="mb-1">Chia sẻ tập tin</h5>
            <small class="d-block text-xs text-muted">Gửi địa chỉ đến mọi người</small>
        </div>
        <div class="ms-auto">
          <div class="form-check form-switch me-n2">
            <input class="form-check-input" type="checkbox" id="switchShareToWeb" checked="checked" />
            <label class="form-check-label" for="switchShareToWeb"></label>
          </div>
        </div>`;
        contentDiv.appendChild(modalHeader);

        // create the modal body
        const modalBody = document.createElement('div');
        modalBody.setAttribute('class', 'modal-body');
        modalBody.innerHTML = `
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-6 mx-auto">
              <div class="card h-100">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-start gap-3"></div>
                  </div>
                  <div>
                    <div class="input-group input-group-inline" id="shareurl" style="cursor: pointer;">
                      <input type="url" class="form-control" id="shareurlinput" style="cursor: pointer;" readonly>
                      <span class="input-group-text">
                        <i class="ti ti-copy"></i>
                      </span>
                    </div>
                  </div>
                  <div class="hr-text hr-text-center">Quét mã QR để mở trên thiết bị khác</div>
                  <div class="d-flex justify-content-center m-3 rounded-4" style="background: blanchedalmond;">
                    <canvas id="share_qrcode" class="d-block p-5"></canvas>
                  </div>
                  <div class="row g-2 align-items-center" id="share_social_box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        contentDiv.appendChild(modalBody);

        // create the modal footer
        const modalFooter = document.createElement('div');
        modalFooter.setAttribute('class', 'modal-footer');

        const div = document.createElement('div');
        div.setAttribute('class', 'me-auto');

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'text-sm font-semibold');
        a.setAttribute('id', 'shareurlbtn');

        const i = document.createElement('i');
        i.setAttribute('class', 'ti ti-copy me-2');

        const textNode = document.createTextNode('Sao chép đường dẫn');

        a.appendChild(i);
        a.appendChild(textNode);
        div.appendChild(a);
        modalFooter.appendChild(div);

        const closeButton = document.createElement('button');
        closeButton.setAttribute('type', 'button');
        closeButton.setAttribute('class', 'btn btn-sm btn-neutral');
        closeButton.setAttribute('data-bs-dismiss', 'modal');
        closeButton.textContent = 'Đóng';
        modalFooter.appendChild(closeButton);

        const shareButton = document.createElement('button');
        shareButton.setAttribute('type', 'button');
        shareButton.setAttribute('class', 'btn btn-sm btn-success');
        shareButton.setAttribute('id', 'chdshareto');
        shareButton.textContent = 'Chia sẻ';
        modalFooter.appendChild(shareButton);

        contentDiv.appendChild(modalFooter);
        // Append children
        dialogDiv.appendChild(contentDiv);
        modalDiv.appendChild(dialogDiv);
        // ... append other elements as needed
        return modalDiv;
    }

    function generateQRCode(QRCode, url, divHolder = "share_qrcode") {

        const targetDiv = document.getElementById(divHolder);

        const option = {
            color: {
                dark: '#00F',  // Blue dots
                light: '#0000' // Transparent background
            },
            errorCorrectionLevel: 'H',
            type: 'image/webp',
            quality: 0.6,
            margin: 0,
            width: 256,
        };

        QRCode.toCanvas(targetDiv, url, option, function (error) {
            if (error) logger.error('QRCode generation failed', error);
            logger.info('QRCode generated', url);
        });
    }

    async function Share(url) {
        let shareModal = await document.getElementById("shareModal");
        if (!shareModal) {
            shareModal = await createShareModal();
            await document.body.appendChild(shareModal);
        }

        const currentUrl = document.getElementById("shareurlinput").value;
        if (currentUrl !== url) {
            const ids = ["shareurl", "shareurlbtn"];

            ids.forEach(id => {
                const element = $(`#${id}`);
                if (!element?.length) return;
                element.off('click').on('click', function () {
                    window.toClipboard(url);
                });
            });

            document.getElementById("shareurlinput").value = url;

            if (typeof QRCode === "undefined") {
                logger.warn("Cannot file QRCode library, trying to load it now.");
                LoadHandler.js("https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.1/qrcode.js").then(() => {
                    generateQRCode(QRCode, url);
                });
            } else await generateQRCode(QRCode, url);

            const shareSocials = [{
                name: 'Facebook',
                icon: 'ti ti-brand-facebook',
                color: 'blue',
                url: `https://www.facebook.com/sharer/sharer.php?u=${url}`
            }, {
                name: 'Messenger',
                icon: 'ti ti-brand-messenger',
                color: 'blue',
                url: `fb-messenger://share/?link=${url}`
            }, {
                name: 'Twitter',
                icon: 'ti ti-brand-twitter',
                color: 'skyblue',
                url: `https://twitter.com/intent/tweet?url=${url}`
            }, {
                name: 'LinkedIn',
                icon: 'ti ti-brand-linkedin',
                color: 'blue',
                url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
            }, {
                name: 'WhatsApp',
                icon: 'ti ti-brand-whatsapp',
                color: 'green',
                url: `https://wa.me/?text=${url}`
            }, {
                name: 'Telegram',
                icon: 'ti ti-brand-telegram',
                color: 'blue',
                url: `https://t.me/share/url?url=${url}`
            }, {
                name: 'Reddit',
                icon: 'ti ti-brand-reddit',
                color: 'orange',
                url: `https://reddit.com/submit?url=${url}`
            }];

            $('#share_social_box').empty();

            shareSocials.forEach((social) => {
                $('#share_social_box').append(`
                <div class="col-6 col-sm-4 col-md-2 col-xl-auto">
                    <button type="button" class="btn bg-secondary-subtle btn-icon my-1 px-2 w-100" nns-external-window nns-external-url='${social.url}'>
                        <i class="${social.icon} fs-7"></i>
                    </button>
                </div>`
                );
            });

            $('#chdshareto').off("click").on('click', () => {
                if (navigator.share) {
                    const title = document.querySelector('title').text;
                    const text = document.querySelector('meta[name="description"]').content;

                    navigator.share({ title, text, url })
                        .then(() => logger.info('Share API worked', url))
                        .catch((error) => logger.error('Error sharing', error));
                } else {
                    logger.warn('Share not supported on this browser');
                }
            });
        }

        $('#shareModal').modal('show');
    }

    /** Display a loading box and hide the main content
     * @param {string} id - The id of the main content
     * @param {boolean} state - The state of the loading box
     * @example <caption>Example - Displaying the element with id #mainContent</caption>
     * ToggleMainContent("#mainContent", true);
     */
    function ToggleMainContent(id, state) {
        const $element = $(id);
        const loadingId = `${id.replace("#", "")}_loading`;
        const $loadingElement = $(`#${loadingId}`);

        // if true remove the loading element and show the main content
        if (state) {
            $loadingElement.remove();
            $element.show();
        } else {
            // if there is no loading element create one
            if ($loadingElement.length === 0) {
                $element.before(`
                    <div id="${loadingId}">
                        <div class="d-flex justify-content-center p-5">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">${i18next.t("dashboard.loading")}</span>
                            </div>
                        </div>
                    </div>
                `);
            }
            $element.hide();
        }
    };

    function createLabelSlider(div, { id, value, min, max, step }) {
        const holder = $('<div>', { class: 'form-group mb-3 position-relative' });

        const input = $('<input>', {
            type: 'range',
            class: 'form-range',
            id,
            min,
            max,
            step,
            value,
            name: id // Set name attribute directly
        });

        let labelsMarkup = '';
        for (let val = min; val <= max; val += step) {
            const positionClass = val === min ? 'justify-content-start' : val === max ? 'justify-content-end' : 'd-none d-md-flex justify-content-center';
            labelsMarkup += `<div class="${positionClass} rangeSliderLabel ${val == value ? "active" : ""}" data-value='${val}'>${val}</div>`;
        }

        const label = $('<label>', { class: 'form-check-label fw-semibold w-100', for: id })
            .append($('<div>', { class: 'mb-1 d-flex align-items-center justify-content-between' }).html(labelsMarkup));

        const thumbValue = $('<span>', { class: 'thumb-value', text: value });
        const curValue = Number(((value - min) * 100) / (max - min));
        const thumb = $('<div>', { class: 'thumb' })
            .css('left', `calc(${curValue}% + (${8 - curValue * 0.15}px))`)
            .append(thumbValue);

        if (min || max) thumb.css("transition", "none");

        const inputHolder = $('<div>').append(thumb, input);

        holder.append(inputHolder, label);

        // Attach event listeners using delegation
        holder.on("input change", "input[type='range']", function () {
            const currentVal = $(this).val();
            holder.find(".rangeSliderLabel").removeClass("active")
                .filter(`[data-value='${currentVal}']`).addClass("active");

            thumbValue.text(currentVal);
            const newValue = Number(((currentVal - min) * 100) / (max - min));
            thumb.css("left", `calc(${newValue}% + (${8 - newValue * 0.15}px))`);
        }).on("mousedown touchstart", "input[type='range']", function () {
            thumb.addClass("thumb-active");
        }).on("mouseup touchend", "input[type='range']", function () {
            thumb.removeClass("thumb-active");
        });

        // Replace the content of the div with the slider
        $(div).html(holder);
    }

    global.ContentHandler = {
        PreloadAdd,
        PreloadRemove,
        SearchNoResult,
        PreventSubmitOnEnter,
        ToggleLoading,
        ToggleValidation,
        ToggleMultiSelect,
        OpenExternalWindow,
        MarkdownToHTML,
        DisableContextMenu,
        createAlert,
        Share,
        ToggleMainContent,
        createLabelSlider
    };

    // set a timer if after 5 seconds the page still not loaded, remove the preloader
    setTimeout(PreloadRemove, 5000);

    window.addEventListener("DOMContentLoaded", function () {
        PreloadRemove();
        (() => {
            // Enable preloader on form submit on all pages except ignoreSites
            const ignoreSites = [];
            if (!ignoreSites.includes(window.location.pathname.split("/")[1])) {
                if (document.forms) {
                    for (const i of document.forms) {
                        i.addEventListener("submit", function () {
                            if (i.classList.contains("noloader")) return;
                            PreloadAdd();
                        });
                    };
                };
            }
        })();
        
        // Check if user accepts cookies
        (() => {
            if (!localStorage.getItem("cookieconsent")) {
                const newElement = document.createElement('div');
                newElement.className = "offcanvas offcanvas-bottom h-auto";
                newElement.id = "cookieconsentoffcanvas";
                newElement.setAttribute("tabindex", "-1");
                newElement.setAttribute("aria-modal", "true");
                newElement.setAttribute("role", "dialog");
                newElement.setAttribute("data-bs-backdrop", "static");
                newElement.innerHTML = `
                  <div class="offcanvas-body">
                      <div class="container">
                          <div class="row align-items-center">
                              <div class="col">
                                  <strong>Do you like cookies?</strong> 🍪 We use cookies to ensure you get the best experience on our website. <a href="/blog/p/privacy" target="_blank">Learn more</a>
                              </div>
                              <div class="col-auto">
                                  <button type="button" class="btn btn-primary" id="1_accept_cookie" data-bs-dismiss="offcanvas">
                                      Essential Cookies Only
                                  </button>
                                  <button type="button" class="btn btn-primary" id="2_accept_cookie" data-bs-dismiss="offcanvas">
                                      Allow All Cookies
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>`;
                document.body.appendChild(newElement);

                const cookieconsentoffcanvas = new bootstrap.Offcanvas('#cookieconsentoffcanvas');
                cookieconsentoffcanvas.show();

                function addCookieConsentListener(elementId, consentValue) {
                    document.getElementById(elementId).addEventListener("click", function () {
                        localStorage.setItem("cookieconsent", consentValue);
                        cookieconsentoffcanvas.hide();
                        setTimeout(() => {
                            document.body.removeChild(newElement);
                        }, 100);
                    });
                }

                addCookieConsentListener("1_accept_cookie", "essential");
                addCookieConsentListener("2_accept_cookie", "all");
            }
        })();

        // lazy loads elements with default selector as '.lozad'
        (() => {
            const observer = lozad();
            observer.observe();

            // Handle Lazy loading on page print
            window.onbeforeprint = function () {
                $('.lozad').each(function () {
                    const src = $(this).attr('data-src');
                    $(this).attr('src', src).parent().addClass('loaded');
                });
            };
        })();
    });

})(window);