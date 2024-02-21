import React, { createContext, useReducer } from "react";

import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

import { Usuario, LoginData, AuthState } from "../interfaces/Interfaces";
import { authReducer } from "./authReducer";

type AuthContextProps = {
  errorMessage: string;
  user: Usuario | null;
  status: "checking" | "authenticated" | "not-authenticated";
  //   signUp: ({ correo, nombre, password }: RegisterData) => void;
  signIn: (logginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: "checking",
  user: null,
  errorMessage: "",
};
const db = SQLite.openDatabase("db.testDb");
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  React.useEffect(() => {
    console.log("Ejecutando useEffect...");
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                correo TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
              );`
        );
      });
      console.log("Tabla creada")
    // iniciar();
    db.transaction(
        (tx) => {
            tx.executeSql(
            `INSERT INTO usuarios (correo, password) VALUES (?, ?);`,
            ["usuario1@example.com", "password1"],
          );
          tx.executeSql("select * from items", [], (_, { rows }) =>
            console.log(JSON.stringify(rows))
          );
        }
      );

    console.log("Usuarios agregados correctamente.");
    db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM usuarios",
          [],
          (_, { rows: { _array } }) => {
            console.log(_array); // Imprime los usuarios en la consola
          }
        );
      });
      console.log("Comprobar")
    console.log("Final useEffect...");
  }, []);

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      console.log("iniciando sesion");
    //   const db = await openDatabase();

      await db.transaction(async (tx) => {
        tx.executeSql(
          "SELECT * FROM usuarios WHERE correo = ? AND password = ?",
          [correo, password],
          (_, { rows }) => {
            if (rows.length > 0) {
              const user = rows.item(0);
              dispatch({ type: "signUp", payload: { user } });
              console.log("Inicio de sesión exitoso. Estado: authenticated");
            } else {
              dispatch({
                type: "addError",
                payload: "Credenciales incorrectas",
              });
            }
          }
        );
      });
      console.log("Termino");
      
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
    dispatch({ type: "logout" });
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
