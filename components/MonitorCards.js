import React from "react";
import { View } from "react-native";

// Styles
import styles from "../styles/global";

// Components
import { Card } from "../components/Card";

export function MonitorCards(props) {
  return (
    <View style={styles.monitor_card_container}>
      <Card
        headline="Beats Per Minute"
        action_item="97"
        action_type="bpm"
        icon={require("../assets/heart.png")}
      />
      <Card
        headline="Oxygen Saturation"
        action_item="100"
        action_type="% Sp0₂"
        icon={require("../assets/oxygen_tank.png")}
      />
    </View>
  );
}
