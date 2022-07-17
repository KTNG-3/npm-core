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
    const _defaultSettings = {
        message: '',
        replaceWith: '?',
        percent: 45,
    };
    const _config = Object.assign(Object.assign({}, _defaultSettings), config);
    const split_message = String(_config.message).split('');
    const _buur = [];
    for (let i = 0; i < split_message.length; i++) {
        const _random = (0, Random_1.Random)(0, 100);
        if (_random <= Number(_config.percent)) {
            _buur.push(_config.replaceWith);
        }
        else {
            _buur.push(split_message[i]);
        }
    }
    return String(_buur.join('')).toUpperCase();
}
exports.makeBlur = makeBlur;
