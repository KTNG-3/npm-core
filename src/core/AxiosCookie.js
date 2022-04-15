//import
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;
const Logs = require('./Logs');

//class
class AxiosCookie {
    /**
     * 
     * @param {Object} cookie CookieJar toJSON
     * @returns {Object}
     */
    constructor(cookie = false) {
        this.classId = '@ing3kth/core/AxiosCookie';
        if(cookie){
            this.cookie = toughCookie.fromJSON(cookie);
        }else {
            this.cookie = new toughCookie();
        }

        return this.cookie;
    }

    /**
     * 
     * @returns {Object}
     */
    toJSON() {
        Logs.log("Export " + this.classId);
        return this.cookie.toJSON();
    }

    /**
     * 
     * @param {Object} cookie CookieJar toJSON
     * @returns {void}
     */
    static fromJSON(cookie) {
        Logs.log("Import " + this.classId);
        return new AxiosCookie(cookie);
    }
}

//export
module.exports = AxiosCookie;