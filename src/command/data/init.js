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

        const systeminformation = require('systeminformation');
        const _sysplatfrom = (await systeminformation.osInfo()).platform;

        //create config file
        await _file.write(JSON.stringify({
            create: String(new Date().toISOString()),
            version: "1.7.4",
            process: {
                platform: _sysplatfrom,
                directory: await process.cwd(),
            },
            logs: {
                show: true,
                save: false,
                path: _logs,
                file: {
                    path: _logs,
                    extension: "log",
                }
            },
            cache: {
                file: {
                    path: _cache,
                    extension: "json",
                }
            },
            "val-api": {
                RiotLocal: {
                    ip: '127.0.0.1',
                    username: 'riot',
                    lockfile: _localappdata + "/Riot Games/Riot Client/Config/lockfile",
                },
                ValClient: {
                    client: {
                        version: 'release-04.07-shipping-15-699063',
                        platfrom: {
                            platformType: 'PC',
                            platformOS: 'Windows',
                            platformOSVersion: '10.0.19042.1.256.64bit',
                            platformChipset: 'Unknown'
                        },
                    }
                }
            },
        }));

        await console.log(`\nCreate config file at: ${_config}\n`);
    }
};