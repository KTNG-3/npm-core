#! /usr/bin/env node

//import
const fs = require('fs');
const commander = require('commander');

//script
const commandsFolders = fs.readdirSync('./src/command/data');

for (const file of commandsFolders) {
    const command = require(`./data/${file}`);

    const newCommand = commander.program
        .command(command.data.name)
        .description(command.data.description)
        .action(command.execute);

    if (command.data.option.length > 0) {
        for (const option of command.data.option) {
            newCommand.option(option.name, option.description);
        }
    }
}

//export
commander.program.parse();