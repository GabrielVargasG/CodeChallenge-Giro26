import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax12}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax12Child}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Image
        style={[styles.corona1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.corona2Icon, styles.corona2IconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.atencionAlCliente2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/salario-1.png")}
      />
      <Text style={styles.compartirRecibo}>Compartir Recibo</Text>
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
      <View style={styles.iphone1415ProMax12Item} />
      <Text style={[styles.juanCarlosCosio, styles.fechaTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.cliente, styles.fechaTypo]}>CLIENTE</Text>
      <Text style={[styles.deCliente, styles.fechaTypo]}># de cliente:</Text>
      <Text style={[styles.direccin, styles.direccinTypo]}>Dirección:</Text>
      <Text
        style={[styles.teotihuacan1119Unidad, styles.direccinTypo]}
      >{`Teotihuacan 1119,
Unidad Modelo
Monterrey, Nuevo León`}</Text>
      <Text style={[styles.calcular, styles.calcularTypo]}>Calcular</Text>
      <Image
        style={[styles.compartir9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/compartir1.png")}
      />
      <View style={styles.iphone1415ProMax12Inner} />
      <Text style={[styles.compartir, styles.calcularTypo]}>Compartir</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Image
        style={[styles.iphone1415ProMax12Child1, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.fecha, styles.fechaTypo]}>Fecha:</Text>
      <Text style={[styles.text, styles.textTypo3]}>31-01-2024</Text>
      <Text style={[styles.text1, styles.textTypo2]}>$2,750.00</Text>
      <Text style={[styles.text2, styles.textTypo1]}>0.00</Text>
      <Text style={[styles.montoAbonado, styles.fechaTypo]}>Monto Abonado</Text>
      <Text style={[styles.interesMora, styles.fechaTypo]}>Interes / Mora</Text>
      <Text style={[styles.text3, styles.textTypo1]}>0.00</Text>
      <Text style={[styles.total, styles.fechaTypo]}>Total:</Text>
      <Text style={[styles.text4, styles.textTypo2]}>$2,750.00</Text>
      <Text style={[styles.saldo, styles.fechaTypo]}>Saldo:</Text>
      <Text style={[styles.de2, styles.textTypo3]}>1 de 2</Text>
      <Text style={[styles.cuotasPagadas, styles.fechaTypo]}>
        Cuotas Pagadas
      </Text>
      <Text style={[styles.text5, styles.textTypo3]}>1</Text>
      <Text style={[styles.cuotasAbonadas, styles.fechaTypo]}>
        Cuotas Abonadas:
      </Text>
      <Text style={[styles.text6, styles.textTypo]}>31/01/2024</Text>
      <Text style={[styles.fechaDelPrestamo, styles.fechaTypo]}>
        Fecha del prestamo
      </Text>
      <Text style={[styles.text7, styles.textTypo]}>31/01/2024</Text>
      <Text style={[styles.reciboGenerado, styles.fechaTypo]}>
        Recibo Generado
      </Text>
      <Image
        style={[styles.compartir9Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/compartir1.png")}
      />
      <Image
        style={[styles.compartir10Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/compartir1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
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
  direccinTypo: {
    top: 316,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
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
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  lineIconLayout: {
    height: 4,
    width: 230,
    left: 100,
    position: "absolute",
  },
  textTypo3: {
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo2: {
    left: 263,
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo1: {
    left: 300,
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    left: 254,
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
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
  iphone1415ProMax12Child: {
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
  compartirRecibo: {
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
  iphone1415ProMax12Item: {
    top: 207,
    left: 50,
    backgroundColor: Color.colorGainsboro_200,
    width: 330,
    height: 482,
    position: "absolute",
  },
  juanCarlosCosio: {
    top: 278,
  },
  cliente: {
    top: 259,
  },
  deCliente: {
    top: 295,
  },
  direccin: {
    left: 100,
    top: 316,
  },
  teotihuacan1119Unidad: {
    left: 172,
  },
  calcular: {
    top: 709,
    left: 182,
    fontSize: FontSize.size_xl,
    width: 72,
  },
  compartir9Icon: {
    top: 706,
    left: 162,
  },
  iphone1415ProMax12Inner: {
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
  lineIcon: {
    top: 504,
  },
  iphone1415ProMax12Child1: {
    top: 598,
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
  },
  text2: {
    top: 424,
  },
  montoAbonado: {
    top: 403,
  },
  interesMora: {
    top: 426,
  },
  text3: {
    top: 443,
  },
  total: {
    top: 445,
  },
  text4: {
    top: 462,
  },
  saldo: {
    top: 464,
  },
  de2: {
    top: 522,
    left: 290,
  },
  cuotasPagadas: {
    top: 524,
  },
  text5: {
    top: 541,
    left: 323,
  },
  cuotasAbonadas: {
    top: 543,
  },
  text6: {
    top: 560,
  },
  fechaDelPrestamo: {
    top: 562,
  },
  text7: {
    top: 615,
  },
  reciboGenerado: {
    top: 617,
  },
  compartir10Icon: {
    top: 711,
    left: -308,
  },
  iphone1415ProMax12: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax11;
