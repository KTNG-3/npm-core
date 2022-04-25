//import
import { CookieJar as toughCookie } from "tough-cookie";

import { Logs } from "./Logs";

//class
class AxiosCookie {
    classId:string;
    cookie:toughCookie | toughCookie.Serialized | any;

    /**
     * 
     * @param {toughCookie.Serialized} cookie CookieJar toJSON
     * @returns {toughCookie.Serialized}
     */
    constructor(cookie:toughCookie.Serialized | any = false) {
        this.classId = '@ing3kth/core/AxiosCookie';
        if(cookie){
            this.cookie = toughCookie.fromJSON(cookie);
        }else {
            this.cookie = new toughCookie();
        }
    }

    /**
     * 
     * @returns {toughCookie.Serialized}
     */
    toJSON():toughCookie.Serialized {
        Logs.log("Export " + this.classId);
        return this.cookie.toJSON();
    }

    /**
     * 
     * @param {toughCookie.Serialized} cookie CookieJar toJSON
     */
    static fromJSON(cookie:toughCookie.Serialized):AxiosCookie {
        Logs.log("Import " + '@ing3kth/core/AxiosCookie');
        return new AxiosCookie(cookie);
    }
}

//export
export { AxiosCookie };