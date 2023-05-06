import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";

import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/layouts/bottomNav";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNav />
        <StatusBar style="auto" backgroundColor="white" translucent={true} />
      </NavigationContainer>
    </Provider>
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
