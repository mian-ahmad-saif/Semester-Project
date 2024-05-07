// WelcomeScreen.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [showAnim, setShowAnim] = useState(true);

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  useEffect(() => {
    setTimeout(() => setShowAnim(false), 10000);
  }, []);

  return (
    <View style={styles.container}>
      {showAnim ? (
        <Image source={require("../pictures/anim.gif")} style={styles.logo} />
      ) : (
        <TouchableOpacity
          onPress={handleRegisterPress}
          style={styles.registerButton}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  registerText: {
    color: "white",
    fontSize: 18,
  },
});

export default WelcomeScreen;
