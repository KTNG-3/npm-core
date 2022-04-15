export = Update;
declare class Update {
    /**
     *
     * @returns {Object}
     */
    static getVersion(): Object;
    /**
     *
     * @returns {IUpdate}
     */
    static checkForUpdate(): {
        response: StringConstructor;
        data: {
            update: {
                name: StringConstructor;
                version: {
                    current: StringConstructor;
                    latest: StringConstructor;
                };
            }[];
            latest: {
                name: StringConstructor;
                version: {
                    current: StringConstructor;
                    latest: StringConstructor;
                };
            }[];
        };
    };
    classId: string;
    axiosClient: any;
    /**
     *
     * @returns {Object}
     */
    getVersion(): Object;
    /**
     *
     * @returns {IUpdate}
     */
    checkForUpdate(): {
        response: StringConstructor;
        data: {
            update: {
                name: StringConstructor;
                version: {
                    current: StringConstructor;
                    latest: StringConstructor;
                };
            }[];
            latest: {
                name: StringConstructor;
                version: {
                    current: StringConstructor;
                    latest: StringConstructor;
                };
            }[];
        };
    };
}
//# sourceMappingURL=update.d.ts.map