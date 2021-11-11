import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

// to be moved to separate files
const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const AuthStack = createDrawerNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
