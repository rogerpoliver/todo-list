import { View, Text } from "react-native";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";

export default function Home() {
  return (
    <View className="flex-1 bg-[#F8F9F4]">
      <Header />
      <InputContainer />
      <View className="mt-16">
        <Text>Hello World</Text>
      </View>
    </View>
  );
}