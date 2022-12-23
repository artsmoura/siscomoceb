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

const profileData = {
    cpf: "056.119.181-66",
    dateNascimento: "1995-06-13T00:00:00.000Z",
    email: "arthuzin45@gmail.com",
    name: "ARTHUR",
    password: "$2b$12$qnT8qfJWrG.s/l2n8iU5K.pfRzTW2FLNYjyDh75CuzTkShAK8hmHG",
    sobrenome: "SIMOES",
    __v: 0,
    _id: "639bb8dc360ed4772b8a50e3"
};

// const userLocalStorage = JSON.parse(localStorage.getItem('profile'));
// const profileData = userLocalStorage ? userLocalStorage.result : {};

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