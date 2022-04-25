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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
//import
const fs = __importStar(require("fs"));
const process_1 = require("process");
const config_1 = require("../config");
const consoleColor = __importStar(require("../utils/ConsoleColor"));
//class
/**
 * Cache Data in JSON format.
 */
class Cache {
    classId;
    baseName;
    path;
    file;
    /**
     *
     * @param {String} name Name
     */
    constructor(name = 'NAME') {
        this.classId = '@ing3kth/core/Cache';
        this.baseName = name;
        this.path = (0, process_1.cwd)() + '/ing3kth' + config_1._config.cache.file.path + `/${this.baseName}.${config_1._config.cache.file.extension}`;
        if (!fs.existsSync(this.path)) {
            this.create();
        }
        else {
            this.file = fs.readFileSync(this.path);
        }
    }
    /**
     *
     * @returns {Promise<any>}
     */
    async create() {
        const _FILE = await fs.createWriteStream(this.path, {
            flags: 'w'
        });
        await _FILE.once('ready', async () => {
            await _FILE.write(JSON.stringify({}));
        });
        await _FILE.on('finish', async () => {
            try {
                this.file = await fs.readFileSync(this.path);
            }
            catch (err) {
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Fail To Create ${this.baseName} Cache At: ${this.path}`, 'red') + `\n`);
                return err;
            }
        });
    }
    /**
     *
     * @param {any} data Data to save.
     * @param {String} interactionId Interaction ID.
     * @returns {Promise<ICache>}
     */
    async input(data, interactionId = '') {
        if (!interactionId) {
            interactionId = String(new Date().getTime());
        }
        try {
            let _json = await JSON.parse(this.file);
            _json[interactionId] = data;
            await fs.writeFileSync(this.path, await JSON.stringify(await _json));
        }
        catch (err) {
            console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Wait A Second(s) To Create The Cache File`, 'red') + `\n`);
            await fs.writeFileSync(this.path, await JSON.stringify({}));
        }
        return {
            name: this.baseName,
            interactionId: interactionId,
        };
    }
    /**
     * @param {String} interactionId Interaction ID.
     * @returns {Promise<any>}
     */
    async output(interactionId) {
        const _json = await JSON.parse(this.file);
        return await _json[interactionId];
    }
    /**
     * @param {String} interactionId Interaction ID.
     * @returns {Promise<void>}
     */
    async clear(interactionId) {
        let _json = await JSON.parse(this.file);
        delete _json[interactionId];
        await fs.writeFileSync(this.path, await JSON.stringify(await _json));
    }
    /**
     * @param {ICache} path Path to Data.
     * @returns {Promise<any>}
     */
    static async output(path) {
        const _NewCache = await new Cache(path.name);
        return await _NewCache.output(path.interactionId);
    }
}
exports.Cache = Cache;
//# sourceMappingURL=Cache.js.map