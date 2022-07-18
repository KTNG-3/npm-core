#! /usr/bin/env node

//import

import * as process from 'process';
import * as fs from 'fs';

//script

const _folder: string = process.cwd() + "/ing3kth";

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