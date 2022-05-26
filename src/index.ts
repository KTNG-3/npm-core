//core
export { Cache } from "./core/Cache";
export { Logs, type Logs_Mode } from "./core/Logs";

//interface
export { ICache } from "./interface/ICache";
export { IConfig_File, IConfig } from "./interface/IConfig";
export { ILogs } from "./interface/ILogs";
export { IMilliseconds_Part, IMilliseconds } from "./interface/IMilliseconds";

//utils
export * as ConsoleColor from "./utils/ConsoleColor";
export { ToMilliseconds as Milliseconds } from "./utils/Milliseconds";
export { Random } from "./utils/Random";
export { wait as Wait } from "./utils/Wait";
export { toUft8 } from "./utils/toUft8";

//main
export { _config as Config } from "./config";