import React, { createContext, useReducer } from 'react';


import { Usuario, LoginResponse, LoginData, RegisterData, AuthState } from '../interfaces/Interfaces';
import { authReducer } from './AuthReducer';

type AuthContextProps = {
    errorMessage: string;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ({correo,nombre,password}: RegisterData) => void;
    signIn: (logginData:LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status:'checking',
    user:null,
    errorMessage:'',
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    const signIn= async( {correo,password}:LoginData) => {

    }

    const signUp= async({correo,nombre,password}:RegisterData) => {}

    const logOut= async() => {}

    const removeError=()=>{
        dispatch({
            type:'removeError'
        })
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError
        }}>
            { children }
        </AuthContext.Provider>
    )
}
