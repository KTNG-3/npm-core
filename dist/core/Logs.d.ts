import { ILogs } from '../interface/ILogs';
declare type Logs_Mode = 'error' | 'warning' | 'system' | 'info' | 'unknown';
/**
 * Log data for debugging purposes.
 */
declare class Logs {
    classId: string;
    path: string;
    file: any;
    /**
     * @param {String} fileName File name.
     * @param {String} path Where to save the logs file.
     */
    constructor(fileName?: string, path?: string);
    /**
     *
     * @returns {void}
     */
    new(): Promise<any>;
    /**
     *
     * @param {any} data Any data to log.
     * @param {Logs_Mode} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {any}
     */
    log(data: any, mode?: Logs_Mode, showup?: boolean): Promise<any>;
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    get(showup?: boolean): Promise<Array<ILogs>>;
    /**
     *
     * @param {any} data Any data to log.
     * @param {Logs_Mode} mode Log mode.
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
     */
    static log(data: any, mode?: Logs_Mode, showup?: boolean): Promise<any>;
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    static get(showup?: boolean): Promise<any>;
    /**
     * @param {Number} times Number of times to pre create the log.
     */
    static preCreate_WithDate(times?: number): Promise<any>;
}
export { Logs, type Logs_Mode };
//# sourceMappingURL=Logs.d.ts.map