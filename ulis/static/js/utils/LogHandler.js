(function (global) {
    const colorMap = {
        log: 'cyan',
        warn: 'magenta',
        error: 'yellow',
        debug: 'blue',
        cmd: 'green',
        ready: 'red',
        load: 'gray',
        event: 'blue',
        info: 'green'
    };

    // Mapping of ANSI color codes to CSS colors
    const colorANSIMap = {
        "\x1b[30m": "black",
        "\x1b[31m": "red",
        "\x1b[32m": "green",
        "\x1b[33m": "yellow",
        "\x1b[34m": "blue",
        "\x1b[35m": "magenta",
        "\x1b[36m": "cyan",
        "\x1b[37m": "white",
        "\x1b[90m": "grey",
        "\x1b[39m": "" // Reset to default
    };

    global.logger = {
        log: (content, type = 'log') => {
            // if content is object, convert to string
            if (typeof content === 'object') {
                content = JSON.stringify(content, null, 2);
            }

            if (typeof DOMPurify != "function") DOMPurify.sanitize(content);

            const date = Date.now();
            const formatter = new Intl.DateTimeFormat('en', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const [{ value: month }, , { value: day }, , { value: year }, , { value: hour }, , { value: minute }, , { value: second }] = formatter.formatToParts(date);

            const timestamp = `[${day}-${month}-${year} ${hour}:${minute}:${second}]:`;
            const color = colorMap[type];
            const logData = [`${timestamp} %c${type.toUpperCase()}:`, `color: ${color}`, `${content}`];
            return console.log.apply(null, logData);
        },
        error: (...content) => global.logger.log(content.join(' '), 'error'),
        warn: (...content) => global.logger.log(content.join(' '), 'warn'),
        debug: (...content) => global.logger.log(content.join(' '), 'debug'),
        cmd: (...content) => global.logger.log(content.join(' '), 'cmd'),
        ready: (...content) => global.logger.log(content.join(' '), 'ready'),
        load: (...content) => global.logger.log(content.join(' '), 'load'),
        event: (...content) => global.logger.log(content.join(' '), 'event'),
        info: (...content) => global.logger.log(content.join(' '), 'info'),

        // Function to replace ANSI codes with HTML span elements
        ansiToHtml: (log) => {
            return Object.entries(colorANSIMap).reduce((acc, [ansiCode, color]) => {
                const replacement = color ? `<span style="color: ${color};">` : "</span>";
                return acc.replace(new RegExp(ansiCode.replace(/\[/g, "\\["), 'g'), replacement);
            }, log);
        }
    };
})(window);