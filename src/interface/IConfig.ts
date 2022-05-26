interface IConfig_File {
    "path": string;
    "extension": string;
}

interface IConfig {
    "create": Date | string;
    "version": number;
    "logs": {
        "save": boolean,
        "show": boolean,
        "file": IConfig_File,
    };
    "cache": {
        "file": IConfig_File,
    };
}

export type { IConfig, IConfig_File };