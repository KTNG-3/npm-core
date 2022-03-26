export = AxiosClient;
declare class AxiosClient {
    static clientSync(config: any): import("axios").AxiosInstance;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data?: JSON);
    cookie: AxiosCookie;
    headers: any;
    agents: any;
    agent: any;
    axiosClient: import("axios").AxiosInstance;
    /**
    * @param {String} url URL
    */
    get(url: string): Promise<boolean>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    post(url: string, body?: JSON): Promise<boolean>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    put(url: string, body?: JSON): Promise<boolean>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    delete(url: string, body?: JSON): Promise<boolean>;
}
declare namespace AxiosClient {
    import client = AxiosClient.clientSync;
    export { client };
}
import AxiosCookie = require("./AxiosCookie");
