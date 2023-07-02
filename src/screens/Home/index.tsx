import { useEffect, useState } from "react";
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
  const [todoCounter, setTodoCounter] = useState<number>(0);
  const [doneCounter, setDoneCounter] = useState<number>(0);

  const handleCounters = (taskList: todoTask[]) => {
    const done = taskList.filter((task) => task.status);
    setTodoCounter(taskList.length - done.length);
    setDoneCounter(done.length);
  };

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

  const updateTask = (taskToUpdate: todoTask, newStatus: boolean) => {
    const updatedTaskList = taskList.map((task) => {
      if (task === taskToUpdate) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  useEffect(() => {
    handleCounters(taskList);
  }, [taskList]);

  return (
    <View className="flex-1 bg-[#F5F5F4] items-center">
      <Header />
      <InputContainer onAdd={addTask} />
      <Counter todo={todoCounter} done={doneCounter} />
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            key={item.name}
            task={item}
            onRemove={removeTask}
            onUpdateTask={updateTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
