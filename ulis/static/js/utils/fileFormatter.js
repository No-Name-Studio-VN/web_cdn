(() => {
    const CONFIG = Object.freeze({
        fileTypes: {
            'application/pdf': {
                label: 'Tệp PDF',
                icon: '/static/svg/filetypes/pdf-icon.svg'
            },
            'application/msword': {
                label: 'Tệp Word',
                icon: '/static/svg/filetypes/google-docs-icon.svg',
                isOffice: true
            },
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
                label: 'Tệp Word',
                icon: '/static/svg/filetypes/google-docs-icon.svg',
                isOffice: true
            },
            'application/vnd.ms-powerpoint': {
                label: 'Tệp PowerPoint',
                icon: '/static/svg/filetypes/google-slides-icon.svg',
                isOffice: true
            },
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': {
                label: 'Tệp PowerPoint',
                icon: '/static/svg/filetypes/google-slides-icon.svg',
                isOffice: true
            },
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
                label: 'Tệp Excel',
                icon: '/static/svg/filetypes/google-sheets-icon.svg',
                isOffice: true
            },
            'text/plain': {
                label: 'Tệp văn bản',
                icon: '/static/svg/filetypes/google-docs-icon.svg'
            },
            'image/jpeg': {
                label: 'Tệp ảnh',
                icon: '/static/svg/filetypes/image-icon.svg'
            },
            'image/png': {
                label: 'Tệp ảnh',
                icon: '/static/svg/filetypes/image-icon.svg'
            },
            'image/gif': {
                label: 'Tệp ảnh',
                icon: '/static/svg/filetypes/image-icon.svg'
            },
            'image/webp': {
                label: 'Tệp ảnh',
                icon: '/static/svg/filetypes/image-icon.svg'
            }
        },
        attributes: {
            department: {
                icon: 'ti-home',
                getValue: (data) => data.department || 'Not available'
            },
            year: {
                icon: 'ti-clock-hour-2',
                getValue: (data) => data.schoolYear || 'Not available'
            },
            type: {
                icon: 'ti-file',
                getValue: (data) => CONFIG.fileTypes[data.fileType]?.label || 'Unknown'
            },
            views: {
                icon: 'ti-eye',
                getValue: (data) => `${data.views || 0} lượt xem`
            },
            downloads: {
                icon: 'ti-download',
                getValue: (data) => `${data.downloads || 0} lượt tải về`
            }
        },
        ulis: {
            types: ["Môn chung", "Môn chuyên ngành", "Môn tự chọn"],
            departments: ["Sư phạm tiếng anh", "Tiếng anh", "Ngôn ngữ và Văn hóa Các nước nói tiếng Anh", "Ngôn ngữ và Văn hóa Đức", "Ngôn ngữ và Văn hóa Pháp", "Ngôn ngữ và Văn hóa Hàn Quốc", "Ngôn ngữ và Văn hóa Nga", "Ngôn ngữ và Văn hóa Nhật Bản", "Ngôn ngữ và Văn hóa Trung Quốc", "Ngôn ngữ và Văn hóa Ả Rập", "Đào tạo và Bồi dưỡng Ngoại ngữ", "Tâm lý – Giáo dục", "Ngôn ngữ và Văn hóa Việt Nam", "Ngôn ngữ và Văn hóa Đông Nam Á", "Sau Đại học", "THPT Chuyên Ngoại ngữ", "THCS Ngoại ngữ"],
            schoolYears: ["2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025"]
        }
    });

    // Export to global scope with derived values
    Object.assign(window, {
        ULISconstant: CONFIG.ulis,
        FILE_ATTRIBUTES: CONFIG.attributes,
        OFFICE_FORMATS: new Set(Object.keys(CONFIG.fileTypes).filter(type => CONFIG.fileTypes[type].isOffice)),
        FILE_TYPES_LABELS: Object.fromEntries(Object.entries(CONFIG.fileTypes).map(([k, v]) => [k, v.label])),
        FILE_ICONS: Object.fromEntries(Object.entries(CONFIG.fileTypes).map(([k, v]) => [k, client.cdn + v.icon]))
    });
})();