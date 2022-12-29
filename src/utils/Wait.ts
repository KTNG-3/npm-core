/**
 *
 * @param {number} ms Number (Milliseconds)
 * @returns {Promise<any>}
 */
export async function wait(ms: number): Promise<any> {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
