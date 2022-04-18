const IFindInArray = require('../interface/IFindInArray');

module.exports = {
    /**
     * @param {Array} array Array
     * @param {any} target Target To Find In Array
     * @param {Number} start Start Path in Array to find Target
     * @param {Number} end End Path in Array to find Target
     * @returns {IFindInArray}
     */
    find: function (array, target, start = 0, end = array.length) {
        if (start > end){
            return module.exports.normal(array, target);
        }

        const middle = Number(Math.floor( (start + end) / 2 ));

        if(array[middle] === target){
            return {
                find: true,
                position: middle,
            };
        }

        if(array[middle] > target){
            return module.exports.find(array, target, start, middle - 1);
        }
        
        if(array[middle] < target){
            return module.exports.find(array, target, middle + 1, end);
        }
    },
    /**
     * @param {Array} array Array
     * @param {any} target Target To Find In Array
     * @returns {IFindInArray}
     */
    start: function (array, target) {
        if(array[0] === target){
            return {
                find: true,
                position: 0,
            };
        }

        if(array[array.length] === target){
            return {
                find: true,
                position: array.length,
            };
        }

        const _Find = module.exports.find(array, target, Number(0), Number(array.length));

        if(!_Find){
            return module.exports.normal(array, target);
        }

        return _Find;
    },
    /**
     * 
     * @param {Array} array 
     * @param {any} target 
     * @returns {IFindInArray}
     */
    normal: function (array, target) {
        for(var i = 0; i < array.length; i++){
            if(array[i] === target){
                return {
                    find: true,
                    position: Number(i),
                };
            }
        }

        return {
            find: false,
            position: NaN,
        };
    }
};