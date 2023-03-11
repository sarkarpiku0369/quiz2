import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
import MyStatus from '../../screens/MyStatus';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import WinStack from '../stacks/WinStack';
import ProfileStack from '../stacks/ProfileStack';
import { StoreContext } from '../../App';
import AppPrize from '../../screens/AppPrize';
import WinPrize from '../../screens/WinPrize';

const AppTab = () => {
    const Tab = createBottomTabNavigator()
    
    const { state, setState } = React.useContext(StoreContext)
    
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
            component={AppPrize}
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