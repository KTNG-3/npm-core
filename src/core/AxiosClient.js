//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support');

const http = require('http');
const https = require('https');

const AxiosCookie = require('./AxiosCookie');
const Logs = require('./Logs');

const IAxiosClient = require('../interface/IAxiosClient');
const IAxiosClientOut = require('../interface/IAxiosClientOut');

//class
class AxiosClient {
    /**
    * @param {IAxiosClient} config Config
    */
    constructor(config = {
        cookie: true,
        jar: new AxiosCookie().toJSON(),
        headers: {},
    }) {
        this.classId = '@ing3kth/core/AxiosClient';
        if(config.cookie){
            this.jar = AxiosCookie.fromJSON(config.jar);

            this.axiosClient = wrapper(axios.create({ jar: this.cookie, withCredentials: true, headers: config.headers }));
        }else {
            this.axiosClient = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }), httpAgent: new http.Agent({ rejectUnauthorized: false }), headers: config.headers });
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
     async get(url, config = {}) {
        var response;
        var ERRoR = false;

        try{
            response = await this.axiosClient.get(url, config);
            await Logs.log(this.classId + " GET " + url, 'log');

        }catch(err){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " GET " + url, 'err', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    async post(url, body = {}, config = {}) {
        var response;
        var ERRoR = false;

        try{
            response = await this.axiosClient.post(url, body, config);
            await Logs.log(this.classId + " POST " + url, 'log');

        }catch(err){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " POST " + url, 'err', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            };
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    async put(url, body = {}, config = {}) {
        var response;
        var ERRoR = false;

        try{
            response = await this.axiosClient.put(url, body, config);
            await Logs.log(this.classId + " PUT " + url, 'log');

        }catch(err){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " PUT " + url, 'err', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            }
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    async patch(url, body = {}, config = {}) {
        var response;
        var ERRoR = false;

        try{
            response = await this.axiosClient.patch(url, body, config);
            await Logs.log(this.classId + " PATCH " + url, 'log');

        }catch(err){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " PATCH " + url, 'err', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            }
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} config Axios Config
    * @returns {IAxiosClientOut}
    */
    async delete(url, config = {}) {
        var response;
        var ERRoR = false;

        try{
            response = await this.axiosClient.delete(url, config);
            await Logs.log(this.classId + " DELETE " + url, 'log');

        }catch(err){
            response = err.response;
            ERRoR = true;

            await Logs.log(this.classId + " DELETE " + url, 'err', false);
        }finally {
            return {
                isError: ERRoR,
                data: response.data,
            }
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

//export
module.exports = AxiosClient;