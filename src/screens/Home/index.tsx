import { View, FlatList } from "react-native";
import { Task } from "../../components/Task";
import { Header } from "../../components/Header";
import { EmptyList } from "../../components/EmptyList";
import { InputContainer } from "../../components/InputContainer";

const taskList = [
  "Lavar louça",
  "Arrumar a cama",
  "Estudar node.js",
  "Assistir aula da faculdade",
  "Fazer mercado",
  "Lavar louça",
  "Arrumar a cama",
  "Estudar node.js",
  "Assistir aula da faculdade",
  "Fazer mercado",
];

export default function Home() {
  return (
    <View className="flex-1 bg-[#F8F9F4]">
      <Header />
      <InputContainer />
      <FlatList
        className="mt-[20%]"
        data={[]}
        // data={taskList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Task key={item} text={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
