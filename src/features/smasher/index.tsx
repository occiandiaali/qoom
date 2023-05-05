import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StickerSmashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>StickerSmash</Text>
    </View>
  );
};

export default StickerSmashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    // marginTop: "20%",
    fontSize: 36,
  },
});
