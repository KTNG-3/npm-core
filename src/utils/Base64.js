const CryptoJS = require('crypto-js');

/**
 * 
 * @param {any} data Data
 * @param {String} unicode Unicode
 * @returns 
 */
function toBase64(data, unicode = 'Utf8') {
    return CryptoJS.enc[unicode].parse(String(data)).toString(CryptoJS.enc.Base64);
}

function fromBase64(data, unicode = 'Utf8') {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc[unicode]);
}

module.exports = {
    toBase64,
    fromBase64,
};