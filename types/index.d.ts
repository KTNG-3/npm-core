export namespace Core {
    const AxiosClient: typeof import("./core/AxiosClient");
    const AxiosCookie: typeof import("./core/AxiosCookie");
    const Config: any;
}
export const Logs: typeof import("./core/Logs");
export namespace Utils {
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
        colored(text: any, color?: string): string;
    };
    const Format: typeof import("./utils/format");
    const FindInArray: {
        find: (array: any[], target: any, start?: number, end?: number) => any;
        start: (array: any[], target: any) => any;
        normal: (array: any, target: any) => {
            find: boolean;
            position: number;
        };
    };
}
//# sourceMappingURL=index.d.ts.map