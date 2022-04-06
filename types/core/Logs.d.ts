export = Logs;
declare class Logs {
    /**
     *
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
     */
    static logSync(data: any, mode?: string, showup?: boolean): string;
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    static getSync(showup?: boolean): Object;
    /**
     *
     * @param {String} path Where to save the logs file.
     */
    constructor(path?: string);
    classId: string;
    path: string;
    file: any;
    /**
     *
     * @returns {void}
     */
    new(): void;
    /**
     *
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
     */
    log(data: any, mode?: string, showup?: boolean): string;
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {void}
     */
    SystemInfo(showup?: boolean): void;
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    get(showup?: boolean): Object;
}
declare namespace Logs {
    import log = Logs.logSync;
    export { log };
    import get = Logs.getSync;
    export { get };
}
//# sourceMappingURL=Logs.d.ts.map