import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import { Home } from "./screens/Home";

const Navigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: { swipeEnabled: true, gesturesEnabled: true }
  }
);

const App = createAppContainer(Navigator);

console.disableYellowBox = true;

export default App;
