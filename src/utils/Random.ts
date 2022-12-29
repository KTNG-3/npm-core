/**
 *
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number}
 */
export function random(min = 0, max: number): number {
    // setup

    if (min === max) {
        return min;
    }

    if (min > max) {
        const _temp = min;
        min = max;
        max = _temp;
    }

    // script

    return Math.random() * (max - min + 1) + min;
}
