import { View, Text, StyleSheet } from "react-native";

export default function TaskDescription(props: { description: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
  },
});
