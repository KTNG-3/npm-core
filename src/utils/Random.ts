//function

/**
 * 
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @returns {number}
 */
function Random(min: number = 0, max: number): number {
    if (min === max) {
        return min;
    }

    if (min > max) {
        const _temp = min;
        min = max;
        max = _temp;
    }

    const randomMin: number = Math.ceil(min);
    const randomMax: number = Math.floor(max);
    const _random: number = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

    return _random;
}

//exports

export { Random };