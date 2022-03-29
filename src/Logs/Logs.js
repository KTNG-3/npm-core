//import
const fs = require('fs');
const util = require('util');
const _config = require(`../config.js`);

//class
class Logs {
    /**
     * 
     * @param {String} path Where to save the logs file.
     * @param {String} name Name of the logs file.
     */
    constructor(path = "/data", name = false) {
        this.classId = '@ing3kth/core/Logs';

        const _date = new Date();
        if(!name){
            var _file_name = _date.getUTCFullYear() + "-" + _date.getUTCMonth() + "-" + _date.getUTCDate() + "_" + _date.getUTCHours()
            this.path = __dirname + `${path}/${_file_name}.log`
        }else {
            this.path = `${path}/${String(name)}.log`
        }

        if (!fs.existsSync(this.path)) {
            this.new();
        } else {
            this.file = fs.readFileSync(this.path);
        }
    }

    async new() {
        if (_config.logs.mode) {
            await fs.createWriteStream(this.path, { flags: 'w' });

            this.file = await fs.readFileSync(this.path);
        }
    }

    async log(data, mode = 'log', showup = _config.logs.show) {
        if (_config.logs.mode) {
            switch (mode.toLowerCase()) {
                case 'err' || 'error':
                    if (showup) {
                        console.error(data);
                        data = new Error(data);
                    }
                case 'log':
                    if (showup) {
                        console.log(data);
                    }
                default:
                    this.file += `${new Date().toISOString()}||${String(mode).toLowerCase()}||${util.format(data)}\n`;
                    break;
            }

            await fs.writeFileSync(this.path, this.file);
        }
    }

    async get(showup = _config.logs.show) {
        if (fs.existsSync(this.path)) {
            const _getFile = String(this.file);
            const file_per_line = _getFile.split("\n");
            var file_split = [];
            for (const _line of file_per_line){
                file_split.push(_line.split("||"));
            }

            var _get = [];
            for (let i = 0; i < file_split.length; i++) {
                if(i + 1 === file_split.length){
                    break;
                }

                const _split = file_split[i];
                _get.push({
                    date: new Date(_split[0]),
                    mode: String(_split[1]),
                    data: util.format(_split[2]),
                });
            }

            if (showup) {
                console.log(_get);
            }

            return _get;
        }
    }

    static async logSync(data, mode = 'log', showup = _config.logs.show) {
        const newLog = new Logs();
        await newLog.log(data, mode, showup);
    }

    static async getSync(showup = _config.logs.show) {
        const newLog = new Logs();
        return await newLog.get(showup);
    }
}

//export
Logs.log = Logs.logSync;
Logs.get = Logs.getSync;

module.exports = Logs;