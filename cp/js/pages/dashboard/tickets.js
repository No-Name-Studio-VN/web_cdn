(()=>{window.ContentHandler.ToggleMultiSelect("#supportRoleID",{placeholder:"Select a role"}),$("#maxTicket").on("input",function(){v=$("#maxTicket").val(),$("#maxTicketvalue").text(v)});const e=document.getElementById("togglemodal");e&&e.addEventListener("show.bs.modal",t=>{t=t.relatedTarget;e.querySelector(".modal-footer").innerHTML=`
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
            <button class="btn btn-primary" type="submit" name="${t.getAttribute("data-tggle")}">${i18next.t("dashboard.apply")}</button>
            `})})();