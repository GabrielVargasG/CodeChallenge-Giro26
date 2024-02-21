import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { AuthProvider } from "./src/context/AuthContext";
import { Navegator } from "./src/Navegator";

const App = () => {
  // const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  // React.useEffect(() => {
  //   // console.log("Ejecutando useEffect...");
  //   setHideSplashScreen(true);
  //   // console.log("Final useEffect...");
  // }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          <Navegator />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
};
export default App;
