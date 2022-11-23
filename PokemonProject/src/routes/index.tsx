import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import ImageComp from "../components/ImageComp";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Pokemon } from "../screens/Produto";
import { Home } from "../screens/Home";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: { token: string };
  Cartas: undefined;
  Carrinho: undefined;
}

export function Routes() {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
        initialRouteName="Tela Inicial"
      >
        <Stack.Screen
          options={{ headerShown: true }}
          name="Tela Inicial"
          component={MeuComponente}
        />
        
        <Stack.Screen name="Imagem" component={ImageComp} />
        <Stack.Screen name="Loja" component={Pokemon} />

      </Stack.Navigator> */}
      <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#aaa",
                tabBarInactiveBackgroundColor: "#000",
                tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 ,height:50}
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialCommunityIcons
                                resizeMode='contain'
                                name="home"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Cartas"
                component={Pokemon}
                options={{
                    tabBarIcon: ({ color }) => {
                      return (
                        <MaterialCommunityIcons
                          resizeMode='contain'
                          name="cards"
                        />
                      )
                    }
                }}
            />
        </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}
