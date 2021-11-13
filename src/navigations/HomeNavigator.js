import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, LOGIN} from '../constants/routeNames';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
