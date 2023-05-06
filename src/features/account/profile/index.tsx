import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account-circle" size={68} />
      <Text>User Name</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
