((global) => {
    function URLSearchParamsSupport() {
        if ('URLSearchParams' in window) return true;
        return false;
    }
    function updateUrl(urlParams) {
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
        window.history.pushState(null, '', newUrl);
    }

    global.UrlHandler = {
        getQuery: (key) => {
            if (!URLSearchParamsSupport()) return null;
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(key);
        },
        setQuery: (key, value) => {
            if (!URLSearchParamsSupport()) return null;
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set(key, value);
            updateUrl(urlParams);
        },
        removeQuery: (key) => {
            if (!URLSearchParamsSupport()) return null;
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete(key);
            updateUrl(urlParams);

            // if the key is not present in the query string, remove the question mark
            if (urlParams.toString() === "") {
                const blankUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                window.history.pushState(null, '', blankUrl);
            }
        },
        getHash: () => {
            return window.location.hash;
        },
        setHash: (hash) => {
            window.location.hash = hash;
        },

        removeHash: () => {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    };
})(window);