import { EVENTS_CREATE_SUCCESS, EVENTS_LOAD_SUCCESS, UPDATE_ACCOMMODATION, UPDATE_CONTENT_EVENT } from './eventsAction';

const eventoInicialState = {
    name: '',
    description: '',
    dateEvent: '',
    location: '',
    image: '',
    accommodation: [
        { name: 'Alojamento', checked: false, valor: '' },
        { name: 'Chalé', checked: false, valor: '' },
        { name: 'Chalé Casal', checked: false, valor: '' },
        { name: 'Barraca', checked: false, valor: '' }
    ]
};

const inicialState = {
    events: [],
    event: eventoInicialState,
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case EVENTS_LOAD_SUCCESS:
            return {
                ...state,
                events: action.payload
            };
        case EVENTS_CREATE_SUCCESS:
            return {
                ...state,
                events: [
                    ...state.evetos,
                    action.payload
                ]
            };
        case UPDATE_CONTENT_EVENT:
            if (action.payload.target.type === 'checkbox') {
                return {
                    ...state,
                    event: {
                        ...state.event,
                        accommodation: [
                            ...state.event.accommodation.map((item) => item.name === action.payload.target.name ?
                                { ...item, checked: action.payload.target.checked } : item
                            )
                        ]
                    }
                };
            }
            else {
                return {
                    ...state,
                    event: {
                        ...state.event,
                        [action.payload.target.name]: action.payload.target.value
                    }
                };
            }
        case UPDATE_ACCOMMODATION:
            return {
                ...state,
                event: {
                    ...state.event,
                    accommodation: [
                        ...state.event.accommodation.map((item) => item.name === action.payload.target.name.replace('valor ', '') ?
                            { ...item, valor: action.payload.target.value } : item
                        )
                    ]
                }
            };
        default:
            return state;
    }
};

