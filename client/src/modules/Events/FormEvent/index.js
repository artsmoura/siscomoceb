import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import FileBase from 'react-file-base64';
import './style.css';
import { useDispatch } from 'react-redux';
import { createEvent } from "../redux/eventsAction";

const FormEvent = () => {
    const [eventInput, setEventInput] = useState({
        nameEvent: '',
        descriptionEvent: '',
        dateEvent: '',
        locationEvent: '',
        selectedFile: ''
    });

    const dispatch = useDispatch();

    const handleChange = (input) => {
        setEventInput({
            ...eventInput,
            [input.target.name]: input.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEvent());
    };

    return (
        <div className="container">
            <div className="boxForm">
                <h2>Criar Evento</h2>
                <form>
                    <Input
                        type="text"
                        name="nameEvent"
                        placeholder="Nome do Evento"
                        onChange={handleChange}
                        value={eventInput.nameEvent}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="descriptionEvent"
                        placeholder="Descrição do Evento"
                        onChange={handleChange}
                        value={eventInput.descriptionEvent}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="date"
                        name="dateEvent"
                        placeholder="Data do Evento"
                        onChange={handleChange}
                        value={eventInput.dateEvent}
                        isRequired={true}
                        className="formInput"
                    />
                    <Input
                        type="text"
                        name="locationEvent"
                        placeholder="Local do Evento"
                        onChange={handleChange}
                        value={eventInput.locationEvent}
                        isRequired={true}
                        className="formInput"
                    />
                    <div>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setEventInput({
                                ...eventInput,
                                selectedFile: base64
                            })}
                        />
                    </div>
                </form>
                <Button
                    type="submit"
                    name="btnForm"
                    className="btnBlue"
                    text="Criar"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

export default FormEvent;