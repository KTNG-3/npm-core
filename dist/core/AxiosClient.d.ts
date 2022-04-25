import { Axios, AxiosRequestConfig } from 'axios';
import { CookieJar as toughCookie } from "tough-cookie";
import { IAxiosClient, IAxiosClient_Out } from "../interface/IAxiosClient";
declare class AxiosClient {
    classId: string;
    headers: object | any;
    jar: toughCookie | any;
    axiosClient: Axios;
    /**
    * @param {IAxiosClient} config Config
    */
    constructor(config?: IAxiosClient);
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    get(url: string, config?: AxiosRequestConfig): Promise<IAxiosClient_Out>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    post(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClient_Out>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    put(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClient_Out>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    patch(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClient_Out>;
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    delete(url: string, config?: AxiosRequestConfig): Promise<IAxiosClient_Out>;
    /**
    * @param {IAxiosClient} config Config
    */
    static client(config?: IAxiosClient): Axios;
}
export { AxiosClient };
//# sourceMappingURL=AxiosClient.d.ts.map