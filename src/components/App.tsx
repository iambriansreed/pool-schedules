import { useEffect } from 'react';
import { useAppContext } from '../Context';
import data from '../data';
import Header from './Header';
import Intro from './Intro';
import Loader from './Loader';
import TimesEvents from './TimesEvents';

function App() {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        data.init(dispatch);

        const onLinkClick = (event: MouseEvent) => {
            event.preventDefault();
            const href = (event.target as HTMLAnchorElement)?.href;
            href && window.open(href, '_blank');
        };

        document.getElementById('root')?.addEventListener('click', onLinkClick);

        return () => {
            document
                .getElementById('root')
                ?.removeEventListener('click', onLinkClick);
        };
        // eslint-disable-next-line
    }, []);

    return state.loading ? (
        <Loader />
    ) : (
        <>
            {state.showIntro && <Intro />}
            <Header />
            <TimesEvents />
            <div className="app-footer">
                <div />
            </div>
        </>
    );
}

export default App;
