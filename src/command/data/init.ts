//import
import * as process from 'process';
import * as fs from 'fs';

//path
const _folder:string = process.cwd() + "/ing3kth";

const _cache_path:string = "/cache";
const _cache:string = _folder + _cache_path;

const _logs_path:string = "/logs"
const _logs:string = _folder + _logs_path;

const _config_path:string = "/config.json";
const _config:string = _folder + _config_path;

var _localappdata:string = String(process.env.LOCALAPPDATA);
var _appdata:string = String(process.env.APPDATA);

if(!_localappdata){
    _localappdata == ""
}

if(!_appdata){
    _appdata == ""
}

//export
export default {
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
    async execute({ force }: { force: any }):Promise<string> {
        //folder
        if (!fs.existsSync(_folder)) {
            force = true;
            fs.mkdirSync(_folder);
        }

        //cache
        if (!fs.existsSync(_cache)) {
            fs.mkdirSync(_cache);
            fs.createWriteStream(_cache + "/NAME.json", {
                flags: 'w'
            }).write(JSON.stringify({}));
        }

        //Logs
        if (!fs.existsSync(_logs)) {
            fs.mkdirSync(_logs);
            fs.createWriteStream(_logs + "/NAME.log", {
                flags: 'w'
            }).write(`date|||mode|||data`);
        }

        //config
        if (!fs.existsSync(_config)) {
            await exports.default.config();
        } else {
            if (!force) {
                console.log(`\nFind config file at: ${_config}\n`);
                return _config;
            }

            await exports.default.config();
        }

        return _config;
    },
    async config():Promise<void> {
        //script
        const _file = await fs.createWriteStream(_config, {
            flags: "w",
        });

        //create config file
        await _file.write(JSON.stringify({
            create: String(new Date().toISOString()),
            version: "1",
            logs: {
                save: false,
                show: true,
                file: {
                    path: _logs_path,
                    extension: "log",
                }
            },
            cache: {
                file: {
                    path: _cache_path,
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