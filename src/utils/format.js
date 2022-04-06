//import
const util = require('util') 

//class
class Format {
    /**
     * 
     * @param {any} data Data to format.
     * @param {String} format Format.
     * @returns {any}
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
                return Number(this.data);
            case 'str' || 'string':
                return String(this.data);
            case 'bool' || 'boolean':
                return Boolean(this.data);
            case 'ms' || 'milliseconds':
                let ms_total = new Date(this.data);
                let second_total = 0;
                let minute_total = 0;
                let hour_total = 0;
                let day_total = 0;

                let ms = ms_total;
                let second = 0;
                let minute = 0;
                let hour = 0;
                let day = 0;

                for(ms > 1000; ms = ms - 1000;) {
                    second + 1;
                    second_total += 1;
                }

                for(second > 60; second = second - 60;) {
                    minute + 1;
                    minute_total += 1;
                }

                for(minute > 60; minute = minute - 60;) {
                    hour + 1;
                    hour_total += 1;
                }

                for(hour > 24; hour = hour - 24;) {
                    day + 1;
                    day_total += 1;
                }

                return {
                    data: {
                        day: day,
                        hour: hour,
                        minute: minute,
                        second: second,
                        milliseconds: ms,
                    },
                    all: {
                        day: day_total,
                        hour: hour_total,
                        minute: minute_total,
                        second: second_total,
                        milliseconds: ms_total,
                    }
                }
            default:
                return util.format(data);
        }
    }
}

//export
module.exports = Format;