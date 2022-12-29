// function

/**
 *
 * @param {number} data Number (Milliseconds)
 * @returns
 */
export function toJson(data: number) {
    // setup

    const ms_total: number = data;
    let second_total = 0;
    let minute_total = 0;
    let hour_total = 0;
    let day_total = 0;

    let ms: number = ms_total;
    let second = 0;
    let minute = 0;
    let hour = 0;
    let day = 0;

    // script

    for (ms >= 1000; ms >= 1000; ) {
        ms -= 1000;
        second += 1;
        second_total += 1;
    }

    for (second >= 60; second >= 60; ) {
        second -= 60;
        minute += 1;
        minute_total += 1;
    }

    for (minute >= 60; minute >= 60; ) {
        minute -= 60;
        hour += 1;
        hour_total += 1;
    }

    for (hour >= 24; hour >= 24; ) {
        hour -= 24;
        day += 1;
        day_total += 1;
    }

    return {
        data: {
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            milliseconds: ms
        },
        all: {
            day: day_total,
            hour: hour_total,
            minute: minute_total,
            second: second_total,
            milliseconds: ms_total
        }
    };
}

/**
 *
 * @param {number} ms1 Milliseconds 1
 * @param {number} ms2 Milliseconds 2
 * @returns {number}
 */
export function difference(ms1: number | Date, ms2: number | Date): number {
    if (typeof ms1 !== "number") {
        ms1 = ms1.getTime();
    }
    if (typeof ms2 !== "number") {
        ms2 = ms2.getTime();
    }

    if (ms2 > ms1) {
        return ms2 - ms1;
    }

    return ms1 - ms2;
}
