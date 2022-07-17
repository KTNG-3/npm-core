//import

import type { ICommand } from '../main';

import { cwd as CurrentWorkingDirectory } from 'process';
import * as fs from 'fs';

//script

const _folder: string = CurrentWorkingDirectory() + "/ing3kth";

var _localappdata: string = String(process.env.LOCALAPPDATA);
var _appdata: string = String(process.env.APPDATA);

if (!_localappdata) {
    _localappdata == "";
}

if (!_appdata) {
    _appdata == "";
}

//export

export default {
    data: {
        name: "init",
        description: "Create Folders",
    },
    //script
    async execute(): Promise<any> {
        //folder
        if (!fs.existsSync(_folder)) {
            fs.mkdirSync(_folder);
        }

        const _cache: string = _folder + "/cache";

        //cache
        if (!fs.existsSync(_cache)) {
            fs.mkdirSync(_cache);
            fs.createWriteStream(_cache + "/NAME.json").write(`{}`);
        }

        const _logs: string = _folder + "/logs";

        //Logs
        if (!fs.existsSync(_logs)) {
            fs.mkdirSync(_logs);
            fs.createWriteStream(_logs + "/NAME.log").write(`${new Date().toISOString()}|||system|||CREATE NAME.log`);
        }
    },
} as ICommand;