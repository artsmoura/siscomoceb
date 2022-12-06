import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import './style.css';

const FormEvent = () => {
    const [eventInput, setEventInput] = useState({
        nameEvent: '',
        descriptionEvent: '',
        dateEvent: '',
        locationEvent: ''
    });

    const handleChange = (input) => {
        setEventInput({
            ...eventInput,
            [input.target.name]: input.target.value
        });
    };

    // const handleSubmit = createEvent();

    return (
        <div className="container">
            <div className="boxForm">
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
                        type="text"
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
                </form>
                <Button type="submit" name="btnForm" className="btnBlue" text="Criar" />
            </div>
        </div>
    );
};

export default FormEvent;