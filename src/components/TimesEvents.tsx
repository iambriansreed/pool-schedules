import { getEvents, getNow } from '../utils';
import { useEffect, useState, useRef } from 'react';
import { useAppContext } from '../Context';

function TimesEvents() {
    const { state } = useAppContext();

    const events = getEvents(state);

    const container = useRef<HTMLDivElement>();
    const refCallback = (node: HTMLDivElement) => (container.current = node);

    const [nowDate, nowDateSet] = useState(new Date());

    const now = getNow(nowDate);

    const lastTime = events.length ? events[events.length - 1].end : 0;

    const showNow = now.time < lastTime;

    useEffect(() => {
        let interval: any;

        if (showNow) {
            // scroll window to now
            {
                let top = 0;
                if (container.current && showNow) {
                    const nowElement = container.current.querySelector(
                        '.now'
                    ) as HTMLElement;
                    top = nowElement.offsetHeight * (now.top - 1);
                }
                container.current?.scroll({ top, behavior: 'smooth' });
            }

            // update now time
            interval = setInterval(() => {
                nowDateSet(new Date());
            }, 60 * 1000); // every minute}
        }

        return () => interval && clearInterval(interval);
    }, [lastTime, now.top, showNow]);

    return (
        <div className="times-events" ref={refCallback}>
            <div className="scroll-window">
                {showNow && (
                    <div className="now" style={{ top: now.top + 'em' }}>
                        <div className="time">{now.timePretty}</div>
                    </div>
                )}
                {events.map((event, eventIndex) => (
                    <div
                        className="time-event"
                        key={eventIndex}
                        style={{ top: event.top, height: event.height }}
                    >
                        <div className="time">
                            <div
                                className={`start ${
                                    event.sameTime ? 'share' : ''
                                }`}
                            >
                                {event.startTime}
                            </div>
                            {event.endTime && (
                                <div className="end">{event.endTime}</div>
                            )}
                            <pre style={{ display: 'none' }}>
                                {JSON.stringify(event, null, '\t')}
                            </pre>
                        </div>
                        <div className="event">
                            <div>
                                {event.items.map((item, itemIndex) => (
                                    <span key={itemIndex}>
                                        {item}
                                        <br />
                                    </span>
                                ))}
                            </div>
                        </div>
                        <pre style={{ display: 'none' }}>
                            {JSON.stringify(event, null, '\t')}
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimesEvents;
