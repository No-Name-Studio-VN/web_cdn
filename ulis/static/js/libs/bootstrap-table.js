(async () => {
    // Add CSS to make full screen background sync with the theme
    InjectCSS(".bootstrap-table.fullscreen {background: var(--bs-body-bg);}");

    const lang = getLang();
    
    const localesMap = {
        "vi": 'vi-VN',
        "default": 'en-US'
    };
    
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales[localesMap[lang] || localesMap.default]);
    
    $.fn.bootstrapTable.utils.getIconsPrefix = function() {
        return "ti";
    };

    $.fn.bootstrapTable.utils.getIcons = function() {
        return {
            export: "ti-download",
            plus: "ti-plus",
            minus: "ti-minus",
            sort: "ti-sort-ascending-2",
            filterControlSwitchHide: "ti-zoom-out",
            filterControlSwitchShow: "ti-zoom-in",
            paginationSwitchDown: 'ti-square-rounded-arrow-down',
            paginationSwitchUp: 'ti-square-rounded-arrow-up',
            refresh: 'ti-refresh',
            toggleOff: 'ti-toggle-left',
            toggleOn: 'ti-toggle-right',
            columns: 'ti-list',
            fullscreen: 'ti-window-maximize',
            detailOpen: 'ti-maximize',
            detailClose: 'ti-minimize',
            search: 'ti-search',
            clearSearch: 'ti-trash',
            export: 'ti-download',
            print: 'ti-printer',
        };
    };
    $.fn.bootstrapTable.defaults.icons = $.fn.bootstrapTable.utils.getIcons();

    window.CustomBT_Config = {
        buttonsClass: 'primary', // defines the class of table buttons.
        cookie: true, // caching of AJAX requests.
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'], // export types
        filterControl: true,
        filterControlMultipleSearch: true,
        minimumCountColumns: 2,
        pageList: "[10, 25, 50, 100, all]",
        pagination: true,
        search: true,
        showColumns: true,
        showColumnsToggleAll: true,
        showExport: true,
        showFullscreen: false,
        showMultiSort: true,
        showPaginationSwitch: true,
        showPrint: true,
        showSearchClearButton: true,
        showToggle: true,
    };
})();