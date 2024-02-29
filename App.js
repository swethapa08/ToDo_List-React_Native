
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getstarted from "./src/getstarted"
import { NavigationContainer } from '@react-navigation/native';
import todo from "./src/todo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

export default function App() {
  const Stack = createNativeStackNavigator();
    return(
      <NavigationContainer>
          <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={getstarted} />
          <Stack.Screen name="ToDoPage" component={todo} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}


