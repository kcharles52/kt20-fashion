import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LOGIN, REGISTER} from '../constants/routeNames';
import Register from '../screens/Register';
import Login from '../screens/Login';

const AuthStack = createDrawerNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
