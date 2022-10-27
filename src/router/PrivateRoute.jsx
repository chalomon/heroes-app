import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

export const PrivateRoute = ({children}) => { //Todo componente que recibe un children, equivale a un High Order Component

    const {logged} = useContext(AuthContext);

    const {pathname, search} = useLocation();

    const lastPath = pathname+search;

    localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? children
    : <Navigate to= "/login" />
}
