import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/layouts/bottomNav";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNav />
      <StatusBar style="auto" backgroundColor="white" translucent={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
