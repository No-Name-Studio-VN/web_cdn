(() => {
    function MarkdownToHTML(element) {
        const markdown = element.text();
        const html = window.ContentHandler.MarkdownToHTML(markdown);
        element.html(html);
    }

    function ParseIcon(element) {
        // convert the element to jQuery object
        if (!(element instanceof jQuery)) {
            element = $(element);
        }
        // add aria-hidden attribute to the element
        element.attr('aria-hidden', 'true');
    }

    function ParseTooltip() {
        $('[data-bs-toggle="tooltip"]').tooltip('dispose');

        $('[data-bs-toggle="tooltip"]').tooltip();
    };

    function ParseReloadPage(element) {
        element.on("click", function () {
            // remove alert and error query params
            UrlHandler.removeQuery("alert");
            UrlHandler.removeQuery("error");

            window.location.reload();
        });
    };

    function ParseCopyButton(element) {
        element.on("click", function () {
            const text = $(this).attr("nns-toclipboard-data") || $(this).text();
            if (text) window.toClipboard(text);
            else throw new Error("No text provided for copying");
        });
    };

    function ParseRedirect(element) {
        element.on("click", function () {
            const url = $(this).attr("nns-redirect-data") || $(this).text();
            if (url) window.location.href = url;
            else throw new Error("No URL provided for redirection");
        });
    };

    function DateFormatter(element) {
        const input = element.html() || element.attr("nns-dateformatter-data");
        element.html(bt_dateformatter(input));
    };

    /** For every alert box in the page, add event listener to remove it when clicked */
    function ParseAlerts(element) {
        if (!(element instanceof jQuery)) {
            element = $(element);
        }
        element.on("click", function () {
            $(this).remove();
        });
    };

    function ParseVideoAdding(element) {
        window.MediaHandler.AddVideo({
            src: element.attr("nns-video-src"),
            triggerId: element.attr("id")
        });
    }

    function ParseImageAdding(element) {
        window.MediaHandler.AddImage({
            src: element.attr("nns-image-src"),
            triggerId: element.attr("id")
        });
    }

    function ParseSearchBoxForTable(element) {
        const attribute = element.attr("nns-search-input");
        const searchInput = $(`#${attribute}`);
        window.ContentHandler.SearchNoResult(element);
        window.ContentHandler.PreventSubmitOnEnter(searchInput);

        searchInput.on("keyup", function () {
            const $noResult = element.find(".no-result");
            const $searchItems = element.find(".search-items:not(.header-item)");

            $noResult.hide();
            const rex = new RegExp($(this).val(), "i");
            $searchItems.hide();

            $searchItems.filter(function () {
                if ($(this).hasClass("no-result")) return;
                return rex.test($(this).text());
            }).show();

            if ($searchItems.filter(":visible").length == 0) {
                $noResult.show();
            }
        });

        searchInput.on("change", function () {
            const value = $(this).val();
            if (!ValidationHandler.isString(value)) {
                element.find(".search-items:not(.header-item)").show();
            }
        });
    }

    function ParseSearchBoxForList(element) {
        const attribute = element.attr("nns-search-input");
        const searchInput = $(`#${attribute}`);
        window.ContentHandler.SearchNoResult(element);
        window.ContentHandler.PreventSubmitOnEnter(searchInput);

        searchInput.on("keyup", function () {
            const $children = element.children();
            const $noResult = element.find(".no-result");

            $noResult.hide();
            const rex = new RegExp($(this).val(), "i");
            $children.hide();

            $children.filter(function () {
                if ($(this).hasClass("no-result")) return;
                return rex.test($(this).text());
            }).show();

            if ($children.filter(":visible").length == 0) {
                $noResult.show();
            }
        });
    }

    async function ParseFullScreenIframe(element) {
        const attribute = element.attr("nns-iframe-data");
        if (!attribute) return;
        element.css("height", "100vh");

        await element.html(`<div class="d-flex justify-content-center p-5" placeholder><div class="spinner-border" role="status"><span class="visually-hidden">${i18next.t("dashboard.loading")}...</span></div></div>
        <iframe src="${attribute}" frameborder="0" style="width: 100%; height: 100%; visibility: hidden;" class="rounded-4" allowfullscreen></iframe>`);

        // get the iframe inside element
        const iframe = element.find('iframe');
        iframe.on("load", function () {
            const placeholder = element.find("[placeholder]");
            // Show the iframe and hide the placeholder
            placeholder.remove();
            iframe.css("visibility", "visible");
        });
    }

    function OpenExternalWindow(element) {
        const url = element.attr("nns-external-url");
        // add event listener to open the external window
        element.on("click", function () {
            window.ContentHandler.ToggleLoading(element, true);
            window.ContentHandler.OpenExternalWindow(url);
            setTimeout(function () {
                window.ContentHandler.ToggleLoading(element, false);
            }, 2000);
        });
    }

    function ParseShareButton(element) {
        let url = element.attr("nns-share-url");

        // if no url, take the current page url
        if (!url) url = window.location.href;

        element.on("click", function () {
            window.ContentHandler.Share(url);
        });
    }


    /** Process the element with the given attribute and handler function.
     * @param {JQuery} element - The jQuery object to be processed.
     * @param {String} attribute - The attribute to process.
     * @param {Function} handler - The function to handle the processing.
     */
    function processElement(element, attribute, handler) {
        // check if element is not a jQuery object
        if (!(element instanceof jQuery)) {
            element = $(element);
        }
        // Directly calling the handler function
        if (typeof handler === 'function') {
            handler(element);
        } else {
            logger.error(`Handler for ${attribute} is not a function.`);
        }
        // Remove the attribute after processing
        element.removeAttr(attribute);
    }

    const AttachWavesEffect = (selector) => {
        if (selector === ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])") {
            Waves.attach(selector, ["waves-light"]);
        } else {
            Waves.attach(selector);
        }
    };


    const WavesIdentifies = [
        ".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])",
        "[class*='btn-outline-']",
        "[class*='btn-label-']",
        "btn[class*='nav-link']",
        ".sidebar-link",
        ".pagination .page-item .page-link",
        ".dropdown-item",
        ".list-group-item.list-group-item-action",
        "#guildselector_holder .dropdown-item"
    ];

    const elementsCallback = {
        'nns-reloadpage': ParseReloadPage,
        'nns-toclipboard': ParseCopyButton,
        'nns-redirect': ParseRedirect,
        'nns-dateformatter': DateFormatter,
        'nns-video': ParseVideoAdding,
        'nns-image': ParseImageAdding,
        'nns-search-table': ParseSearchBoxForTable,
        'nns-search-list': ParseSearchBoxForList,
        'nns-iframe-full': ParseFullScreenIframe,
        'nns-markdown': MarkdownToHTML,
        'nns-external-window': OpenExternalWindow,
        'nns-share': ParseShareButton
    };

    // Observable for DOMContentLoaded
    const domContentLoaded$ = rxjs.fromEvent(window, 'DOMContentLoaded');
    domContentLoaded$.pipe(rxjs.first()).subscribe(() => {
        const alertClasses = ['alerts', 'alerts-success', 'alerts-error'];
        // Initialize Waves effect
        Waves.init();

        // Listen to div with custom attribute
        (() => {
            Object.entries(elementsCallback).forEach(([attribute, handler]) => {
                // Loop through all elements with the attribute
                $(`[${attribute}]`).each(function (i, elem) {
                    processElement(elem, attribute, handler);
                });
            });

            // attach alert to all classes with the following names
            const alertSelector = alertClasses.map(cls => `.${cls}`).join(', ');
            document.querySelectorAll(alertSelector).forEach(ParseAlerts);

            ParseTooltip();

            // check if element is <i>
            document.querySelectorAll('i').forEach(function (icon) {
                ParseIcon(icon);
            });

            // add wave effect to all elements with the following classes
            WavesIdentifies.forEach(function (selector) {
                AttachWavesEffect(selector);
            });

        })();

        // Do the following when document.body changes
        (() => {
            function Actions(element) {
                Object.entries(elementsCallback).forEach(([key, value]) => {
                    if (element.hasAttribute(key)) {
                        processElement(element, key, value);
                    }
                });
                if (alertClasses.some(cls => element.classList.contains(cls))) ParseAlerts(element);
                if (element.hasAttribute('data-bs-toggle') && element.getAttribute('data-bs-toggle') === 'tooltip') ParseTooltip();
                // check if element is <i>
                if (element.tagName === 'I') ParseIcon(element);

                // add wave effect to all elements with the following classes
                WavesIdentifies.forEach(selector => {
                    if (element.matches(selector)) {
                        AttachWavesEffect(selector);
                    }
                });
            }

            // Create a callback function to execute when mutations are observed
            const callback = async function (mutationsList, observer) {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach((node) => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                Actions(node);
                                // Check all descendants of the added node
                                const descendants = node.querySelectorAll('*');
                                for (const descendant of descendants) {
                                    Actions(descendant);
                                }
                            }
                        });
                    }
                    // The commented-out section for 'attributes' mutation type is omitted for brevity
                }
            };

            // Create an observer instance linked to the callback function
            const observer = new MutationObserver(callback);

            // Start observing the document body for configured mutations
            observer.observe(document.body, { attributes: true, childList: true, subtree: true });
        })();
    });
})();