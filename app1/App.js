import { StyleSheet } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppTab from './navigator/tabs/AppTab';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axiosInstance from './screens/utils';
import { useNavigation } from '@react-navigation/native';
import AuthDecide from './screens/AuthDecide';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash1 from './screens/Splash1';
import Splash2 from './screens/Splash2';
import Splash from './screens/Splash';


export const StoreContext = React.createContext(null)

export default function App() {

  const [state, setState] = React.useState({
    loggedIn: false,
    token: null,
    loading: false,
    
    gameStarted: false,
    gameEnd: false,
    prizeSelected: false,

    levelOneRemainingAttempt: 2,
    levelOneTouched: false,
    levelOnePassed: false,
    levelOnePressedButtons: [],
    levelOneCorrectAnswerButtons: [],
    levelOneWrongAnswerButtons: [],
    levelOneMinimumCorrectAnswerRequire: 2,

    levelTwoRemainingAttempt: 3,
    levelTwoTouched: false,
    levelTwoPassed: false,
    levelTwoPressedButtons: [],
    levelTwoCorrectAnswerButtons: [],
    levelTwoWrongAnswerButtons: [],
    levelTwoMinimumCorrectAnswerRequire: 2,

    levelThreeRemainingAttempt: 3,
    levelThreeTouched: false,
    levelThreePassed: false,
    levelThreePressedButtons: [],
    levelThreeCorrectAnswerButtons: [],
    levelThreeWrongAnswerButtons: [],
    levelThreeMinimumCorrectAnswerRequire: 2,

    levelFourRemainingAttempt: 3,
    levelFourTouched: false,
    levelFourPassed: false,
    levelFourPressedButtons: [],
    levelFourCorrectAnswerButtons: [],
    levelFourWrongAnswerButtons: [],
    levelFourMinimumCorrectAnswerRequire: 2,

    levelFiveRemainingAttempt: 3,
    levelFiveTouched: false,
    levelFivePassed: false,
    levelFivePressedButtons: [],
    levelFiveCorrectAnswerButtons: [],
    levelFiveWrongAnswerButtons: [],
    levelFiveMinimumCorrectAnswerRequire: 2

  })

  // AsyncStorage.removeItem("token")

  return (
    <>
    <StoreContext.Provider value={{state, setState}}>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <Splash /> */}
          {/* <Splash1 /> */}
          {/* <Splash2 /> */}
         <AuthDecide />
        </NavigationContainer>
      </SafeAreaProvider>
    </StoreContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  top :{
    flex: 0.5,
    backgroundColor: "red"
  },
  buttom :{
    flex: 0.2,
    backgroundColor: "green"
  }

});
