"use strict";
//class
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEvent = void 0;
/**
 * Basic Custom Event Emitter
 */
class CustomEvent {
    constructor() {
        this.EventController = {};
    }
    /**
     *
     * @param {string} name Name
     * @param {any} args Data
     * @returns {void}
     */
    emit(name, ...args) {
        if (this.EventController[name]) {
            this.EventController[name].forEach((callback) => {
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
    off(name, callback) {
        if (this.EventController[name]) {
            if (callback) {
                this.EventController[name] = this.EventController[name].filter((cb) => {
                    return cb !== callback;
                });
            }
            else {
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
    on(name, callback) {
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
    once(name, callback) {
        const onceCallback = (...args) => {
            callback(...args);
            this.off(name, onceCallback);
        };
        this.on(name, onceCallback);
    }
}
exports.CustomEvent = CustomEvent;
