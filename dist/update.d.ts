import { Axios } from 'axios';
import { IUpdate } from './interface/IUpdate';
declare class Update {
    classId: string;
    axiosClient: Axios;
    constructor();
    /**
     *
     * @returns {Object}
     */
    getVersion(): Promise<any>;
    /**
     *
     * @returns {IUpdate}
     */
    checkForUpdate(): Promise<IUpdate>;
    /**
     *
     * @returns {Object}
     */
    static getVersion(): Promise<any>;
    /**
     *
     * @returns {IUpdate}
     */
    static checkForUpdate(): Promise<IUpdate>;
}
export { Update };
//# sourceMappingURL=update.d.ts.map