import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FeedCardComponent = ({ username }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row1}>
        <MaterialCommunityIcons name="account-circle" size={26} />
        <View style={styles.heading}>
          <Text style={{ paddingRight: 6 }}>{username}</Text>
          <Text
            style={{
              paddingRight: 6,
              // fontSize: 24,
              textAlign: "center",
            }}
          >
            |
          </Text>
          <Text style={{ color: "#bcbcbc" }}>Aug 7</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ex
          inventore necessitatibus alias explicabo aliquid iste aliquam fugiat
          est quis obcaecati recusandae laboriosam fuga quia non! Repellendus
          iste optio corrupti!
        </Text>
      </View>
      <View style={styles.row2}>
        <MaterialCommunityIcons
          name="exclamation-thick"
          size={18}
          color="#bcbcbc"
          style={{ paddingRight: 14 }}
        />
        <MaterialCommunityIcons
          name="repeat"
          size={18}
          color="#bcbcbc"
          style={{ paddingRight: 14 }}
        />
        <MaterialCommunityIcons
          name="star-off"
          size={18}
          color="#bcbcbc"
          style={{ paddingRight: 14 }}
        />
      </View>
      <View
        style={{
          marginTop: 21,
          alignSelf: "center",
          width: "95%",
          borderWidth: 0.6,
          borderColor: "#bcbcbc",
        }}
      />
    </View>
  );
};

export default FeedCardComponent;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    height: 180,
    borderRadius: 26,
    margin: 8,
  },
  heading: {
    flexDirection: "row",
    padding: 6,
    justifyContent: "space-evenly",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 12,
  },
});
