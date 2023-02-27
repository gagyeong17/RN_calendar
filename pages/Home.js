import { StyleSheet, View, Text } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Text>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
