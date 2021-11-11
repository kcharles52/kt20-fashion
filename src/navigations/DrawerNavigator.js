import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator from './HomeNavigator';

const Drawer = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
