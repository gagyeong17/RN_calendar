import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Library from "./pages/Library";
import Mypage from "./pages/Mypage";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="Mypage" component={Mypage} />
    </BottomTab.Navigator>
  );
}
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      {/* initialRouteName="Home" */}
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Mypage" component={Mypage} />
      </Stack.Navigator> */}
      <RootNavigator />
    </NavigationContainer>
  );
}
