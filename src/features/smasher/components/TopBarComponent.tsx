import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const TopBarComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Feather
        name="more-vertical"
        size={24}
        color="tomato"
        style={styles.vert}
        onPress={onPress}
      />
    </View>
  );
};

export default TopBarComponent;

const styles = StyleSheet.create({
  container: {
    margin: 6,
    padding: 8,
  },
  vert: {
    marginLeft: "94%",
    bottom: 16,
  },
});
