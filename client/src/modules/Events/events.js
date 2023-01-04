import React, { useEffect } from 'react';
import Button from '../../components/Button/button';
import Card from '../../components/Cards/cards';
import { BiPlus } from 'react-icons/bi';
import './events.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listEvents } from './redux/eventsAction';
import Modal from '../../components/Modal/modal';
import { setTypeModal } from '../../reduxLayout/layoutAction';

const EventPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const events = useSelector((state) => state.eventState.events);
    const user = useSelector((state) => state.authState.user);
    const modalType = useSelector((state) => state.layoutState.modal);

    const handleClick = (e) => {
        console.log('clicou');
    };

    const goCreateEvent = () => {
        navigate("/criarevento");
    };

    useEffect(() => {
        dispatch(listEvents());
    }, [dispatch]);

    const name = user.name ? user.name[0].toUpperCase() + user.name.substring(1).toLowerCase() : '';

    const modal = (e) => {
        switch (e) {
            case 'delete':
                { console.log('entrou?'); }
                return <Modal />;
            default:
                return;
        }
    };

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
            <Button
                text="ALOU"
                className='btnBlue'
                onClick={() => dispatch(setTypeModal('delete'))}
            />
            <div className='addEvent'>
                <Button
                    name="addEvent"
                    className='addBtn'
                    icon={<BiPlus color='white' size={"2.5em"} />}
                    onClick={goCreateEvent}
                />
            </div>
            {modal(modalType)}
        </div>
    );
};

export default EventPage;