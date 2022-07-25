//import

import * as fs from 'fs';
import { FoldersBuilder, PathFinder } from '../utils/FileBuilder';

//interface

namespace Cache {
    export interface Options {
        /**
         * Location of Cache Folder
         * (default: cache)
        */
        path?: string;
        /**
         * Name of Cache file
         * (default: MAIN.json)
         */
        name?: string;
    }

    export interface Response extends Cache.Options {
        /**
         * Location of data
         */
        interactionId: string;
    }
}

//class

/**
 * Basic JSON Database
 */
class Cache {
    public config: Cache.Options;
    private path: string;

    /**
     * @param {Logs.Options} options Logs options
     */
    public constructor(options: Cache.Options | string = {}) {
        //config

        if (typeof options === 'string') {
            options = {
                name: options,
            };
        }

        this.config = {
            ...{
                path: '/cache/',
                name: 'MAIN.json',
            },
            ...options
        };

        //path
        this.path = PathFinder({
            path: String(this.config.path),
            name: String(this.config.name), extension: 'json',
        });
    }

    //data

    /**
     * 
     * @param {any} data Data to save
     * @param {string} interactionId Interaction ID
     * @returns {Cache.Response}
     */
    public input(data: any, interactionId?: string): Cache.Response {
        if (!interactionId) {
            interactionId = String(new Date().getTime());
        }

        if (fs.existsSync(this.path)) {
            var _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());

            _cacheFile[interactionId] = data;

            fs.writeFileSync(this.path, JSON.stringify(_cacheFile));
        } else {
            FoldersBuilder(String(this.config.path));

            var _json: any = {};
            _json[interactionId] = data;

            fs.createWriteStream(this.path).write(JSON.stringify(_json));
        }

        return { ...this.config, ...{ interactionId: interactionId } };
    }

    /**
     * @param {string} interactionId Interaction ID
     * @returns {any}
     */
    public output<MyInterface = any>(interactionId: string): MyInterface | undefined {
        if (fs.existsSync(this.path)) {
            const _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());

            return _cacheFile[interactionId];
        }
    }

    //remove

    /**
     * Clear Data in file
     * @param {string} interactionId Interaction ID
     * @returns {void}
     */
    public clear(interactionId: string): void {
        var _cacheFile = JSON.parse(fs.readFileSync(this.path).toString());

        delete _cacheFile[interactionId];

        fs.writeFileSync(this.path, JSON.stringify(_cacheFile));
    }

    /**
     * Remove file
     * @returns {void}
     */
    public remove(): void {
        fs.unlinkSync(this.path);
    }

    //static

    /**
     * @param {Cache.Response} path Path to Data
     * @param {boolean} clear Clear Data?
     * @returns {any}
     */
    public static output<MyInterface = any>(path: Cache.Response, clear?: boolean): MyInterface | undefined {
        const _NewCache = new Cache(path);

        const MyData = _NewCache.output(path.interactionId);

        if (clear === true) {
            _NewCache.clear(path.interactionId);
        }

        return MyData;
    }
}

//export

export { Cache };