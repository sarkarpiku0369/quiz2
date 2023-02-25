import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDetails from '../../screens/GameDetails';
import LevelOneQuestion from '../../screens/LevelOneQuestion';
import LevelOneAnswer from '../../screens/LevelOneAnswer';
import AnswerCorrect from '../../screens/AnswerCorrect';
import AnswerWrong from '../../screens/AnswerWrong';
import MyStatus from '../../screens/MyStatus';
import WinPrize from '../../screens/WinPrize';
import Contact from '../../screens/Contact';
import WinSuccess from '../../screens/WinSuccess';
import ThankYou from '../../screens/ThankYou';
import Home from '../../screens/Home';
//user
import Main from '../../screens/authentication/Main';
import Login from '../../screens/authentication/Login';
import Registration from '../../screens/authentication/Registration';

import OTPVerification from '../../screens/authentication/OTPVerification';
import ResetPassword from '../../screens/authentication/ResetPassword';
import ResetVariffcation from '../../screens/authentication/ResetVerification';
import NewPassword from '../../screens/authentication/NewPassword';
const MainStack = () => {
  
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Login" component={Login} />   
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ResetVariffcation" component={ResetVariffcation} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    )
}

export default MainStack