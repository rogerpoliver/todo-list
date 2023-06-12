import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function InputContainer(props) {
  const [completed, setCompleted] = useState(false);
 
  const handleCheck = () => {
    setCompleted(!completed);
  };

  return (
    <View
      className={`bg-white flex flex-row h-20 w-12/12 p-2 my-2 mx-6 rounded-xl items-center justify-between ${
        completed && "opacity-50"
      }`}
    >
      <TouchableOpacity onPress={handleCheck}>
        {completed ? (
          <Icon name="check-square" size={25} color="black" />
        ) : (
          <Icon name="square" size={25} color="black" />
        )}
      </TouchableOpacity>
      <Text
        className={`w-10/12 font-mono text-lg text-center ${
          completed && "line-through"
        }`}
      >
        {props.text}
      </Text>

      <TouchableOpacity>
        <Icon name="trash" size={25} color="#6c6969" />
      </TouchableOpacity>
    </View>
  );
}
