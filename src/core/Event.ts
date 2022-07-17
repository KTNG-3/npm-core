//class

/**
 * Basic Custom Event Emitter
 */
class CustomEvent {
    protected EventController: {
        //key:value
        [key: string]: Array<Function>;
    };

    public constructor() {
        this.EventController = {};
    }

    /**
     * 
     * @param {string} name Name
     * @param {any} args Data
     * @returns {void}
     */
    public emit(name: string, ...args: Array<any>): void {
        if (this.EventController[name]) {
            this.EventController[name].forEach((callback: Function) => {
                callback(...args);
            });
        }
    }

    /**
     * 
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     * @returns {void}
     */
    public off(name: string, callback?: Function): void {
        if (this.EventController[name]) {
            if (callback) {
                this.EventController[name] = this.EventController[name].filter((cb: Function) => {
                    return cb !== callback;
                });
            } else {
                delete this.EventController[name];
            }
        }
    }

    /**
     * 
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     * @returns {void}
     */
    public on(name: string, callback: Function): void {
        if (!this.EventController[name]) {
            this.EventController[name] = [];
        }

        this.EventController[name].push(callback);
    }

    /**
     * 
     * @param {string} name Name
     * @param {Function} callback Call Back Function
     * @returns {void}
     */
    public once(name: string, callback: Function): void {
        const onceCallback = (...args: Array<any>) => {
            callback(...args);
            this.off(name, onceCallback);
        };

        this.on(name, onceCallback);
    }

}

//export

export { CustomEvent };