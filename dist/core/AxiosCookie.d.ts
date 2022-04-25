import { CookieJar as toughCookie } from "tough-cookie";
declare class AxiosCookie {
    classId: string;
    cookie: toughCookie | toughCookie.Serialized | any;
    /**
     *
     * @param {toughCookie.Serialized} cookie CookieJar toJSON
     * @returns {toughCookie.Serialized}
     */
    constructor(cookie?: toughCookie.Serialized | any);
    /**
     *
     * @returns {toughCookie.Serialized}
     */
    toJSON(): toughCookie.Serialized;
    /**
     *
     * @param {toughCookie.Serialized} cookie CookieJar toJSON
     */
    static fromJSON(cookie: toughCookie.Serialized): AxiosCookie;
}
export { AxiosCookie };
//# sourceMappingURL=AxiosCookie.d.ts.map