import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/libs/test";
import CardTicket from "./src/components/CardTicket";

export default function App() {
  useEffect(() => {
    Test();
  }, []);
  return (
    <View style={styles.container}>
      <CardTicket
        title="Ticket 1"
        onOpen={() => {
          console.log("Ticket 1 opened");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
