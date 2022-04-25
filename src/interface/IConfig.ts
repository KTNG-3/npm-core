interface IConfigFile {
    "path": string;
    "extension": string;
}

interface IConfig {
    "create": Date | string,
    "version": number | string,
    "logs": {
        "save": boolean,
        "show": boolean,
        "file": IConfigFile,
    },
    "cache": {
        "file": IConfigFile,
    },
    "val-api": {
        "RiotLocal": {
            "ip": string,
            "username": string,
            "lockfile": string,
        },
        "ValClient": {
            "client": {
                "version": string,
                "platform": {
                    "platformType": string,
                    "platformOS": string,
                    "platformOSVersion": string,
                    "platformChipset": string,
                }
            }
        }
    }
}

export type { IConfig, IConfigFile }