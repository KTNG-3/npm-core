var process = require('process')
const fs = require('fs')

const ing3kth_init = require('./command/data/init');
const consoleColor = require('./utils/consoleColor');
const _path = process.cwd() + '/ing3kth-config.json';

if (!fs.existsSync(_path)) {
    ing3kth_init.execute(false);
    throw new Error(`Config file not found!, Please run ${consoleColor.colored("'npx ing3kth init'", 'yellow')} to create config file.`);
}

module.exports = require(String(_path));