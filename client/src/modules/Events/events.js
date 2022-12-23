import React, { useEffect } from 'react';
import Button from '../../components/Button/button';
import Card from '../../components/Cards/cards';
import { BiPlus } from 'react-icons/bi';
import './events.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listEvents } from './redux/eventsAction';

const EventPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const events = useSelector((state) => state.eventState.events);
    const user = useSelector((state) => state.authState.user);

    /* console.log(events); */

    const handleClick = (e) => {
        console.log('clicou');
    };

    const goCreateEvent = () => {
        navigate("/criarevento");
    };

    useEffect(() => {
        dispatch(listEvents());
    }, [dispatch]);

    const name = user.name[0].toUpperCase() + user.name.substring(1).toLowerCase();

    return (
        <div className='eventBox'>
            <h1>
                {/* {useReducer.gender === 'masculino' ? "Bem vindo" : "Bem vinda"}
                {useReducer.name} */}
                Bem vindo, {name}
            </h1>
            <h2>Próximos Eventos</h2>
            <div className='eventCard'>
                {
                    events.map((event) => (
                        <Card
                            key={event.id}
                            title={event.name}
                            image={event.image}
                            data={event.dateEvent}
                            /* inscricaoDate={event.} */
                            location={event.location}
                            clickAction={handleClick}
                        />
                    ))
                }
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