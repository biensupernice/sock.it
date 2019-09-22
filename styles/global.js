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
    shadowColor: "#9429FF",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 4
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
  }
});
