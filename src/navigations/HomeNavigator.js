import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {HOME} from '../constants/routeNames';

// to be moved to separate files
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
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

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
