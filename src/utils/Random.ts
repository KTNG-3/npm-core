/**
 * 
 * @param {Number} min Minimum value.
 * @param {Number} max Maximum value.
 * @returns {Number}
 */
function Random(min:number = 0, max:number):Number {
    if(min === max) {
        return min;
    }

    if(min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    const randomMin:number = Math.ceil(min);
    const randomMax:number = Math.floor(max);
    const _random:number = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

    return _random;
}

export { Random };