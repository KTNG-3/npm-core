"use strict";
//import
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const util_1 = require("util");
//export
exports.default = {
    data: {
        name: "echo <data>",
        description: "Echo the given data",
        option: [
            {
                name: "-e, --error <error>",
                description: "Echo the given data as error",
            },
        ],
    },
    //script
    execute(data, { error }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log((0, util_1.format)(data));
            if (error) {
                console.error(new Error(error));
            }
        });
    },
};
