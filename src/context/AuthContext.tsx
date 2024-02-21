import React, { createContext, useReducer } from "react";

import {
  Usuario,
  LoginResponse,
  LoginData,
  RegisterData,
  AuthState,
} from "../interfaces/Interfaces";
import { authReducer } from "./authReducer";

type AuthContextProps = {
  errorMessage: string;
  user: Usuario | null;
  status: "authenticated" | "not-authenticated";
//   signUp: ({ correo, nombre, password }: RegisterData) => void;
  signIn: (logginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: "not-authenticated",
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  const signIn = async ({ correo, password }: LoginData) => {
    try {
    //   const res = await mathApi.post<LoginResponse>("/auth/login", {
    //     correo,
    //     password,
    //   });
      // console.log(res.data)
    //   dispatch({
    //     type: "signUp",
    //     payload: {
    //       user: data.usuario,
    //     },
    //   });
    } catch (error: any) {
      // console.log(...error.response.data.errors[0].msg
      // console.log(error.response.data.msg)
      dispatch({
        type: "addError",
        payload:
          error.response.data.msg ||
          error.response.data.errors[0].msg ||
          "Inicio de sesión invalido",
      });
    }
  };

//   const signUp = async ({ correo, nombre, password }: RegisterData) => {
//     dispatch({
//         type:'signUp',
//         payload:{
//             token:res.data.token,
//             user:res.data.usuario,
//         }
//     });
//   };

  const logOut = async () => {
    dispatch({ type: 'logout' });
  };

  const removeError = () => {
    dispatch({
      type: "removeError",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        // signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
