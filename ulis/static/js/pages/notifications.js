(() => {
  const notificationHolder = document.getElementById("notificationHolder");
  notificationHolder.innerHTML = ``;
  checkIfNotificationEmptyBox();
  function appendNotificationToBox(data) {
    if (!data || !data.content) return console.error('No content provided');
    if (!data.title) data.title = "Notification";
    const a = document.createElement('a');
    a.classList.add('py-6', 'px-3', "rounded-3", 'd-flex', 'align-items-center', 'bg-hover-light-black', 'headerNotification');
    a.setAttribute('href', 'javascript:void(0)');
    const avatar = data.avatar ?? `${client.cdn}/static/svg/icons/inbox.svg`;
    a.innerHTML = `
        <div class="bg-primary rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
          <img src="${avatar}" alt="" class="img-fluid" width="24" height="24">
        </div>
        <div class="w-75 d-inline-block v-middle">
          <h6 class="mb-1 fw-semibold" nns-markdown>${data.content}</h6>
          <span class="d-block text-body-color">${bt_dateformatter(data.timestamp)}</span>
        </div>
        `;

    document.getElementById("noNotificationBox")?.remove();
    const simplebarContentDiv = notificationHolder.querySelector('.simplebar-content');

    if (simplebarContentDiv) {
      simplebarContentDiv.prepend(a);
    } else notificationHolder.prepend(a);
    newNotificationIndicator.style.visibility = "visible";
    // add event listener
    a.addEventListener('click', function () {
      a.addEventListener("click", function () {
        // delete itself
        a.remove();
        // delete from localstorage
        let notificationData = JSON.parse(localStorage.getItem("notificationData"));
        if (!notificationData) return;
        // delete using id
        notificationData = notificationData.filter(function (item) {
          return item.id !== data.id;
        });
        localStorage.setItem("notificationData", JSON.stringify(notificationData));

        window.NotificationHandler.checkIfEmpty();
      });
    });
  }
  function checkIfNotificationEmptyBox() {
    if (document.querySelectorAll(".headerNotification").length == 0) {
      return notificationHolder.innerHTML = `<div class="d-flex justify-content-center p-5"><div class="text-center text-muted-dark py-3" id="noNotificationBox">Không còn thông báo nào.</div></div>`;
    }
  }
  const notificationData = window.NotificationHandler.get();
  if (notificationData) {
    for (let i = 0; i < notificationData.length; i++) {
      const item = notificationData[i];
      appendNotificationToBox(item);
    };
  };

})();