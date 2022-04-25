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
exports.Wait = exports.Random = exports.Milliseconds = exports.FindInArray = exports.ConsoleColor = void 0;
exports.ConsoleColor = __importStar(require("../utils/ConsoleColor"));
exports.FindInArray = __importStar(require("../utils/FindInArray"));
var Milliseconds_1 = require("../utils/Milliseconds");
Object.defineProperty(exports, "Milliseconds", { enumerable: true, get: function () { return Milliseconds_1.ToMilliseconds; } });
var Random_1 = require("../utils/Random");
Object.defineProperty(exports, "Random", { enumerable: true, get: function () { return Random_1.Random; } });
var Wait_1 = require("../utils/Wait");
Object.defineProperty(exports, "Wait", { enumerable: true, get: function () { return Wait_1.wait; } });
//# sourceMappingURL=utils.js.map