import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const AccountBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        onPress={() => navigation.navigate("profile")}
        name="account-circle"
        size={46}
      />
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Activity Feed</Text>
      <View style={styles.actionsRow}>
        <MaterialCommunityIcons
          name="lead-pencil"
          size={18}
          style={{ paddingRight: 16, top: 4 }}
        />
        <Ionicons
          onPress={() => navigation.navigate("settings")}
          name="md-settings-outline"
          size={24}
          style={{ paddingRight: 8 }}
        />
      </View>
    </View>
  );
};

export default AccountBar;

const styles = StyleSheet.create({
  actionsRow: {
    flexDirection: "row",
    padding: 8,
  },
  container: {
    // flex: 1,
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 6,
    top: 8,
    marginTop: 32,
    bottom: 8,
  },
});
