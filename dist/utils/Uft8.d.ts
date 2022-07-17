/// <reference types="node" />
/**
 *
 * @param {string} data Data
 * @param {string} unicode Encrypt mode (default: base64)
 * @returns {string}
 */
declare function toUft8(data: string, unicode?: BufferEncoding): string;
/**
 *
 * @param data Data
 * @param unicode Decrypt mode (default: base64)
 * @returns {string}
 */
declare function fromUft8(data: string, unicode?: BufferEncoding): string;
export { toUft8, fromUft8 };
