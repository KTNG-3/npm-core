import { IFindInArray } from "../interface/IFindInArray";

/**
 * @param {Array<any>} array Array
 * @param {any} target Target To Find In Array
 * @returns {IFindInArray}
 */
 function start(array: Array<any>, target:any):IFindInArray {
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

    const _Find:IFindInArray = find(array, target, Number(0), Number(array.length));

    if(!_Find){
        return normal(array, target);
    }

    return _Find;
}

/**
 * @param {Array<any>} array Array
 * @param {any} target Target To Find In Array
 * @param {Number} start Start Path in Array to find Target
 * @param {Number} end End Path in Array to find Target
 * @returns {IFindInArray}
 */
function find(array: Array<any>, target:any, start:number = 0, end:number = array.length):IFindInArray {
    if (start > end){
        return normal(array, target);
    }

    const middle:number = Math.floor( (start + end) / 2 );

    if(array[middle] === target){
        return {
            find: true,
            position: middle,
        };
    }

    if(array[middle] > target){
        return find(array, target, start, middle - 1);
    }
    
    if(array[middle] < target){
        return find(array, target, middle + 1, end);
    }

    return {
        find: false,
        position: NaN,
    }
}

/**
 * 
 * @param {Array<any>} array Array
 * @param {any} target Target To Find In Array
 * @returns {IFindInArray}
 */
function normal(array: Array<any>, target:any):IFindInArray {
    for (let i in array) {
        if (array[Number(i)] === target) {
            return {
                find: true,
                position: Number(i),
            }
        }
    }

    return {
        find: false,
        position: NaN,
    };
}

export {
    start,
    find,
    normal,
};