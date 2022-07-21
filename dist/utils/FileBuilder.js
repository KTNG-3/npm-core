"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesBuilder = exports.FoldersBuilder = void 0;
const tslib_1 = require("tslib");
const process = tslib_1.__importStar(require("process"));
const fs = tslib_1.__importStar(require("fs"));
//function
/**
 * Create Folders
 * @param path Path to the folder
 */
function FoldersBuilder(path) {
    let _path = `${process.cwd()}`;
    if (typeof path === 'string') {
        if (!path.startsWith('/')) {
            path = `/${path}`;
        }
        path = path.split('/');
    }
    for (const _folder of path) {
        _path += `/${_folder}`;
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        }
        else {
            continue;
        }
    }
}
exports.FoldersBuilder = FoldersBuilder;
/**
 * Create Files
 * @param path path to the file
 * @param data add data to the file
 */
function FilesBuilder(path, data = '') {
    if (path.endsWith('/')) {
        throw new Error(`Unknown path: ${path}`);
    }
    if (path.includes('/')) {
        FoldersBuilder(path.split('/').slice(0, -1).join('/'));
    }
    let _path = `${process.cwd()}/${path}`;
    if (!fs.existsSync(_path)) {
        fs.createWriteStream(_path).write(String(data));
    }
}
exports.FilesBuilder = FilesBuilder;
