import React from 'react';
import ProfileModalHeader from './contentModalHeader/profileModalHeader';
import './modalHeader.css';

const ModalHeader = (props) => {

    const modalType = (e) => {
        switch (e) {
            case 'modalProfile':
                return <ProfileModalHeader />;
            default:
                return;
        }
    };

    return (
        <div className={`modalHeaderBox ${props.type}`}>
            {modalType(props.type)}
        </div>
    );
};

export default ModalHeader;