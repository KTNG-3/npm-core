//import
const util = require('util') 

//class
class Format {
    /**
     * 
     * @param {*} data Data to format.
     * @param {String} format Format.
     */
    constructor(data = 'data', format = false) {
        this.data = data;

        if(!format){
            this.format = String(format).toLowerCase();
        }else {
            return util.format(data);
        }

        switch (this.format) {
            case 'json':
                return JSON.stringify(this.data);
            case 'time' || 'date' :
                return new Date(this.data);
            case 'err' || 'error':
                return new Error(this.data);
            case 'num' || 'number':
                return new Number(this.data);
            case 'str' || 'string':
                return new String(this.data);
            case 'bool' || 'boolean':
                return new Boolean(this.data);
            default:
                return util.format(data);
        }
    }
}

//export
module.exports = Format;