#! /usr/bin/env node
"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const process = tslib_1.__importStar(require("process"));
const fs = tslib_1.__importStar(require("fs"));
//script
const _folder = process.cwd() + "/ing3kth";
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
