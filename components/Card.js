import React from "react";
import { Text, View, Image } from "react-native";

// Styles
import styles from "../styles/global";

function AlertCard(props) {
  return <View style={styles.alert_card_container}></View>;
}

export function Card(props) {
  const { headline, action_item, action_type, icon, alert } = props;

  const card_style = {
    ...styles.card,
    shadowColor: alert ? "#FF0707" : "#9429FF",
    borderColor: alert ? "transparent" : "rgba(0,0,0, .05)"
  };

  const card_headline = {
    ...styles.card_headline,
    color: alert ? "#FF1010" : "#424242"
  };

  const card_action_item = {
    ...styles.card_action_item,
    color: alert ? "#FF1010" : "#424242"
  };

  const card_action_type = {
    ...styles.card_action_type,
    color: alert ? "#FF1010" : "#424242"
  };

  return (
    <View style={card_style}>
      <View style={styles.card_container}>
        <Text style={card_headline}>{headline}</Text>
        <Text style={card_action_item}>{action_item}</Text>
        <Text style={card_action_type}>{action_type}</Text>
      </View>
      <View style={styles.card_icon_container}>
        <Image style={styles.card_icon} source={icon} />
      </View>
    </View>
  );
}
