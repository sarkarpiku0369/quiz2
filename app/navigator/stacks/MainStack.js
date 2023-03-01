import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDetails from '../../screens/GameDetails';
import LevelOneQuestion from '../../screens/LevelOneQuestion';
import LevelOneAnswer from '../../screens/LevelOneAnswer';
import AnswerCorrect from '../../screens/AnswerStatusScreen';
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
import Splash from '../../screens/Splash';
import Splash1 from '../../screens/Splash1';
import Splash2 from '../../screens/Splash2';
const MainStack = () => {
  
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#DCFFE0',
                },
                headerTintColor: 'black',
                headerTitleAlign: "center",
                headerTitleStyle: {
                },
            }}
        >
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="Splash1" component={Splash1} options={{headerShown: false}} />
            <Stack.Screen name="Splash2" component={Splash2} options={{headerShown: false}} />

            <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="Login" component={Login} />   
            <Stack.Screen name="OTPVerification" component={OTPVerification} options={{title: "OTP Verification"}}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ResetVariffcation" component={ResetVariffcation} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    )
}

export default MainStack