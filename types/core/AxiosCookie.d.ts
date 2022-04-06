export = AxiosCookie;
declare class AxiosCookie {
    /**
     *
     * @param {Object} cookie CookieJar toJSON
     * @returns {void}
     */
    static fromJSONSync(cookie: Object): void;
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
declare namespace AxiosCookie {
    import fromJSON = AxiosCookie.fromJSONSync;
    export { fromJSON };
}
//# sourceMappingURL=AxiosCookie.d.ts.map