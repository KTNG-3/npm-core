"use strict";
//function
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromUft8 = exports.toUft8 = void 0;
/**
 *
 * @param {string} data Data
 * @param {string} unicode Encrypt mode (default: base64)
 * @returns {string}
 */
function toUft8(data, unicode = 'base64') {
    return Buffer.from(data).toString(unicode);
}
exports.toUft8 = toUft8;
/**
 *
 * @param data Data
 * @param unicode Decrypt mode (default: base64)
 * @returns {string}
 */
function fromUft8(data, unicode = 'base64') {
    return Buffer.from(data, unicode).toString();
}
exports.fromUft8 = fromUft8;
