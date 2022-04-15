export = Cache;
/**
 * Cache Data in JSON format.
 */
declare class Cache {
    /**
     * @param {ICache} path Path to Data.
     * @returns {Object}
     */
    static output(path: {
        name: StringConstructor;
        interactionId: StringConstructor;
    }): Object;
    /**
     *
     * @param {String} name Name
     */
    constructor(name?: string);
    classId: string;
    baseName: string;
    path: string;
    file: any;
    /**
     *
     * @returns {void}
     */
    create(): void;
    /**
     *
     * @param {any} data Data to save.
     * @param {String} interactionId Interaction ID.
     * @returns {ICache}
     */
    input(data: any, interactionId?: string): {
        name: StringConstructor;
        interactionId: StringConstructor;
    };
    /**
     * @param {String} interactionId Interaction ID.
     * @returns {Object}
     */
    output(interactionId: string): Object;
    /**
     * @param {String} interactionId Interaction ID.
     * @returns {void}
     */
    clear(interactionId: string): void;
}
//# sourceMappingURL=Cache.d.ts.map