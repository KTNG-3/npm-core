//import
const fs = require('fs');
const util = require('util');

const _config = require(`../config.js`);
const consoleColor = require('../utils/consoleColor');

//class
class Logs {
    /**
     * 
     * @param {String} path Where to save the logs file.
     */
    constructor(path = _config.logs.path) {
        this.classId = '@ing3kth/core/Logs';

        const _date = new Date();
        var _file_name = _date.getUTCFullYear() + "-" + _date.getUTCMonth() + "-" + _date.getUTCDate() + "_" + _date.getUTCHours()

        this.path = path + `/${_file_name}.log`

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
            await fs.createWriteStream(this.path, {
                flags: 'w'
            });

            try{
                this.file = await fs.readFileSync(this.path);
            }catch(err){
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Try To Create New Log At: ${this.basePath}`, 'red') + `\n`);
                return await this.new();
            }

            await this.log('========== Logs File Created ==========', 'sys', false);
        }
    }

    /**
     * 
     * @param {any} data Any data to log.
     * @param {String} mode Log mode. (log, error, system)
     * @param {Boolean} showup Show the log in the console.
     * @returns {String}
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
                case 'log':
                    if (showup) {
                        console.log(`<${mode}> ` + String(data));
                    }
                    break;
                case 'sys' || 'system':
                    mode = 'system';
                    if (showup) {
                        console.log(`<${mode}> ` + String(data));
                    }
                    break;
                default:
                    mode = 'unknown';
                    break;
            }

            this.file += `${new Date().toISOString()}|||${String(mode).toLowerCase()}|||${await util.format(data)}\n`;
            await fs.writeFileSync(this.path, await this.file);
            
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

        const _sys_os = (await si.osInfo()).distro;
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
        if (fs.existsSync(this.path)) {
            const _getFile = String(this.file);
            const file_per_line = _getFile.split("\n");
            var file_split = [];
            for (const _line of file_per_line) {
                file_split.push(_line.split("|||"));
            }

            var _get = [];
            for (let i = 0; i < file_split.length; i++) {
                if (i + 1 === file_split.length) {
                    break;
                }

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
    static async logSync(data, mode = 'log', showup = _config.logs.show) {
        const newLog = new Logs();
        await newLog.log(data, mode, showup);
    }

    /**
     * 
     * @param {Boolean} showup Show the log in the console.
     * @returns {Object}
     */
    static async getSync(showup = true || _config.logs.show) {
        const newLog = new Logs();
        return await newLog.get(showup);
    }
}

//export
Logs.log = Logs.logSync;
Logs.get = Logs.getSync;

module.exports = Logs;