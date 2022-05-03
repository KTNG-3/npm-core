"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosClient = void 0;
//import
const axios_1 = __importDefault(require("axios"));
const Logs_1 = require("./Logs");
//class
class AxiosClient {
    /**
    * @param {AxiosRequestConfig} config Config
    */
    constructor(config = {}) {
        this.classId = '@ing3kth/core/AxiosClient';
        this.axiosClient = axios_1.default.create(config);
    }
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    get(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.get(url, config);
                yield Logs_1.Logs.log(this.classId + " GET " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield Logs_1.Logs.log(this.classId + " GET " + url, 'error');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    post(url, body = {}, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.post(url, body, config);
                yield Logs_1.Logs.log(this.classId + " POST " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield Logs_1.Logs.log(this.classId + " POST " + url, 'error');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    put(url, body = {}, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.put(url, body, config);
                yield Logs_1.Logs.log(this.classId + " PUT " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield Logs_1.Logs.log(this.classId + " PUT " + url, 'error');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    patch(url, body = {}, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.patch(url, body, config);
                yield Logs_1.Logs.log(this.classId + " PATCH " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield Logs_1.Logs.log(this.classId + " PATCH " + url, 'error');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    delete(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.delete(url, config);
                yield Logs_1.Logs.log(this.classId + " DELETE " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield Logs_1.Logs.log(this.classId + " DELETE " + url, 'error');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {AxiosRequestConfig} config Config
    */
    static client(config) {
        return new AxiosClient(config).axiosClient;
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map