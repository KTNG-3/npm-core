/**
 *
 * @param {string} data Data
 * @param {string} unicode Encrypt method (default: base64)
 * @returns {string}
 */
export function toUft8(data: string, unicode: BufferEncoding = "base64"): string {
    return Buffer.from(data).toString(unicode);
}

/**
 *
 * @param data Data
 * @param unicode Decrypt method (default: base64)
 * @returns {string}
 */
export function fromUft8(data: string, unicode: BufferEncoding = "base64"): string {
    return Buffer.from(data, unicode).toString();
}
