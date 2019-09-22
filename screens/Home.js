import React from "react";
import { ScrollView } from "react-native";

// Components
import { MonitorCards } from "../components/MonitorCards";
// var pusher = new Pusher('fdff051218d3cb038361', {
//   cluster: 'us2',
//   forceTLS: true
// });
// var channel = pusher.subscribe('sockit');
// channel.bind('sensors', function(data) {
//   console.log("gotInfo", JSON.stringify(data));
// });

export function Home(props) {
  return (
    <ScrollView centerContent>
      <MonitorCards />
    </ScrollView>
  );
}
