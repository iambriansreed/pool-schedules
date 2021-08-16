import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-snapshot';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Context';

ReactDOM.render(
    <StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </StrictMode>,
    document.getElementById('root')
);

// render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();