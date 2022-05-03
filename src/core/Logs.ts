//import
import * as fs from 'fs';
import * as util from 'util';

import { cwd as CurrentWorkingDirectory } from 'process';

import { ILogs } from '../interface/ILogs';

import { _config } from '../config';
import * as consoleColor from '../utils/ConsoleColor';

//class

type Logs_Mode =  'error' | 'warning' | 'system' | 'info' | 'unknown';

/**
 * Log data for debugging purposes.
 */
class Logs {
    classId:string;
    path:string;
    file:any;

    /**
     * @param {String} fileName File name.
     * @param {String} path Where to save the logs file.
     */
    constructor(fileName:string = 'NAME', path:string = _config.logs.file.path) {
        this.classId = '@ing3kth/core/Logs';

        this.path = CurrentWorkingDirectory() + '/ing3kth' + path + `/${fileName}.${_config.logs.file.extension}`;

        if (!fs.existsSync(this.path)) {
            this.new();
        } else {
            this.file = fs.readFileSync(this.path);
        }
    }

    /**
     * @param {String} dataWithFile Insert Data with log file.
     * @returns {Promise<any>}
     */
    async new(dataWithFile:string = Logs.logMessage('========== Logs File Created ==========', 'system')):Promise<any> {
        if (_config.logs.save) {
            const _FILE = await fs.createWriteStream(this.path, {
                flags: 'w'
            });

            await _FILE.once('ready', async () => {
                await _FILE.write(String(dataWithFile));
            });

            await _FILE.on('finish', async () => {
                try {
                    this.file = await fs.readFileSync(this.path);
                } catch (err) {
                    console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Fail To Create New Log At: ${this.path}`, 'red') + `\n`);
                    return err;
                }
            });
        }
    } 

    /**
     * 
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {Promise<any>}
     */
    async log(data:any, mode:Logs_Mode = 'info', showup:boolean = _config.logs.show):Promise<any> {
        switch (String(mode).toLowerCase()) {
            case 'error':
                if (showup) {
                    console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'red') + `\n`);
                }
                data = new Error(data);
                break;
            case 'warning':
                if (showup) {
                    console.log(`<${mode}> ` + consoleColor.colored(`${String(data)}`, 'yellow'));
                }
                break;
            case 'system':
                if (showup) {
                    console.log(`<${mode}> ` + consoleColor.colored(`${String(data)}`, 'cyan'));
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

        if(_config.logs.save){
            try {
                this.file += Logs.logMessage(data, mode);
                await fs.writeFileSync(this.path, await this.file);
            } catch (err) {
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Wait A Second(s) To Create The Log File`, 'red') + `\n`);
                return err;
            }
        }

        return await data;
    }

    /**
     * 
     * @param {Boolean} showup Show the log in the console.
     * @returns {Promise<Array<ILogs>>}
     */
    async get(showup:boolean = _config.logs.show):Promise<Array<ILogs>> {
        var _get:Array<ILogs> = [];

        if (fs.existsSync(this.path)) {
            const _getFile:string = String(this.file);
            const file_per_line:Array<any> = _getFile.split("\n");
            var file_split:Array<any> = [];
            for (const _line of file_per_line) {
                file_split.push(_line.split("|||"));
            }

            for (let i = 0; i < file_split.length; i++) {    
                const _split:any = file_split[i];

                const _log_date:Date = new Date(_split[0]);
                const _log_mode:string = String(_split[1]);
                const _log_message:string = util.format(_split[2]);

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
    
    static logMessage(data:any, mode:Logs_Mode = 'info'):string {
        return `\n${new Date().toISOString()}|||${String(mode).toLowerCase()}|||${util.format(data)}`
    }

    /**
     * 
     * @param {any} data Any data to log.
     * @param {String} mode Log mode.
     * @param {Boolean} showup Show the log in the console.
     * @returns {Promise<void>}
     */
    static async log(data:any, mode:Logs_Mode = 'info', showup:boolean = _config.logs.show):Promise<void> {
        const newLog:Logs = await new Logs();
        await newLog.log(data, mode, showup);
    }

    /**
     * 
     * @param {Boolean} showup Show the log in the console.
     * @returns {Promise<any>}
     */
    static async get(showup:boolean = _config.logs.show):Promise<any> {
        const newLog:Logs = await new Logs();
        return await newLog.get(showup);
    }

    /**
     * @param {Number} times Number of times to pre create the log.
     * @returns {Promise<void>}
     */
    static async preCreate_WithDate(times:number = 1):Promise<void> {
        const _date:Date = new Date();
        let _year:number = Number(_date.getUTCFullYear());
        let _month:number = Number(_date.getUTCMonth());
        let _day:number = Number(_date.getUTCDate());
        let _hours:number = Number(_date.getUTCHours());

        for (let i = 0; i < Number(times); i++) {
            if (_hours > 24) {
                break;
            }

            let fileName:string = `${_year}-${_month}-${_day}_${_hours}`;
            await new Logs(fileName);
        }
    }
}

//export
export { Logs, type Logs_Mode };