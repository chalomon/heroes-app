import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')); //Carga el usuario desde el localStorage una vez que se almacena

  return { //Setea el usuario desde el local storage con el objeto user que se consigue
    logged: !!user,
    user: user
  }
}


export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init); //Se manda un objeto vacío como initialState porque es la función init la que se encarga de inicializar todo al comienzo

    const login = (name = '') => {

      const user = {id: 'ABC', name}

      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify(user))

      dispatch(action);
    }

    const logout = () => {
      localStorage.removeItem('user');

      const action = {
        type: types.logout
      };

      dispatch(action);
    }


  return (
    <AuthContext.Provider value={{
      ...authState,

      //Métodos
      login,
      logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
