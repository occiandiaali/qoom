import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AmbitScreen from "../../features/ambit";
import FavLinksScreen from "../../features/favlinks";
import StickerSmashScreen from "../../features/smasher";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../features/account/profile";
import SettingsScreen from "../../features/ambit/settings";
import LinkDetailScreen from "../../features/favlinks/LinkDetailScreen";
import AddLinkScreen from "../../features/favlinks/AddLinkScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AmbitStack() {
  return (
    <Stack.Navigator
      initialRouteName="ambit"
      screenOptions={{ gestureDirection: "horizontal-inverted" }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ambit"
        component={AmbitScreen}
      />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function LinksStack() {
  return (
    <Stack.Navigator
      initialRouteName="links"
      screenOptions={{ gestureDirection: "horizontal-inverted" }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="links"
        component={FavLinksScreen}
      />
      <Stack.Screen name="Link Detail" component={AddLinkScreen} />
    </Stack.Navigator>
  );
}

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ambit"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 64,
          paddingBottom: 12,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Ambit") {
            iconName = focused ? "account-group" : "account-group-outline";
          } else if (route.name === "Links") {
            iconName = focused ? "file-link" : "file-link-outline";
          } else if (route.name === "Smasher") {
            iconName = focused ? "sticker" : "sticker-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Smasher" component={StickerSmashScreen} />
      <Tab.Screen name="Ambit" component={AmbitStack} />
      <Tab.Screen name="Links" component={LinksStack} />
    </Tab.Navigator>
  );
};

export default BottomNav;
