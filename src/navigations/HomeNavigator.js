import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, LOGOUT} from '../constants/routeNames';
import Home from '../screens/Home';
import Logout from '../screens/Logout';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={LOGOUT} component={Logout} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
