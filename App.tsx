import { View, StatusBar } from "react-native";

import "./global.css";
import { Home } from "./src/screens/";

export default function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Home />
    </View>
  );
}
