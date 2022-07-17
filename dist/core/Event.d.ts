/**
 * Basic Custom Event Emitter
 */
declare class CustomEvent {
    protected EventController: {
        [key: string]: Array<Function>;
    };
    constructor();
    /**
     *
     * @param {string} name Name
     * @param {any} args Data
     * @returns {void}
     */
    emit(name: string, ...args: Array<any>): void;
    /**
     *
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     * @returns {void}
     */
    off(name: string, callback?: Function): void;
    /**
     *
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     * @returns {void}
     */
    on(name: string, callback: Function): void;
    /**
     *
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     * @returns {void}
     */
    once(name: string, callback: Function): void;
}
export { CustomEvent };
