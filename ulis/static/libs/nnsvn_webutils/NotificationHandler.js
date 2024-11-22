((global) => {

    const type = {
        success: 'text-success',
        error: 'text-danger',
        danger: 'text-danger',
        warning: 'text-warning',
        caution: 'text-warning',
        info: 'text-info'
    };

    /** Show a notification as a toast on the left-top of the screen
     * @param {object} data 
     * @param {string} data.title
     * @param {string} data.content
     * @param {string} data.type
     * @param {string} data.author 
     * @param {string} data.iconURL
     * @param {number} data.timestamp
     * @param {boolean} data.autohide
     * @param {number} data.delay
     */
    function showNotification(data) {
        const notificationStack = document.getElementById('notificationStack');

        if (!data || !data.content) return logger.error("No content provided");
        data.content = DOMPurify.sanitize(data.content);

        if (!data.timestamp) data.timestamp = Date.now();
        data.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');

        const toastType = type[data.type?.toLowerCase()] || type.info;

        toast.innerHTML = `
        <div class="toast-header">
            ${data.iconURL ? `<img src="${data.iconURL}" class="rounded me-2" alt="${data.author || "..."}">` : ''}
            ${data.title ? `<strong class="me-auto ${toastType}">${data.title}</strong>` : `<strong class="me-auto ${toastType}">Thông báo</strong>`}
            <small class="text-body-secondary">${bt_dateformatter(data.timestamp)}</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body" nns-markdown>${data.content}</div>`;
        notificationStack.appendChild(toast);
        const { autohide, delay } = data;
        const config = {
            autohide: typeof autohide === "boolean" ? autohide : true,
            delay: typeof delay === "number" ? delay : 10000
        };

        const animateFrom = "top";
        const animateOffset = "-48px";

        function getAbsoluteHeight(el) {
            const styles = global.getComputedStyle(el);
            const margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
            return Math.ceil(el.offsetHeight + margin);
        }

        toast.style.position = "relative";
        toast.style[animateFrom] = animateOffset;

        toast.addEventListener("show.bs.toast", () => {
            // Additional slide animation
            setTimeout(() => {
                // Transition is not available until actual animation
                const transition = parseFloat(getComputedStyle(toast).transitionDuration) * 1e3;
                toast.style.transition = `all ${transition * 4}ms cubic-bezier(0.165, 0.840, 0.440, 1.000), opacity ${transition}ms linear`;
                toast.style[animateFrom] = 0;
            }, 0);
        }, {
            once: true
        });

        toast.addEventListener("hide.bs.toast", () => {
            toast.style.transform = `scale(0)`;
            toast.style.marginTop = `-${getAbsoluteHeight(toast)}px`;
        }, {
            once: true
        });

        toast.addEventListener("hidden.bs.toast", () => {
            notificationStack.removeChild(toast);
        }, {
            once: true
        });

        toast.classList.add("toaster");
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast, config);
        toastBootstrap.show();

        // Add to header notification
        addNotification(data);

        // save data to localstorage
        const notificationData = JSON.parse(localStorage.getItem("notificationData")) || [];
        notificationData.push(data);
        localStorage.setItem("notificationData", JSON.stringify(notificationData));
    }

    function addNotification(data) {
        const notificationHeaderBox = document.getElementById("notificationHeaderBox");
        if (!notificationHeaderBox) {
            logger.warn("No notificationHeaderBox found.");
            return;
        }

        if (!data || !data.content) return logger.error("No content provided");

        data.content = DOMPurify.sanitize(data.content);
        data.title = data.title || "Thông báo";

        const a = document.createElement('a');
        a.classList.add('py-6', 'px-7', 'd-flex', 'align-items-center', 'dropdown-item', 'headerNotification');
        a.setAttribute('href', 'javascript:void(0)');

        const shortenContent = data.content.length > 32 ? `${data.content.substring(0, 32)}...` : data.content;

        const avatar = data.avatar ? `<img src="${data.avatar ?? `${client.cdn}/static/svg/icons/inbox.svg`}" loading="lazy" class="rounded-circle" width="40" height="40" alt=${data.author || ""} />` : `<span class="p-2 bg-primary icon icon-md fs-7 rounded-4 ti ti-inbox text-white"></span>`;

        a.innerHTML = `
        <span class="me-3">${avatar}</span>
        <div class="w-75 d-inline-block v-middle">
          <h6 class="mb-1 fw-semibold fs-3">${shortenContent}</h6>
          <span class="d-block fw-normal fs-2" nns-dateformatter>${data.timestamp}</span>
        </div>
        `;

        document.getElementById("noNotification")?.remove();
        const simplebarContentDiv = notificationHeaderBox.querySelector('.simplebar-content');
        const targetDiv = simplebarContentDiv || notificationHeaderBox;
        targetDiv.prepend(a);

        newNotificationIndicator.style.visibility = "visible";

        // add event listener
        a.addEventListener("click", function () {
            // delete itself
            a.remove();

            // delete from localstorage
            let notificationData = JSON.parse(localStorage.getItem("notificationData"));
            if (!notificationData) return;

            // delete using id
            notificationData = notificationData.filter(item => item.id !== data.id);
            localStorage.setItem("notificationData", JSON.stringify(notificationData));

            checkIfNotificationEmpty();
        });
    }

    function checkIfNotificationEmpty() {
        const newNotificationIndicator = document.getElementById("newNotificationIndicator");

        if (!newNotificationIndicator) {
            logger.warn("No newNotificationIndicator found.");
            return;
        }

        const notificationData = JSON.parse(localStorage.getItem("notificationData"));

        if (!notificationData?.length) {
            newNotificationIndicator.style.visibility = "hidden";
            const notificationHeaderBox = document.getElementById("notificationHeaderBox");
            const simplebarContentDiv = notificationHeaderBox.querySelector('.simplebar-content');
            const targetDiv = simplebarContentDiv || notificationHeaderBox;

            const noNotificationDiv = document.createElement("div");
            noNotificationDiv.className = "dropdown-item text-center text-muted-dark py-3 disabled";
            noNotificationDiv.id = "noNotification";
            noNotificationDiv.textContent = "Hiện tại không có thông báo nào.";

            targetDiv.innerHTML = "";
            targetDiv.appendChild(noNotificationDiv);
        } else {
            newNotificationIndicator.style.visibility = "visible";
        }
    }

    function getNotificationData() {
        return JSON.parse(localStorage.getItem("notificationData"));
    }

    function showPopup(data) {
        if (!data || !data.content) return logger.error("No content provided");
        const sanitizedContent = DOMPurify.sanitize(data.content);

        // Remove existing popup if present
        const existingPopup = document.getElementById('popupNotifModal');
        if (existingPopup) {
            existingPopup.remove();
            // clear all backdrop
            document.querySelectorAll('.modal-backdrop').forEach(item => item.remove());
        }

        // Create new popup
        const popup = document.createElement('div');
        popup.id = 'popupNotifModal';
        popup.className = 'modal fade';
        popup.tabIndex = -1;
        popup.setAttribute('aria-labelledby', 'popupNotifModalLabel');
        popup.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="popupNotifModalLabel">Thông báo</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center p-4" nns-markdown>${sanitizedContent}</div>
                    <div class="modal-footer">
                        <div class="w-100">
                            <div class="row">
                                <div class="col">
                                    <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        document.body.appendChild(popup);

        // Initialize and show the modal
        const modal = new bootstrap.Modal(popup);
        modal.show();

        // Ensure the popup is removed once hidden
        popup.addEventListener('hidden.bs.modal', () => popup.remove());
    }

    function clearNotification() {
        // Select all notifications and remove them
        document.querySelectorAll(".headerNotification").forEach(item => item.remove());

        // Clear notification data from localStorage
        localStorage.removeItem("notificationData");

        // Check and handle if the notification list is now empty
        checkIfNotificationEmpty();
    }

    global.NotificationHandler = {
        show: showNotification,
        add: addNotification,
        get: getNotificationData,
        clear: clearNotification,
        checkIfEmpty: checkIfNotificationEmpty,
        showPopup: showPopup
    };

    global.InjectCSS(".toast.toaster:not(.show) {display: block !important;}");

    // Intialize Notification
    global.addEventListener("DOMContentLoaded", () => {
        checkIfNotificationEmpty();
        // Load notification from localstorage only when dropdown is shown
        $("#dropNotiBox").one("show.bs.dropdown", function () {
            const NotificationHandler = global.NotificationHandler; // use this for better obfuscation

            // Load notification from localstorage
            const notificationData = NotificationHandler.get();
            if (notificationData) {
                // sort by date and limit to first 31 elements
                const limitedData = notificationData
                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                    .slice(0, 31);

                // Iterate over the elements in reverse order
                [...limitedData].reverse().forEach(item => NotificationHandler.add(item));
            }

            const clearAllNotificationsBtn = document.getElementsByClassName("clearAllNotifications");
            Array.from(clearAllNotificationsBtn).forEach((item) => {
                item.addEventListener("click", function () {
                    const headerNotifications = document.querySelectorAll(".headerNotification");
                    if (headerNotifications.length == 0) return;
                    headerNotifications.forEach(item => item.remove());

                    localStorage.removeItem("notificationData");
                    checkIfNotificationEmpty();
                });
            });
        });
    });
})(window);