import { Axios, AxiosRequestConfig } from 'axios';
import { AxiosCookie } from './AxiosCookie';
import { IAxiosClient, IAxiosClientOut } from "../interface/IAxiosClient";
declare class AxiosClient {
    classId: string;
    jar: AxiosCookie | any;
    axiosClient: Axios;
    /**
    * @param {IAxiosClient} config Config
    */
    constructor(config?: {
        cookie: boolean;
        jar: import("tough-cookie").CookieJar.Serialized;
        headers: {};
    });
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    get(url: string, config?: AxiosRequestConfig): Promise<IAxiosClientOut>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    post(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClientOut>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    put(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClientOut>;
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    patch(url: string, body?: object, config?: AxiosRequestConfig): Promise<IAxiosClientOut>;
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    delete(url: string, config?: AxiosRequestConfig): Promise<IAxiosClientOut>;
    /**
    * @param {IAxiosClient} config Config
    */
    static client(config?: IAxiosClient): Axios;
}
export { AxiosClient };
//# sourceMappingURL=AxiosClient.d.ts.map