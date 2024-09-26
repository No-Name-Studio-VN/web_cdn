function buttonActions(e,a,t){return`
    <div class="action-btn">
      <a href="javascript:void(0)" type="button" class="text-info edit" data-bs-toggle="modal" data-bs-target="#serverinfo_Modal" data-bs-id="${e}" id="${e}">
        <i class="ti ti-pencil fs-5"></i>
      </a>
    </div>`}function formatAvatarWithName(e,a,t){return`
    <div class="d-flex align-items-center">
        <img src="${e.avtUrl}" alt="avatar" class="rounded-circle" width="35">
        <div class="ms-3">
            <div class="user-meta-info">
                <h6 class="user-name mb-0">${e.name}</h6>
            </div>
        </div>
    </div>`}(()=>{$.ajax({url:"/admin/serverlist/list",method:"GET",contentType:"application/json",success:async function(e){e=e.data;await e.forEach((e,a)=>{e.avtUrl=e.iconURL||`https://cdn.discordapp.com/embed/avatars/${Math.floor(6*Math.random())}.png`,e.channelCount=e.channels.length,e.roleCount=e.roles.length,e.emojiandstickerCount=e.emojis.length+e.stickers.length,e.nameandavt={avtUrl:e.avtUrl,name:e.name}}),$("#totalsv").text(e.length),$("#totalmembers").text(e.reduce((e,a)=>e+a.memberCount,0)),$("#sl_table").bootstrapTable({...window.CustomBT_Config,cookieIdTable:"serverlist_table",toolbar:"#sl_table_toolbar",data:e})},error:function(e){window.NotificationHandler.show({content:e.responseJSON.error,type:"error"})}});let a=document.getElementById("serverinfo_Modal");a.addEventListener("show.bs.modal",e=>{var e=e.relatedTarget;e.classList.add("active","modalactive");let r=a.querySelector(".modal-body"),l=a.querySelector(".modal-footer");r.innerHTML=`<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">${i18next.t("dashboard.loading")}...</span></div></div>`,"#serverinfo_Modal"===e.getAttribute("data-bs-target")&&(e=e.getAttribute("data-bs-id"),$.ajax({url:"/admin/serverlist/get/"+e,method:"GET",contentType:"application/json",success:function(e){var e=e.data,a={name:e.name,members:e.memberCount,channels:e.channels.length,bans:e.bans.length,roles:e.roles.length,emojis:e.emojis.length,stickers:e.stickers.length,isAvailable:e.available,shard:e.shardId,banner:e.banner,description:e.description||"None",verificationLevel:e.verificationLevel,vanity:{URL:e.vanityURLCode||"None",URLUses:e.vanityURLUses||"None"},nsfwLevel:e.nsfwLevel,premiumSubscriptionCount:e.premiumSubscriptionCount,isLarge:e.large,afk:{timeout:e.afkTimeout,channel:e.afkChannelId},premiumTier:e.premiumTier,explicitContentFilter:e.explicitContentFilter,botJoined:e.joinedTimestamp,maximumMembers:e.maximumMembers,maxVideoChannelUsers:e.maxVideoChannelUsers,rulesChannelId:e.rulesChannelId,publicUpdatesChannelId:e.publicUpdatesChannelId,preferredLocale:e.preferredLocale,owner:e.ownerId,verified:!0===e.verified},t=[a.description,a.verificationLevel+"",a.rulesChannelId?`<#${a.rulesChannelId}>`:"None",a.members+"",a.channels+"",a.roles+"",a.emojis+"",a.stickers+"",a.bans+"",a.vanity.URL+"",a.vanity.URLUses+"",a.nsfwLevel+"",a.premiumSubscriptionCount+"",a.premiumTier+"",a.isLarge?"Yes":"No",a.maximumMembers+"",a.afk.timeout+"",a.afk.channel?`<#${a.afk.channel}>`:"None",a.maxVideoChannelUsers+"",a.preferredLocale,`<@${a.owner}>`,`<t:${a.botJoined}:f>`];let n=`
                    <div class="row">
                      <label for="sv_name" class="col-lg-2 form-label">Name</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" id="sv_name" value="${e.name}" readonly>
                      </div>
                    </div>

                    <div class="row">
                      <label for="sv_id" class="col-lg-2 col-form-label">ID</label>
                      <div class="col-sm-10">
                        <div class="input-group">
                          <input class="form-control" id="sv_id" value="${e.id}" aria-label="ID" readonly>
                          <span class="input-group-text">#</span>
                        </div>
                      </div>
                    </div>
                    `;var s,i=i18next.t("checkGuild.embed.fields",{returnObjects:!0});for(s in t)t.hasOwnProperty(s)&&(n+=`
                            <div class="row">
                                <label for="${i[s].name}" class="col-lg-2 form-label">${i[s].name}</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="${i[s].name}" value="${t[s]}" readonly>
                                </div>
                            </div>`);a.banner&&(n+=`
                        <div class="row">
                            <img src="${a.banner.url}">
                        </div>`),r.innerHTML=n,document.getElementById("editform").setAttribute("action","/admin/serverlist/"+e.id),l.innerHTML=`
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>
                    <a href="javascript:void(0)" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#GAdeleteModal" data-bs-id="${e.id}">Delete</a>
                    `},error:function(e){window.NotificationHandler.show({content:e.responseJSON.error,type:"error"}),r.innerHTML=window.ContentHandler.createAlert(e.responseJSON.error),l.innerHTML=`<button type="button" class="btn btn-dark" data-bs-dismiss="modal">${i18next.t("dashboard.cancel")}</button>`}}))}),a.addEventListener("hidden.bs.modal",e=>{document.getElementsByClassName("modalactive")[0].classList.remove("active","modalactive")})})();