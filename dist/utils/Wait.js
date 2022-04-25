"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
/**
 *
 * @param {Number} ms
 * @returns {Promise<Number>}
 */
async function wait(ms) {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
exports.wait = wait;
//# sourceMappingURL=Wait.js.map