import { View, Text } from "react-native";

interface counterProps {
  todo: number;
  done: number;
}

export function Counter({ todo, done }: counterProps) {
  return (
    <View
      className="flex flex-row w-screen justify-between
        mt-[15%] mb-[5%] px-[5%]"
    >
      <View className="flex-row items-center">
        <Text className="font-bold text-lg mr-[5%]">To-do</Text>
        <View className="bg-gray-300 rounded-full px-4">
          <Text className="font-bold text-lg">{todo}</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <Text className="font-bold text-lg mr-[5%]">Done</Text>
        <View className="bg-gray-300 rounded-full px-4">
          <Text className="font-bold text-lg">{done}</Text>
        </View>
      </View>
    </View>
  );
}
