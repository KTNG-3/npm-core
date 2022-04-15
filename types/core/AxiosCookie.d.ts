export = AxiosCookie;
declare class AxiosCookie {
    /**
     *
     * @param {Object} cookie CookieJar toJSON
     * @returns {void}
     */
    static fromJSON(cookie: Object): void;
    /**
     *
     * @param {Object} cookie CookieJar toJSON
     * @returns {Object}
     */
    constructor(cookie?: Object);
    classId: string;
    cookie: any;
    /**
     *
     * @returns {Object}
     */
    toJSON(): Object;
}
//# sourceMappingURL=AxiosCookie.d.ts.map