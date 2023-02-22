import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
    </View>
  );
}
