//import
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;
const Logs = require('./Logs');

//class
class AxiosCookie {
    constructor(cookie = false) {
        this.classId = '@ing3kth/core/AxiosCookie';
        if(cookie){
            this.cookie = toughCookie.fromJSON(cookie);
        }else {
            this.cookie = new toughCookie();
        }

        return this.cookie;
    }

    toJSON() {
        Logs.log("Export " + this.classId,);
        return this.cookie.toJSON();
    }

    static fromJSONSync(cookie) {
        Logs.log("Import " + this.classId,);
        return new AxiosCookie(cookie);
    }
}

//export
AxiosCookie.fromJSON = AxiosCookie.fromJSONSync;

module.exports = AxiosCookie;