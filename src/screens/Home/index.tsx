import { useState } from "react";
import { View, FlatList } from "react-native";
import { Task } from "../../components/Task";
import { Header } from "../../components/Header";
import { Counter } from "../../components/Counter";
import { EmptyList } from "../../components/EmptyList";
import { InputContainer } from "../../components/InputContainer";

interface todoTask {
  name: string;
  status: boolean;
}

export default function Home() {
  const [taskList, setTaskList] = useState<todoTask[]>([]);

  const addTask = (task: todoTask) => {
    if (taskList.includes(task)) {
      return alert("Task already exist");
    }
    setTaskList((prevState) => [...prevState, task]);
  };

  const removeTask = (taskToBeDeleted: todoTask) => {
    setTaskList((prevState) =>
      prevState.filter((task) => task !== taskToBeDeleted)
    );
  };

  return (
    <View className="flex-1 bg-[#F5F5F4] items-center">
      <Header />
      <InputContainer onAdd={addTask} />
      <Counter />
      <FlatList
        // data={[]}
        data={taskList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task key={item.name} task={item} onRemove={removeTask} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
