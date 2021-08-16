function Modal({
    children,
    onClose,
    title,
}: {
    onClose: () => void;
    children: JSX.Element;
    title: string;
}) {
    return (
        <div className="modal">
            <div className="backdrop"></div>
            <div className="dialog">
                <div className="title">
                    <h2>{title}</h2>
                    <button type="button" onClick={onClose}>
                        <svg viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
                <div className="body">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
