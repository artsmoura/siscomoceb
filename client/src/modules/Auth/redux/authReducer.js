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



let myMap = new Map(Object.entries(userLocalStorage.result));
console.log(myMap);

/* const result = userLocalStorage.result;
console.log(Object.entries(result)); */

const inicialState = {
    /* user: userInicialState,
    userData: userLocalStorage ? userLocalStorage.result : {} */

    user: {
        user: Object.entries(userInicialState).map((item) => item[0] ?
            { ...item, [item[0]]: myMap.get(item[0]) } : item
        )
    },

    /*  userLocalStorage ? Object.entries(userInicialState).map((item) => item[0] ?
         (console.log(...item),
         {
             ...userInicialState,
             [item[0]]: myMap.get(item[0])
         }) : console.log('ta aqui?'))
         : userInicialState, */

    /* userData: userLocalStorage ? userLocalStorage.result : {} */
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
            console.log(action.payload);
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
            };
        default:
            return state;
    }
};