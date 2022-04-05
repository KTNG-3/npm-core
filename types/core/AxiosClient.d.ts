export = AxiosClient;
declare class AxiosClient {
    /**
    * @param {JSON} config Services Data
    */
    static clientSync(config?: JSON): import("axios").AxiosInstance;
    /**
    * @param {JSON} config Services Data
    */
    constructor(config?: JSON);
    classId: string;
    jar: AxiosCookie | undefined;
    axiosClient: import("axios").AxiosInstance;
    /**
    * @param {String} url URL
    */
    get(url: string, config?: {}): Promise<any>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    post(url: string, body?: JSON, config?: {}): Promise<any>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    put(url: string, body?: JSON, config?: {}): Promise<any>;
    /**
    * @param {String} url URL
    */
    delete(url: string, config?: {}): Promise<any>;
}
declare namespace AxiosClient {
    import client = AxiosClient.clientSync;
    export { client };
}
import AxiosCookie = require("./AxiosCookie");
//# sourceMappingURL=AxiosClient.d.ts.map