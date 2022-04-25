import { Axios, AxiosRequestConfig } from 'axios';
import { CookieJar as toughCookie } from "tough-cookie";
import { IAxiosClient, IAxiosClientOut } from "../interface/IAxiosClient";
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