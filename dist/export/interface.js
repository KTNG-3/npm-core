"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = exports.Milliseconds = exports.ILogs = exports.FindInArray = exports.Config = exports.Cache = exports.AxiosClient = void 0;
exports.AxiosClient = __importStar(require("../interface/IAxiosClient"));
exports.Cache = __importStar(require("../interface/ICache"));
exports.Config = __importStar(require("../interface/IConfig"));
exports.FindInArray = __importStar(require("../interface/IFindInArray"));
exports.ILogs = __importStar(require("../interface/ILogs"));
exports.Milliseconds = __importStar(require("../interface/IMilliseconds"));
exports.Update = __importStar(require("../interface/IUpdate"));
//# sourceMappingURL=interface.js.map