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
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from 'react';

import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles"



export default function Login({ navigation }) {



  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const goToRegister = () => {

    navigation.navigate("Register");

  };

  const onPressLogin = async ()=>{
    await signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in
     console.log("user data,", userCredential.user);
     const user = userCredential.user;
     if(email.includes('@admin'))
     {
       navigation.navigate('AdminHome', {value: email});
     }
     else
     {
     navigation.navigate('Home');

     }

     })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log("My Error,", errorMessage);

   });

}

 
  return (

    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <LinearGradient
      style={styles.container}
      colors={["#FDABFF", "#7A7DFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.top}>
        {/* <Text style={styles.welcome}>Welcome,</Text> */}
        <Text style={styles.text}>Glad to see you!</Text>
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

        <TouchableOpacity onPress={onPressLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonTeText}>Login</Text>
          </View>
        </TouchableOpacity>

        {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.line} />
          <View>
            <Text style={styles.lineText}>Or Login With</Text>
          </View>
          <View style={styles.line} />
        </View> */}

        {/* <View style = {styles.bottomButtonsView}>
        <TouchableOpacity style = {styles.bottomButtons}>
        <Image
        source={require('./facebook.png')} 
        style={styles.image}
      />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.bottomButtons}>
        <Image
        source={require('./google.png')} 
        style={styles.image}
      />
      </TouchableOpacity> */}

      {/* </View> */}
      </View>

    

      <View style={styles.bottomView}>
        <Text style = {{color:"white", fontSize: 18}}>Don't have an account?</Text> 
        <TouchableOpacity onPress={goToRegister}>
          <Text style = {styles.textButton}> Register</Text>
        </TouchableOpacity>

        </View>

      <StatusBar style="auto" />
    </LinearGradient>
    </KeyboardAvoidingView>
  );
}

