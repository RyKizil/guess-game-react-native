import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The number is {props.numb}</Text>
      <Text>The computer got the number after {props.rounds} attemps</Text>
      <Text>The game is over</Text>
      <Card style={styles.cardContainer}>
        <Text>Start a new game?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonYes}>
            <Button
              title="YES"
              color={Colors.primary}
              onPress={props.startGame}
            />
          </View>
          <View style={styles.buttonNo}>
            <Button title="NO" color={colors.accent} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonYes: {
    width: 50,
  },
  buttonNo: {
    width: 50,
  },
});

export default GameOverScreen;
