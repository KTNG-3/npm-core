export = AxiosClient;
declare class AxiosClient {
    /**
    * @param {IAxiosClient} config Config
    */
    static client(config?: {
        cookie: BooleanConstructor;
        jar: ObjectConstructor;
        headers: ObjectConstructor;
    }): import("axios").AxiosInstance;
    /**
    * @param {IAxiosClient} config Config
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
    * @returns {IAxiosClientOut}
    */
    get(url: string, config?: Object): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    post(url: string, body?: JSON, config?: Object): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    put(url: string, body?: JSON, config?: Object): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    patch(url: string, body?: JSON, config?: Object): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
    * @param {String} url URL
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    delete(url: string, config?: Object): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=AxiosClient.d.ts.map