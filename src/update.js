//import
const AxiosClient = require("./core/AxiosClient");

const fs = require("fs");

//class
class Update {
    constructor() {
        this.axiosClient = AxiosClient.client({
            cookie: false,
            jar: null,
            headers: {},
        });
    }


    async getVersion() {
        return (await this.axiosClient.get('https://ktng-3.github.io/api.json')).data;
    }

    async checkForUpdate() {
        const _modules = process.cwd() + '/node_modules';
        const ing3kth_folder = _modules + '/@ing3kth';

        const ing3kth_api = await this.getVersion();

        let _needUpdate = {
            response: "Find new version available!",
            data: [],
        };

        if (fs.existsSync(_modules) && fs.existsSync(ing3kth_folder)) {
            const packages = fs.readdirSync(ing3kth_folder);
            for (_pack of packages) {
                const package_json = require(ing3kth_folder + '/' + _pack + '/package.json');
    
                const _pack_version = package_json.version; //Current version
                const _api_version = ing3kth_api.npm[_pack].version; //Latest version
    
                if (_pack_version !== _api_version) {
                    if(_pack_version > _api_version) {
                        _needUpdate.response = `You are using a newer version of '${_pack}' than the latest version.`;
                        continue;
                    }

                    _needUpdate.data.push({
                        name: _pack,
                        version: {
                            current: _pack_version,
                            latest: _api_version,
                        }
                    });
                }
            }
        }

        if(_needUpdate.data.length <= 0) {
            _needUpdate.response = "No Update Available, all packages are up to date!!";
        }

        return _needUpdate;
    }

    static async getVersion() {
        const _newUpdate = new Update();
        return await _newUpdate.getVersion();
    }

    static async checkForUpdate() {
        const _newUpdate = new Update();
        return await _newUpdate.checkForUpdate();
    }
}

//export
module.exports = Update;