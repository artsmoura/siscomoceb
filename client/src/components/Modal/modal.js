import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './modal.css';

const Modal = (props) => {
    return (
        <>
            <div className={"darkBG"} />
            <div className={"centered"}>
                <div className={"modal"}>
                    <div className={"modalHeader"}>
                        <h5 className={"heading"}>Dialog</h5>
                    </div>
                    <button className={"closeBtn"} >
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className={"modalContent"}>
                        Are you sure you want to delete the item?
                    </div>
                    <div className={"modalActions"}>
                        <div className={"actionsContainer"}>
                            <button className={"cancelBtn"} >
                                {props.btnSecond}
                            </button>
                            <button className={props.btnPrimary === "delete" ? "deleteBtn" : ''} >
                                {props.btnPrimary}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;