import { View, Text } from "react-native";

export function Header() {
  return (
    <View className="h-[25%] md:h-[20%] w-full bg-[#819D73] flex justify-center">
      <Text className="text-black text-center text-4xl md:text-7xl font-black">
        To Do List
      </Text>
    </View>
  );
}
