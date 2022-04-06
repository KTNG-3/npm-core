/**
 * 
 * @param {any} data Data
 * @param {String} unicode Unicode
 * @returns 
 */
function toBase64(data, unicode = 'utf8') {
    return Buffer.from(data, unicode).toString('base64');
}

module.exports.toBase64 = toBase64;