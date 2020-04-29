import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    //shadow properties only work in IOS
    /*
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    */
    backgroundColor: "white",
    // elevation property only works on Android
    // It's the equivalent of the 4 shadow properties, comes from Material Design
    elevation: 6,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
