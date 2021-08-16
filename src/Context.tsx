import { createContext, useContext, useReducer } from 'react';
import { getSession, SessionState, setSession } from './utils/session';

export interface State {
    day: number;
    category: string;
    intro: boolean;
    loading: boolean;
    showIntro: boolean;
}

type Dispatch = (action: Partial<State>) => void;

const Context =
    createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function reducer(state: State, stateUpdate: Partial<State>) {
    // session updates
    {
        let sessionUpdate: Partial<SessionState> = {};
        if ('showIntro' in stateUpdate) {
            sessionUpdate = {
                ...(sessionUpdate || {}),
                showIntro: stateUpdate.showIntro,
            };
        }
        if (sessionUpdate) setSession(sessionUpdate);
    }

    return { ...state, ...stateUpdate };
}

export const defaultState: State = {
    day: 0,
    intro: false,
    category: '',
    loading: true,
    showIntro: true,
};

export function ContextProvider({ children }: { children: JSX.Element }) {
    const sessionState = getSession();
    const [state, dispatch] = useReducer(reducer, {
        ...defaultState,
        ...sessionState,
    });

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export function useAppContext() {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('use must be used within a Provider');
    }
    return context;
}
