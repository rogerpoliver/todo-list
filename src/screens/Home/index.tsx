import { View, FlatList } from "react-native";
import { Task } from "../../components/Task";
import { Header } from "../../components/Header";
import { Counter } from "../../components/Counter";
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
    <View className="flex-1 bg-[#F5F5F4] items-center">
      <Header />
      <InputContainer />
      <Counter />
      <FlatList
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
