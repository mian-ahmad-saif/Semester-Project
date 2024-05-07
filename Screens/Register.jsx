import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";

import { getAuth, signInWithPopup, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
import styles from "../styles";

import { LinearGradient } from "expo-linear-gradient";

export default function Register({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onPressRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Succesfull", userCredential);
        navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Code == ", errorCode);
        console.log("Error Message == ", errorMessage);
        // ..
      });
  };

  const onPressFacebook = async () => {
    const auth = getAuth();
   await signInWithRedirect(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(errorCode);
        console.log(credential);

        // ...
      });
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LinearGradient
        style={styles.container}
        colors={["#FDABFF", "#7A7DFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.top}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.text}>Ali Baba Restaurant</Text>
        </View>

        <View style={styles.center}>
          <TextInput
            style={styles.fields}
            placeholder="Email Address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            style={styles.fields}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          ></TextInput>

          <TouchableOpacity onPress={onPressRegister}>
            <View style={styles.button}>
              <Text style={styles.buttonTeText}>Register</Text>
            </View>
          </TouchableOpacity>

          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.line} />
            <View>
              <Text style={styles.lineText}>Or SignUp With</Text>
            </View>
            <View style={styles.line} />
          </View> */}

          {/* <View style={styles.bottomButtonsView}>
            <TouchableOpacity onPress={onPressFacebook} style={styles.bottomButtons}>
              <Image source={require("./facebook.png")} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButtons}>
              <Image source={require("./google.png")} style={styles.image} />
            </TouchableOpacity>
          </View> */}
        </View>

        <View style={styles.bottomView}>
          <Text style={{ color: "white", fontSize: 18 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.textButton}> Login</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
