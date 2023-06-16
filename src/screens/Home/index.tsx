import { View } from "react-native";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";
import Task from "../../components/Task";

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
      <View className="mt-16">
      {taskList.map((task, index) => (
          <Task key={index} text={task} />
        ))}
      </View>
    </View>
  );
}
