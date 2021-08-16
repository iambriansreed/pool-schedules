import ReactMarkdown from 'react-markdown';
import { useAppContext } from '../Context';
import data from '../data';
import Modal from './Modal';

function Intro() {
    const { dispatch } = useAppContext();

    return (
        <Modal
            title={data.title}
            onClose={() => dispatch({ showIntro: false })}
        >
            <ReactMarkdown>{data.intro}</ReactMarkdown>
        </Modal>
    );
}

export default Intro;
