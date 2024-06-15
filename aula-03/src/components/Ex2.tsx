import { StyleSheet, View } from "react-native";

const Ex2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.element} />
    </View>
  );
};

export default Ex2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  element: {
    height: "14%",
    width: "100%",
    backgroundColor: "aquamarine",
  },
});
