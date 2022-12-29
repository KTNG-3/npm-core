// import

import { EventEmitter as NodeEventEmitter } from "node:events";

// interface

export namespace EventEmitter {
    export type ListenerFunction = (...args: Array<any>) => any;
    export type Structure = Record<string, EventEmitter.ListenerFunction>;
    export type KeyOf<T extends EventEmitter.Structure> = keyof T & string;

    export interface Type<Events extends EventEmitter.Structure> {
        listenerCount<T extends EventEmitter.KeyOf<Events>>(eventName: T): number;
        addListener<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this;
        on<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this;
        addOnceListener<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this;
        once<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this;
        emit<T extends EventEmitter.KeyOf<Events>>(eventName: T, ...args: Parameters<Events[T]>): this;
        removeListener<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener?: Events[T]): this;
        off<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener?: Events[T]): this;
    }
}

// class

/**
 * EventEmitter
 */
export class EventEmitter<Events extends EventEmitter.Structure = { ready: () => void }> implements EventEmitter.Type<Events> {
    private _EventEmitter: NodeEventEmitter;

    public constructor() {
        this._EventEmitter = new NodeEventEmitter();

        this.maxListeners = NodeEventEmitter.defaultMaxListeners;
    }

    public set maxListeners(value: number) {
        this._EventEmitter.setMaxListeners(value);
    }

    public get maxListeners(): number {
        return this._EventEmitter.getMaxListeners();
    }

    /**
     *
     * @param eventName name
     * @returns {number} listener count
     */
    public listenerCount<T extends EventEmitter.KeyOf<Events>>(eventName: T): number {
        return this._EventEmitter.listenerCount(eventName);
    }

    // functions

    /**
     *
     * @param {string} eventName name
     * @param {Function & EventEmitter.ListenerFunction} listener callback
     * @returns {EventEmitter}
     */
    public addListener<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this {
        this._EventEmitter.prependListener(eventName, listener);

        return this;
    }

    /**
     * Duplicate of {@link addListener}
     * @param {string} eventName name
     * @param {Function & EventEmitter.ListenerFunction} listener callback
     * @returns {EventEmitter}
     */
    public on<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this {
        return this.addListener(eventName, listener);
    }

    /**
     *
     * @param {string} eventName name
     * @param {Function & EventEmitter.ListenerFunction} listener callback
     * @returns {EventEmitter}
     */
    public addOnceListener<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this {
        this._EventEmitter.prependOnceListener(eventName, listener);

        return this;
    }

    /**
     * Duplicate of {@link addOnceListener}
     * @param {string} eventName name
     * @param {Function & EventEmitter.ListenerFunction} listener callback
     * @returns {EventEmitter}
     */
    public once<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener: Events[T]): this {
        return this.addOnceListener(eventName, listener);
    }

    /**
     *
     * @param {string} eventName name
     * @param {any} args data
     * @returns {EventEmitter}
     */
    public emit<T extends EventEmitter.KeyOf<Events>>(eventName: T, ...args: Parameters<Events[T]>): this {
        if (this._EventEmitter.listenerCount(eventName) > 0) {
            this._EventEmitter.emit(eventName, ...args);
        }

        return this;
    }

    /**
     *
     * @param eventName name
     * @param {Function & EventEmitter.ListenerFunction} listener callback
     * @returns {EventEmitter}
     */
    public removeListener<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener?: Events[T]): this {
        if (listener) {
            this._EventEmitter.removeListener(eventName, listener);
        } else {
            this._EventEmitter.removeAllListeners(eventName);
        }

        return this;
    }

    /**
     * Duplicate of {@link removeListener}
     * @param eventName name
     * @param {Function & EventEmitter.ListenerFunction} listener callback
     * @returns {EventEmitter}
     */
    public off<T extends EventEmitter.KeyOf<Events>>(eventName: T, listener?: Events[T]): this {
        return this.removeListener(eventName, listener);
    }
}
