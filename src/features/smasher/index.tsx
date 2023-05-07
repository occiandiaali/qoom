import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import TopBarComponent from "./components/TopBarComponent";
import ActionButtonComponent from "./components/ActionButtonComponent";

const StickerSmashScreen = () => {
  return (
    <View style={styles.container}>
      <TopBarComponent />
      <Image
        source={{
          uri: "https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        }}
        style={styles.img}
      />
      <View style={styles.actionContainer}>
        <ActionButtonComponent onPress={() => null} />
        <ActionButtonComponent onPress={() => null} label="Use this image" />
      </View>
    </View>
  );
};

export default StickerSmashScreen;

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 340,
    height: 500,
    bottom: 20,
    borderRadius: 24,
  },
  txt: {
    fontSize: 36,
  },
});
