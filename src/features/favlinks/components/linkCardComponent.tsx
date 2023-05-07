import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

const LinkCardComponent = ({
  linkText,
  onDelPress,
  onEditPress,
  createdAt,
}) => {
  const [visible, setVisible] = React.useState<boolean>();
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="image" size={48} color="orange" />
      <View style={styles.linkNTime}>
        <Text style={{ fontSize: 18, marginBottom: 6, right: 14 }}>
          {linkText}
        </Text>
        <Text style={{ fontSize: 12, color: "#bcbcbc", right: 14 }}>
          {createdAt}
        </Text>
      </View>
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
            Open link
          </MenuItem>
          <MenuItem
            onPress={() => {
              hideMenu();
              onEditPress();
            }}
          >
            Edit
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onPress={() => {
              hideMenu();
              onDelPress();
            }}
          >
            Delete
          </MenuItem>
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
    left: 2,
    backgroundColor: "white",
  },
  linkNTime: {
    padding: 6,
    flexDirection: "column",
  },
});
