import { AUTH_USER, UPDATE_CONTENT_AUTH } from "./authAction";

const authInicialState = {
    name: '',
    sobrenome: '',
    email: '',
    cpf: '',
    dateNascimento: '',
    password: '',
    passwordConfirm: ''
};

const inicialState = {
    user: authInicialState,
    userData: {}
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
            localStorage.setItem('profile', JSON.stringify({ ...action.payload?.user }));
            return {
                ...state,
                userData: action.payload?.user
            };
        default:
            return state;
    }
};