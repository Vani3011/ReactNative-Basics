import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { default as Home } from './screens/foodApp';
import { Dashboard, DrawerNav } from './screens/foodApp/dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App





