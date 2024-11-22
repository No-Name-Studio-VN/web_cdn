((global) => {
    global.bt_dateformatter = function (value, row, index) {
        try {
            let formattedValue = moment(value);
            if (formattedValue._d == "Invalid Date") formattedValue = moment(Number(value));
            if (formattedValue._d == "Invalid Date") return value;
            return `<span data-bs-toggle="tooltip" data-bs-title="${formattedValue.format("DD MMM YYYY, hh:mm")}">${formattedValue.fromNow()}</span>`;
        } catch (e) {
            logger.error("Date Formatter Error: ", e);
            return value;
        }
    };

    global.bt_indexN = function (cell, row, enumObject, index) {
        const count = enumObject + 1;
        return (`<div>${count}</div>`);
    };

    global.formatTextBreakUrl = function (value, row, index) {
        return `<a class="text-break" href='${value}'>${value}</a>`;
    };
})(window);