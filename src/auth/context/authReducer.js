import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...state, //En este caso, el state es un objeto, donde se llama para decir que queremos mantenerlo tal cual exceptuando por las propiedades de abajo, que quiero que cambien
                logged: true,
                user: action.payload //Al hacer el login, el objeto user se crea. Si este dispatch no se ejecuta, el user jamás se crea
            };

        case types.logout:
            return {
                logged: false
            };
            
            
    
        default:
            return state;
    }

}