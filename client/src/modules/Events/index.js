import React, { useReducer } from 'react';
import Card from '../../components/Cards';
import './style.css';

const EventPage = () => {

    const handleClick = (e) => {
        console.log('clicou');
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
                    clickAction={handleClick}
                />
                <Card
                    title='47º Retiro Nacional - 2022'
                    image="img/retiro1.jpg"
                    data="26/02/22 a 01/03/2022"
                    inscricaoDate="23/11/21 a 26/02/22"
                    clickAction={handleClick}
                />
                <Card
                    title='47º Retiro Nacional - 2022'
                    image="img/retiro1.jpg"
                    data="26/02/22 a 01/03/2022"
                    inscricaoDate="23/11/21 a 26/02/22"
                    clickAction={handleClick}
                />
            </div>
        </div>
    );
};

export default EventPage;