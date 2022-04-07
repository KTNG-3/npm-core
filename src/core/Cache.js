//import
const fs = require('fs');

const _config = require(`../config.js`);
const consoleColor = require('../utils/consoleColor');

const i_Cache = require('../interface/i_Cache');

//class
class Cache {
    /**
     * 
     * @param {String} name Name
     */
    constructor(name = 'NAME') {
        this.classId = '@ing3kth/core/Cache';

        this.baseName = name;

        this.path = _config.cache.path + `/${this.baseName}.json`;

        if (!fs.existsSync(this.path)) {
            this.create();
        } else {
            this.file = fs.readFileSync(this.path);
        }
    }

    /**
     * 
     * @returns {void}
     */
    async create() {
        if (_config.cache.mode) {
            const _FILE = await fs.createWriteStream(this.path, {
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
    }

    /**
     * 
     * @param {any} data Data to save.
     * @param {String} interactionId Interaction ID.
     * @returns {i_Cache}
     */
    async input(data, interactionId = false) {
        if (_config.cache.mode) {
            if (!interactionId) {
                interactionId = Number(new Date().getTime());
            }

            try {
                let _json = await JSON.parse(this.file);

                _json[String(interactionId)] = data;

                await fs.writeFileSync(this.path, await JSON.stringify(await _json));
            } catch (err) {
                console.log(`\n<error> ` + consoleColor.colored(`${this.classId} Wait A Second(s) To Create The Cache File`, 'red') + `\n`);
                await fs.writeFileSync(this.path, await JSON.stringify({}));
                return err;
            }
        }

        return {
            name: this.baseName,
            interactionId: interactionId,
        };
    }

    /**
     * @param {String} interactionId Interaction ID.
     * @returns {Object}
     */
    async output(interactionId) {
        if (_config.cache.mode) {
            const _json = await JSON.parse(this.file);

            return await _json[String(interactionId)];
        }
    }

    /**
     * @param {String} interactionId Interaction ID.
     * @returns {void}
     */
    async clear(interactionId) {
        if (_config.cache.mode) {
            let _json = await JSON.parse(this.file);

            delete _json[String(interactionId)];

            await fs.writeFileSync(this.path, await JSON.stringify(await _json));
        }
    }

    /**
     * @param {i_Cache} path Path to Data.
     * @returns {Object}
     */
    static async output(path) {
        const _NewCache = await new Cache(path.name);
        return await _NewCache.output(path.interactionId);
    }
}

//export
module.exports = Cache;