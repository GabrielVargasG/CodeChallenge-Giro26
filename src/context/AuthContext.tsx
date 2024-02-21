import React, { createContext, useReducer } from 'react';


import { Usuario, LoginResponse, LoginData, RegisterData, AuthState } from '../interfaces/Interfaces';
import { authReducer } from './AuthReducer';

type AuthContextProps = {}

const authInicialState: AuthState = {
    status:'checking',
    errorMessage:'',
    user:null,
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    const signIn= async( {correo,password}:LoginData) => {}

    const signUp= async({correo,nombre,password}:RegisterData) => {}

    const logOut= async() => {}

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
        }}>
            { children }
        </AuthContext.Provider>
    )

}
