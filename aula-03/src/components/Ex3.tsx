import { View, StyleSheet } from "react-native";

const Ex3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.quad1} />
      <View style={styles.quad2} />
      <View style={styles.quad3} />
    </View>
  );
};

export default Ex3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  quad1: {
    width: 130,
    height: 130,
    backgroundColor: "aquamarine",
  },
  quad2: {
    width: 130,
    height: 130,
    backgroundColor: "steelblue",
  },
  quad3: {
    width: 130,
    height: 130,
    backgroundColor: "purple",
  },
});
