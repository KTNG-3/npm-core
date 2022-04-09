module.exports = interface = {
    "create": String,
    "logs": {
        "mode": Boolean,
        "show": Boolean,
        "path": String,
    },
    "cache": {
        "mode": Boolean,
        "path": String,
    },
    "val-api": {
        "local": {
            "ip": String,
            "lockfile": String,
        },
    }
};