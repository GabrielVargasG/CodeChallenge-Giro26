import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax22 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax22}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax22Child}
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
      <View style={[styles.iphone1415ProMax22Item, styles.iphone1415Layout]} />
      <Text style={styles.calcular}>Calcular</Text>
      <View style={[styles.iphone1415ProMax22Inner, styles.iphone1415Layout]} />
      <Text style={styles.aceptar}>Aceptar</Text>
      <Text style={[styles.text, styles.textTypo]}>28</Text>
      <Text style={[styles.cantidadDasAl, styles.primerTypo]}>
        Cantidad días al mes
      </Text>
      <Text style={[styles.primerPago, styles.primerTypo]}>Primer pago</Text>
      <Text style={[styles.registraAutomticamenteEl, styles.lasCuotasSeTypo]}>
        Registra automáticamente el pago de la primer cuota
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.redondeoAutomtico, styles.primerTypo]}>
        Redondeo automático
      </Text>
      <Text style={[styles.lasCuotasSe, styles.lasCuotasSeTypo]}>
        Las cuotas se redondean a la hora de realizar el pago. Por ejemplo una
        cuota de $999..60 se llevará automáticamente a $1,000.00
      </Text>
      <Image
        style={[styles.iphone1415ProMax22Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={[styles.lineView, styles.iphone1415ChildLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>14</Text>
      <Text style={[styles.cantidadDeDas, styles.primerTypo]}>
        Cantidad de días para quincenas
      </Text>
      <View
        style={[styles.iphone1415ProMax22Child2, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.text2, styles.textTypo]}>25</Text>
      <Text style={[styles.text3, styles.textTypo]}>10</Text>
      <Text style={[styles.daSegundaQuincena, styles.primerTypo]}>
        Día segunda quincena
      </Text>
      <View
        style={[styles.iphone1415ProMax22Child3, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.text4, styles.textTypo]}>30</Text>
      <Text style={[styles.daCobroMensual, styles.primerTypo]}>
        Día cobro mensual
      </Text>
      <View
        style={[styles.iphone1415ProMax22Child4, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.daCobroSemanal, styles.primerTypo]}>
        Día cobro semanal
      </Text>
      <Text style={[styles.daPrimerQuincena, styles.primerTypo]}>
        Día primer quincena
      </Text>
      <View
        style={[styles.iphone1415ProMax22Child5, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.martes, styles.lunesTypo]}>Martes</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child6,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.lunes, styles.lunesTypo]}>Lunes</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child7,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.mircoles, styles.domingoPosition]}>Miércoles</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child8,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.jueves, styles.lunesTypo]}>Jueves</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child9,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Text style={[styles.sbado, styles.sbadoTypo]}>Sábado</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child10,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.viernes, styles.sbadoTypo]}>Viernes</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child11,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.domingo, styles.sbadoTypo]}>Domingo</Text>
      <Image
        style={[
          styles.iphone1415ProMax22Child12,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
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
  iphone1415Layout: {
    height: 54,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 791,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    left: 58,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  primerTypo: {
    color: Color.colorGoldenrod,
    left: 43,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  lasCuotasSeTypo: {
    width: 204,
    left: 43,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    left: 311,
    position: "absolute",
  },
  iphone1415ChildLayout: {
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
    top: 244,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition1: {
    top: 243,
    height: 15,
    width: 15,
    position: "absolute",
  },
  domingoPosition: {
    left: 229,
    width: 64,
  },
  sbadoTypo: {
    top: 272,
    height: 24,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition: {
    top: 271,
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
  iphone1415ProMax22Child: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  iphone1415ProMax22Item: {
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
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax22Inner: {
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
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text: {
    top: 691,
  },
  cantidadDasAl: {
    top: 660,
  },
  primerPago: {
    top: 475,
  },
  registraAutomticamenteEl: {
    top: 502,
  },
  ellipseIcon: {
    top: 518,
  },
  redondeoAutomtico: {
    top: 542,
  },
  lasCuotasSe: {
    top: 569,
  },
  iphone1415ProMax22Child1: {
    top: 585,
  },
  lineView: {
    top: 710,
  },
  text1: {
    top: 752,
  },
  cantidadDeDas: {
    top: 721,
  },
  iphone1415ProMax22Child2: {
    top: 771,
  },
  text2: {
    top: 387,
  },
  text3: {
    top: 324,
  },
  daSegundaQuincena: {
    top: 356,
  },
  iphone1415ProMax22Child3: {
    top: 406,
  },
  text4: {
    top: 445,
  },
  daCobroMensual: {
    top: 414,
  },
  iphone1415ProMax22Child4: {
    top: 464,
  },
  daCobroSemanal: {
    top: 219,
  },
  daPrimerQuincena: {
    top: 296,
  },
  iphone1415ProMax22Child5: {
    top: 346,
  },
  martes: {
    width: 47,
    height: 24,
    top: 244,
    left: 146,
  },
  iphone1415ProMax22Child6: {
    left: 125,
  },
  lunes: {
    width: 40,
    left: 64,
    height: 24,
    top: 244,
  },
  iphone1415ProMax22Child7: {
    left: 43,
  },
  mircoles: {
    height: 24,
    top: 244,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax22Child8: {
    left: 208,
  },
  jueves: {
    left: 328,
    width: 47,
    height: 24,
    top: 244,
  },
  iphone1415ProMax22Child9: {
    left: 311,
    top: 243,
  },
  sbado: {
    width: 65,
    left: 146,
  },
  iphone1415ProMax22Child10: {
    left: 125,
  },
  viernes: {
    width: 61,
    left: 64,
  },
  iphone1415ProMax22Child11: {
    left: 43,
  },
  domingo: {
    left: 229,
    width: 64,
  },
  iphone1415ProMax22Child12: {
    left: 208,
  },
  iphone1415ProMax22: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax22;
