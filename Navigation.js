import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//pages
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Library from "./pages/Library";
import Mypage from "./pages/Mypage";
//icons
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="calendar" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: () => (
            <Ionicons name="library-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
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
      <RootNavigator />
    </NavigationContainer>
  );
}
