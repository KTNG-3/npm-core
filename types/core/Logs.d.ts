export = Logs;
declare class Logs {
    static logSync(data: any, mode?: string, showup?: any): Promise<void>;
    static getSync(showup?: boolean): Promise<{
        date: Date;
        mode: string;
        data: any;
    }[] | undefined>;
    /**
     *
     * @param {String} path Where to save the logs file.
     * @param {String} name Name of the logs file.
     */
    constructor(path?: string);
    classId: string;
    path: string;
    file: any;
    new(): Promise<void>;
    /**
     *
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     */
    log(data: any, mode?: string, showup?: boolean): Promise<void>;
    SystemInfo(showup?: any): Promise<void>;
    get(showup?: any): Promise<{
        date: Date;
        mode: string;
        data: any;
    }[] | undefined>;
}
declare namespace Logs {
    import log = Logs.logSync;
    export { log };
    import get = Logs.getSync;
    export { get };
}
//# sourceMappingURL=Logs.d.ts.map