//core
export { AxiosClient } from "./core/AxiosClient";
export { Cache } from "./core/Cache";
export { Logs, type Logs_Mode } from "./core/Logs";

//interface
export * as Interface_AxiosClient from "./interface/IAxiosClient";
export * as Interface_Cache from "./interface/ICache";
export * as Interface_Config from "./interface/IConfig";
export * as Interface_FindInArray from "./interface/IFindInArray";
export * as Interface_ILogs from "./interface/ILogs";
export * as Interface_Milliseconds from "./interface/IMilliseconds";
export * as Interface_Update from "./interface/IUpdate";

//utils
export * as ConsoleColor from "./utils/ConsoleColor";
export * as FindInArray from "./utils/FindInArray";
export { ToMilliseconds as Milliseconds } from "./utils/Milliseconds";
export { Random } from "./utils/Random";
export { wait as Wait } from "./utils/Wait";

//main
export { _config as Config } from "./config";
export { Update } from "./update";