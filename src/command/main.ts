#! /usr/bin/env node

//import
import { readdirSync } from 'fs';
import * as commander from 'commander';

//script
const commandsFolders = readdirSync(__dirname + '/data').filter((file) => file.endsWith('.js'));
for (const file of commandsFolders) {
    const command = require(`./data/${file}`).default;

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

//export
commander.program.parse();