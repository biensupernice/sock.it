import React from "react";
import { View, Text } from "react-native";

// Styles
import styles from "../styles/global";

// Components
import { Alert } from "../components/Alert";
import { Warning } from "../components/Warning";

export function Header(props) {
  const { alert, warning } = props;
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.header_title}>Morning, David</Text>
        <Text style={styles.header_sub_title}>
          The little guy seems to be doing just fine.
        </Text>
      </View>
      <View>
        {alert && <Alert />}
        {warning && <Warning />}
      </View>
    </View>
  );
}
