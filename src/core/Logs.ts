//import

import * as path from 'path';
import * as process from 'process';

import * as fs from 'fs';
import { FoldersBuilder } from '../utils/FileBuilder';

import { format as TextFormat } from 'util';
import { colored as ColoredText } from '../utils/ConsoleColor';

//interface

namespace Logs {
    export interface Options {
        /**
         * Save to Log file
         * (default: false)
         */
        save?: boolean;
        /**
         * Show the log in the console
         * (default: true)
         */
        showup?: boolean;
        /**
         * Location of Logs Folder
         * (default: logs)
        */
        path?: string;
        /**
         * Name of Log file
         * (default: MAIN.log)
         */
        name?: string;
    }

    export type Mode = 'error' | 'warning' | 'system' | 'info';

    export interface Response {
        date?: Date;
        mode?: string;
        data: any;
    }
}

//class

/**
 * Basic Logs System
 */
class Logs {
    public config: Logs.Options;
    private path: string;

    /**
     * @param {Logs.Options} options Logs Options
     */
    public constructor(options: Logs.Options | string = {}) {
        //config

        if (typeof options === 'string') {
            options = {
                name: options,
            };
        }

        if (options.path) {
            if (!options.path.startsWith('/') && !options.path.startsWith('.')) {
                options.path = `/${options.path}`;
            }

            if (options.path.endsWith('/')) {
                options.path = String(options.path).substring(0, options.path.length - 1);
            }
        }

        if (options.name) {
            options.name = options.name.replace(' ', '_');

            if (!options.name.endsWith('.log')) {
                options.name = `${options.name}.log`;
            }
        }

        this.config = {
            ...{
                save: false,
                showup: true,
                path: '/logs/',
                name: 'MAIN.log',
            },
            ...options
        };


        //path
        this.path = `${process.cwd()}\\${path.join(`${this.config.path}/${this.config.name}`)}`;
    }

    /**
     * 
     * @param {any} data Any data to log.
     * @param {string} mode Log mode. (log, error, system)
     * @returns {void}
     */
    public log(data: any, mode: Logs.Mode = 'info'): void {
        if (this.config.showup === true) {
            switch (mode) {
                case 'error':
                    console.log(`<${mode}> ` + ColoredText(`${String(data)}`, 'red'));
                    break;
                case 'warning':
                    console.log(`<${mode}> ` + ColoredText(`${String(data)}`, 'yellow'));
                    break;
                case 'system':
                    console.log(`<${mode}> ` + ColoredText(`${String(data)}`, 'cyan'));
                    break;
                case 'info':
                    console.log(`<${mode}> ` + String(data));
                    break;
                default:
                    break;
            }
        }

        if (this.config.save == true) {
            if (fs.existsSync(this.path)) {
                var _logFile = fs.readFileSync(this.path).toString();

                _logFile += Logs.logMessage(data, mode);

                fs.writeFileSync(this.path, _logFile);
            } else {
                FoldersBuilder(String(this.config.path));

                const _logFile = fs.createWriteStream(this.path);

                _logFile.write(`${new Date().toISOString()}|||system|||CREATE ${this.config.name}${Logs.logMessage(data, mode)}`);
            }
        }
    }

    /**
     * 
     * @returns {Array<Logs.Response>}
     */
    public get(): Array<Logs.Response> {
        var _get: Array<Logs.Response> = [];

        if (fs.existsSync(this.path)) {
            var file_split: Array<any> = [];

            for (const _line of fs.readFileSync(this.path).toString().split("\n")) {
                file_split.push(_line.split("|||"));
            }

            for (let i = 0; i < file_split.length; i++) {
                const _split: any = file_split[i];

                if (typeof _split[2] === 'undefined') {
                    continue;
                }

                _get.push({
                    date: new Date(_split[0]),
                    mode: String(_split[1]),
                    data: TextFormat(_split[2]),
                });
            }

        }

        return _get;
    }

    //static

    private static logMessage(data: any, mode: Logs.Mode = 'info'): string {
        return `\n${new Date().toISOString()}|||${String(mode).toLowerCase()}|||${TextFormat(data)}`;
    }

    /**
     * 
     * @param {any} data Any data to log.
     * @param {String} mode Log mode.
     * @param {Logs.Options} options Logs Options
     * @returns {void}
     */
    public static log(data: any, mode: Logs.Mode = 'info', options?: Logs.Options): void {
        const newLog = new Logs(options);
        newLog.log(data, mode);
    }

    /**
     * 
     * @param {Logs.Options} options Logs Options
     * @returns {Array<Logs.Response>}
     */
    public static get(options?: Logs.Options): Array<Logs.Response> {
        const newLog = new Logs(options);

        return newLog.get();
    }
}

//export

export { Logs };