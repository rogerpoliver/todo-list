import { View, Text } from "react-native";

export default function Header() {
  return (
    <View className="h-1/4 w-full bg-green-400 flex justify-center">
      <Text className="text-black text-center text-4xl font-black">
        To Do List
      </Text>
    </View>
  );
}
