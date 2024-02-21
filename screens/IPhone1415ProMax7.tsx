import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax7 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax8}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax8Child}
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
      <Text style={styles.detalleDelPrstamo}>Detalle del préstamo</Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <View style={styles.iphone1415ProMax8Item} />
      <Text style={[styles.vencimiento, styles.fechaTypo]}>Vencimiento:</Text>
      <Text style={[styles.text, styles.textTypo]}>30-01-2024</Text>
      <Text style={[styles.text1, styles.textTypo]}>30-01-2024</Text>
      <Text style={[styles.juanCarlosCosio, styles.fechaTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.fecha, styles.fechaPosition]}>Fecha:</Text>
      <Text style={[styles.tasaDeIntetes, styles.montoPosition]}>
        Tasa de intetes:
      </Text>
      <Text style={[styles.mx500000, styles.text2Typo]}>$MX 5,000.00</Text>
      <Text style={[styles.text2, styles.text2Typo]}>30-01-2024</Text>
      <Text style={[styles.monto, styles.montoPosition]}>Monto:</Text>
      <Text style={[styles.total, styles.totalPosition]}>Total:</Text>
      <Text style={[styles.mx50000, styles.mx50000Typo]}>$MX 500.00</Text>
      <Text style={[styles.mx550000, styles.mx50000Typo]}>$MX 5,500.00</Text>
      <Text style={[styles.interesese, styles.totalPosition]}>Interesese:</Text>
      <Text style={[styles.cantidadDeCuotas, styles.cantidadDeCuotasPosition]}>
        Cantidad de Cuotas:
      </Text>
      <Text style={[styles.mensual, styles.text3Position]}>Mensual</Text>
      <Text style={[styles.text3, styles.textPosition]}>2</Text>
      <Text style={[styles.frecuenciaDePago, styles.cantidadDeCuotasPosition]}>
        Frecuencia de Pago:
      </Text>
      <Text style={[styles.cuotasPagadas, styles.valorDeCuotaPosition]}>
        Cuotas Pagadas:
      </Text>
      <Text style={[styles.mx275000, styles.text4Position]}>$MX 2,750.00</Text>
      <Text style={[styles.text4, styles.text4Position]}>0</Text>
      <Text style={[styles.valorDeCuota, styles.valorDeCuotaPosition]}>
        Valor de Cuota:
      </Text>
      <Text style={[styles.estatus, styles.estatusPosition]}>Estatus:</Text>
      <Text style={[styles.mx5500001, styles.vigentePosition]}>
        $MX 5,500.00
      </Text>
      <Text style={[styles.vigente, styles.vigentePosition]}>Vigente</Text>
      <Text style={[styles.saldo, styles.saldoPosition]}>Saldo::</Text>
      <Text style={[styles.calcular, styles.calcularLayout]}>Calcular</Text>
      <Text style={[styles.aceptar, styles.aceptarLayout]}>Aceptar</Text>
      <View
        style={[styles.iphone1415ProMax8Inner, styles.rectanglePressableLayout]}
      />
      <Pressable
        style={styles.recibirPago}
        onPress={() => navigation.navigate("IPhone1415ProMax8")}
      >
        <Text style={[styles.recibirPago1, styles.calcularLayout]}>
          Recibir Pago
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax12")}
      />
      <Text style={[styles.verPagos, styles.verPagosLayout]}>Ver Pagos</Text>
      <Text style={[styles.calcular1, styles.aceptar1Position]}>Calcular</Text>
      <Text style={[styles.aceptar1, styles.aceptar1Position]}>Aceptar</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={styles.amortizacin}
        onPress={() => navigation.navigate("IPhone1415ProMax13")}
      >
        <Text style={[styles.amortizacin1, styles.calcularLayout]}>
          Amortización
        </Text>
      </Pressable>
      <View
        style={[styles.iphone1415ProMax8Child1, styles.rectangleViewLayout]}
      />
      <Pressable
        style={[styles.cambiarPosicion, styles.aceptar1Position]}
        onPress={() => navigation.navigate("IPhone1415ProMax14")}
      >
        <Text style={[styles.cambiarPosicion1, styles.aceptarClr]}>
          Cambiar posicion
        </Text>
      </Pressable>
      <Text style={[styles.calcular2, styles.aceptar2Position]}>Calcular</Text>
      <Text style={[styles.aceptar2, styles.aceptar2Position]}>Aceptar</Text>
      <Pressable
        style={[styles.iphone1415ProMax8Child2, styles.iphone1415ChildLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      />
      <Text style={[styles.cancelar, styles.calcularLayout]}>Cancelar</Text>
      <View
        style={[styles.iphone1415ProMax8Child3, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.eliminar, styles.aceptar2Position]}>Eliminar</Text>
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
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGoldenrod,
    top: 328,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  fechaPosition: {
    left: 80,
    textAlign: "left",
  },
  montoPosition: {
    top: 359,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text2Typo: {
    top: 390,
    textAlign: "left",
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  totalPosition: {
    top: 421,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mx50000Typo: {
    top: 452,
    textAlign: "left",
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  cantidadDeCuotasPosition: {
    top: 482,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text3Position: {
    top: 513,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textPosition: {
    left: 346,
    textAlign: "right",
  },
  valorDeCuotaPosition: {
    top: 541,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text4Position: {
    top: 572,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  estatusPosition: {
    left: 304,
    textAlign: "right",
  },
  vigentePosition: {
    top: 633,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  saldoPosition: {
    top: 602,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  calcularLayout: {
    height: 16,
    textAlign: "center",
  },
  aceptarLayout: {
    width: 70,
    left: 276,
    height: 15,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  rectanglePressableLayout: {
    height: 34,
    width: 140,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 705,
    position: "absolute",
  },
  verPagosLayout: {
    width: 83,
    height: 15,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  aceptar1Position: {
    top: 757,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 748,
    height: 34,
    width: 140,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  aceptarClr: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  aceptar2Position: {
    top: 800,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    top: 791,
    height: 34,
    width: 140,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax8Child: {
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
  detalleDelPrstamo: {
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
  iphone1415ProMax8Item: {
    top: 207,
    left: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 330,
    height: 482,
    position: "absolute",
  },
  vencimiento: {
    left: 272,
    textAlign: "right",
    top: 297,
    color: Color.colorGray_300,
  },
  text: {
    textAlign: "left",
    left: 76,
  },
  text1: {
    left: 275,
    textAlign: "left",
  },
  juanCarlosCosio: {
    top: 222,
    left: 100,
    textAlign: "left",
  },
  fecha: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    top: 297,
  },
  tasaDeIntetes: {
    left: 253,
    textAlign: "right",
  },
  mx500000: {
    left: 76,
  },
  text2: {
    left: 275,
  },
  monto: {
    left: 80,
    textAlign: "left",
  },
  total: {
    left: 321,
    textAlign: "right",
  },
  mx50000: {
    left: 76,
  },
  mx550000: {
    left: 265,
  },
  interesese: {
    left: 80,
    textAlign: "left",
  },
  cantidadDeCuotas: {
    left: 222,
    textAlign: "right",
  },
  mensual: {
    textAlign: "left",
    left: 76,
  },
  text3: {
    top: 513,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frecuenciaDePago: {
    left: 80,
    textAlign: "left",
  },
  cuotasPagadas: {
    left: 246,
    textAlign: "right",
  },
  mx275000: {
    textAlign: "left",
    left: 76,
  },
  text4: {
    left: 346,
    textAlign: "right",
  },
  valorDeCuota: {
    left: 80,
    textAlign: "left",
  },
  estatus: {
    top: 602,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mx5500001: {
    textAlign: "left",
    left: 76,
  },
  vigente: {
    left: 304,
    textAlign: "right",
  },
  saldo: {
    left: 80,
    textAlign: "left",
  },
  calcular: {
    width: 72,
    fontSize: FontSize.size_xl,
    left: 95,
    height: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    top: 714,
    position: "absolute",
  },
  aceptar: {
    height: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    top: 714,
    position: "absolute",
  },
  iphone1415ProMax8Inner: {
    left: 58,
  },
  recibirPago1: {
    width: 117,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  recibirPago: {
    left: 67,
    top: 712,
    position: "absolute",
  },
  rectanglePressable: {
    left: 235,
  },
  verPagos: {
    top: 713,
    left: 264,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  calcular1: {
    height: 16,
    textAlign: "center",
    width: 72,
    fontSize: FontSize.size_xl,
    left: 95,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  aceptar1: {
    height: 15,
    width: 70,
    left: 276,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  rectangleView: {
    left: 58,
  },
  amortizacin1: {
    width: 120,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  amortizacin: {
    left: 71,
    top: 754,
    position: "absolute",
  },
  iphone1415ProMax8Child1: {
    left: 235,
  },
  cambiarPosicion1: {
    width: 124,
    height: 15,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
  },
  cambiarPosicion: {
    left: 244,
  },
  calcular2: {
    height: 16,
    textAlign: "center",
    width: 72,
    fontSize: FontSize.size_xl,
    left: 95,
  },
  aceptar2: {
    height: 15,
    width: 70,
    left: 276,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  iphone1415ProMax8Child2: {
    left: 58,
  },
  cancelar: {
    top: 799,
    left: 89,
    width: 71,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iphone1415ProMax8Child3: {
    left: 235,
  },
  eliminar: {
    left: 266,
    width: 83,
    height: 15,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  iphone1415ProMax8: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax7;
