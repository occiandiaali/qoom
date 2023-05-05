import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavLinksScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Fav Links</Text>
    </View>
  );
};

export default FavLinksScreen;

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
