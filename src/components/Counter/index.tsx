import { View, Text } from "react-native";

const todo = 5;
const done = 10;

export function Counter() {
  return (
    <View
      className="flex flex-row w-screen justify-between
        mt-[15%] mb-[5%]  px-[5%]"
    >
      <View className="flex-row items-center">
        <Text className="font-bold text-lg">To-do </Text>
        <View className="bg-gray-300 rounded-full px-4">
          <Text className="font-bold text-lg">{todo}</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <Text className="font-bold text-lg">Done </Text>
        <View className="bg-gray-300 rounded-full px-4">
          <Text className="font-bold text-lg">{done}</Text>
        </View>
      </View>
    </View>
  );
}
