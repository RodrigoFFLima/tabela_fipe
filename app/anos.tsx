import FipeScreen from "@/components/FipeScreen";
import { Anos } from "@/models";
import { fetcher } from "@/services/fetcher";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import useSWR from "swr";

export default function AnosScreen() {
  const { codigoMarca, codigoModelo } = useLocalSearchParams();

  const goNext = (codigoMarca: string) => {};

  const { data, error, isLoading, mutate } = useSWR<{
    anos: Anos[];
  }>(`/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`, fetcher);

  if (error) {
    return <Text>Erro na request, tente novamente</Text>;
  }

  return (
    <FipeScreen
      data={data?.anos}
      isLoading={isLoading}
      update={mutate}
      goNext={goNext}
    />
  );
}
