declare namespace exports {
    export { exports as default };
}
declare namespace module { }
export declare namespace Core {
    const AxiosClient: typeof import("./core/AxiosClient");
    const AxiosCookie: typeof import("./core/AxiosCookie");
    const Logs: typeof import("./core/Logs");
    const Cache: typeof import("./core/Cache");
}
export declare namespace Utils {
    const Base64: typeof import("./utils/Base64");
    const wait: typeof import("./utils/wait");
    const consoleColor: {
        color: {
            black: string;
            red: string;
            green: string;
            yellow: string;
            blue: string;
            magenta: string;
            cyan: string;
            white: string;
        };
        effect: {
            reset: string;
            bright: string;
            dim: string;
            underscore: string;
            blink: string;
            reverse: string;
            hidden: string;
        };
        background: {
            black: string;
            red: string;
            green: string;
            yellow: string;
            blue: string;
            magenta: string;
            cyan: string;
            white: string;
        };
        newline: string;
        colored(text: string, color?: string): string;
    };
    const Format: typeof import("./utils/format");
    const FindInArray: {
        find: (array: any[], target: any, start?: number, end?: number) => {
            find: BooleanConstructor;
            position: NumberConstructor;
        };
        start: (array: any[], target: any) => {
            find: BooleanConstructor;
            position: NumberConstructor;
        };
        normal: (array: any[], target: any) => {
            find: BooleanConstructor;
            position: NumberConstructor;
        };
    };
}
export declare namespace Interface {
    const AxiosClient_2: {
        cookie: BooleanConstructor;
        jar: ObjectConstructor;
        headers: ObjectConstructor;
    };
    export { AxiosClient_2 as AxiosClient };
    export const AxiosClientOut: {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    const Cache_2: {
        name: StringConstructor;
        interactionId: StringConstructor;
    };
    export { Cache_2 as Cache };
    export const Config: {
        create: StringConstructor;
        process: {
            platform: StringConstructor;
            directory: StringConstructor;
        };
        logs: {
            mode: BooleanConstructor;
            show: BooleanConstructor;
            path: StringConstructor;
        };
        cache: {
            mode: BooleanConstructor;
            path: StringConstructor;
        };
        "val-api": {
            local: {
                ip: StringConstructor;
                lockfile: StringConstructor;
            };
        };
    };
    const FindInArray_1: {
        find: BooleanConstructor;
        position: NumberConstructor;
    };
    export { FindInArray_1 as FindInArray };
    export const Update: {
        response: StringConstructor;
        data: {
            update: {
                name: StringConstructor;
                version: {
                    current: StringConstructor;
                    latest: StringConstructor;
                };
            }[];
            latest: {
                name: StringConstructor;
                version: {
                    current: StringConstructor;
                    latest: StringConstructor;
                };
            }[];
        };
    };
}
declare const Config_1: any;
declare const Update_1: typeof import("./update");
export default module.exports;
export { Config_1 as Config, Update_1 as Update };
//# sourceMappingURL=index.d.ts.map