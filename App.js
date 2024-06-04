import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/Routes/BottomTabNav/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
