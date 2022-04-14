export = Update;
declare class Update {
    static getVersion(): Promise<any>;
    static checkForUpdate(): Promise<{
        response: string;
        data: never[];
    }>;
    axiosClient: import("axios").AxiosInstance;
    getVersion(): Promise<any>;
    checkForUpdate(): Promise<{
        response: string;
        data: never[];
    }>;
}
//# sourceMappingURL=update.d.ts.map