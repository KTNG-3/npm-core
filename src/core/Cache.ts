//import
import * as fs from 'fs';

import { cwd as CurrentWorkingDirectory } from 'process';

import { _config } from '../config';
import * as consoleColor from '../utils/ConsoleColor';

import { ICache } from '../interface/ICache';

//class

/**
 * Cache Data in JSON format.
 */
class Cache {
    classId: string;
    baseName: string;
    path: string;
    file: any;

    /**
     * 
     * @param {String} name Name
     */
    constructor(name: string = 'NAME') {
        this.classId = '@ing3kth/core/Cache';

        this.baseName = name;

        this.path = CurrentWorkingDirectory() + '/ing3kth' + _config.cache.file.path + `/${this.baseName}.${_config.cache.file.extension}`;

        if (!fs.existsSync(this.path)) {
            this.create();
        } else {
            this.file = fs.readFileSync(this.path);
        }
    }

    /**
     * 
     * @returns {Promise<any>}
     */
    async create():Promise<any> {
        const _FILE:fs.WriteStream = await fs.createWriteStream(this.path, {
            flags: 'w'
        });

        await _FILE.once('ready', async () => {
            await _FILE.write(JSON.stringify({}));
        });

        await _FILE.on('finish', async () => {
            try {
                this.file = await fs.readFileSync(this.path);
            } catch (err) {
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Fail To Create ${this.baseName} Cache At: ${this.path}`, 'red') + `\n`);
                return err;
            }
        });
    }

    /**
     * 
     * @param {any} data Data to save.
     * @param {String} interactionId Interaction ID.
     * @returns {Promise<ICache>}
     */
    async input(data:any, interactionId:string = ''):Promise<ICache> {
        if (!interactionId) {
            interactionId = String(new Date().getTime());
        }

        try {
            let _json:any = await JSON.parse(this.file);

            _json[interactionId] = data;

            await fs.writeFileSync(this.path, await JSON.stringify(await _json));
        } catch (err) {
            console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Wait A Second(s) To Create The Cache File`, 'red') + `\n`);
            await fs.writeFileSync(this.path, await JSON.stringify({}));
        }

        return {
            name: this.baseName,
            interactionId: interactionId,
        };
    }

    /**
     * @param {String} interactionId Interaction ID.
     * @returns {Promise<any>}
     */
    async output(interactionId:string):Promise<any> {
        const _json:any = await JSON.parse(this.file);

        return await _json[interactionId];
    }

    /**
     * @param {String} interactionId Interaction ID.
     * @returns {Promise<void>}
     */
    async clear(interactionId:string):Promise<void> {
        let _json:any = await JSON.parse(this.file);

        delete _json[interactionId];

        await fs.writeFileSync(this.path, await JSON.stringify(await _json));
    }

    /**
     * @param {ICache} path Path to Data.
     * @returns {Promise<any>}
     */
    static async output(path:ICache):Promise<any> {
        const _NewCache:Cache = await new Cache(path.name);
        return await _NewCache.output(path.interactionId);
    }
}

//export
export { Cache };