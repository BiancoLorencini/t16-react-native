import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MeuComponente from "./src/components/MeuComponente";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.meuEstilo}>Hello World!2</Text>
      <Text style={{ color: "blue", fontSize: 35 }}>Hello World!1</Text>
      <MeuComponente nome="Bianco" />
      <MeuComponente nome="Cassio" />
      <MeuComponente nome="Maria" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "red", //Não funciona - Não tem Herança
  },
  meuEstilo: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
