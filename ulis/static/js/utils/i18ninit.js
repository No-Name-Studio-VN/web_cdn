(() => {
    const lang_first_time = "lang_first_time";

    window.getLang = () => document.cookie.replace(/(?:(?:^|.*;\s*)i18next\s*=\s*([^;]*).*$)|^.*$/, "$1") || localStorage.getItem("lang") || document.documentElement.lang || "en";
    const currentLang = getLang();

    async function initializeI18n() {
        try {
            const isFirstTime = localStorage.getItem(lang_first_time);
            let fetchUrl = `/locales/resources.json?lng=${currentLang}&ns=translation`;
            if (isFirstTime) {
                fetchUrl += "&fetch=true";
            }

            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            await i18next.init({
                lng: currentLang, // if you're using a language detector, do not define the lng option
                debug: false,
                resources: data
            });
            // set moment locale
            moment.locale(currentLang);
            
            logger.info('i18n initialized', currentLang);
            localStorage.removeItem(lang_first_time);
        } catch (error) {
            logger.error('unable to initialize i18n', error);
        }
    }

    async function setLanguage(selectedLang) {
        try {
            const response = await fetch('/settings/setlang', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ lang: selectedLang })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            localStorage.setItem("lang", selectedLang);
            document.cookie = `i18next=${selectedLang}; path=/`;

            // set this to make browser fetch the new language resources
            localStorage.setItem(lang_first_time, "true");
            window.NotificationHandler.show({
                content: `Language changed to ${res.data}. App will automatically reload in moments.`,
            });
            setTimeout(() => {
                location.reload();
            }, 500);
        } catch (error) {
            logger.error(`Setlang error`, error.message);
            window.NotificationHandler.show({
                content: "An error occurred while changing the language.",
                type: "error"
            });
        }
    }

    initializeI18n();

    window.addEventListener('DOMContentLoaded', function () {
        const langHeaderBox = document.getElementById('langHeaderBox');
        if (!langHeaderBox) return logger.warn('langHeaderBox not found');

        const simplebarContentDiv = langHeaderBox.querySelector('.simplebar-content');
        const targetDiv = simplebarContentDiv || langHeaderBox;

        $.get('/api/locales', function (res) {
            const langOptions = res.data.map(lang =>
                `<a role="button" href="javascript:void(0)" class="d-flex align-items-center gap-2 py-3 px-4 dropdown-item" to="${lang.value}">
                    <div class="position-relative">
                        <img src="${client.cdn}/static/svg/flags/${lang.value}.svg" alt="${lang.label}" class="rounded-circle object-fit-cover round-20">
                    </div>
                    <p class="mb-0 fs-3">${lang.name}</p>
                </a>`).join('');

            targetDiv.innerHTML = langOptions;

            const allSupportedLangs = res.data.map(lang => lang.value);
            rxjs.fromEvent(targetDiv.querySelectorAll('.dropdown-item'), 'click').subscribe(function (event) {
                const selectedLang = event.target.getAttribute('to');
                if (!allSupportedLangs.includes(selectedLang)) {
                    return NotificationHandler.show({
                        content: "Invalid language selected.",
                        type: "error"
                    });
                } else if (selectedLang === currentLang) {
                    return NotificationHandler.show({
                        content: "Language is already set to this.",
                        type: "info"
                    });
                } else setLanguage(selectedLang);
            });
        });
    });
})();