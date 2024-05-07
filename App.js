
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./Screens/Login";
import Register from "./Screens/Register";
import AdminHome from "./Screens/AdminHome";
import UserHome from "./Screens/UserHome";
import Welcome from "./Screens/Welcome";

const Stack = createStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true  }}>

    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="Home" component={UserHome} /> 
     
      
     
    
    </Stack.Navigator>
  </NavigationContainer>
    
    
  );
}



