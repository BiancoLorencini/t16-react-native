import { StyleSheet, View } from "react-native";

const Ex1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.element} />
    </View>
  );
};

export default Ex1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  element: {
    height: "100%",
    width: "33%",
    backgroundColor: "aquamarine",
  },
});
