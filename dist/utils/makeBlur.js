"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBlur = void 0;
const Random_1 = require("./Random");
//function
/**
 * Text Blur
 * @param {makeBlurConfig} config Blur Config
 * @returns {string}
 */
function makeBlur(config) {
    if (typeof config === 'string') {
        config = {
            message: config,
        };
    }
    const _config = Object.assign({
        message: '',
        replaceWith: '?',
        percent: 45,
    }, config);
    const _buur = [];
    for (const _message of String(_config.message).split('')) {
        if ((0, Random_1.Random)(0, 100) <= Number(_config.percent)) {
            _buur.push(_config.replaceWith);
        }
        else {
            _buur.push(_message);
        }
    }
    return String(_buur.join('')).toUpperCase();
}
exports.makeBlur = makeBlur;
