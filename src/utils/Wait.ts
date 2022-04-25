/**
 * 
 * @param {Number} ms 
 * @returns {Promise<any>}
 */
async function wait(ms:number):Promise<any> {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export { wait };