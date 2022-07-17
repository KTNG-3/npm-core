interface IMillisecondsPart {
    day: number;
    hour: number;
    minute: number;
    second: number;
    milliseconds: number;
}
interface IMilliseconds {
    data: IMillisecondsPart;
    all: IMillisecondsPart;
}
/**
 *
 * @param {number} data Milliseconds
 * @returns {IMilliseconds}
 */
declare function ToMilliseconds(data: number): IMilliseconds;
/**
 *
 * @param {number} ms1 Milliseconds 1
 * @param {number} ms2 Milliseconds 2
 * @returns {number}
 */
declare function DifferenceMillisecond(ms1: number | Date, ms2: number | Date): number;
export { ToMilliseconds, DifferenceMillisecond };
export type { IMillisecondsPart, IMilliseconds };
