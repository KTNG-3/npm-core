// import

import * as fs from "fs";
import { foldersBuilder, pathFinder } from "../utils/FileBuilder";
import { toUft8, fromUft8 } from "../utils/Uft8";

// interface

export namespace BasicTemp {
    export interface Options {
        /**
         * Location of Temp Folder
         * (default: temp)
         */
        path?: string;
        /**
         * Name of Temp file
         * (default: main.tmp)
         */
        name?: string;
        /**
         * Encoding methods
         * (default: base64)
         */
        unicode?: BufferEncoding;
    }

    export interface Response extends Required<BasicTemp.Options> {
        /**
         * Location of data
         */
        interactionId: string;
    }
}

// class

/**
 * Basic Temporary File
 */
export class BasicTemp {
    private config: Required<BasicTemp.Options>;
    private path: string;

    /**
     * @param {BasicTemp.Options} options config
     */
    public constructor(options: BasicTemp.Options | string = {}) {
        // config

        if (typeof options === "string") {
            options = {
                name: options
            };
        }

        this.config = {
            ...{
                path: "/temp/",
                name: "main.tmp",
                unicode: "base64"
            },
            ...options
        };

        // path
        this.path = pathFinder({
            path: this.config.path,
            name: this.config.name,
            extension: "tmp"
        });
    }

    // config

    /**
     * Change Temp file encoding methods
     * @param {BufferEncoding} unicode (new) Encoding methods
     */
    public changeUnicode(unicode: BufferEncoding): void {
        const _tempFile = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

        this.config.unicode = unicode;

        fs.writeFileSync(this.path, toUft8(JSON.stringify(_tempFile), this.config.unicode));
    }

    // file

    /**
     * Create file
     * @returns {void}
     */
    public build(): void {
        if (fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, toUft8(JSON.stringify({}), this.config.unicode));
        } else {
            foldersBuilder(this.config.path);

            fs.createWriteStream(this.path).write(toUft8(JSON.stringify({}), this.config.unicode));
        }
    }

    /**
     * Delete file
     * @returns {void}
     */
    public destroy(): void {
        try {
            fs.rmSync(this.path);
        } catch (err) {
            fs.unlinkSync(this.path);
        }

        if (fs.existsSync(this.path)) {
            return this.destroy();
        }
    }

    // exists

    /**
     * Check if `interactionId` Exists in the File
     * @param {string} interactionId Interaction ID
     * @returns {boolean}
     */
    public isInteractionIdExists(interactionId: string): boolean {
        const _tempFile = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

        if (_tempFile[interactionId]) {
            return true;
        }

        return false;
    }

    /**
     * Check if `data` Exists in the File
     * @param {any} data Data
     * @returns {boolean}
     */
    public isDataExists(data: any): boolean {
        const _tempFile = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

        let _isExists = false;

        Object.entries(_tempFile).forEach((element) => {
            if (element[1] === data) {
                _isExists = true;
            }
        });

        return _isExists;
    }

    // data

    /**
     * Add data
     * @param {any} data Data
     * @param {string} interactionId Interaction ID
     * @returns {BasicTemp.Response}
     */
    public add(data: any, interactionId?: string): BasicTemp.Response {
        if (!interactionId) {
            interactionId = String(new Date().getTime());
        }

        if (fs.existsSync(this.path)) {
            const _tempFile = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

            _tempFile[interactionId] = data;

            fs.writeFileSync(this.path, toUft8(JSON.stringify(_tempFile), this.config.unicode));
        } else {
            foldersBuilder(this.config.path);

            const _json: any = {};
            _json[interactionId] = data;

            fs.createWriteStream(this.path).write(toUft8(JSON.stringify(_json), this.config.unicode));
        }

        return {
            ...this.config,
            ...{
                interactionId: interactionId
            }
        };
    }

    /**
     * Set data
     * @param {any} data Data
     * @param {string} interactionId Interaction ID
     * @returns {BasicTemp.Response}
     */
    public set(data: any, interactionId: string): BasicTemp.Response {
        return this.add(data, interactionId);
    }

    /**
     * Get data
     * @param {string} interactionId Interaction ID
     * @returns {T | undefined}
     */
    public get<T = any>(interactionId: string): T | undefined {
        if (fs.existsSync(this.path)) {
            const _tempFile = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

            return _tempFile[interactionId];
        }

        return undefined;
    }

    /**
     * Get all data
     * @returns {Array<T> | undefined}
     */
    public getAll<T = any>(): Array<T> | undefined {
        if (fs.existsSync(this.path)) {
            const _tempFile: Record<string, T> = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

            const _allValue: Array<T> = [];
            Object.entries(_tempFile).forEach((element) => {
                _allValue.push(element[1]);
            });

            return _allValue;
        }

        return undefined;
    }

    /**
     * Remove data
     * @param {string} interactionId Interaction ID
     * @returns {void}
     */
    public remove(interactionId: string): void {
        const _tempFile = JSON.parse(fromUft8(fs.readFileSync(this.path).toString(), this.config.unicode));

        delete _tempFile[interactionId];

        fs.writeFileSync(this.path, toUft8(JSON.stringify(_tempFile), this.config.unicode));
    }

    /**
     * Remove all data
     * @returns {void}
     */
    public removeAll(): void {
        fs.writeFileSync(this.path, toUft8(JSON.stringify({}), this.config.unicode));
    }

    // static

    /**
     * Get data
     * @param {BasicTemp.Response} path Location of Temp file
     * @param {boolean} isRemoveAfter Remove Data?
     * @returns {T | undefined}
     */
    public static get<T = any>(path: BasicTemp.Response, isRemoveAfter?: boolean): T | undefined {
        const _temp = new BasicTemp(path);

        const MyData = _temp.get(path.interactionId);

        if (isRemoveAfter === true) {
            _temp.remove(path.interactionId);
        }

        return MyData;
    }
}
