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

    const _defaultSettings: makeBlurConfig = {
        message: '',
        replaceWith: '?',
        percent: 45,
    }
    const _config: makeBlurConfig = { ..._defaultSettings, ...config };

    const split_message = String(_config.message).split('');
    const _buur = [];

    for (let i = 0; i < split_message.length; i++) {
        const _random = Random(0, 100);
        if (_random <= Number(_config.percent)) {
            _buur.push(_config.replaceWith);
        } else {
            _buur.push(split_message[i]);
        }
    }

    return String(_buur.join('')).toUpperCase();
}

//export

export { makeBlur };

export type { makeBlurConfig };