import { View, Text, Button } from "react-native";

export default function Mypage({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Mypage"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
