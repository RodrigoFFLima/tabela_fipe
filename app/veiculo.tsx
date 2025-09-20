import { Veiculo } from "@/models";
import { fetcher } from "@/services/fetcher";
import { styles } from "@/styles";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import useSWR from "swr";

export default function VeiculoScreen() {
  const { codigoModelo, codigoMarca, codigoAno } = useLocalSearchParams();

  const { data, error } = useSWR<Veiculo>(
    `/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${codigoAno}`,
    fetcher
  );

  if (error) {
    return <Text>Error na request, tente novamente</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item_text}>Marca: {data?.Marca}</Text>
      <Text style={styles.item_text}>Modelo: {data?.Modelo}</Text>
      <Text style={styles.item_text}>Ano Modelo: {data?.AnoModelo}</Text>
      <Text style={styles.item_text}>Valor: {data?.Valor}</Text>
    </View>
  );
}
