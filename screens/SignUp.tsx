import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signup, styles.iconLayout]}>
      <View style={styles.rectangle} />
      <TextInput
        style={[styles.signupChild, styles.rectangle18Layout]}
        keyboardType="default"
      />
      <TextInput
        style={[styles.rectangle18Copy, styles.rectangle18Layout]}
        keyboardType="default"
      />
      <Text style={[styles.signupToYour, styles.createTypo1]}>
        Daftar Akun Sekarang
      </Text>
      <Text style={[styles.firstName, styles.nameTypo, styles.namePosition]}>
        Nama Depan
      </Text>
      <Text style={[styles.lastName, styles.nameTypo, styles.namePosition]}>
        Nama Belakang
      </Text>
      <TextInput
        style={[styles.rectangle18Copy1, styles.rectangle18Layout]}
        keyboardType="default"
      />
      <Text
        style={[styles.emailIdphoneNumbe, styles.nameTypo, styles.namePosition]}
      >
        Email/Nomer Telefon
      </Text>
      <TextInput
        style={[styles.rectangle18Copy2, styles.rectangle18Layout]}
        keyboardType="default"
      />
      <Text style={[styles.password, styles.nameTypo, styles.namePosition]}>
        Password
      </Text>
      <TextInput
        style={[styles.rectangle18Copy3, styles.rectangle18Layout]}
        keyboardType="default"
      />
      <Text
        style={[styles.reEnterPassword, styles.nameTypo, styles.namePosition]}
      >
        Masukan Ulang Password
      </Text>
      <Pressable style={styles.signupItem} accessible="false" />
      <Text style={[styles.create, styles.createTypo, styles.createTypo1]}>
        Buat
      </Text>
      <Pressable
        style={styles.iconuiback}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconuiback.png")}
        />
      </Pressable>
      <View style={styles.barsStatusWhite}>
        <View style={[styles.action, styles.actionPosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.actionPosition]}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.nameTypo]}>
        <Text style={styles.sudahPunyaAkun}>{`Sudah Punya Akun ? `}</Text>
        <Text style={styles.masuk}>Masuk</Text>
      </Text>
      <Text
        style={[
          styles.welcomeToCommunityContainer,
          styles.timePosition,
          styles.createTypo,
        ]}
      >
        <Text style={styles.selamatDatang}>{`Selamat Datang `}</Text>
        <Text style={styles.selamatDatang}>di</Text>
        <Text style={styles.halfMarket}>Half Market</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  rectangle18Layout: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 24,
    left: "8.53%",
    right: "8.53%",
    width: "82.93%",
    height: "5.91%",
    position: "absolute",
  },
  createTypo1: {
    textAlign: "left",
    fontSize: 16,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  nameTypo: {
    fontSize: 18,
    textAlign: "left",
    color: "#fff",
    letterSpacing: 0,
    position: "absolute",
  },
  namePosition: {
    left: "12.8%",
    fontSize: 18,
    fontFamily: "Montserrat",
    top: "50%",
  },
  createTypo: {
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
  actionPosition: {
    top: "50%",
    position: "absolute",
  },
  timePosition: {
    textAlign: "center",
    color: "#fff",
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    top: 812,
    width: 375,
    left: 0,
    position: "absolute",
    height: 812,
    backgroundColor: "#33907c",
  },
  signupChild: {
    top: "34.85%",
    bottom: "59.24%",
  },
  rectangle18Copy: {
    top: "42.73%",
    bottom: "51.35%",
  },
  signupToYour: {
    marginTop: -168,
    left: "26.13%",
    color: "#fff",
    textAlign: "left",
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  firstName: {
    marginTop: -110,
  },
  lastName: {
    marginTop: -46,
  },
  rectangle18Copy1: {
    top: "50.49%",
    bottom: "43.6%",
  },
  emailIdphoneNumbe: {
    marginTop: 17,
  },
  rectangle18Copy2: {
    top: "58.13%",
    bottom: "35.96%",
  },
  password: {
    marginTop: 79,
  },
  rectangle18Copy3: {
    top: "65.76%",
    bottom: "28.33%",
  },
  reEnterPassword: {
    marginTop: 141,
  },
  signupItem: {
    top: "76.72%",
    bottom: "17.36%",
    backgroundColor: "#fff",
    borderRadius: 24,
    left: "8.53%",
    right: "8.53%",
    width: "82.93%",
    height: "5.91%",
    position: "absolute",
  },
  create: {
    marginTop: 232,
    left: "43.2%",
    color: "#13b58c",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
  },
  icon: {
    height: "100%",
  },
  iconuiback: {
    left: 19,
    top: 49,
    width: 24,
    height: 24,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: "SF Pro Text",
    fontWeight: "600",
    width: 54,
    letterSpacing: 0,
    textAlign: "center",
    left: 0,
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
    width: 54,
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
  },
  barsStatusWhite: {
    height: "5.42%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  sudahPunyaAkun: {
    fontFamily: "Montserrat",
  },
  masuk: {
    fontWeight: "600",
    fontFamily: "Montserrat",
  },
  dontHaveAnContainer: {
    top: 709,
    left: 66,
  },
  selamatDatang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  halfMarket: {
    margin: 0,
  },
  welcomeToCommunityContainer: {
    marginTop: -269,
    left: "23.73%",
    fontSize: 24,
    letterSpacing: -1,
  },
  signup: {
    flex: 1,
    height: 812,
    backgroundColor: "#33907c",
    overflow: "hidden",
  },
});

export default SignUp;
