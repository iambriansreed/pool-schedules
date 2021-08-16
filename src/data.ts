import { defaultState, State } from './Context';

interface AppEvent {
    start: number;
    end: number;
    items: string[];
    day: number;
    category: string;
}

class Data {
    private _events = [] as AppEvent[];
    private _categories = [] as string[];
    private _loaded = false;
    private _title = 'Scheduler';
    private _intro =
        'This app lets you easily view schedules so you can easily find which event occurs on each day.';

    get events() {
        return this._events;
    }
    get categories() {
        return this._categories;
    }
    get title() {
        return this._title;
    }
    get intro() {
        return this._intro;
    }

    async init(dispatch: (action: Partial<State>) => void) {
        if (this._loaded) return;

        dispatch({ loading: true });

        try {
            const {
                events,
                title,
                intro,
            }: { events: AppEvent[]; title: string; intro: string } = await (
                await fetch('/data.json')
            ).json();

            this._title = title;
            this._intro = intro;

            this._events = events.sort((a, b) => {
                return a.start > b.start ? 1 : -1;
            });

            this._categories = this._events
                .reduce(
                    (agg, { category }) =>
                        agg.concat(agg.includes(category) ? [] : [category]),
                    [] as string[]
                )
                .sort();

            const day = events.find((ev) => ev.day === defaultState.day)
                ? defaultState.day
                : events[0].day;
            const category = this._categories[1];

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this._loaded = true;
                    dispatch({ loading: false, day, category });
                    resolve(true);
                }, 750);
            });
        } catch (e) {}

        return false;
    }
}

const data = new Data();

export default data;
