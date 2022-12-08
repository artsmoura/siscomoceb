import { EVENTS_CREATE_SUCCESS, EVENTS_LOAD_SUCCESS } from './eventsAction';

const eventoInicialState = {
    name: '',
    description: '',
    dataInicio: '',
    local: '',
};

const inicialState = {
    evetos: [],
    evento: eventoInicialState,
};


export default (state = inicialState, action) => {
    switch (action.type) {
        case EVENTS_LOAD_SUCCESS:
            return {
                ...state,
                eventos: action.map((evento) => ({
                    ...evento
                }))
            };
        case EVENTS_CREATE_SUCCESS:
            return {
                ...state,
                eventos: [
                    ...state.evetos,
                    action.payload
                ]
            };
        default:
            return state;
    }
}

