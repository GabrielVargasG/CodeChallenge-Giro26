import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax11}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax11Child}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Image
        style={[styles.corona1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.corona2Icon, styles.corona2IconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.atencionAlCliente2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/salario-1.png")}
      />
      <Text style={styles.reciboDePago}>Recibo de Pago</Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax9")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <View style={styles.iphone1415ProMax11Item} />
      <Text style={[styles.juanCarlosCosio, styles.fechaTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.deCliente, styles.fechaTypo]}># de cliente:</Text>
      <Image
        style={styles.iphone1415ProMax11Inner}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.fecha, styles.fechaTypo]}>Fecha:</Text>
      <Text style={[styles.text, styles.textTypo]}>31-01-2024</Text>
      <Text style={[styles.text1, styles.textTypo]}>$2,750.00</Text>
      <Text style={[styles.text2, styles.textTypo]}>0.00</Text>
      <Text style={[styles.text3, styles.text3Typo]}>$2,750.00</Text>
      <Text style={[styles.montoAbonado, styles.fechaTypo]}>Monto Abonado</Text>
      <Text style={[styles.interesMora, styles.fechaTypo]}>Interes / Mora</Text>
      <Text style={[styles.total, styles.text3Typo]}>Total</Text>
      <Text style={[styles.calcular, styles.calcularTypo]}>Calcular</Text>
      <Image
        style={styles.compartir11Icon}
        contentFit="cover"
        source={require("../assets/compartir1.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.compartir, styles.calcularTypo]}>Compartir</Text>
      <Image
        style={styles.compartir11Icon}
        contentFit="cover"
        source={require("../assets/compartir1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  corona2IconPosition: {
    top: 11,
    height: 64,
    width: 64,
    position: "absolute",
  },
  fechaTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    left: 100,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text3Typo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  calcularTypo: {
    height: 16,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax11Child: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    width: 430,
    height: 157,
    backgroundColor: "transparent",
    position: "absolute",
  },
  corona1Icon: {
    top: 857,
    left: 352,
  },
  corona2Icon: {
    left: 352,
  },
  atencionAlCliente2Icon: {
    top: 125,
    left: 183,
  },
  reciboDePago: {
    top: 75,
    left: 45,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 339,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  iphone1415ProMax11Item: {
    top: 207,
    left: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 330,
    height: 482,
    position: "absolute",
  },
  juanCarlosCosio: {
    top: 278,
  },
  deCliente: {
    top: 295,
  },
  iphone1415ProMax11Inner: {
    top: 504,
    width: 230,
    height: 4,
    left: 100,
    position: "absolute",
  },
  fecha: {
    top: 378,
  },
  text: {
    left: 252,
    top: 378,
  },
  text1: {
    top: 401,
    left: 263,
  },
  text2: {
    top: 424,
    left: 300,
  },
  text3: {
    top: 567,
    left: 167,
    fontSize: FontSize.size_xl,
  },
  montoAbonado: {
    top: 403,
  },
  interesMora: {
    top: 426,
  },
  total: {
    top: 529,
    left: 191,
    fontSize: FontSize.size_xl,
  },
  calcular: {
    top: 709,
    left: 182,
    width: 72,
    fontSize: FontSize.size_xl,
  },
  compartir11Icon: {
    top: 706,
    left: 162,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangleView: {
    top: 700,
    left: 145,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDodgerblue,
    width: 140,
    height: 34,
    position: "absolute",
  },
  compartir: {
    top: 707,
    left: 164,
    width: 117,
    fontSize: FontSize.size_sm,
    height: 16,
    color: Color.colorWhite,
  },
  iphone1415ProMax11: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax10;
