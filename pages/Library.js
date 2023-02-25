import { StyleSheet, View, Text } from "react-native";

export default function Library({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Text>Library</Text>
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
