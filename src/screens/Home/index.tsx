import { View, Text } from "react-native";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View className="flex-1 bg-blend-color-burn">
      <Header />
      <Text>Hello World</Text>
    </View>
  );
}
