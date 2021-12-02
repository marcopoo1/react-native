import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import Update from '../screens/Battery';
import Configuration from '../screens/Configuration';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const AppStack= () => {
  return (
    <Tab.Navigator>  
    <Tab.Screen name='battery' component={Update} />
    <Tab.Screen name='Configuration' component={Configuration} />
    <Tab.Screen name='Home' component={HomeScreen} />
    </Tab.Navigator>
  );
};

