import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  header: {
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 100,
    marginTop: 50,
    justifyContent: "space-between"
  },

  header_title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#424242",
    marginBottom: 8
  },
  header_sub_title: {
    fontSize: 25,
    fontWeight: "400",
    color: "#7E7E7E"
  },
  monitor_card_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 60
  },
  card: {
    height: 300,
    width: 400,
    backgroundColor: "#fff",
    borderColor: "rgba(0,0,0, .05)",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 4,
    shadowColor: "#9429FF"
  },
  card_container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  card_headline: {
    fontWeight: "400",
    fontSize: 19,
    color: "#424242"
  },
  card_action_item: {
    fontSize: 150,
    fontWeight: "600",
    color: "#424242"
  },
  card_action_type: {
    fontSize: 20,
    fontWeight: "500",
    color: "#424242"
  },
  card_icon_container: {
    width: "100%",
    paddingHorizontal: 20,
    bottom: 20
  },
  card_icon: {
    height: 20,
    resizeMode: "contain"
  },
  alert: {},
  alert_text: {},
  warning: {},
  warning_text: {},
  graph_container: {
    paddingHorizontal: 20,
    overflow: "hidden"
  }
});
