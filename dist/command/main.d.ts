#! /usr/bin/env node
interface ICommand {
    data: {
        name: string;
        description: string;
        option: Array<{
            name: string;
            description: string;
        }>;
    };
    execute: (...args: Array<any>) => any | Promise<any>;
}
export type { ICommand };
