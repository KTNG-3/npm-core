declare namespace Cache {
    interface Options {
        /**
         * Location of Cache Folder
         * (default: cache)
        */
        path?: string;
        /**
         * Name of Cache file
         * (default: MAIN.json)
         */
        name?: string;
    }
    interface Response extends Cache.Options {
        /**
         * Location of data
         */
        interactionId: string;
    }
}
/**
 * Basic JSON Database
 */
declare class Cache {
    config: Cache.Options;
    private path;
    /**
     * @param {Logs.Options} options Logs Options
     */
    constructor(options?: Cache.Options | string);
    /**
     *
     * @param {any} data Data to save
     * @param {string} interactionId Interaction ID
     * @returns {Cache.Response}
     */
    input(data: any, interactionId?: string): Cache.Response;
    /**
     * @param {string} interactionId Interaction ID
     * @returns {any}
     */
    output<MyInterface = any>(interactionId: string): MyInterface | undefined;
    /**
     * Clear Data in file
     * @param {string} interactionId Interaction ID
     * @returns {void}
     */
    clear(interactionId: string): void;
    /**
     * Remove file
     * @returns {void}
     */
    remove(): void;
    /**
     * @param {Cache.Response} path Path to Data
     * @param {boolean} clear Clear Data?
     * @returns {any}
     */
    static output<MyInterface = any>(path: Cache.Response, clear?: boolean): MyInterface | undefined;
}
export { Cache };
