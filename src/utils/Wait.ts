/**
 * 
 * @param {Number} ms 
 * @returns {Promise<Number>}
 */
async function wait(ms:number):Promise<number> {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export { wait };