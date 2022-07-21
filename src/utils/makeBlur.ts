//import

import { Random } from "./Random";

//interface

interface makeBlurConfig {
    message: string,
    replaceWith?: string,
    percent?: number,
}

//function

/**
 * Text Blur
 * @param {makeBlurConfig} config Blur Config
 * @returns {string}
 */
function makeBlur(config: makeBlurConfig | string): string {
    if (typeof config === 'string') {
        config = {
            message: config,
        }
    }

    const _config: makeBlurConfig = {
        ...{
            message: '',
            replaceWith: '?',
            percent: 45,
        },
        ...config
    };

    const _buur = [];

    for (const _message of String(_config.message).split('')) {
        if (Random(0, 100) <= Number(_config.percent)) {
            _buur.push(_config.replaceWith);
        } else {
            _buur.push(_message);
        }
    }

    return String(_buur.join('')).toUpperCase();
}

//export

export { makeBlur };

export type { makeBlurConfig };