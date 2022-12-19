import { AUTH_USER, CLEAR_AUTH_FIELDS, LOGOUT, UPDATE_CONTENT_AUTH } from "./authAction";

const userInicialState = {
    name: '',
    sobrenome: '',
    email: '',
    cpf: '',
    dateNascimento: '',
    password: '',
    passwordConfirm: ''
};

const userLocalStorage = JSON.parse(localStorage.getItem('profile'));
const profileData = userLocalStorage ? userLocalStorage.result : {};

const inicialState = {
    user: Object.assign(
        {},
        userInicialState,
        ...Object.keys(userInicialState).map(keys => keys in profileData && { [keys]: profileData[keys] })
    ),
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case UPDATE_CONTENT_AUTH:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.target.name]: action.payload.target.value
                }
            };
        case AUTH_USER:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            return {
                ...state,
                userData: [action.payload?.result]
            };
        case CLEAR_AUTH_FIELDS:
            return {
                ...state,
                user: userInicialState
            };
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                user: userInicialState
            };
        default:
            return state;
    }
};