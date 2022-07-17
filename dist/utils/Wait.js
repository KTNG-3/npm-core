"use strict";
//function
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
const tslib_1 = require("tslib");
/**
 *
 * @param {number} ms Milliseconds
 * @returns {Promise<any>}
 */
function wait(ms) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    });
}
exports.wait = wait;
