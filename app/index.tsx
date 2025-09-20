import FipeScreen from "@/components/FipeScreen";
import { Marca } from "@/models";
import { fetcher } from "@/services/fetcher";
import { router } from "expo-router";
import { Text } from "react-native";
import useSWR from "swr";

export default function Index() {
  const goNext = (codigoMarca: string) => {
    router.push({ pathname: "/modelos", params: { codigoMarca: codigoMarca } });
  };

  const { data, error, isLoading, mutate } = useSWR<Marca[]>(
    "/carros/marcas",
    fetcher,
    { dedupingInterval: 86_000_000 } // 1 day
  );

  if (error) {
    return <Text>Erro na request, tente novamente</Text>;
  }

  return (
    <FipeScreen
      data={data}
      isLoading={isLoading}
      update={mutate}
      goNext={goNext}
    />
  );
}
