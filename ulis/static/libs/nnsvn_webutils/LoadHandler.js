((global) => {
    /** Load an external stylesheet
     * @param {string} url 
     */
    function loadStyle(url) {
        // 'url' is the stylesheet's URL, i.e. /css/styles.css
        return new Promise(function (resolve, reject) {
            if (document.querySelector(`link[href="${url}"]`)) return resolve();
            const link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.onload = () => resolve();
            link.onerror = () => reject(new Error(`Error loading ${url}`));
            link.href = url;

            const headScript = document.querySelector('script');
            headScript.parentNode.insertBefore(link, headScript);
        });
    }

    /** Load an external script
     * @param {string} url 
     */
    function loadScript(url) {
        return new Promise(function (resolve, reject) {
            const id = "script_" + url;
            if (document.getElementById(id)) return;
            const script = document.createElement("script"); script.src = url; script.id = id; script.type = "text/javascript";
            const head = document.getElementsByTagName("head")[0] || document.documentElement;

            let done = false;
            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    done = true;
                    script.onload = script.onreadystatechange = null;
                    // Handle memory leak in IE
                    if (head && script.parentNode) {
                        head.removeChild(script);
                    }
                }
                setTimeout(() => {
                    resolve();
                }, 100);
            };
            script.addEventListener('error', e => reject(e.error));

            head.insertBefore(script, head.firstChild);
        });
    }

    function fetchDependencies(requiredPackage) {
        return new Promise((resolve, reject) => {
            switch (requiredPackage) {
                case "videojs":
                    if (typeof videojs === "undefined") {
                        loadScript(client.cdn + "/static/js/libs/videojs.js").then(() => {
                            loadStyle(client.cdn + "/static/css/libs/videojs.css").then(() => {
                                loadStyle("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css").then(() => {
                                    InjectCSS(`.vjs-icon-captions:before,
                      .vjs-cosmos:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,
                      .vjs-cosmos:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,
                      .vjs-cosmos .vjs-captions-button .vjs-icon-placeholder:before {
                        content: "\f165";}`);
                                    resolve();
                                });
                            });
                        });
                    } else {
                        resolve();
                    }
                    break;
            }
        });
    }

    global.LoadHandler = {
        css: loadStyle,
        js: loadScript,
        check: fetchDependencies
    };

})(window);