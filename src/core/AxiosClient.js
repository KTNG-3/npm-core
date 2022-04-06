//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support');

const http = require('http');
const https = require('https');

const AxiosCookie = require('./AxiosCookie');
const Logs = require('./Logs');

const i_AxiosClient = require('../interface/i_AxiosClient');

//class
class AxiosClient {
    /**
    * @param {i_AxiosClient} config Config
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
    * @returns {Object}
    */
     async get(url, config = {}) {
        var response = false;
        try{
            response = await this.axiosClient.get(url, config);
            await Logs.log(this.classId + " GET " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log(this.classId + " GET " + url, 'err', false);
        }finally {
            return response.data;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    async post(url, body = {}, config = {}) {
        var response = false;
        try{
            response = await this.axiosClient.post(url, body, config);
            await Logs.log(this.classId + " POST " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log(this.classId + " POST " + url, 'err', false);
        }finally {
            return response.data;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    async put(url, body = {}, config = {}) {
        var response = false;
        try{
            response = await this.axiosClient.put(url, body, config);
            await Logs.log(this.classId + " PUT " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log(this.classId + " PUT " + url, 'err', false);
        }finally {
            return response.data;
        }
    }

    /**
    * @param {String} url URL
    * @param {Object} config Axios Config
    * @returns {Object}
    */
    async delete(url, config = {}) {
        var response = false;
        try{
            response = await this.axiosClient.delete(url, config);
            await Logs.log(this.classId + " DELETE " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log(this.classId + " DELETE " + url, 'err', false);
        }finally {
            return response.data;
        }
    }

    /**
    * @param {i_AxiosClient} config Config
    */
    static clientSync(config = {}) {
        return new AxiosClient(config).axiosClient;
    }
}

//export
AxiosClient.client = AxiosClient.clientSync;

module.exports = AxiosClient;