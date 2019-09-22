import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

// Styles
import styles from "../styles/global";

export function SensorGraph(props) {
  return (
    <View style={styles.graph_container}>
      <VictoryChart>
        <VictoryLine
          style={{
            data: { stroke: "#9429FF" },
            parent: { border: "1px solid #ccc" }
          }}
          data={props.data.map(datum => ({
            x: new Date(datum.dateTime),
            y: datum.heartbeat
          }))}
        />
      </VictoryChart>
    </View>
  );
}
