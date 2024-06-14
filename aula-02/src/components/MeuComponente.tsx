import { Text, View } from "react-native";

// const props = {
//     nome: "meu nome",
//     outraProps: "outra prop"
// }

// Destructuring - Desestruturação
// const { nome, outraProps } = props

export default function MeuComponente({ nome }: any) {
  return (
    <>
      <Text>MEU COMPONENTE</Text>
      <Text>Olá {nome}</Text>
    </>
  );
}

// export default MeuComponente
