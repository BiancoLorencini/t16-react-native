import { StyleSheet, View } from "react-native";

export function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.item} />
      <View style={[styles.item, { backgroundColor: "skyblue", flex: 2 }]} />
      <View style={[styles.item, { backgroundColor: "steelblue", flex: 3 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "powderblue",
    flex: 1,
  },
});
