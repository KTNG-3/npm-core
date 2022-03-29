export const AxiosClient: typeof import("./core/AxiosClient");
export const AxiosCookie: typeof import("./core/AxiosCookie");
export const Config: any;
export const Logs: typeof import("./Logs/Logs");
export const Base64: typeof import("./utils/Base64");
export const wait: typeof import("./utils/wait");
export const consoleColor: {
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
    colored(text: any, color?: string): string;
};
export const Format: typeof import("./utils/format");
//# sourceMappingURL=index.d.ts.map