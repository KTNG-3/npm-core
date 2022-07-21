//function

/**
 * 
 * @param {string} data Data
 * @param {string} unicode Encrypt mode (default: base64)
 * @returns {string}
 */
function toUft8(data: string, unicode: BufferEncoding = 'base64'): string {
    return Buffer.from(data).toString(unicode);
}

/**
 * 
 * @param data Data
 * @param unicode Decrypt mode (default: base64)
 * @returns {string}
 */
function fromUft8(data: string, unicode: BufferEncoding = 'base64'): string {
    return Buffer.from(data, unicode).toString();
}

//export

export { toUft8, fromUft8 };