import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Button } from '@rneui/base';
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles, { buttonColor } from '../styles'
import { Feather } from '@expo/vector-icons';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { StoreContext } from '../App';

const WinPrize = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState(null)
    const {state, setState} = React.useContext(StoreContext)

    React.useEffect(() => {
        if(selectedButton) {
            setState(state => ({...state, prizeSelected: true}))
            navigation.navigate("WinSuccess")
        }
    }, [selectedButton])

  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
    <View style={globalStyles.container}>
        {/* <ScrollView> */}
            <View style={globalStyles.innerContainer}>
                <View style={globalStyles.topView}>
                    <BackButton />

                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <Text style={globalStyles.heading}>Win your prize</Text>
                    </View>
                </View>
 
                <View style={globalStyles.bottomView}>
                <View style={{alignItems:"center"}}>
                        <Text style={{color:"#2DA63D",fontSize:19,fontWeight:"700", textAlign:'center'}}>Win your prize by Selecting </Text>
                    </View>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.statustext}>{state.prizeSelected ? "You Have Selected Your Prize" : "1 Box"}</Text>
                    </View>
                    

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20,top:40}}>
                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(1)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(2)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(3)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(4)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(5)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(6)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(7)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(8)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(9)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10,top:40}}>
                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(10)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(11)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>

                        <Button disabled={state.prizeSelected} buttonStyle={styles.buttonStyle}
disabledStyle={{
    backgroundColor: state.levelOneCorrectAnswerButtons.includes(1) ? primaryColor : "red",
}} onPress={() => setSelectedButton(12)}>
                            {state.prizeSelected ? (
                                <Feather name="lock" size={24} color="white" />
                            ) : (
                                <Feather name="gift" size={24} style={styles.buttonTextStyle} />
                            )}
                        </Button>
                    </View>


                </View>
            </View>
        {/* </ScrollView> */}

    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
     buttonStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 60, 
        width: 60, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: "#686565"
     },
     buttonHoverStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 50, 
        width: 50, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: buttonColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 30, 
        fontWeight: "400"
     }
})

export default WinPrize
