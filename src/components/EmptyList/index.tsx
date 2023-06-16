import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export function EmptyList() {
  return (
    <View className="flex-column items-center justify-center">
      <View className="border my-[4%] mb-[20%] border-black w-[100%]" />
      <Icon name="inbox" size={100} color="black" />
      <Text className="font-bold text-xl">
        You don't have any tasks lined up yet
      </Text>
      <Text className="font-light text-lg">
        Create tasks and organize your to-do items
      </Text>
    </View>
  );
}
