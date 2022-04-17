//import
const fs = require('fs');
const util = require('util');

const _config = require(`../config.js`);
const consoleColor = require('../utils/consoleColor');

//class

/**
 * Log data for debugging purposes.
 */
class Logs {
    /**
     * @param {String} fileName File name.
     * @param {String} path Where to save the logs file.
     */
    constructor(fileName = 'NAME', path = _config.logs.path) {
        this.classId = '@ing3kth/core/Logs';

        this.path = path + `/${fileName}.log`;

        if (!fs.existsSync(this.path)) {
            this.new();
        } else {
            this.file = fs.readFileSync(this.path);
        }
    }

    /**
     * 
     * @returns {void}
     */
    async new() {
        if (_config.logs.mode) {
            const _FILE = await fs.createWriteStream(this.path, {
                flags: 'w'
            });

            await _FILE.on('finish', async () => {
                try {
                    this.file = await fs.readFileSync(this.path);

                    await this.log('========== Logs File Created ==========', 'sys', false);
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
     * @returns {any}
     */
    async log(data, mode = 'log', showup = _config.logs.show) {
        if (_config.logs.mode) {
            switch (String(mode).toLowerCase()) {
                case 'err' || 'error':
                    mode = 'error';
                    if (showup) {
                        console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'red') + `\n`);
                    }
                    data = new Error(data);
                    break;
                case 'warn' || 'warning':
                    mode = 'warning';
                    if (showup) {
                        console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'yellow') + `\n`);
                    }
                    break;
                case 'sys' || 'system':
                    mode = 'system';
                    if (showup) {
                        console.log(`\n<${mode}> ` + consoleColor.colored(`${String(data)}`, 'cyan') + `\n`);
                    }
                    break;
                case 'log' || 'info':
                    mode = 'info';
                    if (showup) {
                        console.log(`<${mode}> ` + String(data));
                    }
                    break;
                default:
                    mode = 'unknown';
                    break;
            }

            try {
                this.file += `\n${new Date().toISOString()}|||${String(mode).toLowerCase()}|||${await util.format(data)}`;
                await fs.writeFileSync(this.path, await this.file);
            } catch (err) {
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Wait A Second(s) To Create The Log File`, 'red') + `\n`);
                return err;
            }

            return await data;
        }

        return data;
    }

    /**
     * 
     * @param {Boolean} showup Show the log in the console.
     * @returns {void}
     */
    async SystemInfo(showup = _config.logs.show) {
        //import
        const systeminformation = require('systeminformation');

        //script
        const _cpu = await systeminformation.cpu();
        const _cpu_name = _cpu.brand;
        const _cpu_core = _cpu.cores;

        const _version = await systeminformation.versions();
        const _version_node = _version.node;
        const _version_npm = _version.npm;

        const _ram = await systeminformation.mem();
        const _ram_all = _ram.total;
        const _ram_free = _ram.available;
        const _ram_used = _ram.active;

        const _sys_os = (await systeminformation.osInfo()).distro;
        const _sys_model = (await systeminformation.system()).model;

        //log all
        await this.log(`CPU Name: ${_cpu_name}`, 'sys', showup);
        await this.log(`CPU Core: ${_cpu_core}`, 'sys', showup);
        await this.log(`Node Version: ${_version_node}`, 'sys', showup);
        await this.log(`NPM Version: ${_version_npm}`, 'sys', showup);
        await this.log(`RAM Total: ${_ram_all}`, 'sys', showup);
        await this.log(`RAM Free: ${_ram_free}`, 'sys', showup);
        await this.log(`RAM Used: ${_ram_used}`, 'sys', showup);
        await this.log(`System OS: ${_sys_os}`, 'sys', showup);
        await this.log(`System Model: ${_sys_model}`, 'sys', showup);
    }

    /**
     * 
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    async get(showup = _config.logs.show || true) {
        if (await fs.existsSync(this.path)) {
            const _getFile = String(this.file);
            const file_per_line = _getFile.split("\n");
            var file_split = [];
            for (const _line of file_per_line) {
                file_split.push(_line.split("|||"));
            }

            var _get = [];
            for (let i = 0; i < file_split.length; i++) {    
                const _split = file_split[i];

                const _log_date = new Date(_split[0]);
                const _log_mode = String(_split[1]);
                const _log_message = await util.format(_split[2]);

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

            return _get;
        }
    }

    /**
     * 
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
     */
    static async log(data, mode = 'log', showup = _config.logs.show) {
        const newLog = await new Logs();
        await newLog.log(data, mode, showup);
    }

    /**
     * 
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    static async get(showup = true || _config.logs.show) {
        const newLog = await new Logs();
        return await newLog.get(showup);
    }

    /**
     * @param {Number} times Number of times to pre create the log.
     */
    static async preCreate(times = 1) {
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

//export
module.exports = Logs;