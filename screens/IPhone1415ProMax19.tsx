import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax19 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.iphone1415ProMax21}
      onPress={() => navigation.navigate("IPhone1415ProMax22")}
    >
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax21Child}
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
        source={require("../assets/factura-1.png")}
      />
      <Text style={styles.configurarPrestamo}>Configurar Prestamo</Text>
      <Text style={[styles.clculoDeMora, styles.dasTypo]}>Cálculo de Mora</Text>
      <Text style={[styles.permiteConfigurarLa, styles.permiteTypo]}>
        Permite configurar la aplicación de los intereses moratorios a todos los
        nuevos préstamos
      </Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax23")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <View style={[styles.iphone1415ProMax21Item, styles.iphone1415Layout]} />
      <Text style={[styles.calcular, styles.aceptarTypo]}>Calcular</Text>
      <View style={[styles.iphone1415ProMax21Inner, styles.iphone1415Layout]} />
      <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.dasIgnorados, styles.dasTypo]}>Días ignorados</Text>
      <Text style={[styles.fijarDaPara, styles.dasTypo]}>
        Fijar día para el cobro
      </Text>
      <Text style={[styles.permiteEstablecerQu, styles.permiteTypo]}>
        Permite establecer qué días se programaran las fechas de pago
      </Text>
      <Image
        style={[styles.iphone1415ProMax21Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.aplicacinDeLa, styles.dasTypo]}>
        Aplicación de la Mora
      </Text>
      <Text style={[styles.fijo, styles.fijoTypo]}>Fijo</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child2,
          styles.iphone1415ChildPosition2,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.calcularPorPeriodos, styles.fijoTypo]}>
        Calcular por periodos atrasados
      </Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child3,
          styles.iphone1415ChildPosition2,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>5</Text>
      <Text style={[styles.interesAplicadoAl, styles.dasTypo]}>
        Interes aplicado al importe de la cuota atrasada
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>0</Text>
      <Text style={[styles.cantidadDeDas, styles.dasTypo]}>
        Cantidad de días que puede estar atrasado
      </Text>
      <View style={[styles.iphone1415ProMax21Child4, styles.lineViewLayout]} />
      <Text style={[styles.martes, styles.lunesTypo]}>Martes</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child5,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.lunes, styles.lunesTypo]}>Lunes</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child6,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.mircoles, styles.domingoPosition]}>Miércoles</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child7,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.jueves, styles.lunesTypo]}>Jueves</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child8,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Text style={[styles.sbado, styles.sbadoTypo]}>Sábado</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child9,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.viernes, styles.sbadoTypo]}>Viernes</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child10,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.domingo, styles.sbadoTypo]}>Domingo</Text>
      <Image
        style={[
          styles.iphone1415ProMax21Child11,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </Pressable>
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
  dasTypo: {
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 43,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  permiteTypo: {
    width: 204,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 43,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415Layout: {
    height: 54,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 791,
    position: "absolute",
  },
  aceptarTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    left: 311,
    position: "absolute",
  },
  fijoTypo: {
    top: 367,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition2: {
    top: 366,
    height: 15,
    width: 15,
    position: "absolute",
  },
  textTypo: {
    left: 58,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 181,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    left: 48,
    position: "absolute",
  },
  lunesTypo: {
    height: 24,
    top: 554,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition1: {
    top: 553,
    height: 15,
    width: 15,
    position: "absolute",
  },
  domingoPosition: {
    left: 229,
    width: 64,
  },
  sbadoTypo: {
    top: 582,
    height: 24,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition: {
    top: 581,
    height: 15,
    width: 15,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax21Child: {
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
  configurarPrestamo: {
    top: 47,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 250,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  clculoDeMora: {
    top: 217,
    textAlign: "left",
  },
  permiteConfigurarLa: {
    top: 244,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  iphone1415ProMax21Item: {
    left: 48,
    height: 54,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 791,
  },
  calcular: {
    top: 806,
    left: 85,
    textAlign: "center",
  },
  iphone1415ProMax21Inner: {
    left: 237,
    height: 54,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 791,
  },
  aceptar: {
    top: 805,
    left: 278,
    textAlign: "left",
  },
  ellipseIcon: {
    top: 260,
  },
  dasIgnorados: {
    top: 526,
    textAlign: "left",
  },
  fijarDaPara: {
    top: 619,
    textAlign: "left",
  },
  permiteEstablecerQu: {
    top: 646,
  },
  iphone1415ProMax21Child1: {
    top: 662,
  },
  aplicacinDeLa: {
    top: 331,
    textAlign: "left",
  },
  fijo: {
    left: 64,
  },
  iphone1415ProMax21Child2: {
    left: 43,
  },
  calcularPorPeriodos: {
    left: 175,
  },
  iphone1415ProMax21Child3: {
    left: 154,
  },
  text: {
    top: 426,
  },
  interesAplicadoAl: {
    top: 395,
    textAlign: "left",
  },
  lineView: {
    top: 445,
  },
  text1: {
    top: 484,
  },
  cantidadDeDas: {
    top: 453,
    textAlign: "left",
  },
  iphone1415ProMax21Child4: {
    top: 503,
  },
  martes: {
    width: 47,
    height: 24,
    top: 554,
    left: 146,
  },
  iphone1415ProMax21Child5: {
    left: 125,
  },
  lunes: {
    width: 40,
    height: 24,
    top: 554,
    left: 64,
  },
  iphone1415ProMax21Child6: {
    left: 43,
  },
  mircoles: {
    height: 24,
    top: 554,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax21Child7: {
    left: 208,
  },
  jueves: {
    left: 328,
    width: 47,
    height: 24,
    top: 554,
  },
  iphone1415ProMax21Child8: {
    left: 311,
    top: 553,
  },
  sbado: {
    width: 65,
    left: 146,
  },
  iphone1415ProMax21Child9: {
    left: 125,
  },
  viernes: {
    width: 61,
    left: 64,
  },
  iphone1415ProMax21Child10: {
    left: 43,
  },
  domingo: {
    left: 229,
    width: 64,
  },
  iphone1415ProMax21Child11: {
    left: 208,
  },
  iphone1415ProMax21: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax19;
