import { StyleSheet, Button, Text } from "react-native";
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);
  let contador = 0;

  const incrementaContador = () => {
    setCount(count + 1);
    contador = contador + 1;
    //  contador + = 1
    //  contador++
    console.log("CONTADOR TESTE:", count);
  };
    const mudarTema = () => {
    console.log('MUDAR TEMA');
    }

  return (
    <>
      <Text> EU SOU O CONTADOR</Text>
      <Text style={styles.contador}>{count}</Text>
      <Button
        title="CLIQUE AQUI PARA INCREMENTAR"
        onPress={incrementaContador}
      ></Button>
      <Button
      title='Mudar Tema'
      onPress={mudarTema}/>
    </>
  );
}

export default Contador;

const styles = StyleSheet.create({
  contador: {
    fontSize: 150
  },
});
