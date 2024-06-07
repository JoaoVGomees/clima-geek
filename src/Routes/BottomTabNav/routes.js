import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Pages/Home/home";
import Previsao from "../../Pages/Details/Previsao/previsao";
import Localizacao from "../../Pages/Details/Localizacao";
import Config from "../../Pages/Config/config";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const corFocada = '#22222B';
const corDesfocada = '#74747C';

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="                  "
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <Ionicons size={size} color={corFocada} name="home" />;
            }
            return <Ionicons size={size} color={corDesfocada} name="home-outline" />;
          },
        }}
      />

      <Tab.Screen
        name="                 "
        component={Previsao}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <Ionicons size={size} color={corFocada} name="menu" />;
            }
            return <Ionicons size={size} color={corDesfocada} name="menu-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="                "
        component={Config}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <Ionicons size={size} color={corFocada} name="settings" />;
            }
            return (
              <Ionicons size={size} color={corDesfocada} name="settings-outline" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}