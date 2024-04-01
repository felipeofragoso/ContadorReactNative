import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import minhaImage from "./assets/pictures/calling.png";
import Contador from "./src/pages/Contador";

export default function App() {
  function minhaFunc() {
    console.log("BOTAO PRESSIONADO!!!");
  }
  // const myFunc = () => {}

  return (
    <View style={styles.container}>
      {/*COMENTÁRIO*/}
      {/* <Image style={styles.imagem} source={minhaImage} />
      <Button title="clique aqui" onPress={minhaFunc} /> */}
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imagem: {
    width: 400,
    height: 400,
  },
});
