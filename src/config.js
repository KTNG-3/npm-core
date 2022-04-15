var process = require('process')
const fs = require('fs')

const consoleColor = require('./utils/consoleColor'); 
const _path = process.cwd() + '/ing3kth/config.json';

if (!fs.existsSync(_path)) {
    throw new Error(`\nConfig file not found!, Please run ${consoleColor.colored("'npx ing3kth init'", 'yellow')} to create config file.\n`);
}

module.exports = require(String(_path));