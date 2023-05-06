import React from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export function LoginView({ navigation }) {
  return (
    <View>
      <Text>Sign Up or Sign In</Text>
      <View>
        <TextInput placeholder="email" autoCapitalize="none" />
      </View>
      <View>
        <TextInput placeholder="password" secureTextEntry />
      </View>
      <Button title="Sign In" />
      <Button title="Sign Up" />
    </View>
  );
}
