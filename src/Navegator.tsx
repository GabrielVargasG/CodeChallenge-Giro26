// Importaciones necesarias
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import LogIn from "../screens/LogIn";
import SingUp from "../screens/Registro";
import IPhone1415ProMax2 from "../screens/IPhone1415ProMax2";
import IPhone1415ProMax3 from "../screens/IPhone1415ProMax3";
import IPhone1415ProMax4 from "../screens/IPhone1415ProMax4";
import IPhone1415ProMax5 from "../screens/IPhone1415ProMax5";
import IPhone1415ProMax6 from "../screens/IPhone1415ProMax6";
import IPhone1415ProMax7 from "../screens/IPhone1415ProMax7";
import IPhone1415ProMax8 from "../screens/IPhone1415ProMax8";
import IPhone1415ProMax9 from "../screens/IPhone1415ProMax9";
import IPhone1415ProMax10 from "../screens/IPhone1415ProMax10";
import IPhone1415ProMax11 from "../screens/IPhone1415ProMax11";
import IPhone1415ProMax12 from "../screens/IPhone1415ProMax12";
import IPhone1415ProMax13 from "../screens/IPhone1415ProMax13";
import IPhone1415ProMax14 from "../screens/IPhone1415ProMax14";
import IPhone1415ProMax15 from "../screens/IPhone1415ProMax15";
import IPhone1415ProMax16 from "../screens/IPhone1415ProMax16";
import IPhone1415ProMax17 from "../screens/IPhone1415ProMax17";
import IPhone1415ProMax18 from "../screens/IPhone1415ProMax18";
import IPhone1415ProMax19 from "../screens/IPhone1415ProMax19";
import IPhone1415ProMax20 from "../screens/IPhone1415ProMax20";
import IPhone1415ProMax21 from "../screens/IPhone1415ProMax21";
import IPhone1415ProMax22 from "../screens/IPhone1415ProMax22";
import IPhone1415ProMax23 from "../screens/IPhone1415ProMax23";
import Usuarios from "../screens/Usuarios";

const Stack = createStackNavigator();

export const Navegator = () => {
  // Estado de usuario
  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {status !== "authenticated" ? (
        <>
          <Stack.Screen
            name="IPhone1415ProMax2"
            component={IPhone1415ProMax2}
          />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Usuarios" component={Usuarios} />
          <Stack.Screen name="SignUp" component={SingUp} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="IPhone1415ProMax3"
            component={IPhone1415ProMax3}
          />
          <Stack.Screen
            name="IPhone1415ProMax4"
            component={IPhone1415ProMax4}
          />
          <Stack.Screen
            name="IPhone1415ProMax5"
            component={IPhone1415ProMax5}
          />
          <Stack.Screen
            name="IPhone1415ProMax6"
            component={IPhone1415ProMax6}
          />
          <Stack.Screen
            name="IPhone1415ProMax7"
            component={IPhone1415ProMax7}
          />
          <Stack.Screen
            name="IPhone1415ProMax8"
            component={IPhone1415ProMax8}
          />
          <Stack.Screen
            name="IPhone1415ProMax9"
            component={IPhone1415ProMax9}
          />
          <Stack.Screen
            name="IPhone1415ProMax10"
            component={IPhone1415ProMax10}
          />
          <Stack.Screen
            name="IPhone1415ProMax11"
            component={IPhone1415ProMax11}
          />
          <Stack.Screen
            name="IPhone1415ProMax12"
            component={IPhone1415ProMax12}
          />
          <Stack.Screen
            name="IPhone1415ProMax13"
            component={IPhone1415ProMax13}
          />
          <Stack.Screen
            name="IPhone1415ProMax14"
            component={IPhone1415ProMax14}
          />
          <Stack.Screen
            name="IPhone1415ProMax15"
            component={IPhone1415ProMax15}
          />
          <Stack.Screen
            name="IPhone1415ProMax16"
            component={IPhone1415ProMax16}
          />
          <Stack.Screen
            name="IPhone1415ProMax17"
            component={IPhone1415ProMax17}
          />
          <Stack.Screen
            name="IPhone1415ProMax18"
            component={IPhone1415ProMax18}
          />
          <Stack.Screen
            name="IPhone1415ProMax19"
            component={IPhone1415ProMax19}
          />
          <Stack.Screen
            name="IPhone1415ProMax20"
            component={IPhone1415ProMax20}
          />
          <Stack.Screen
            name="IPhone1415ProMax21"
            component={IPhone1415ProMax21}
          />
          <Stack.Screen
            name="IPhone1415ProMax22"
            component={IPhone1415ProMax22}
          />
          <Stack.Screen
            name="IPhone1415ProMax23"
            component={IPhone1415ProMax23}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
