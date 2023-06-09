import { View, Text } from "react-native";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";

export default function Home() {
  return (
    <View className="flex-1 bg-slate-300">
      <Header />
      <InputContainer />
      <View className="mt-16">
        <Text>Hello World</Text>
      </View>
    </View>
  );
}
