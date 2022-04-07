export = Logs;
declare class Logs {
    /**
     *
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
     */
    static log(data: any, mode?: string, showup?: boolean): string;
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    static get(showup?: boolean): Object;
    /**
     * @param {Number} times Number of times to pre create the log.
     */
    static preCreate(times?: number): Promise<void>;
    /**
     * @param {String} fileName File name.
     * @param {String} path Where to save the logs file.
     */
    constructor(fileName?: string, path?: string);
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
     * @returns {any}
     */
    log(data: any, mode?: string, showup?: boolean): any;
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
//# sourceMappingURL=Logs.d.ts.map