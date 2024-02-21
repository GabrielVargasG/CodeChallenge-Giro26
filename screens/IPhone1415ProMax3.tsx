import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax4}>
      <LinearGradient
        style={[styles.wrapper, styles.frameLayout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax4")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.frameLayout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax6")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.frame, styles.frameLayout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax15")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.frameLayout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax17")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.wrapper1, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax5")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.wrapper2, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax15")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.wrapper3, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax16")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.wrapper4, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.iconLayout1]}
          onPress={() => navigation.navigate("IPhone1415ProMax23")}
        />
      </LinearGradient>
      <Image
        style={[styles.componentes1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/componentes-1.png")}
      />
      <Image
        style={[styles.apretonDeManos1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/apretondemanos-1.png")}
      />
      <Pressable
        style={[styles.factura1, styles.factura1Position]}
        onPress={() => navigation.navigate("IPhone1415ProMax5")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/factura-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.contrato1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/contrato-1.png")}
      />
      <Image
        style={[styles.analitica1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/analitica-1.png")}
      />
      <Pressable
        style={[styles.atencionAlCliente1, styles.factura1Position]}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/atencionalcliente-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.salario1, styles.salario1Position]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/salario-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.atrasado1Icon, styles.salario1Position]}
        contentFit="cover"
        source={require("../assets/atrasado-1.png")}
      />
      <Pressable
        style={styles.nuevoCliente}
        onPress={() => navigation.navigate("IPhone1415ProMax4")}
      >
        <Text style={styles.nuevoTypo}>{`Nuevo
Cliente`}</Text>
      </Pressable>
      <Pressable
        style={styles.nuevoPrestamo}
        onPress={() => navigation.navigate("IPhone1415ProMax5")}
      >
        <Text style={[styles.nuevoPrestamo1, styles.nuevoTypo]}>{`Nuevo
Prestamo`}</Text>
      </Pressable>
      <Pressable
        style={[styles.cobrosDelDaContainer, styles.cuotasAtrasadasPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax6")}
      >
        <Text style={styles.nuevoTypo}>{`Cobros 
Del día`}</Text>
      </Pressable>
      <Text style={[styles.prstamos, styles.prstamosTypo]}>Préstamos</Text>
      <Text
        style={[styles.cuotasAtrasadas, styles.cuotasAtrasadasPosition]}
      >{`Cuotas
Atrasadas`}</Text>
      <Text style={[styles.clientes, styles.prstamosTypo]}>Clientes</Text>
      <Text style={[styles.reporte, styles.reporteTypo]}>Reporte</Text>
      <Text style={[styles.configuracin, styles.reporteTypo]}>
        Configuración
      </Text>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <Image
        style={[styles.corona1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.corona2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 148,
    width: 118,
    left: 78,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapperPosition: {
    left: 234,
    height: 148,
    width: 118,
    position: "absolute",
  },
  iconLayout: {
    height: 64,
    width: 64,
    top: 771,
    position: "absolute",
  },
  iconPosition1: {
    top: 585,
    height: 64,
    width: 64,
    position: "absolute",
  },
  factura1Position: {
    top: 206,
    height: 64,
    width: 64,
    position: "absolute",
  },
  salario1Position: {
    top: 383,
    height: 64,
    width: 64,
    position: "absolute",
  },
  nuevoTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  cuotasAtrasadasPosition: {
    top: 340,
    position: "absolute",
  },
  prstamosTypo: {
    top: 534,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  reporteTypo: {
    top: 716,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconPosition: {
    left: 352,
    height: 64,
    width: 64,
    position: "absolute",
  },
  pressable: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: "transparent",
  },
  wrapper: {
    top: 97,
  },
  container: {
    top: 283,
  },
  frame: {
    top: 469,
  },
  rectangleLineargradient: {
    top: 655,
  },
  wrapper1: {
    top: 97,
  },
  wrapper2: {
    top: 283,
  },
  wrapper3: {
    top: 469,
  },
  wrapper4: {
    top: 655,
  },
  componentes1Icon: {
    left: 261,
  },
  apretonDeManos1Icon: {
    left: 261,
  },
  factura1: {
    left: 261,
  },
  contrato1Icon: {
    left: 105,
  },
  analitica1Icon: {
    left: 105,
  },
  atencionAlCliente1: {
    left: 105,
  },
  salario1: {
    left: 105,
  },
  atrasado1Icon: {
    left: 261,
  },
  nuevoCliente: {
    left: 114,
    top: 154,
    position: "absolute",
  },
  nuevoPrestamo1: {
    marginTop: -315,
    marginLeft: 46,
  },
  nuevoPrestamo: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cobrosDelDaContainer: {
    left: 111,
  },
  prstamos: {
    left: 102,
  },
  cuotasAtrasadas: {
    left: 257,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  clientes: {
    left: 266,
  },
  reporte: {
    left: 111,
  },
  configuracin: {
    left: 246,
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  corona1Icon: {
    top: 857,
  },
  corona2Icon: {
    top: 11,
  },
  iphone1415ProMax4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax3;
