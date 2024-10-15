
const myAvatarURL = "https://cdn.discordapp.com/avatars/736915194772586598/a_bd38c8701ae54348af36c23d912dc987.gif?size=4096"

async function getCdnLink(link) {
    const response = await fetch(link, {
        method: 'GET',
    });
    const cdnLink = response.url;
    return cdnLink || null;
}

function Actions(element) {
    $(".css-1dsl5sr-view > ul > li > ul > li").each(function () {
        const $this = $(this);
        const $href = $this.find("a").attr("href");
        if ($href && !$this.data('event-added')) {

            // if href is same as current page, then highlight it
            if ($href === window.location.pathname) {
                $this.addClass("active");
            }

            // redirect to the link when clicked cuz only a has this event
            $this.click(() => {
                window.location.href = $href;
            });

            // Mark this element as having the event listener added
            $this.data('event-added', true);
        }
    });

    // replace default avatar with my custom avatar
    const profilePicture = $(".css-bt94pf-avatar__loadImage");

    if (profilePicture.length && !profilePicture.data('event-added')) {
        profilePicture.attr("src", myAvatarURL).css("display", "block");
    
        const $avatarInitials = $(".css-wdjw8c-avatar__initials");
        if ($avatarInitials.length) {
            $avatarInitials.css("display", "none");
        }
    
        profilePicture.data('event-added', true);
        console.debug("Profile picture changed");
    }

    (() => {
        $(".ef-name-col__link").each(function () {
            const $this = $(this);
            const $href = $this.attr("href");
            const $name = $this.text();

            if ($href && !$this.data('event-added')) {
                // hide the default a
                $this.css("display", "none");

                // create a new button in the same parent
                const $button = $("<button>").attr("href", $href).addClass("btn btn-primary").text($name);
                $this.parent().append($button);

                $button.on("click", async () => {
                    const pdflink = await getCdnLink($href);
                    console.log(pdflink);
                    if(pdflink) window.ipcRenderer.send("open-new-pdf", pdflink);
                });

                $this.data('event-added', true);
            }
        });
    })();
}

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


window.addEventListener("load", () => {
    // rename it lol
    const copyrightFooter = document.querySelector(".ic-app-footer__links a");
    if (copyrightFooter) copyrightFooter.textContent = "© 2024 VNU-UET, Modified by Le Ngo Duc Manh";

    $(".profile_pic").css("background-image", `url(${myAvatarURL})`);
    $(".ic-avatar img").attr("src", myAvatarURL);

    $(".ic-sidebar-logo__image").attr("src", "https://cdn.discordapp.com/banners/736915194772586598/a_a6e29697cd32fd882ab3f5aac3f9a6b9.gif?size=4096");
    $(".ic-app-header__logomark").css(`background-image`, `url(${window.env.VITE_DEV_SERVER_URL}/images/uetlogo.jpg)`);

    $(".ic-DashboardCard").addClass("card-hover");
});