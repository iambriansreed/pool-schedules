import Cookie from 'js-cookie';

export interface SessionState {
    showIntro: boolean;
}

const COOKIE_NAME = 'skejul';

export const defaultSession: SessionState = {
    showIntro: true,
};

export const getSession = (): SessionState => {
    let session = { ...defaultSession };
    try {
        const value = JSON.parse(Cookie.get(COOKIE_NAME) || '{}');
        session = { ...defaultSession, ...value };
    } catch {}
    return session;
};

export const setSession = (newState: Partial<SessionState>): SessionState => {
    const sessionState = getSession();
    const value = { ...sessionState, ...newState };
    Cookie.set(COOKIE_NAME, JSON.stringify(value), {
        domain: document.domain,
    });
    return value;
};
