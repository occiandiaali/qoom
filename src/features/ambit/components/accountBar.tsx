import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccountBar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account-circle" size={46} />
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Activity Feed</Text>
      <MaterialCommunityIcons name="lead-pencil" size={26} />
    </View>
  );
};

export default AccountBar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 36,
    bottom: 8,
  },
});
