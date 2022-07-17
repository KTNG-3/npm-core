"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const process_1 = require("process");
const fs = tslib_1.__importStar(require("fs"));
//class
/**
 * Basic JSON Database
 */
class Cache {
    /**
     * @param {Logs.Options} options Logs Options
     */
    constructor(options = {}) {
        //config
        var _a;
        if (typeof options === 'string') {
            options = {
                name: options,
            };
        }
        const _defaultConfig = {
            path: '/ing3kth/cache/',
            name: 'NAME',
        };
        this.config = Object.assign(Object.assign(Object.assign({}, _defaultConfig), options), { name: ((_a = options.name) === null || _a === void 0 ? void 0 : _a.replace(' ', '_')) || _defaultConfig.name });
        //path
        this.path = `${(0, process_1.cwd)()}${(0, path_1.join)(`${this.config.path}/${this.config.name}.json`)}`;
    }
    /**
     *
     * @param {any} data Data to save.
     * @param {string} interactionId Interaction ID.
     * @returns {Cache.Response}
     */
    input(data, interactionId) {
        if (!interactionId) {
            interactionId = String(new Date().getTime());
        }
        if (fs.existsSync(this.path)) {
            var _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());
            _cacheFile[interactionId] = data;
            fs.writeFileSync(this.path, JSON.stringify(_cacheFile));
        }
        else {
            var _json = {};
            _json[interactionId] = data;
            fs.createWriteStream(this.path).write(JSON.stringify(_json));
        }
        return Object.assign(Object.assign({}, this.config), { interactionId: interactionId });
    }
    /**
     * @param {string} interactionId Interaction ID.
     * @returns {any}
     */
    output(interactionId) {
        if (fs.existsSync(this.path)) {
            const _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());
            return _cacheFile[interactionId];
        }
    }
    /**
     * @param {string} interactionId Interaction ID.
     * @returns {void}
     */
    clear(interactionId) {
        var _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());
        delete _cacheFile[interactionId];
        fs.writeFileSync(this.path, JSON.stringify(_cacheFile));
    }
    //static
    /**
     * @param {Cache.Response} path Path to Data.
     * @returns {any}
     */
    static output(path) {
        const _NewCache = new Cache(path);
        return _NewCache.output(path.interactionId);
    }
}
exports.Cache = Cache;
