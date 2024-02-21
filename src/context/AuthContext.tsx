import React, { createContext, useReducer, useState } from "react";

import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

import { Usuario, LoginData, AuthState, RegisterData } from '../interfaces/Interfaces';
import { authReducer } from "./authReducer";

type AuthContextProps = {
  errorMessage: string;
  user: Usuario | null;
  users: Usuario[];
  status: "checking" | "authenticated" | "not-authenticated";
  //   signUp: ({ correo, nombre, password }: RegisterData) => void;
  signIn: (logginData: LoginData) => void;
  actualizar:() => void;
  signUp:(RegisterData:RegisterData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: "checking",
  user: null,
  errorMessage: "",
};
const db = SQLite.openDatabase("db.db");
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);
  const [users, setUsers] = useState<Usuario[]>([]);
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
    
          tx.executeSql(
            `INSERT INTO usuarios (correo, password) VALUES (?, ?);`,
            ["usuario2@example.com", "password2"],
          );
        },
        () => console.log('Transacción completada exitosamente')
      );

    console.log("Usuarios agregados correctamente.");
    db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM usuarios",
          [],
          (_, { rows: { _array } }) => {
            console.log(_array);
            setUsers(_array);
          }
        );
      });
      console.log("Comprobar")
    console.log("Final useEffect...");
  }, []);

  const actualizar=()=>{
    db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM usuarios",
          [],
          (_, { rows: { _array } }) => {
            console.log(_array);
            setUsers(_array);
          }
        );
      });
  }

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

    const signUp = async ({ correo, password }: RegisterData) => {

      await db.transaction(async (tx) => {
        tx.executeSql(
            `INSERT INTO usuarios (correo, password) VALUES (?, ?);`,
            [correo, password],
          );
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
    };

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
        users,       
        // signUp,
        actualizar,
        signIn,
        signUp,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
