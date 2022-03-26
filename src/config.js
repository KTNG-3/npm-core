var process = require('process')

const IngConfig = {
    "logs": {
        "mode": true,
        "show": false
    },
    "val-api": {
        "local": {
            "mode": true,
            "lockfile": process.env.LOCALAPPDATA + "/Riot Games/Riot Client/Config/lockfile"
        }
    }
}

module.exports = IngConfig;