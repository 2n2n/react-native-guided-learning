import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#E6F4FE" }}>
      <Slot />
    </View>
  );
}
