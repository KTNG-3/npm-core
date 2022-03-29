export = Logs;
declare class Logs {
    static logSync(data: any, mode?: string, showup?: any): Promise<void>;
    static getSync(showup?: any): Promise<{
        date: Date;
        mode: string;
        data: any;
    }[] | undefined>;
    /**
     *
     * @param {String} path Where to save the logs file.
     * @param {String} name Name of the logs file.
     */
    constructor(path?: string, name?: string);
    classId: string;
    path: string;
    file: any;
    new(): Promise<void>;
    log(data: any, mode?: string, showup?: any): Promise<void>;
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