const CryptoJS = require("crypto-js");

function toBase64(data) {
    CryptoJS.enc.Base64.stringify(words);
}

function fromBase64(data) {
    CryptoJS.enc.Base64.parse(data);
}

module.exports.toBase64 = toBase64;
module.exports.fromBase64 = fromBase64;