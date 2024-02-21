const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import IPhone1415ProMax2 from "./screens/IPhone1415ProMax2";
import IPhone1415ProMax3 from "./screens/IPhone1415ProMax3";
import IPhone1415ProMax4 from "./screens/IPhone1415ProMax4";
import IPhone1415ProMax5 from "./screens/IPhone1415ProMax5";
import IPhone1415ProMax6 from "./screens/IPhone1415ProMax6";
import IPhone1415ProMax7 from "./screens/IPhone1415ProMax7";
import IPhone1415ProMax8 from "./screens/IPhone1415ProMax8";
import Compartir from "./components/Compartir";
import Compartir1 from "./components/Compartir1";
import Compartir2 from "./components/Compartir2";
import Compartir3 from "./components/Compartir3";
import Compartir4 from "./components/Compartir4";
import IPhone1415ProMax9 from "./screens/IPhone1415ProMax9";
import Compartir5 from "./components/Compartir5";
import IPhone1415ProMax10 from "./screens/IPhone1415ProMax10";
import IPhone1415ProMax11 from "./screens/IPhone1415ProMax11";
import IPhone1415ProMax12 from "./screens/IPhone1415ProMax12";
import IPhone1415ProMax13 from "./screens/IPhone1415ProMax13";
import IPhone1415ProMax14 from "./screens/IPhone1415ProMax14";
import IPhone1415ProMax15 from "./screens/IPhone1415ProMax15";
import IPhone1415ProMax16 from "./screens/IPhone1415ProMax16";
import Compartir6 from "./components/Compartir6";
import Compartir7 from "./components/Compartir7";
import Compartir8 from "./components/Compartir8";
import Compartir9 from "./components/Compartir9";
import Compartir10 from "./components/Compartir10";
import IPhone1415ProMax17 from "./screens/IPhone1415ProMax17";
import Compartir11 from "./components/Compartir11";
import IPhone1415ProMax18 from "./screens/IPhone1415ProMax18";
import IPhone1415ProMax19 from "./screens/IPhone1415ProMax19";
import IPhone1415ProMax20 from "./screens/IPhone1415ProMax20";
import IPhone1415ProMax21 from "./screens/IPhone1415ProMax21";
import IPhone1415ProMax22 from "./screens/IPhone1415ProMax22";
import IPhone1415ProMax23 from "./screens/IPhone1415ProMax23";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1415ProMax"
              component={IPhone1415ProMax}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax1"
              component={IPhone1415ProMax1}
              options={{ headerShown: false }}
            />
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
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
