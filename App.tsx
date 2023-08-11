import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/container/home';
import dashboard from './src/container/dashboard';
import AddUserScreen from './src/container/adduser';
//import ChatScreen from './src/container/chatscreen';
import ReduxProvider from './src/redux/provider';
import typescreen from './src/container/typescreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="home">
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="adduser" component={AddUserScreen} />
          <Stack.Screen name="dashboard" component={dashboard} />
          <Stack.Screen name="typeChat" component={typescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
