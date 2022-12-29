// import

import { random } from "./Random";

// interface

export interface textBlurConfig {
    message: string;
    /**
     * (default: ?)
     */
    replaceWith?: string;
    /**
     * (default: 45)
     */
    percent?: number;
}

// function

/**
 * Make text unreadable
 * @param {textBlurConfig} config Config
 * @returns {string}
 */
export function textBlur(config: textBlurConfig | string): string {
    // setup

    if (typeof config === "string") {
        config = {
            message: config
        };
    }

    const _config: Required<textBlurConfig> = {
        ...{
            message: "",
            replaceWith: "?",
            percent: 45
        },
        ...config
    };

    // script

    const _blur = [];

    for (const _message of _config.message.split("")) {
        if (random(0, 100) <= _config.percent) {
            _blur.push(_config.replaceWith);
        } else {
            _blur.push(_message);
        }
    }

    return _blur.join("").toUpperCase();
}
