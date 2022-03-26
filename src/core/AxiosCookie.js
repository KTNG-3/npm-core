//import
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;

//class
class AxiosCookie {
    constructor(cookie = false) {
        if(cookie){
            this.cookie = toughCookie.fromJSON(cookie);
        }else {
            this.cookie = new toughCookie();
        }

        return this.cookie;
    }

    toJSON() {
        return this.cookie.toJSON();
    }

    static fromJSONSync(cookie) {
        return new AxiosCookie(cookie);
    }
}

//export
AxiosCookie.fromJSON = AxiosCookie.fromJSONSync;

module.exports = AxiosCookie;