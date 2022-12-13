import React, { useState } from "react";
import Button from "../../../components/Button/button";
import Input from "../../../components/Input/input";
import FileBase from 'react-file-base64';
import './formEvent.css';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateContentEvent } from "../redux/eventsAction";
import Checkbox from "../../../components/Checkbox/checkbox";

const FormEvent = () => {

    const event = useSelector((state) => state.eventState.event);

    const dispatch = useDispatch();

    const handleFileUpload = (e) => {
        dispatch(updateContentEvent({
            target: { name: 'image', value: e }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEvent(event));
    };

    return (
        <div className="container">
            <div className="boxForm">
                <h2>Criar Evento</h2>
                <form>
                    <Input
                        type="text"
                        name="name"
                        label="Nome do Evento"
                        onChange={(e) => dispatch(updateContentEvent(e))}
                        value={event.name}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="description"
                        label="Descrição do Evento"
                        onChange={(e) => dispatch(updateContentEvent(e))}
                        value={event.description}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="date"
                        name="dateEvent"
                        label="Data do Evento"
                        onChange={(e) => dispatch(updateContentEvent(e))}
                        value={event.dateEvent}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="location"
                        label="Local do Evento"
                        onChange={(e) => dispatch(updateContentEvent(e))}
                        value={event.location}
                        isRequired={true}
                        className="formInput"
                    />
                    {
                        event.accommodation.map((accommodation) => {
                            return (
                                <div className="accommodationBox">
                                    <Checkbox
                                        text={accommodation.name}
                                        name={accommodation.name}
                                        value={accommodation.name}
                                        keyIndex={accommodation.name}
                                        checked={accommodation.checked}
                                        onChange={(e) => dispatch(updateContentEvent(e))}
                                    />
                                    <Input
                                        type="text"
                                        name={`valor${accommodation.name}`}
                                        label="Valor"
                                        onChange={(e) => dispatch(updateContentEvent(e))}
                                        value={event.location}
                                        isRequired={true}
                                        className="formInput"
                                        disabled={accommodation.checked === true ? false : true}
                                    />
                                </div>
                            );
                        })
                    }

                    <div>
                        <FileBase
                            id="formImage"
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => (handleFileUpload(base64))}
                        />
                    </div>
                </form>
                <div className="btnBox">
                    <Button
                        type="submit"
                        name="btnForm"
                        className="btnBlue"
                        text="Criar"
                        onClick={handleSubmit}
                    />
                    <Button
                        type="submit"
                        name="btnForm"
                        className="btnBlue"
                        text="Criar"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormEvent;