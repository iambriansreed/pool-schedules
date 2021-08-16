import { State } from '../Context';
import data from '../data';

export function getDates() {
    let date = new Date();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const dates: {
        month: string;
        dayOfMonth: Number;
        weekDay: string;
        dayOfWeek: number;
    }[] = [];

    for (let i = 1; i < 8; i++) {
        const [month, dayOfMonth, dayOfWeek] = [
            date.getMonth(),
            date.getDate(),
            date.getDay(),
        ];

        let weekDay = weekDays[dayOfWeek];

        if (i === 1) weekDay = 'Today';
        if (i === 2) weekDay = 'Tomorrow';

        dates.push({
            month: months[month],
            dayOfMonth,
            weekDay,
            dayOfWeek,
        });
        date.setDate(date.getDate() + 1);
    }

    return dates;
}

export const formatTime = (h: number): string => {
    if (h % 100 === 60) {
        h += 40;
    }
    const amPm = h >= 1200 ? 'pm' : 'am';
    const minutes = h % 100;
    let hour = (h - minutes) / 100;
    hour = hour > 12 ? hour - 12 : hour;

    return `${hour}:${minutes.toString().padStart(2, '0')} ${amPm}`;
};

export function getTimes() {
    const times = [];
    for (let h = 600; h < 2015; h += 15) {
        if (h % 100 === 60) {
            h += 40;
        }
        const amPm = h >= 1200 ? 'pm' : 'am';
        const minutes = h % 100;
        let hour = (h - minutes) / 100;
        hour = hour > 12 ? hour - 12 : hour;

        times.push({
            h,
            minutes,
            title: `${hour}:${minutes.toString().padStart(2, '0')} ${amPm}`,
        });
    }
    return times;
}

export const toDateTime = (
    time: number
): { minutes: number; hours: number; totalMinutes: number } => {
    const minutes = time % 100;
    const hours = time ? (time - minutes) / 100 : 0;
    const totalMinutes = hours * 60 + minutes;
    return { minutes, hours, totalMinutes };
};

export const minutesDifference = (start: number, end: number) => {
    const startTime = toDateTime(start);
    const endTime = toDateTime(end);
    return endTime.totalMinutes - startTime.totalMinutes;
};

export const round = (num: number, place: number) => {
    return Math.round(num * Math.pow(10, place)) / 100;
};

export const nowOffset = () => {
    const start = toDateTime(600);
    const now = toDateTime(
        new Date().getHours() * 100 + new Date().getMinutes()
    );
    const totalMinutesNow = now.totalMinutes - start.totalMinutes;
    return totalMinutesNow;
};

export const getNow = (nowDate: Date) => {
    const time = nowDate.getHours() * 100 + nowDate.getMinutes();
    const now = toDateTime(time);
    const start = toDateTime(600);
    const totalMinutesNow = now.totalMinutes - start.totalMinutes;

    return {
        top: round(totalMinutesNow / 15, 2),
        time,
        timePretty: formatTime(time),
    };
};

export const getEvents = (state: State) => {
    return data.events
        .filter((ev) => ev.category === state.category && ev.day === state.day)
        .map((event, index, arr) => {
            const startTime = toDateTime(event.start - 600);
            const lengthInMinutes = minutesDifference(event.start, event.end);
            const endSameAsNextStart = event.end === arr[index + 1]?.start;
            const startSameAsPrevEnd = event.start === arr[index - 1]?.end;
            return {
                ...event,
                items: event.items,
                lengthInMinutes,
                startTime: formatTime(event.start),
                endTime: endSameAsNextStart ? '' : formatTime(event.end),
                sameTime: startSameAsPrevEnd,
                top: (startTime.hours * 60 + startTime.minutes) / 15 + 'em',
                height: lengthInMinutes / 15 - 0.1 + 'em',
            };
        });
};

export function getUniqueValues<T>(arr: T[]): T[] {
    return arr.filter(
        (value: T, index: number, self: T[]) => self.indexOf(value) === index
    );
}
