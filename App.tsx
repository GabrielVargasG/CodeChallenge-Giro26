import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";
import SingUp from "./screens/Registro";
import IPhone1415ProMax2 from "./screens/IPhone1415ProMax2";
import IPhone1415ProMax3 from "./screens/IPhone1415ProMax3";
import IPhone1415ProMax4 from "./screens/IPhone1415ProMax4";
import IPhone1415ProMax5 from "./screens/IPhone1415ProMax5";
import IPhone1415ProMax6 from "./screens/IPhone1415ProMax6";
import IPhone1415ProMax7 from "./screens/IPhone1415ProMax7";
import IPhone1415ProMax8 from "./screens/IPhone1415ProMax8";
import IPhone1415ProMax9 from "./screens/IPhone1415ProMax9";
import IPhone1415ProMax10 from "./screens/IPhone1415ProMax10";
import IPhone1415ProMax11 from "./screens/IPhone1415ProMax11";
import IPhone1415ProMax12 from "./screens/IPhone1415ProMax12";
import IPhone1415ProMax13 from "./screens/IPhone1415ProMax13";
import IPhone1415ProMax14 from "./screens/IPhone1415ProMax14";
import IPhone1415ProMax15 from "./screens/IPhone1415ProMax15";
import IPhone1415ProMax16 from "./screens/IPhone1415ProMax16";
import IPhone1415ProMax17 from "./screens/IPhone1415ProMax17";
import IPhone1415ProMax18 from "./screens/IPhone1415ProMax18";
import IPhone1415ProMax19 from "./screens/IPhone1415ProMax19";
import IPhone1415ProMax20 from "./screens/IPhone1415ProMax20";
import IPhone1415ProMax21 from "./screens/IPhone1415ProMax21";
import IPhone1415ProMax22 from "./screens/IPhone1415ProMax22";
import IPhone1415ProMax23 from "./screens/IPhone1415ProMax23";

import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

async function openDatabase(
  pathToDatabaseFile: string
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
    Asset.fromModule(require('./assets/myDatabase.db')).uri,
    FileSystem.documentDirectory + "SQLite/myDatabase.db"
  );
  return SQLite.openDatabase("myDatabaseName.db");
}

async function createTables() {
  try {
    const db = await openDatabase("myDatabaseName.db");
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

import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
const Stack = createStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const { status } = React.useContext(AuthContext);
  
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });
  const iniciar = async ()=> {
    console.log("Inicializando la aplicación...");
    try {
      await createTables();
      console.log("Tablas creadas correctamente.");
      await agregarUsuarios(); // Agrega usuarios después de crear las tablas
    console.log("Usuarios agregados correctamente.");
      setHideSplashScreen(true);
      console.log("Se oculta la pantalla de inicio.");
    } catch (error) {
      console.error("Error al inicializar la aplicación:", error);
    }
  }
  async function agregarUsuarios() {
    try {
      const db = await openDatabase("myDatabaseName.db");
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

  React.useEffect(() => {
    console.log("Ejecutando useEffect...");
    iniciar();
    console.log("Final useEffect...");
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {status !== "authenticated" ? (
                <>
                  <Stack.Screen
                    name="LogIn"
                    component={LogIn}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignUp"
                    component={SingUp}
                    options={{ headerShown: false }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="IPhone1415ProMax2"
                    component={IPhone1415ProMax2}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax3"
                    component={IPhone1415ProMax3}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax4"
                    component={IPhone1415ProMax4}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax5"
                    component={IPhone1415ProMax5}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax6"
                    component={IPhone1415ProMax6}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax7"
                    component={IPhone1415ProMax7}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax8"
                    component={IPhone1415ProMax8}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax9"
                    component={IPhone1415ProMax9}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax10"
                    component={IPhone1415ProMax10}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax11"
                    component={IPhone1415ProMax11}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax12"
                    component={IPhone1415ProMax12}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax13"
                    component={IPhone1415ProMax13}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax14"
                    component={IPhone1415ProMax14}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax15"
                    component={IPhone1415ProMax15}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax16"
                    component={IPhone1415ProMax16}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax17"
                    component={IPhone1415ProMax17}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax18"
                    component={IPhone1415ProMax18}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax19"
                    component={IPhone1415ProMax19}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax20"
                    component={IPhone1415ProMax20}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax21"
                    component={IPhone1415ProMax21}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax22"
                    component={IPhone1415ProMax22}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="IPhone1415ProMax23"
                    component={IPhone1415ProMax23}
                    options={{ headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </AuthProvider>
    </>
  );
};
export default App;
