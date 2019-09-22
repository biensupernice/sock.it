import React from "react";
import { ScrollView } from "react-native";
import socketconn from "socket.io-client";
import { Audio } from "expo-av";

// Components
import { Header } from "../components/Header";
import { SensorGraph } from "../components/graph";
import { MonitorCards } from "../components/MonitorCards";

import { config } from "../services/config";

let player = new Audio.Sound();

export function Home(props) {
  const pastDataRef = React.useRef([]);

  // Data
  const [heartbeat, setHeartbeat] = React.useState(0);
  const [alertHeartbeat, setAlertHeartbeat] = React.useState(false);

  const [oxygen, setOxygen] = React.useState(0);
  const [alertOxygen, setAlertOxygen] = React.useState(false);

  const [data, setData] = React.useState();

  // State
  const [connectingSocketIO, setConnectingSocketState] = React.useState(true);
  const [alert, setAlertState] = React.useState(true);

  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    connectSockets();
    loadAlarm();
  }, []);

  React.useEffect(() => {
    async function play() {
      if (!isPlaying) {
        if (alertHeartbeat || alertOxygen) {
          await player.playAsync();
        }
      }
    }

    play();

    return async () => {
      await player.stopAsync();
    };
  }, [alertHeartbeat, alertOxygen]);

  React.useEffect(() => {
    if (data) {
      pastDataRef.current = [data].concat(pastDataRef.current).slice(0, 50);
    }
  }, [data]);

  const connectSockets = async () => {
    const socket = socketconn(config.apiURL);
    socket.on("connected", () => setConnectingSocketIO(false));

    socket.on("sensors", ({ info }) => {
      const { heartbeat, oxygen, heartbeatDanger, oxygenDanger } = info;

      setHeartbeat(heartbeat);
      setOxygen(oxygen);

      setAlertHeartbeat(heartbeatDanger);
      setAlertOxygen(oxygenDanger);

      setData(info);
    });
  };

  const loadAlarm = async () => {
    await player.loadAsync(require("../assets/alarm.mp3"));
  };

  return (
    <ScrollView>
      <Header />
      <MonitorCards
        heartbeat={heartbeat}
        oxygen={oxygen}
        alertOxygen={alertOxygen}
        alertHeartbeat={alertHeartbeat}
      />
      {data && <SensorGraph data={pastDataRef.current} />}
    </ScrollView>
  );
}
