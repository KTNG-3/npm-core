//import
var process = require('process')
const fs = require('fs');

//export
module.exports = {
    data: {
        name: 'init',
        description: 'Create Config File',
        option: [
            {
                name: '-f, --force',
                description: 'Force to create config file',
            }
        ], 
    },
    //script
    async execute({force}) {
        const _path = process.cwd() + '/ing3kth-config.json';
        var _file;

        //get file
        if (!fs.existsSync(_path)) {
            await fs.createWriteStream(_path, { flags: 'w' });

            _file = await fs.readFileSync(_path);
        } else {
            _file = fs.readFileSync(_path);

            if(!force){
                return "Config file already exists";
            }
        }

        //write file
        const _localappdata = String(process.env.LOCALAPPDATA);
        const _appdata = String(process.env.APPDATA);

        _file = JSON.stringify({
            "logs": {
                "mode": true,
                "show": false
            },
            "val-api": {
                "local": {
                    "mode": true,
                    "lockfile": _localappdata + "/Riot Games/Riot Client/Config/lockfile"
                }
            }
        })

        await fs.writeFileSync(_path, _file);
        await console.log("Create config file at: " + _path)
    }
}