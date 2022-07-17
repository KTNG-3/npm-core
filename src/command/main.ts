#! /usr/bin/env node

//import

import { readdirSync } from 'fs';
import * as commander from 'commander';

//interface

interface ICommand {
    data: {
        name: string,
        description: string,
        option: Array<{
            name: string,
            description: string,
        }>,
    };
    execute: (...args: Array<any>) => any | Promise<any>;
}

//script

const commandsFolders = readdirSync(__dirname + '/data').filter((file) => file.endsWith('.js'));

for (const file of commandsFolders) {
    const command: ICommand = { ...{ data: { option: [] } }, ...(require(`./data/${file}`).default) };

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

//export

export type { ICommand };