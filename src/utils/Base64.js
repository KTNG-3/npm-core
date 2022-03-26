function toBase64(data, unicode = 'utf8') {
    try {
        return Buffer.from(data, unicode).toString('base64');
    }catch(err){
        return CryptoJS.enc.Base64.stringify(data);
    }
}

function fromBase64(data) {
    return CryptoJS.enc.Base64.parse(data);
}

module.exports.toBase64 = toBase64;
module.exports.fromBase64 = fromBase64;