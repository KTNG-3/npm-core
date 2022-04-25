"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClient = void 0;
//import
const axios_1 = __importDefault(require("axios"));
const axios_cookiejar_support_1 = require("axios-cookiejar-support");
const https = __importStar(require("https"));
const tough_cookie_1 = require("tough-cookie");
const Logs_1 = require("./Logs");
//class
class AxiosClient {
    classId;
    headers;
    jar;
    axiosClient;
    /**
    * @param {IAxiosClient} config Config
    */
    constructor(config = {
        cookie: true,
        jar: new tough_cookie_1.CookieJar().toJSON(),
        headers: {},
    }) {
        this.classId = '@ing3kth/core/AxiosClient';
        this.headers = config.headers;
        if (config.cookie) {
            this.jar = tough_cookie_1.CookieJar.fromJSON(config.jar);
            this.axiosClient = (0, axios_cookiejar_support_1.wrapper)(axios_1.default.create({ jar: this.jar, withCredentials: true, headers: this.headers }));
        }
        else {
            this.axiosClient = axios_1.default.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }), headers: this.headers });
        }
    }
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    async get(url, config = {}) {
        var response;
        var ERRoR = false;
        try {
            response = await this.axiosClient.get(url, config);
            await Logs_1.Logs.log(this.classId + " GET " + url, 'info');
        }
        catch (err) {
            response = err.response;
            ERRoR = true;
            await Logs_1.Logs.log(this.classId + " GET " + url, 'error', false);
        }
        finally {
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
    * @returns {Promise<IAxiosClientOut>}
    */
    async post(url, body = {}, config = {}) {
        var response;
        var ERRoR = false;
        try {
            response = await this.axiosClient.post(url, body, config);
            await Logs_1.Logs.log(this.classId + " POST " + url, 'info');
        }
        catch (err) {
            response = err.response;
            ERRoR = true;
            await Logs_1.Logs.log(this.classId + " POST " + url, 'error', false);
        }
        finally {
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
    * @returns {Promise<IAxiosClientOut>}
    */
    async put(url, body = {}, config = {}) {
        var response;
        var ERRoR = false;
        try {
            response = await this.axiosClient.put(url, body, config);
            await Logs_1.Logs.log(this.classId + " PUT " + url, 'info');
        }
        catch (err) {
            response = err.response;
            ERRoR = true;
            await Logs_1.Logs.log(this.classId + " PUT " + url, 'error', false);
        }
        finally {
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
    * @returns {Promise<IAxiosClientOut>}
    */
    async patch(url, body = {}, config = {}) {
        var response;
        var ERRoR = false;
        try {
            response = await this.axiosClient.patch(url, body, config);
            await Logs_1.Logs.log(this.classId + " PATCH " + url, 'info');
        }
        catch (err) {
            response = err.response;
            ERRoR = true;
            await Logs_1.Logs.log(this.classId + " PATCH " + url, 'error', false);
        }
        finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClientOut>}
    */
    async delete(url, config = {}) {
        var response;
        var ERRoR = false;
        try {
            response = await this.axiosClient.delete(url, config);
            await Logs_1.Logs.log(this.classId + " DELETE " + url, 'info');
        }
        catch (err) {
            response = err.response;
            ERRoR = true;
            await Logs_1.Logs.log(this.classId + " DELETE " + url, 'error', false);
        }
        finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }
    /**
    * @param {IAxiosClient} config Config
    */
    static client(config = {
        cookie: false,
        jar: null,
        headers: {},
    }) {
        return new AxiosClient(config).axiosClient;
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map