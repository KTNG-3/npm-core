interface makeBlurConfig {
    message: string;
    replaceWith?: string;
    percent?: number;
}
/**
 * Text Blur
 * @param {makeBlurConfig} config Blur Config
 * @returns {string}
 */
declare function makeBlur(config: makeBlurConfig | string): string;
export { makeBlur };
export type { makeBlurConfig };
