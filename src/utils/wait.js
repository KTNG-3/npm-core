/**
 * 
 * @param {Number} ms 
 * @returns {Promise}
 */
async function wait(ms) {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

module.exports = wait;