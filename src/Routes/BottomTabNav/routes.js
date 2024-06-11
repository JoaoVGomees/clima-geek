import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Pages/Home/home";
import Previsao from "../../Pages/Details/Previsao/previsao";
import Localizacao from "../../Pages/Details/Localizacao";
import Config from "../../Pages/Config";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from 'styled-components/native';

import Avaliacao from '../../Pages/Api';

const Tab = createBottomTabNavigator();

export default function Routes() {

  const theme = useTheme();
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme.colors.tabBarActiveTintColor,
      tabBarInactiveTintColor: theme.colors.tabBarInactiveTintColor,
      tabBarStyle: {
        backgroundColor: theme.colors.tabBarBackground,
      },
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return <Ionicons 
              size={size} 
              color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor} 
              name={focused ? "home" : "home-outline"} />;
          },
        }}
      />

      <Tab.Screen
        name="Previsao"
        component={Localizacao}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return <Ionicons 
              size={size} 
              color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor} 
              name={focused ? "menu" : "menu-outline"} />;
          },
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Config}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return <Ionicons 
              size={size} 
              color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor} 
              name={focused ? "settings" : "settings-outline"} />;
          },
        }}
      />
      <Tab.Screen
        name="Avaliação"
        component={Avaliacao}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            return <Ionicons 
              size={size} 
              color={focused ? theme.colors.tabBarActiveTintColor : theme.colors.tabBarInactiveTintColor} 
              name={focused ? "telescope" : "telescope-outline"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}