"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersBuilder = void 0;
const tslib_1 = require("tslib");
const process = tslib_1.__importStar(require("process"));
const fs = tslib_1.__importStar(require("fs"));
//function
function FoldersBuilder(path) {
    if (!path.startsWith('/')) {
        path = `/${path}`;
    }
    let _path = `${process.cwd()}`;
    for (const _folder of String(path).split('/')) {
        _path += `\\${_folder}`;
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        }
        else {
            continue;
        }
    }
}
exports.FoldersBuilder = FoldersBuilder;
