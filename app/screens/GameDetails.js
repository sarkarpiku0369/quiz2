import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import globalStyles from '../styles'
import { Avatar } from '@rneui/base';
import BackButton from '../components/BackButton';
import { StoreContext } from '../App';

const GameDetails = ({navigation}) => {

    const {state, setState} = React.useContext(StoreContext)

    const startGame = () => {
        setState(state => ({...state, 

            gameStarted: true,
            gameEnd: false,
            prizeSelected: false,
            
            levelOneRemainingAttempt: 2,
            levelOneTouched: false,
            levelOnePassed: false,
            levelOnePressedButtons: [],
            levelOneCorrectAnswerButtons: [],
            levelOneWrongAnswerButtons: [],

            levelTwoRemainingAttempt: 3,
            levelTwoTouched: false,
            levelTwoPassed: false,
            levelTwoPressedButtons: [],
            levelTwoCorrectAnswerButtons: [],
            levelTwoWrongAnswerButtons: [],

            levelThreeRemainingAttempt: 3,
            levelThreeTouched: false,
            levelThreePassed: false,
            levelThreePressedButtons: [],
            levelThreeCorrectAnswerButtons: [],
            levelThreeWrongAnswerButtons: [],

            levelFourRemainingAttempt: 3,
            levelFourTouched: false,
            levelFourPassed: false,
            levelFourPressedButtons: [],
            levelFourCorrectAnswerButtons: [],
            levelFourWrongAnswerButtons: [],

            levelFiveRemainingAttempt: 3,
            levelFiveTouched: false,
            levelFivePassed: false,
            levelFivePressedButtons: [],
            levelFiveCorrectAnswerButtons: [],
            levelFiveWrongAnswerButtons: [],
        }))
        navigation.navigate("LevelOneQuestionScreen")
    }

  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
    <View style={globalStyles.container}>
        {/* <ScrollView> */}
            <View style={globalStyles.innerContainer}>
                <View style={globalStyles.topView}>
                    <View style={[globalStyles.header]}>
                        <View style={{marginTop: 10}}>
                            <BackButton />
                        </View>
                        <Text style={globalStyles.headerText}>Game Details</Text>
                        <Text>{""}</Text>
                    </View>
                    <View>

                    </View>
                </View>
                <View style={globalStyles.bottomView}>
                    <Text style={{color: "black",fontSize:14,fontWeight:'bold'}}>Brief explanation about this quiz</Text>
                    
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                        <View style={{padding: 10, borderRadius: 100, backgroundColor: "#333333"}}>
                            <MaterialIcons name="text-snippet" size={30} color="white" />
                        </View>
                        <View style={{marginBottom: 20, marginLeft: 15}}>
                            <Text style={{fontSize: 16, fontWeight:'bold'}}>4 Question</Text>
                            <Text style={{fontSize: 14}}>Next Level  for a correct answer</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                    <View style={{padding: 10, borderRadius: 100, backgroundColor: "#333333"}}>
                            <Fontisto name="clock" size={30} color="white" />
                        </View>
                        <View style={{marginBottom: 20, marginLeft: 15}}>
                            <Text style={{fontSize: 16, fontWeight:'bold'}}>1 hour 15 min</Text>
                            <Text style={{fontSize: 14}}>Total duration of the quiz</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                    <View style={{padding: 10, borderRadius: 100, backgroundColor: "#333333"}}>
                            <Ionicons name="trophy-outline" size={30} color="white" />
                        </View>
                        <View style={{marginBottom: 20, marginLeft: 15}}>
                            <Text style={{fontSize: 16, fontWeight:'bold'}}>Win Prize</Text>
                            <Text style={{fontSize: 14}}>Complete level 5 win your prize</Text>
                        </View>
                    </View>


                <Text style={{color:"#333333",fontSize:14,fontWeight:'bold',marginTop:30}}>
                    Please read the text below carefully so you can{'\n'}understand it
                </Text>

                <View style={{flexDirection: "row" , marginTop:15}}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{color: "#333333"}}>Next Level awarded for a correct answer .</Text>
                </View>

                <View style={{flexDirection: "row",marginTop:15}}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{color: "#333333"}}>Select Number get your question . Answer your 
Question.</Text>
                </View>

                <View style={{flexDirection: "row",marginTop:15}}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{color: "#333333",fontWeight:"300"}}>Click submit if you are sure you want to
complete all the quizzes</Text>
                </View>
                <View>
                    
<Text style={{color: "#EB1C23",fontWeight:"500",marginTop:15,marginLeft:20}}>Are you ready now ? <Text style={{color: 'green'}} onPress={() => startGame()}>
Start
    </Text></Text>
</View>

                </View>
               
            </View>
        {/* </ScrollView> */}

    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
     
})

export default GameDetails
