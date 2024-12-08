import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import BgImg from "../assets/images/bg-img.jpg";
import AddIcon from "../assets/images/add.png";
import InputField from "../components/InputField";
import styles from "../styles/RegistrationScreenStyles";

const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = () => {
    Alert.alert("Реєстрація успішна!");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImg} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarWrapper}>
            <Image source={AddIcon} style={styles.addBtn} />
          </View>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <View style={{ gap: 16 }}>
            <InputField
              value={login}
              onChangeText={setLogin}
              placeholder="Логін"
              isFocused={focusedField === "login"}
              onFocus={() => setFocusedField("login")}
              onBlur={() => setFocusedField(null)}
            />
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="Адреса електронної пошти"
              isFocused={focusedField === "email"}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
            <View style={styles.inputWrapper}>
              <InputField
                value={password}
                onChangeText={setPassword}
                placeholder="Пароль"
                secureTextEntry={!isShown}
                isFocused={focusedField === "password"}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
              />
              <Pressable
                onPress={() => setIsShown(!isShown)}
                style={styles.inputPassLab}
              >
                <Text style={styles.inputPassLabText}>
                  {isShown ? "Приховати" : "Показати"}
                </Text>
              </Pressable>
            </View>
          </View>
          <Pressable style={styles.formBtn} onPress={handleSubmit}>
            <Text style={styles.formBtnText}>Зареєструватися</Text>
          </Pressable>
          <View style={styles.formTextWrapper}>
            <Text style={styles.formText}>Вже є акаунт?</Text>
            <TouchableOpacity>
              <Text style={styles.formText}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
