import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Keyboard,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../src/context/AuthContext";

interface Props extends StackScreenProps<any, any> {}

const SingUp = ({ navigation }: Props) => {
  const { signIn, errorMessage, removeError } = React.useContext(AuthContext);
  React.useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert("Error", errorMessage, [
      {
        text: "Ok",
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const [email, onChangeText1] = React.useState("");
  const [password, onChangeText2] = React.useState("");
  const onLogin = () => {
    // console.log({email, password});
    signIn({ correo: email, password });
  };
  return (
    <View style={styles.iphone1415ProMax2}>
      <View style={[styles.iphone1415ProMax2Child, styles.iphone1415Layout]} />
      <TextInput
        editable
        maxLength={40}
        onChangeText={(text) => onChangeText1(text)}
        value={email}
        numberOfLines={1}
        keyboardType="email-address"
        placeholder="example@example.com"
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.iphone1415ProMax2Child, styles.iphone1415Layout]}
      />
      <View style={[styles.iphone1415ProMax2Item, styles.iphone1415Layout]} />
      <TextInput
        editable
        autoCapitalize="none"
        maxLength={80}
        placeholder="**********"
        onChangeText={(text) => onChangeText2(text)}
        value={password}
        style={[styles.iphone1415ProMax2Item, styles.iphone1415Layout]}
      />
      <Pressable
        style={[styles.iphone1415ProMax2Inner, styles.rectangleViewLayout]}
        // onPress={() => navigation.navigate("IPhone1415ProMax3")}
        onPress={onLogin}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.iphone1415ProMax2Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />

      <Image
        style={[styles.google1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/google-1.png")}
      />
      <Image
        style={[styles.facebook1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/facebook-1.png")}
      />
      <Text style={[styles.usuario, styles.contraseaTypo]}>Usuario</Text>
      <Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      <Text style={[styles.entrar, styles.entrarTypo]}>ENTRAR</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={styles.registrar}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.entrarTypo}>REGISTRAR</Text>
      </Pressable>
      <Text style={[styles.olvidSuContrasea, styles.contraseaTypo]}>
        ¿Olvidó su contraseña?
      </Text>
      <Image
        style={styles.giro263Icon}
        contentFit="cover"
        source={require("../assets/giro26-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 54,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_81xl,
    left: 68,
    position: "absolute",
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorDodgerblue,
    left: 65,
    height: 54,
    width: 300,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 84,
    width: 84,
    top: 642,
    position: "absolute",
  },
  iconLayout: {
    height: 63,
    width: 63,
    top: 652,
    position: "absolute",
  },
  contraseaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  entrarTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  iphone1415ProMax2Child: {
    top: 315,
    width: 300,
    height: 54,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_81xl,
    left: 68,
  },
  iphone1415ProMax2Item: {
    top: 424,
    width: 297,
    height: 54,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_81xl,
    left: 68,
  },
  iphone1415ProMax2Inner: {
    top: 533,
  },
  ellipseIcon: {
    left: 122,
  },
  iphone1415ProMax2Child1: {
    left: 230,
  },
  google1Icon: {
    left: 240,
  },
  facebook1Icon: {
    left: 132,
  },
  usuario: {
    top: 295,
    color: Color.colorGray_100,
    left: 87,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  contrasea: {
    top: 402,
    color: Color.colorGray_100,
    left: 87,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  entrar: {
    top: 548,
    left: 175,
    position: "absolute",
  },
  rectangleView: {
    top: 775,
  },
  registrar: {
    left: 160,
    top: 790,
    position: "absolute",
  },
  olvidSuContrasea: {
    top: 607,
    left: 141,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  giro263Icon: {
    top: 103,
    left: 137,
    width: 155,
    height: 157,
    position: "absolute",
  },
  iphone1415ProMax2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SingUp;
