//function

/**
 * 
 * @param {number} ms Milliseconds
 * @returns {Promise<any>}
 */
async function wait(ms: number): Promise<any> {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

//export

export { wait };