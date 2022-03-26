export = AxiosCookie;
declare class AxiosCookie {
    static fromJSONSync(cookie: any): AxiosCookie;
    constructor(cookie?: boolean);
    cookie: any;
    toJSON(): any;
}
declare namespace AxiosCookie {
    import fromJSON = AxiosCookie.fromJSONSync;
    export { fromJSON };
}
