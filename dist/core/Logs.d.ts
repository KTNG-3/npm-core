declare namespace Logs {
    interface Options {
        /**
         * Save to Log file
         * (default: false)
         */
        save?: boolean;
        /**
         * Show the log in the console
         * (default: true)
         */
        showup?: boolean;
        /**
         * Location of Logs Folder
         * (default: logs)
        */
        path?: string;
        /**
         * Name of Log file
         * (default: MAIN.log)
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
     * @param {Logs.Options} options Logs options
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
