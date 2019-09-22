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
        action_item={props.heartbeat}
        action_type="bpm"
        icon={require("../assets/heart.png")}
        alert={props.alertHeartbeat}
      />
      <Card
        headline="Oxygen Saturation"
        action_item={props.oxygen}
        action_type="% Sp0₂"
        icon={require("../assets/wind.png")}
        alert={props.alertOxygen}
      />
    </View>
  );
}
