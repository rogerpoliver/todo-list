import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function InputContainer() {
  return (
    <View className="absolute top-40 p-5 w-screen justify-center flex-row gap-1">
      <TextInput className="h-16 w-10/12 p-3 pb-5 bg-white rounded-lg text-base" />
      <TouchableOpacity className="h-16 w-16 bg-black rounded-lg justify-center items-center">
        <Text className="text-white text-5xl">+</Text>
      </TouchableOpacity>
    </View>
  );
}
