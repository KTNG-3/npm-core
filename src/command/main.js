#! /usr/bin/env node

//import
const fs = require('fs');
const commander = require('commander');

//script
var commandsFolders;
try {
    commandsFolders = fs.readdirSync('./src/command/data');
}catch(err){
    commandsFolders = fs.readdirSync('./node_modules/@ing3kth/core/src/command/data');
}finally {
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
}