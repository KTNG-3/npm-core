//import
var process = require("process");
const fs = require("fs");

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
        option: [{
            name: "-f, --force",
            description: "Force to create config file",
        }, ],
    },
    //script
    async execute({
        force
    }) {
        //folder
        if (!fs.existsSync(_folder)) {
            force = true;
            await fs.mkdirSync(_folder);

            //cache
            if (!fs.existsSync(_cache)) {
                await fs.mkdirSync(_cache);
                await fs.createWriteStream(_cache + "/NAME.json", {
                    flags: 'w'
                });
            }

            //Logs
            if (!fs.existsSync(_logs)) {
                await fs.mkdirSync(_logs);
                await fs.createWriteStream(_logs + "/YEAR-MONTH-DAY_HOURS.log", {
                    flags: 'w'
                });
            }
        }

        //config
        if (!fs.existsSync(_config)) {
            await module.exports.config();
        } else {
            if (!force) {
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

        //create config file
        await _file.write(JSON.stringify({
            logs: {
                mode: true,
                show: false,
                path: _logs,
            },
            "val-api": {
                local: {
                    lockfile: _localappdata + "/Riot Games/Riot Client/Config/lockfile",
                },
            },
            cache: {
                mode: false,
                path: _cache,
            },
        }))

        await console.log("Create config file at: " + _config);
    }
};