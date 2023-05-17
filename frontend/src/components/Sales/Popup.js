import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup__content">
                <button className="popup__close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
