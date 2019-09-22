import React from "react";
import { Text, View, Image } from "react-native";

// Styles
import styles from "../styles/global";

export function Card(props) {
  const { headline, action_item, action_type, icon } = props;

  return (
    <View style={styles.card}>
      <View style={styles.card_container}>
        <Text style={styles.card_headline}>{headline}</Text>
        <Text style={styles.card_action_item}>{action_item}</Text>
        <Text style={styles.card_action_type}>{action_type}</Text>
      </View>
      <View style={styles.card_icon_container}>
        <Image style={styles.card_icon} source={icon} />
      </View>
    </View>
  );
}
