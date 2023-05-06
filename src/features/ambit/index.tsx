import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AccountBar from "./components/accountBar";
import FeedCardComponent from "./components/feedCardComponent";

const usernames = [
  {
    id: 1,
    user: "Wonderbot",
  },
  {
    id: 2,
    user: "Double",
  },
  {
    id: 3,
    user: "Triple",
  },
  {
    id: 4,
    user: "Quads",
  },
  {
    id: 5,
    user: "Cinquiple",
  },
];

const AmbitScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AccountBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={usernames}
        renderItem={({ item }) => <FeedCardComponent username={item.user} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default AmbitScreen;

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
