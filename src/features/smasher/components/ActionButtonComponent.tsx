import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ActionButtonComponent = ({ onPress, label = "Choose Image" }) => {
  return (
    <Pressable style={[styles.button]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default ActionButtonComponent;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
    marginRight: 6,
    marginLeft: 6,
    backgroundColor: "tomato",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
});
