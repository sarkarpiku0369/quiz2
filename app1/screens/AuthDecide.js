import React from 'react'
import { StoreContext } from '../App'
import AppTab from '../navigator/tabs/AppTab'
import Main from './authentication/Main'
import { useNavigation } from '@react-navigation/native'
import MainStack from '../navigator/stacks/MainStack'
import { ActivityIndicator, View } from 'react-native'
import { primaryColor } from '../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from './utils'

const AuthDecide = () => {

      const {state, setState} = React.useContext(StoreContext)
      const [loading, setLoading] = React.useState(false)
      const navigation = useNavigation()

      React.useEffect(() => {
            (async () => {
                  try {
                        setLoading(true)
                        const token = await AsyncStorage.getItem("token")
                        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                        axiosInstance.get('/user/is-authenticate')
                        .then((response) => {
                              console.log("Successfully verified")
                              if(response.status == 200) {
                                          AsyncStorage.setItem("token", response.data.token)
                                          setState(state => ({...state, loggedIn: true, user: response.data.user, token: response.data.token}))
                                    }
                              }
                        )
                        .catch(err => {
                              setState(state => ({...state, loggedIn: false, token: null}))
                        })
                        .finally(() => {
                              setLoading(false)
                        })
                  }
                  catch(err){
                        setState(state => ({...state, loggedIn: false, token: null}))
                        setLoading(false)
                  }
            })()
      }, [])

      React.useEffect(() => {
            if(state.token) {
                  AsyncStorage.setItem("user", JSON.stringify(state.user))
                  AsyncStorage.setItem("token", state.token)
                  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
                  setState(state => ({...state, loggedIn: true}))
            }
      }, [state.token])


  return (
      loading == true ? (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                  <ActivityIndicator color={primaryColor} size={'large'} />
            </View>
      ) : (
            state.loggedIn == true ? <AppTab /> : <MainStack />
      ) 
  )
}

export default AuthDecide
