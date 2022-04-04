//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support');

const http = require('http');
const https = require('https');

const AxiosCookie = require('./AxiosCookie');
const Logs = require('./Logs');

//class
class AxiosClient {
    /**
    * @param {JSON} config Services Data
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
    */
     async get(url) {
        var response = false;
        try{
            response = await this.axiosClient.get(url);
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
    */
    async post(url, body = {}) {
        var response = false;
        try{
            response = await this.axiosClient.post(url, body);
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
    */
    async put(url, body = {}) {
        var response = false;
        try{
            response = await this.axiosClient.put(url, body);
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
    * @param {JSON} body Body
    */
    async delete(url, body = {}) {
        var response = false;
        try{
            response = await this.axiosClient.delete(url, body);
            await Logs.log(this.classId + " DELETE " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log(this.classId + " DELETE " + url, 'err', false);
        }finally {
            return response.data;
        }
    }

    /**
    * @param {JSON} config Services Data
    */
    static clientSync(config) {
        return new AxiosClient(config).axiosClient;
    }
}

//export
AxiosClient.client = AxiosClient.clientSync;

module.exports = AxiosClient;

/*
const http_cookie_agent = require('http-cookie-agent');
this.agents = new http_cookie_agent.HttpsCookieAgent({ jar: this.cookie, rejectUnauthorized: false });
this.agent = new http_cookie_agent.HttpCookieAgent({ jar: this.cookie, rejectUnauthorized: false });
option for axios
*/