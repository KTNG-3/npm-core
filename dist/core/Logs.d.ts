declare namespace Logs {
    interface Options {
        /**
         * Save to Log file
         */
        save?: boolean;
        /**
         * Show the log in the console
         */
        showup?: boolean;
        /**
         * Location of Logs Folder
        */
        path?: string;
        /**
         * Name of Log file
         */
        name?: string;
    }
    type Mode = 'error' | 'warning' | 'system' | 'info';
    interface Response {
        date?: Date;
        mode?: string;
        data: any;
    }
}
/**
 * Basic Logs System
 */
declare class Logs {
    config: Logs.Options;
    private path;
    /**
     * @param {Logs.Options} options Logs Options
     */
    constructor(options?: Logs.Options | string);
    /**
     *
     * @param {any} data Any data to log.
     * @param {string} mode Log mode. (log, error, system)
     * @returns {void}
     */
    log(data: any, mode?: Logs.Mode): void;
    /**
     *
     * @returns {Array<Logs.Response>}
     */
    get(): Array<Logs.Response>;
    private static logMessage;
    /**
     * @param {Logs.Options} options Logs Options
     */
    static create(options: Logs.Options): Logs;
    /**
     *
     * @param {any} data Any data to log.
     * @param {String} mode Log mode.
     * @param {Logs.Options} options Logs Options
     * @returns {void}
     */
    static log(data: any, mode?: Logs.Mode, options?: Logs.Options): void;
    /**
     *
     * @param {Logs.Options} options Logs Options
     * @returns {Array<Logs.Response>}
     */
    static get(options?: Logs.Options): Array<Logs.Response>;
}
export { Logs };
