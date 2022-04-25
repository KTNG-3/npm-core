"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosCookie = void 0;
//import
const tough_cookie_1 = require("tough-cookie");
const Logs_1 = require("./Logs");
//class
class AxiosCookie {
    /**
     *
     * @param {toughCookie.Serialized} cookie CookieJar toJSON
     * @returns {toughCookie.Serialized}
     */
    constructor(cookie = false) {
        this.classId = '@ing3kth/core/AxiosCookie';
        if (cookie) {
            this.cookie = tough_cookie_1.CookieJar.fromJSON(cookie);
        }
        else {
            this.cookie = new tough_cookie_1.CookieJar();
        }
    }
    /**
     *
     * @returns {toughCookie.Serialized}
     */
    toJSON() {
        Logs_1.Logs.log("Export " + this.classId);
        return this.cookie.toJSON();
    }
    /**
     *
     * @param {toughCookie.Serialized} cookie CookieJar toJSON
     */
    static fromJSON(cookie) {
        Logs_1.Logs.log("Import " + '@ing3kth/core/AxiosCookie');
        return new AxiosCookie(cookie);
    }
}
exports.AxiosCookie = AxiosCookie;
//# sourceMappingURL=AxiosCookie.js.map