import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export function InputContainer() {
  return (
    <View
      className="absolute inset-0 w-screen flex-row justify-center items-center
        top-[21.5%] md:top-[17.5%]
        gap-x-[1%] md:gap-x-[1%]"
    >
      <TextInput
        placeholder="Add a new task"
        className=" bg-white rounded-lg text-base
          border border-solid border-[#E6E6E6]
          h-[100%] md:h-[100%]
          w-[75%] md:w-[85%] 
          p-[5%] md:p-[2%]"
      />
      <TouchableOpacity
        className="bg-black rounded-lg justify-center items-center
          h-[100%] md:h-[100%]
          w-[18%] md:w-[8%]"
      >
        <Icon name="plus-circle" size={38} color="white" />
      </TouchableOpacity>
    </View>
  );
}
