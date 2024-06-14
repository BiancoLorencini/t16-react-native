import { StyleSheet, View } from "react-native";

export function PropsFlex() {
  return (
    <View style={styles.container}>
      <View style={styles.quad} />
      <View style={[styles.quad, styles.quad2]} />
      <View style={[styles.quad, styles.quad3]} />
      <View style={styles.quad} />
      <View style={[styles.quad, styles.quad2]} />
      <View style={[styles.quad, styles.quad3]} />
      <View style={styles.quad} />
      <View style={[styles.quad, styles.quad2]} />
      <View style={[styles.quad, styles.quad3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "space-evenly",
    gap: 5,
  },
  quad: {
    height: 120,
    width: 120,
    backgroundColor: "darkorange",
  },
  quad2: {
    backgroundColor: "red",
  },
  quad3: {
    backgroundColor: "green",
  },
});
