import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';

import MyStatus from '../../screens/MyStatus';
import WinPrize from '../../screens/WinPrize';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
//login
//import Main from '../../screens/authentication/Main';
import MainStack from '../stacks/MainStack';
import Login from '../../screens/authentication/Login';
import Main from '../../screens/authentication/Main';
import WinStack from '../stacks/WinStack';
import ProfileStack from '../stacks/ProfileStack';

const AppTab = () => {
    const Tab = createBottomTabNavigator()
    
    
  return (
    <Tab.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
            tabBarActiveTintColor: "#0088E0",
            tabBarInactiveTintColor: "black",
            headerShown: false,
            tabBarHideOnKeyboard: true
        }}
    >
        <Tab.Screen 
            name="HomeTab" 
            component={HomeStack}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={20} color={color} />
                ),
            }}
        />
        <Tab.Screen 
            name="PrizeTab" 
            component={WinStack}
            options={{
                tabBarLabel: 'All Prize',
                tabBarIcon: ({ color, size }) => (
                    <SimpleLineIcons name="trophy" size={20} color={color} />
                ),
            }}
        />

        <Tab.Screen 
            name="StatusTab" 
            component={MyStatus}
            options={{
                tabBarLabel: 'My Status',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="list-status" size={20} color={color}/>
                ),
            }}
        />

        <Tab.Screen 
            name="ProfileTab" 
            component={ProfileStack}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <EvilIcons name="user" size={30} color={color} />
                ),
            }}
        />
    </Tab.Navigator>
  )
}

export default AppTab