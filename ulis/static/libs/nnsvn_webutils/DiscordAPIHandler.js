((global) => {
    const ChannelType = {
        GuildText: 0,
        DM: 1,
        GuildVoice: 2,
        GroupDM: 3,
        GuildCategory: 4,
        GuildAnnouncement: 5,
        AnnouncementThread: 10,
        PublicThread: 11,
        PrivateThread: 12,
        GuildStageVoice: 13,
        GuildDirectory: 14,
        GuildForum: 15,
        GuildMedia: 16,
        GuildNews: 5,
        GuildNewsThread: 10,
        GuildPublicThread: 11,
        GuildPrivateThread: 12
    };

    const permissions = [
        {
            name: 'General',
            active: false,
            permissions: [
                { active: false, id: 'Administrator', name: 'Administrator', value: 0x8, auto: false },
                { active: false, id: 'ManageRoles', name: 'Manage Roles', value: 0x10000000, auto: false },
                { active: false, id: 'KickMembers', name: 'Kick Members', value: 0x2, auto: false },
                { active: false, id: 'CreateInstantInvite', name: 'Create Instant Invite', value: 0x1, auto: true },
                { active: false, id: 'ManageNicknames', name: 'Manage Nicknames', value: 0x8000000, auto: true },
                { active: false, id: 'ManageGuild', name: 'Manage Server', value: 0x20, auto: false },
                { active: false, id: 'ManageChannels', name: 'Manage Channels', value: 0x10, auto: false },
                { active: false, id: 'BanMembers', name: 'Ban Members', value: 0x4, auto: false },
                { active: false, id: 'ChangeNickname', name: 'Change Nickname', value: 0x4000000, auto: true },
                { active: false, id: 'ManageWebhooks', name: 'Manage Webhooks', value: 0x20000000, auto: false },
                { active: false, id: 'ManageEmojisAndStickers', name: 'Manage Emojis', value: 0x40000000, auto: true },
                { active: false, id: 'ManageGuildExpressions', name: 'Manage Guild Expressions', value: 0x400000000, auto: true },
                { active: false, id: 'ViewAuditLog', name: 'View Audit Log', value: 0x80, auto: true },
                { active: false, id: 'ViewGuildInsights', name: 'View Server Insights', value: 0x80000, auto: true },
                { active: false, id: 'ViewChannel', name: 'View Channel', value: 0x400, auto: true }
            ]
        },
        {
            name: 'Text',
            active: false,
            permissions: [
                { active: false, id: 'SendTTSMessages', name: 'Send TTS Messages', value: 0x1000, auto: true },
                { active: false, id: 'EmbedLinks', name: 'Embed Links', value: 0x4000, auto: true },
                { active: false, id: 'ReadMessageHistory', name: 'Read Message History', value: 0x10000, auto: true },
                { active: false, id: 'UseExternalEmojis', name: 'Use External Emojis', value: 0x40000, auto: true },
                { active: false, id: 'SendMessages', name: 'Send Messages', value: 0x800, auto: true },
                { active: false, id: 'ManageMessages', name: 'Manage Messages', value: 0x2000, auto: false },
                { active: false, id: 'AttachFiles', name: 'Attach Files', value: 0x8000, auto: true },
                { active: false, id: 'MentionEveryone', name: 'Mention Everyone', value: 0x20000, auto: true },
                { active: false, id: 'AddReactions', name: 'Add Reactions', value: 0x40, auto: true },
                { active: false, id: 'UseApplicationCommands', name: 'Use Application Commands', value: 0x80000000, auto: true }
            ]
        },
        {
            name: 'Voice',
            active: false,
            permissions: [
                { active: false, id: 'Connect', name: 'Connect', value: 0x100000, auto: true },
                { active: false, id: 'MuteMembers', name: 'Mute Members', value: 0x400000, auto: true },
                { active: false, id: 'MoveMembers', name: 'Move Members', value: 0x1000000, auto: true },
                { active: false, id: 'Speak', name: 'Speak', value: 0x200000, auto: true },
                { active: false, id: 'DeafenMembers', name: 'Deafen Members', value: 0x800000, auto: true },
                { active: false, id: 'UseVAD', name: 'Use Voice Activity', value: 0x2000000, auto: true },
                { active: false, id: 'Stream', name: 'Go Live', value: 0x200, auto: true },
                { active: false, id: 'PrioritySpeaker', name: 'Priority Speaker', value: 0x100, auto: true },
                { active: false, id: 'RequestToSpeak', name: 'Request to Speak', value: 0x100000000, auto: true }
            ]
        }
    ];

    /** Parse permissions from a number
     * @param {BigInt} perms The permissions number
     * @returns {Array<String>} Array of active permissions
     * @example
     * let perms = parsePermissions(2146958591n);
     * console.log(perms); // ['Administrator', 'ManageRoles', 'KickMembers', 'CreateInstantInvite', 'ManageNicknames', 'ManageGuild', 'ManageChannels', 'BanMembers', 'ChangeNickname', 'ManageWebhooks', 'ManageEmojisAndStickers', 'ManageGuildExpressions', 'ViewAuditLog', 'ViewGuildInsights', 'ViewChannel', 'SendTTSMessages', 'EmbedLinks', 'ReadMessageHistory', 'UseExternalEmojis', 'SendMessages', 'AttachFiles', 'MentionEveryone', 'AddReactions', 'UseApplicationCommands', 'Connect', 'MuteMembers', 'MoveMembers', 'Speak', 'DeafenMembers', 'UseVAD', 'Stream', 'PrioritySpeaker', 'RequestToSpeak']
    */
    function parsePermissions(perms) {
        const activePermissions = [];
        if (!isNaN(perms)) {
            for (const sectionId in permissions) {
                if (permissions.hasOwnProperty(sectionId)) { // Add this line
                    const section = permissions[sectionId];
                    for (const permissionId in section.permissions) {
                        if (section.permissions.hasOwnProperty(permissionId)) { // Add this line
                            const permission = section.permissions[permissionId];
                            if ((BigInt(perms) & BigInt(permission.value)) != 0) activePermissions.push(permission.id);
                        }
                    }
                }
            }
        }
        return activePermissions;
    }

    function findPermission(perId) {
        for (const sectionId in permissions) {
            if (permissions.hasOwnProperty(sectionId)) { // Add this line
                const section = permissions[sectionId];
                for (const permissionId in section.permissions) {
                    if (section.permissions.hasOwnProperty(permissionId)) { // Add this line
                        const permission = section.permissions[permissionId];
                        if (permission.id === perId || permission.name === perId) return permission;
                    }
                }
            }
        }
        return null;
    }

    /** Check if the channel type is valid
     * @param {(String|Number)} type The channel type
     * @returns {Boolean}
     */
    function isValidChannelType(type) {
        return typeof type == 'number'
            ? Object.values(ChannelType).includes(type)
            : Object.keys(ChannelType).includes(type);
    }

    /** Convert a channel type to number
     * @param {(String|Number)} type The channel type
     * @returns {Number} Number representation of the channel type
     */
    function convertChannelType(type) {
        return typeof type == 'number'
            ? Object.keys(ChannelType).find(key => ChannelType[key] === type) // If it is a number, find if it is a value of ChannelType
            : ChannelType[type]; // If it is a string, find the value of the key in ChannelType
    }

    // Utility function to perform AJAX requests
    function performAjaxRequest(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                method: "GET",
                contentType: "application/json",
                success: function (res) {
                    resolve(res.data);
                },
                error: function (xhr) {
                    // Ensure rejection with an Error object
                    reject(new Error(xhr.responseJSON?.message || "An error occurred"));
                }
            });
        });
    }

    // Refactored to use the utility function
    function getChannels(guildId, { channelType } = {}) {
        if (!guildId) throw new Error("Guild ID is required");
        const base_url = `/api/guilds/${guildId}/channels`;
        const url = channelType && isValidChannelType(channelType)
            ? `${base_url}?type=${convertChannelType(channelType)}`
            : base_url;
        return performAjaxRequest(url);
    }

    // Refactored to use the utility function
    function getRoles(guildId) {
        if (!guildId) throw new Error("Guild ID is required");
        const url = `/api/guilds/${guildId}/roles`;
        return performAjaxRequest(url);
    }

    global.DiscordAPIHandler = {
        getChannels,
        getRoles,
        parsePermissions,
        findPermission,
    };

})(window);