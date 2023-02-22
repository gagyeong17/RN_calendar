import { View, Text, Button } from "react-native";

export default function Calendar({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Library"
        onPress={() => navigation.navigate("Library")}
      />
    </View>
  );
}
