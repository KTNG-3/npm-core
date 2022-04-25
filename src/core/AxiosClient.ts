//import
import axios, { Axios, AxiosError, AxiosRequestConfig } from 'axios';
import { wrapper } from 'axios-cookiejar-support';

import * as https from 'https';

import { CookieJar as toughCookie } from "tough-cookie";

import { Logs } from './Logs';

import { IAxiosClient, IAxiosClient_Out } from "../interface/IAxiosClient";

//class
class AxiosClient {
    classId:string
    headers:object | any
    jar: toughCookie | any;
    axiosClient: Axios;

    /**
    * @param {IAxiosClient} config Config
    */
    constructor(config: IAxiosClient = {
        cookie: true,
        jar: new toughCookie().toJSON(),
        headers: {},
    }) {
        this.classId = '@ing3kth/core/AxiosClient';
        this.headers = config.headers;
        if(config.cookie){
            this.jar = toughCookie.fromJSON(config.jar);

            this.axiosClient = wrapper(axios.create({ jar: this.jar, withCredentials: true, headers: this.headers }));
        }else {
            this.axiosClient = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }), headers: this.headers });
        }
    }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
     async get(url:string, config:AxiosRequestConfig = {}):Promise<IAxiosClient_Out> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.get(url, config);
            await Logs.log(this.classId + " GET " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " GET " + url, 'error', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    async post(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<IAxiosClient_Out> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.post(url, body, config);
            await Logs.log(this.classId + " POST " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " POST " + url, 'error', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    async put(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<IAxiosClient_Out> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.put(url, body, config);
            await Logs.log(this.classId + " PUT " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " PUT " + url, 'error', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    async patch(url:string, body:object = {}, config:AxiosRequestConfig = {}):Promise<IAxiosClient_Out> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.patch(url, body, config);
            await Logs.log(this.classId + " PATCH " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " PATCH " + url, 'error', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient_Out>}
    */
    async delete(url:string, config:AxiosRequestConfig = {}):Promise<IAxiosClient_Out> {
        var response:any;
        var ERRoR:boolean = false;

        try{
            response = await this.axiosClient.delete(url, config);
            await Logs.log(this.classId + " DELETE " + url, 'info');

        }catch(err:AxiosError | any){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " DELETE " + url, 'error', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {IAxiosClient} config Config
    */
    static client(config:IAxiosClient = {
        cookie: false,
        jar: null,
        headers: {},
    }):Axios {
        return new AxiosClient(config).axiosClient;
    }
}

//export
export { AxiosClient };