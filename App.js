import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#3f2f25" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name={"MealsCategories"}
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name={"list"} color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name={"FavoriteScreen"}
          component={FavoriteScreen}
          options={{
            title: "Favorite Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name={"star"} color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style={"light"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name={"MyDrawer"}
            component={MyDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"MealsOverview"}
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name={"MealDetails"} component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
