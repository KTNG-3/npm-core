//import
const axios = require('axios');

const IUpdate = require('./interface/IUpdate');

let process = require('process');
const fs = require("fs");

//class
class Update {
    constructor() {
        this.classId = '@ing3kth/core/Update';
        this.axiosClient = axios.create()
    }

    /**
     * 
     * @returns {Object}
     */
    async getVersion() {
        return (await this.axiosClient.get('https://ktng-3.github.io/api.json')).data;
    }

    /**
     * 
     * @returns {IUpdate}
     */
    async checkForUpdate() {
        const _modules = await process.cwd() + '/node_modules';
        const ing3kth_folder = _modules + '/@ing3kth';

        const ing3kth_api = await this.getVersion();

        var _response = "Find new version available!";
        var _after_response = "";
        var _needUpdate = [];
        var _dontNeedUpdate = [];

        if (fs.existsSync(_modules) && fs.existsSync(ing3kth_folder)) {
            const packages = fs.readdirSync(ing3kth_folder);
            for (let _pack of packages) {
                const package_json = require(ing3kth_folder + '/' + _pack + '/package.json');

                const _pack_version = package_json.version; //Current version
                const _api_version = ing3kth_api.npm[_pack].version; //Latest version

                if (_pack_version !== _api_version) {
                    if (_pack_version > _api_version) {
                        _after_response += "\n- You have a newer version of " + _pack + " installed!";
                        continue;
                    }

                    _needUpdate.push({
                        name: _pack,
                        version: {
                            current: _pack_version,
                            latest: _api_version,
                        }
                    });
                }else {
                    _dontNeedUpdate.push({
                        name: _pack,
                        version: {
                            current: _pack_version,
                            latest: _api_version,
                        }
                    });
                }
            }
        }else {
            _response = "You don't have any package installed!!";
            return {
                response: _response,
                data: {
                    update: _needUpdate,
                    latest: _dontNeedUpdate,
                }
            };
        }

        if (_needUpdate.length <= 0) {
            _response = "No Update Available, all packages are up to date!!";
        }

        return {
            response: _response + _after_response,
            data: {
                update: _needUpdate,
                latest: _dontNeedUpdate,
            }
        };
    }

    /**
     * 
     * @returns {Object}
     */
    static async getVersion() {
        const _newUpdate = new Update();
        return await _newUpdate.getVersion();
    }

    /**
     * 
     * @returns {IUpdate}
     */
    static async checkForUpdate() {
        const _newUpdate = new Update();
        return await _newUpdate.checkForUpdate();
    }
}

//export
module.exports = Update;