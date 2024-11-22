((global) => {
    function toClipboard(text) {
        if (!text) throw new Error("No text to copy");
        if (text.endsWith("#")) text = text.slice(0, -1);
        navigator.clipboard.writeText(text);
        window.NotificationHandler.show({
            content: "Đã sao chép vào bộ nhớ tạm",
            type: "success"
        });
    }
    /** Injects custom CSS into the document
     * @param {string} css 
     */
    function InjectCSS(css) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(css);
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }

    function AnimateBackground({ light = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)", dark = "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)", duration = "15s" } = {}) {
        InjectCSS(`:root, [data-bs-theme="light"] { --bg: ${light} }
        [data-bs-theme=dark] { --bg: ${dark} }
        body { background: var(--bg); background-size: 400% 400%; animation: bg_gradient_animate ${duration} ease infinite; height: 100vh }
    
        @keyframes bg_gradient_animate {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
        }`);
    }
    
    /** Debounce function
     * @param {function} func
     * @param {number} wait
     * @returns {function}
     */
    function debounce(callback, wait) {
        let timeoutId = null;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                callback(...args);
            }, wait);
        };
    };

    Object.assign(global, { toClipboard, InjectCSS, AnimateBackground, debounce });

})(window);