import React, { createContext, useReducer } from "react";

import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

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

  React.useEffect(() => {
    console.log("Ejecutando useEffect...");
    iniciar();
    console.log("Final useEffect...");
  }, []);

  async function openDatabase(
    ): Promise<SQLite.WebSQLDatabase> {
      if (
        !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
          .exists
      ) {
        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "SQLite"
        );
      }
      await FileSystem.downloadAsync(
        Asset.fromModule(require('../../assets/myDatabase.db')).uri,
        FileSystem.documentDirectory + "SQLite/myDatabase.db"
      );
      return SQLite.openDatabase("myDatabaseName.db");
    }
    
    async function createTables() {
      try {
        const db = await openDatabase();
        await db.transaction(async (tx) => {
          // Consulta SQL para crear la tabla de usuarios
          await tx.executeSql(
            `CREATE TABLE IF NOT EXISTS usuarios (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              correo TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL
            );`
          );
        });
        console.log("Tablas creadas correctamente.");
      } catch (error) {
        console.error("Error al crear las tablas:", error);
      }
    }

    const iniciar = async ()=> {
        console.log("Inicializando la aplicación...");
        try {
          console.log("Tablas creadas correctamente.");
          await agregarUsuarios(); // Agrega usuarios después de crear las tablas
        console.log("Usuarios agregados correctamente.");
        comprobarUsuarios();
          
          console.log("Se oculta la pantalla de inicio.");
        } catch (error) {
          console.error("Error al inicializar la aplicación:", error);
        }
      }
    
    
      async function comprobarUsuarios() {
        try {
          // Abre la base de datos
          const db = await openDatabase();
          
          // Inicia una transacción
          await db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM usuarios',
              [],
              (_, { rows: { _array } }) => {
                console.log(_array); // Imprime los usuarios en la consola
              }
            );
          });
        } catch (error) {
          console.error('Error al comprobar usuarios:', error);
        }
      }
      
      async function agregarUsuarios() {
        try {
          const db = await openDatabase();
          await db.transaction(async (tx) => {
            // Agregar usuario 1
            await tx.executeSql(
              `INSERT INTO usuarios (correo, password) VALUES (?, ?);`,
              ["usuario1@example.com", "password1"]
            );
            
            // Agregar usuario 2
            await tx.executeSql(
              `INSERT INTO usuarios (correo, password) VALUES (?, ?);`,
              ["usuario2@example.com", "password2"]
            );
          });
          console.log("Usuarios agregados correctamente.");
        } catch (error) {
          console.error("Error al agregar usuarios:", error);
        }
      }

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
