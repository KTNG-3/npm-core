export namespace Axios {
    const Client: typeof import("./core/AxiosClient");
    const Cookie: typeof import("./core/AxiosCookie");
}
export const Config: {
    logs: {
        mode: boolean;
        show: boolean;
    };
    "val-api": {
        local: {
            mode: boolean;
            lockfile: string;
        };
    };
};
export const Logs: typeof import("./Logs/Logs");
export const Base64: typeof import("./utils/Base64");
export const wait: typeof import("./utils/wait");
