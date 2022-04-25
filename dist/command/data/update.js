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
//import
const update_1 = require("../../update");
const consoleColor = __importStar(require("../../utils/ConsoleColor"));
//export
exports.default = {
    data: {
        name: 'update',
        description: 'Check for updates',
        option: [],
    },
    //script
    async execute() {
        const _update = await update_1.Update.checkForUpdate();
        console.log(`\n${_update.response}\n`);
        if (_update.data.update && _update.data.update.length <= 0) {
            return;
        }
        for (const updateList of _update.data.update) {
            console.log(`${consoleColor.colored(String(updateList.name), 'cyan')}: ${consoleColor.colored(String(updateList.version.current), 'red')} --> ${consoleColor.colored(String(updateList.version.latest), 'green')}`);
        }
        console.log(``);
    }
};
//# sourceMappingURL=update.js.map