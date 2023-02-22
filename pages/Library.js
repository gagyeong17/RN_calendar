import { View, Text, Button } from "react-native";

export default function Library({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Mypage"
        onPress={() => navigation.navigate("Mypage")}
      />
    </View>
  );
}
