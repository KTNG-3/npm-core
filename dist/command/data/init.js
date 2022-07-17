"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const process_1 = require("process");
const fs = tslib_1.__importStar(require("fs"));
//script
const _folder = (0, process_1.cwd)() + "/ing3kth";
var _localappdata = String(process.env.LOCALAPPDATA);
var _appdata = String(process.env.APPDATA);
if (!_localappdata) {
    _localappdata == "";
}
if (!_appdata) {
    _appdata == "";
}
//export
exports.default = {
    data: {
        name: "init",
        description: "Create Folders",
    },
    //script
    execute() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //folder
            if (!fs.existsSync(_folder)) {
                fs.mkdirSync(_folder);
            }
            const _cache = _folder + "/cache";
            //cache
            if (!fs.existsSync(_cache)) {
                fs.mkdirSync(_cache);
                fs.createWriteStream(_cache + "/NAME.json").write(`{}`);
            }
            const _logs = _folder + "/logs";
            //Logs
            if (!fs.existsSync(_logs)) {
                fs.mkdirSync(_logs);
                fs.createWriteStream(_logs + "/NAME.log").write(`${new Date().toISOString()}|||system|||CREATE NAME.log`);
            }
        });
    },
};
