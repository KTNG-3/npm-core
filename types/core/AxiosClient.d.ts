export = AxiosClient;
declare class AxiosClient {
    /**
    * @param {i_AxiosClient} config Config
    */
    static clientSync(config?: {
        cookie: BooleanConstructor;
        jar: ObjectConstructor;
        headers: ObjectConstructor;
    }): import("axios").AxiosInstance;
    /**
    * @param {i_AxiosClient} config Config
    */
    constructor(config?: {
        cookie: BooleanConstructor;
        jar: ObjectConstructor;
        headers: ObjectConstructor;
    });
    classId: string;
    jar: void;
    axiosClient: import("axios").AxiosInstance;
    /**
    * @param {String} url URL
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    get(url: string, config?: Object): Object;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    post(url: string, body?: JSON, config?: Object): Object;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    put(url: string, body?: JSON, config?: Object): Object;
    /**
    * @param {String} url URL
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    delete(url: string, config?: Object): Object;
}
declare namespace AxiosClient {
    import client = AxiosClient.clientSync;
    export { client };
}
//# sourceMappingURL=AxiosClient.d.ts.map