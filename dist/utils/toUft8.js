"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUft8 = void 0;
/**
 *
 * @param {String} data Data
 * @param {String} unicode Encrypt mode
 */
function toUft8(data, unicode = 'base64') {
    return Buffer.from(data).toString(unicode);
}
exports.toUft8 = toUft8;
//# sourceMappingURL=toUft8.js.map