const _Color = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

const _Effect = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
};

const _Background = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

const _NewLine = '\n';

/**
* 
* @param {String} text Text
* @param {String} color Color
* @returns {String}
*/
function colored(text:string, color:keyof typeof _Color):string {
    return `${_Color[color]}${text}${_Effect.reset}`;
}

export {
    _Color as color,
    _Effect as effect,
    _Background as background,
    _NewLine as newline,
    colored,
};