(function (global) {
    class themeController {
        constructor({ name, textColor, bgColor, bgImage, headerImage }) {
            this.name = name;
            this.themeDescription = `Enable ${name} Theme`;
            this.textColor = textColor;
            this.bgColor = bgColor;
            this.headerImage = headerImage;
            this.bgImage = bgImage;

            this.modifyDiv = ['.mini-nav', '.nav-logo', '.sidebar-nav', '.topbar'];
            this.defaultBgColor = 'var(--bs-body-bg)';
            this.defaultTextColor = 'var(--bs-body-color)';
            this.switchId = name + '_switch';
        }

        addSwitch() {
            const profileDropdown = document.querySelector('.profile-dropdown');
            if (!profileDropdown) return logger.warn('profileDropdown not found!');

            const simplebarContentDiv = profileDropdown.querySelector('.simplebar-content');

            const a = document.createElement('div');
            a.classList.add('d-grid', 'px-7', 'pt-8', 'py-4');
            a.innerHTML = `
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="${this.switchId}">
                <label class="form-check-label" for="${this.switchId}">
                    <span>${this.themeDescription}</span>
                </label>
            </div>`;

            (simplebarContentDiv || profileDropdown).append(a);

            rxjs.fromEvent(document.getElementById(this.switchId), 'change')
                .pipe(
                    rxjs.map(event => event.target.checked)
                )
                .subscribe(checked => {
                    const themeStatus = checked ? 'true' : 'false';
                    localStorage.setItem(this.switchId, themeStatus);
                    this[checked ? 'enable' : 'disable']();
                });
        }
        enable() {
            this.modifyDiv.forEach((element) => {
                $(element).css("background", `${this.bgColor} !important`);
            });
            $(".nav-link, .sidebar-link, .nav-small-cap").css("color", this.textColor);

            $("body").css({
                "background-image": `url('${this.bgImage}')`,
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover"
            });

            const contentHeaderBanner = document.getElementById('contentHeaderBanner');
            if (contentHeaderBanner) contentHeaderBanner.innerHTML = `<img class='img-fluid my-n4' style='height: 200px; margin-right: -30px;' src='${this.headerImage}'>`;
        }
        disable() {
            this.modifyDiv.forEach((element) => {
                $(element).css("background", this.defaultBgColor);
            });
        
            $(".nav-link, .sidebar-link, .nav-small-cap").css("color", this.defaultTextColor);
            $("body").css("background-image", "none");
            const contentHeaderBanner = document.getElementById('contentHeaderBanner');
            if (contentHeaderBanner) contentHeaderBanner.innerHTML = '';
        }
    }

    class Tet extends themeController {
        constructor() {
            super({
                name: 'Tet',
                textColor: "#e6edf3",
                bgColor: "linear-gradient(133deg, rgba(253,29,29,1) 13%, rgba(252,125,55,1) 43%, rgba(252,98,48,1) 66%, rgba(245,189,64,1) 93%)",
                headerImage: `${client.cdn}/static/media/newyear.png`,
                bgImage: `${client.cdn}/static/media/new.png`
            });
        }
    }

})(window);