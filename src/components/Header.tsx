import { useRef } from 'react';
import { useAppContext, State } from '../Context';
import data from '../data';
import { getDates } from '../utils';

export default function AppHeader() {
    const dates = useRef(getDates());

    const { dispatch, state } = useAppContext();

    function Button({
        children,
        stateKey,
        value,
    }: {
        children: React.ReactNode;
        stateKey: keyof State;
        value: any;
    }) {
        return (
            <button
                type="button"
                className={state[stateKey] === value ? 'selected' : ''}
                onClick={() => dispatch({ [stateKey]: value })}
            >
                {children}
            </button>
        );
    }

    return (
        <header className="app-header">
            <nav className="days">
                <ul>
                    {dates.current.map((d, dateIndex) => (
                        <li key={dateIndex}>
                            <Button stateKey="day" value={d.dayOfWeek}>
                                <>
                                    <div className="day-week">{d.weekDay}</div>
                                    <div className="day-month">
                                        {d.dayOfMonth}
                                    </div>
                                    <div className="month">{d.month}</div>
                                </>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="categories">
                <ul>
                    {data.categories.map((category, index) => (
                        <li key={index}>
                            <Button stateKey="category" value={category}>
                                {category}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
