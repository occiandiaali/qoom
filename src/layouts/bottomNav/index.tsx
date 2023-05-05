import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AmbitScreen from "../../features/ambit";
import FavLinksScreen from "../../features/favlinks";
import StickerSmashScreen from "../../features/smasher";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen name="Ambit" component={AmbitScreen} />
      <Tab.Screen name="Links" component={FavLinksScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
