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
exports.Logs = void 0;
//import
const fs = __importStar(require("fs"));
const util = __importStar(require("util"));
const process_1 = require("process");
const config_1 = require("../config");
const consoleColor = __importStar(require("../utils/ConsoleColor"));
/**
 * Log data for debugging purposes.
 */
class Logs {
    classId;
    path;
    file;
    /**
     * @param {String} fileName File name.
     * @param {String} path Where to save the logs file.
     */
    constructor(fileName = 'NAME', path = config_1._config.logs.file.path) {
        this.classId = '@ing3kth/core/Logs';
        this.path = (0, process_1.cwd)() + '/ing3kth' + path + `/${fileName}.${config_1._config.logs.file.extension}`;
        if (!fs.existsSync(this.path)) {
            this.new();
        }
        else {
            this.file = fs.readFileSync(this.path);
        }
    }
    /**
     *
     * @returns {void}
     */
    async new() {
        if (config_1._config.logs.save) {
            const _FILE = await fs.createWriteStream(this.path, {
                flags: 'w'
            });
            await _FILE.on('finish', async () => {
                try {
                    this.file = await fs.readFileSync(this.path);
                    await this.log('========== Logs File Created ==========', 'system', false);
                }
                catch (err) {
                    console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Fail To Create New Log At: ${this.path}`, 'red') + `\n`);
                    return err;
                }
            });
        }
    }
    /**
     *
     * @param {any} data Any data to log.
     * @param {Logs_Mode} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {any}
     */
    async log(data, mode = 'info', showup = config_1._config.logs.show) {
        switch (String(mode).toLowerCase()) {
            case 'error':
                if (showup) {
                    console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'red') + `\n`);
                }
                data = new Error(data);
                break;
            case 'warning':
                if (showup) {
                    console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'yellow') + `\n`);
                }
                break;
            case 'system':
                if (showup) {
                    console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'cyan') + `\n`);
                }
                break;
            case 'info':
                if (showup) {
                    console.log(`<${mode}> ` + String(data));
                }
                break;
            default:
                mode = 'unknown';
                break;
        }
        if (config_1._config.logs.save) {
            try {
                this.file += `\n${new Date().toISOString()}|||${String(mode).toLowerCase()}|||${await util.format(data)}`;
                await fs.writeFileSync(this.path, await this.file);
            }
            catch (err) {
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Wait A Second(s) To Create The Log File`, 'red') + `\n`);
                return err;
            }
        }
        return await data;
    }
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    async get(showup = config_1._config.logs.show) {
        var _get = [];
        if (fs.existsSync(this.path)) {
            const _getFile = String(this.file);
            const file_per_line = _getFile.split("\n");
            var file_split = [];
            for (const _line of file_per_line) {
                file_split.push(_line.split("|||"));
            }
            for (let i = 0; i < file_split.length; i++) {
                const _split = file_split[i];
                const _log_date = new Date(_split[0]);
                const _log_mode = String(_split[1]);
                const _log_message = util.format(_split[2]);
                if (_log_message === 'undefined') {
                    continue;
                }
                _get.push({
                    date: _log_date,
                    mode: _log_mode,
                    data: _log_message,
                });
            }
            if (showup) {
                console.log(_get);
            }
        }
        return _get;
    }
    /**
     *
     * @param {any} data Any data to log.
     * @param {Logs_Mode} mode Log mode.
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
     */
    static async log(data, mode = 'info', showup = config_1._config.logs.show) {
        const newLog = await new Logs();
        await newLog.log(data, mode, showup);
    }
    /**
     *
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    static async get(showup = config_1._config.logs.show) {
        const newLog = await new Logs();
        return await newLog.get(showup);
    }
    /**
     * @param {Number} times Number of times to pre create the log.
     */
    static async preCreate_WithDate(times = 1) {
        const _date = new Date();
        let _year = Number(_date.getUTCFullYear());
        let _month = Number(_date.getUTCMonth());
        let _day = Number(_date.getUTCDate());
        let _hours = Number(_date.getUTCHours());
        for (let i = 0; i < Number(times); i++) {
            if (_hours > 24) {
                break;
            }
            let fileName = `${_year}-${_month}-${_day}_${_hours}`;
            await new Logs(fileName);
        }
    }
}
exports.Logs = Logs;
//# sourceMappingURL=Logs.js.map