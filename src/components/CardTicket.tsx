import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = { title: string; onOpen: () => void };
export default function CardTicket({ title, onOpen }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={onOpen}
        accessibilityRole="button"
        accessibilityLabel="Open Ticket"
      >
        <Text>Open Ticket</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: 600 },
});
