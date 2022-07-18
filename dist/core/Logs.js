"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logs = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const process = tslib_1.__importStar(require("process"));
const fs = tslib_1.__importStar(require("fs"));
const FileBuilder_1 = require("../utils/FileBuilder");
const util_1 = require("util");
const ConsoleColor_1 = require("../utils/ConsoleColor");
//class
/**
 * Basic Logs System
 */
class Logs {
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
            save: false,
            showup: true,
            path: '/ing3kth/logs/',
            name: 'NAME',
        };
        this.config = Object.assign(Object.assign(Object.assign({}, _defaultConfig), options), { name: ((_a = options.name) === null || _a === void 0 ? void 0 : _a.replace(' ', '_')) || _defaultConfig.name });
        //path
        this.path = `${process.cwd()}${path.join(`${this.config.path}/${this.config.name}.log`)}`;
    }
    /**
     *
     * @param {any} data Any data to log.
     * @param {string} mode Log mode. (log, error, system)
     * @returns {void}
     */
    log(data, mode = 'info') {
        if (this.config.showup === true) {
            switch (mode) {
                case 'error':
                    console.log(`<${mode}> ` + (0, ConsoleColor_1.colored)(`${String(data)}`, 'red'));
                    break;
                case 'warning':
                    console.log(`<${mode}> ` + (0, ConsoleColor_1.colored)(`${String(data)}`, 'yellow'));
                    break;
                case 'system':
                    console.log(`<${mode}> ` + (0, ConsoleColor_1.colored)(`${String(data)}`, 'cyan'));
                    break;
                case 'info':
                    console.log(`<${mode}> ` + String(data));
                    break;
                default:
                    break;
            }
        }
        if (this.config.save == true) {
            if (fs.existsSync(this.path)) {
                var _logFile = fs.readFileSync(this.path).toString();
                _logFile += Logs.logMessage(data, mode);
                fs.writeFileSync(this.path, _logFile);
            }
            else {
                (0, FileBuilder_1.FoldersBuilder)(String(this.config.path));
                const _logFile = fs.createWriteStream(this.path);
                _logFile.write(`${new Date().toISOString()}|||system|||CREATE ${this.config.name}.log${Logs.logMessage(data, mode)}`);
            }
        }
    }
    /**
     *
     * @returns {Array<Logs.Response>}
     */
    get() {
        var _get = [];
        if (fs.existsSync(this.path)) {
            var file_split = [];
            for (const _line of fs.readFileSync(this.path).toString().split("\n")) {
                file_split.push(_line.split("|||"));
            }
            for (let i = 0; i < file_split.length; i++) {
                const _split = file_split[i];
                if (typeof _split[2] === 'undefined') {
                    continue;
                }
                _get.push({
                    date: new Date(_split[0]),
                    mode: String(_split[1]),
                    data: (0, util_1.format)(_split[2]),
                });
            }
        }
        return _get;
    }
    //static
    static logMessage(data, mode = 'info') {
        return `\n${new Date().toISOString()}|||${String(mode).toLowerCase()}|||${(0, util_1.format)(data)}`;
    }
    /**
     * @param {Logs.Options} options Logs Options
     */
    static create(options) {
        const _MyLogs = new Logs(options);
        fs.createWriteStream(`${process.cwd()}${path.join(`${options.path}/${options.name}.log`)}`).write(`${new Date().toISOString()}|||system|||CREATE ${options.name}.log`);
        return _MyLogs;
    }
    /**
     *
     * @param {any} data Any data to log.
     * @param {String} mode Log mode.
     * @param {Logs.Options} options Logs Options
     * @returns {void}
     */
    static log(data, mode = 'info', options) {
        const newLog = new Logs(options);
        newLog.log(data, mode);
    }
    /**
     *
     * @param {Logs.Options} options Logs Options
     * @returns {Array<Logs.Response>}
     */
    static get(options) {
        const newLog = new Logs(options);
        return newLog.get();
    }
}
exports.Logs = Logs;
