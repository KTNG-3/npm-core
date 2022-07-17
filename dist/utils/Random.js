"use strict";
//function
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
/**
 *
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @returns {number}
 */
function Random(min = 0, max) {
    if (min === max) {
        return min;
    }
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    const randomMin = Math.ceil(min);
    const randomMax = Math.floor(max);
    const _random = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;
    return _random;
}
exports.Random = Random;
