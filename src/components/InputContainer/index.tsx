import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface todoTask {
  name: string;
  status: boolean;
}

interface addTaskProp {
  onAdd: (task: todoTask) => void;
}

export function InputContainer({ onAdd }: addTaskProp) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue !== "") {
      const newTask = {
        name: inputValue,
        status: false,
      };

      onAdd(newTask);
      setInputValue("");
    }
  };

  return (
    <View
      className="absolute inset-0 w-screen flex-row justify-center items-center
        top-[21.5%] md:top-[17.5%]
        gap-x-[1%] md:gap-x-[1%]"
    >
      <TextInput
        placeholder="Add a new task"
        value={inputValue}
        onChangeText={setInputValue}
        className="bg-white rounded-lg text-base 
          border border-solid border-[#E6E6E6]
          h-[120%] md:h-[120%]
          w-[75%] md:w-[85%] 
          p-[5%] md:p-[2%]
          flex items-center"
      />
      <TouchableOpacity
        onPress={handleAddTask}
        className="bg-black rounded-lg justify-center items-center
          h-[120%] md:h-[120%]
          w-[18%] md:w-[8%]"
      >
        <Icon name="plus-circle" size={38} color="white" />
      </TouchableOpacity>
    </View>
  );
}
