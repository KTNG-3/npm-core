//import
import axios, { Axios } from 'axios';

import { IUpdate, IUpdate_Part } from './interface/IUpdate';

import { cwd as CurrentWorkingDirectory } from 'process';
import { existsSync, readdirSync } from 'fs';

//class
class Update {
    classId: string;
    axiosClient: Axios;

    constructor() {
        this.classId = '@ing3kth/core/Update';
        this.axiosClient = axios.create();
    }

    /**
     * 
     * @returns {Promise<any>}
     */
    async getVersion():Promise<any> {
        return (await this.axiosClient.get('https://ktng-3.github.io/api.json')).data;
    }

    /**
     * 
     * @returns {Promise<IUpdate>}
     */
    async checkForUpdate():Promise<IUpdate> {
        const _modules:string = await CurrentWorkingDirectory() + '/node_modules';
        const ing3kth_folder:string = _modules + '/@ing3kth';

        const ing3kth_api = await this.getVersion();

        var _response = "Find new version available!";
        var _after_response = "";
        var _needUpdate:Array<IUpdate_Part> = [];
        var _dontNeedUpdate:Array<IUpdate_Part> = [];

        if (existsSync(_modules) && existsSync(ing3kth_folder)) {
            const packages = readdirSync(ing3kth_folder);
            for (let _pack of packages) {
                const package_json = require(ing3kth_folder + '/' + _pack + '/package.json');

                const _pack_version:string = package_json.version; //Current version
                const _api_version:string = ing3kth_api.npm[_pack].version; //Latest version

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
     * @returns {Promise<any>}
     */
    static async getVersion():Promise<any> {
        const _newUpdate:Update = new Update();
        return await _newUpdate.getVersion();
    }

    /**
     * 
     * @returns {Promise<IUpdate>}
     */
    static async checkForUpdate():Promise<IUpdate> {
        const _newUpdate:Update = new Update();
        return await _newUpdate.checkForUpdate();
    }
}

//export
export { Update };