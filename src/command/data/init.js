//import
var process = require("process");
const fs = require("fs");
const systeminformation = require('systeminformation/lib/osinfo');

const _folder = process.cwd() + "/ing3kth";
const _cache = _folder + "/cache";
const _logs = _folder + "/logs";
const _config = _folder + "/config.json";

const _localappdata = String(process.env.LOCALAPPDATA);
const _appdata = String(process.env.APPDATA);

//export
module.exports = {
    data: {
        name: "init",
        description: "Create Config File",
        option: [
            {
                name: "-f, --force",
                description: "Force to create config file",
            }, 
        ],
    },
    //script
    async execute({ force }) {
        //folder
        if (!fs.existsSync(_folder)) {
            force = true;
            await fs.mkdirSync(_folder);
        }

        //cache
        if (!fs.existsSync(_cache)) {
            await fs.mkdirSync(_cache);
            await fs.createWriteStream(_cache + "/NAME.json", {
                flags: 'w'
            }).write(JSON.stringify({}));
        }

        //Logs
        if (!fs.existsSync(_logs)) {
            await fs.mkdirSync(_logs);
            await fs.createWriteStream(_logs + "/NAME.log", {
                flags: 'w'
            }).write(`date|||mode|||data`);
        }

        //config
        if (!fs.existsSync(_config)) {
            await module.exports.config();
        } else {
            if (!force) {
                await console.log(`\nFind config file at: ${_config}\n`);
                return _config;
            }

            await module.exports.config();
        }

        return _config;
    },
    async config() {
        //script
        const _file = await fs.createWriteStream(_config, {
            flags: "w",
        });

        const _sysplatfrom = (await systeminformation.osInfo()).platform

        //create config file
        await _file.write(JSON.stringify({
            create: String(new Date().toISOString()),
            platfrom: _sysplatfrom,
            logs: {
                mode: true,
                show: false,
                path: _logs,
            },
            cache: {
                mode: false,
                path: _cache,
            },
            "val-api": {
                local: {
                    ip: '127.0.0.1',
                    lockfile: _localappdata + "/Riot Games/Riot Client/Config/lockfile",
                },
            },
        }))

        await console.log(`\nCreate config file at: ${_config}\n`);
    }
};