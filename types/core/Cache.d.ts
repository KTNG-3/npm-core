export = Cache;
declare class Cache {
    /**
     * @param {i_Cache} path Path to Data.
     * @returns {Object}
     */
    static output(path: {
        name: StringConstructor;
        interactionId: NumberConstructor;
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
     * @param {any} interactionId Interaction ID.
     * @returns {i_Cache}
     */
    input(data: any, interactionId?: any): {
        name: StringConstructor;
        interactionId: NumberConstructor;
    };
    /**
     * @param {Number} interactionId Interaction ID.
     * @returns {Object}
     */
    output(interactionId: number): Object;
}
//# sourceMappingURL=Cache.d.ts.map