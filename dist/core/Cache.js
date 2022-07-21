"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const process = tslib_1.__importStar(require("process"));
const fs = tslib_1.__importStar(require("fs"));
const FileBuilder_1 = require("../utils/FileBuilder");
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
        if (typeof options === 'string') {
            options = {
                name: options,
            };
        }
        if (options.path) {
            if (!options.path.startsWith('/')) {
                options.path = `/${options.path}`;
            }
            if (options.path.endsWith('/')) {
                options.path.slice(0, -1);
            }
        }
        if (options.name) {
            options.name.replace(' ', '_');
            if (!options.name.endsWith('.json')) {
                options.name = `${options.name}.json`;
            }
        }
        this.config = Object.assign({
            path: '/cache/',
            name: 'MAIN.log',
        }, options);
        //path
        this.path = `${process.cwd()}${path.join(`${this.config.path}/${this.config.name}`)}`;
    }
    //data
    /**
     *
     * @param {any} data Data to save
     * @param {string} interactionId Interaction ID
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
            (0, FileBuilder_1.FoldersBuilder)(String(this.config.path));
            var _json = {};
            _json[interactionId] = data;
            fs.createWriteStream(this.path).write(JSON.stringify(_json));
        }
        return Object.assign(Object.assign({}, this.config), { interactionId: interactionId });
    }
    /**
     * @param {string} interactionId Interaction ID
     * @returns {any}
     */
    output(interactionId) {
        if (fs.existsSync(this.path)) {
            const _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());
            return _cacheFile[interactionId];
        }
    }
    //remove
    /**
     * Clear Data in file
     * @param {string} interactionId Interaction ID
     * @returns {void}
     */
    clear(interactionId) {
        var _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());
        delete _cacheFile[interactionId];
        fs.writeFileSync(this.path, JSON.stringify(_cacheFile));
    }
    /**
     * Remove file
     * @returns {void}
     */
    remove() {
        fs.unlinkSync(this.path);
    }
    //static
    /**
     * @param {Cache.Response} path Path to Data
     * @param {boolean} clear Clear Data?
     * @returns {any}
     */
    static output(path, clear) {
        const _NewCache = new Cache(path);
        const MyData = _NewCache.output(path.interactionId);
        if (clear === true) {
            _NewCache.clear(path.interactionId);
        }
        return MyData;
    }
}
exports.Cache = Cache;
