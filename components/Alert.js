import React from "react";
import { View, Text } from "react-native";

// Styles
import styles from "../styles/global";

export function Alert(props) {
  return (
    <View style={styles.alert}>
      <Text style={styles.alert_text}>Alert</Text>
    </View>
  );
}
