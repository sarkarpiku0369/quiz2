import { AsyncStorage, StyleSheet } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppTab from './navigator/tabs/AppTab';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axiosInstance from './screens/utils';
import { useNavigation } from '@react-navigation/native';
import AuthDecide from './screens/AuthDecide';


export const StoreContext = React.createContext(null)




export default function App() {

  const [state, setState] = React.useState({
    loggedIn: false,
    token: null,
    loading: false,
  })

  const [loading, setLoading] = React.useState(false)

  // React.useEffect(() => {
  //   try {
  //     setLoading(true)
  //     const user = AsyncStorage.getItem("user")
  //     const token = AsyncStorage.getItem("token")
  //     axiosInstance.post('/user/verify', {token})
  //     .then((response) => {
  //       if(response.status == 200) {
  //         AsyncStorage.setItem("token", response.data.token)
  //         setState(state => ({...state, loggedIn: true, token:response.data.token}))
  //       }
  //     })
  //     .catch(console.log)
  //     .finally(() =>{
  //       setLoading(false)
  //     })
  //   }
  //   catch(err){
  //     navigation.navigate("Login")
  //   }
  // }, [])

  // React.useEffect(() => {
  //       // AsyncStorage.removeItem("isTouch")
  //       if(state.token) {
  //         AsyncStorage.setItem("user", JSON.stringify(state.user))
  //         AsyncStorage.setItem("token", state.token)
  //         axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
  //       }
  // }, [state.token])


  return (
    <>
    <StoreContext.Provider value={{state, setState}}>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
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
