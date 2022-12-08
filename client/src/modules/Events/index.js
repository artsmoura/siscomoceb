import React, { useReducer } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Cards';
import { BiPlus } from 'react-icons/bi';
import './style.css';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log('clicou');
    };

    const goCreateEvent = () => {
        navigate("/criarevento");
    };

    return (
        <div className='eventBox'>
            <h1>
                {/* {useReducer.gender === 'masculino' ? "Bem vindo" : "Bem vinda"}
                {useReducer.name} */}
                Bem vinda, Julia
            </h1>
            <h2>Próximos Eventos</h2>
            <div className='eventCard'>
                <Card
                    title='47º Retiro Nacional - 2022'
                    image="img/retiro1.jpg"
                    data="26/02/22 a 01/03/2022"
                    inscricaoDate="23/11/21 a 26/02/22"
                    location="Cocalzinho - GO"
                    clickAction={handleClick}
                />
                <Card
                    title='47º Retiro Nacional - 2022'
                    image="img/retiro1.jpg"
                    data="26/02/22 a 01/03/2022"
                    inscricaoDate="23/11/21 a 26/02/22"
                    location="Cocalzinho - GO asdasdasdadadasdasdasda sdasdasdasdasdasdasdasdasdasd iajsidj asdnaksdnaksnd"
                    clickAction={handleClick}
                />
                <Card
                    title='47º Retiro Nacional - 2022'
                    image="img/retiro1.jpg"
                    data="26/02/22 a 01/03/2022"
                    inscricaoDate="23/11/21 a 26/02/22"
                    location="Cocalzinho - GO"
                    clickAction={handleClick}
                />
                <Card
                    title='47º Retiro Nacional - 2022'
                    image="img/retiro1.jpg"
                    data="26/02/22 a 01/03/2022"
                    inscricaoDate="23/11/21 a 26/02/22"
                    location="Cocalzinho - GO"
                    clickAction={handleClick}
                />
            </div>
            <div className='addEvent'>
                <Button
                    name="addEvent"
                    className='addBtn'
                    icon={<BiPlus color='white' size={"2.5em"} />}
                    onClick={goCreateEvent}
                />
            </div>
        </div>
    );
};

export default EventPage;