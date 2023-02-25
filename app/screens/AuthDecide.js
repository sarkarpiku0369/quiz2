import React from 'react'
import { StoreContext } from '../App'
import AppTab from '../navigator/tabs/AppTab'
import Main from './authentication/Main'

const AuthDecide = () => {

    const {state, setState} = React.useContext(StoreContext)
    const [loggedIn, setLoggedIn] = React.useState(state.loggedIn)

   React.useEffect(() => {
    if(!state.loggedIn) {
        
    }
    else {}
   }, [])

  return (

        <AppTab />
    
  
  )
}

export default AuthDecide
