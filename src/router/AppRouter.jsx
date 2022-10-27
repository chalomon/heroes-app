import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth/"
import { Navbar } from '../ui'
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {

  return (
    <>

        <Routes>
            <Route path="login" element={ //Se pueden encapsular los Route solo dentro del tag Routes, por lo que se puede dejar dentro del Routes para definir varias rutas públicas
              <PublicRoute>
                <LoginPage /> 
              </PublicRoute>
            } /> 


            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />

        </Routes>
    </>
  )

}
