import React from "react";
import { View, Text } from "react-native";

// Styles
import styles from "../styles/global";

export function Warning(props) {
  return (
    <View style={styles.warning}>
      <Text style={styles.warning_text}>Warning</Text>
    </View>
  );
}
