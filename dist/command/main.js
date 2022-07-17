#! /usr/bin/env node
"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const commander = tslib_1.__importStar(require("commander"));
//script
const commandsFolders = (0, fs_1.readdirSync)(__dirname + '/data').filter((file) => file.endsWith('.js'));
for (const file of commandsFolders) {
    const command = Object.assign({ data: { option: [] } }, (require(`./data/${file}`).default));
    const newCommand = commander.program
        .command(command.data.name)
        .description(command.data.description)
        .action(command.execute);
    if (command.data.option && command.data.option.length > 0) {
        for (const option of command.data.option) {
            newCommand.option(option.name, option.description);
        }
    }
}
commander.program.parse();
