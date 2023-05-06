import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const LinkCardComponent = ({ timeAdded, onMenuPress }) => {
  const [visible, setVisible] = React.useState<boolean>();
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="image" size={48} color="orange" />
      <View style={styles.linkNTime}>
        <Text style={{ fontSize: 18 }}>www.website.address</Text>
        <Text style={{ color: "#bcbcbc" }}>added {timeAdded}</Text>
      </View>
      {/* <View>
        <MaterialCommunityIcons 
        onPress={onMenuPress}
        name="dots-vertical" 
        size={26} 
        color="orange" />
      </View> */}
      <View>
        <Menu
          visible={visible}
          anchor={
            <MaterialCommunityIcons
              onPress={showMenu}
              name="dots-vertical"
              size={26}
              color="orange"
            />
          }
          onRequestClose={hideMenu}
        >
          <MenuItem
            onPress={() => {
              hideMenu();
            }}
          >
            Visit url
          </MenuItem>
          <MenuItem
            onPress={() => {
              hideMenu();
              onMenuPress();
            }}
          >
            Edit
          </MenuItem>
          <MenuDivider />
          <MenuItem>Delete</MenuItem>
        </Menu>
      </View>
    </View>
  );
};

export default LinkCardComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 12,
    width: "95%",
    height: 120,
    borderRadius: 12,
    margin: 6,
    // right: 6,
    backgroundColor: "white",
  },
  linkNTime: {
    padding: 6,
  },
});
