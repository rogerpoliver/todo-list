import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface todoTask {
  name: string;
  status: boolean;
}

interface TaskProps {
  task: todoTask;
  onRemove: (task: todoTask) => void;
}

export function Task({ task, onRemove }: TaskProps) {
  const [completed, setCompleted] = useState(false);

  const handleCheck = () => {
    setCompleted(!completed);
  };

  const handleDelete = () => {
    onRemove(task);
  };

  return (
    <View
      className={`bg-white flex flex-row h-20 w-12/12 p-2 my-2 mx-2 rounded-xl
       items-center justify-between ${completed && "opacity-50"}`}
    >
      <TouchableOpacity onPress={handleCheck}>
        {completed ? (
          <Icon name="check-square" size={25} color="black" />
        ) : (
          <Icon name="square" size={25} color="black" />
        )}
      </TouchableOpacity>
      <Text
        className={`w-10/12 text-lg text-center ${completed && "line-through"}`}
      >
        {task.name}
      </Text>

      <TouchableOpacity onPress={handleDelete}>
        <Icon name="trash" size={25} color="#6c6969" />
      </TouchableOpacity>
    </View>
  );
}
