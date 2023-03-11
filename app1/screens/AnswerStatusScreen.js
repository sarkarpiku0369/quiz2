import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles from '../styles'
import { Avatar, Button, ButtonGroup } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { StoreContext } from '../App';


const AnswerStatusScreen = ({route, navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")
    const { state, setState } = React.useContext(StoreContext)
    const [ showNextScreen, setShowNextScreen ] = React.useState(false)
    const {level, remainingAttempt, nextScreenName, answerCorrect} = route.params


    React.useEffect(() => {
        if(remainingAttempt == 0 ) {
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault()
            })
        }
    }, [remainingAttempt])

    React.useEffect(() => {
        if(level == 1) {
            setShowNextScreen(remainingAttempt == 0 && (state.levelOneCorrectAnswerButtons.length >= state.levelOneMinimumCorrectAnswerRequire))
        }
        else if(level == 2) {
            setShowNextScreen(remainingAttempt == 0 && (state.levelTwoCorrectAnswerButtons.length >= state.levelTwoMinimumCorrectAnswerRequire))
        }
        else if(level == 3) {
            setShowNextScreen(remainingAttempt == 0 && (state.levelThreeCorrectAnswerButtons.length >= state.levelThreeMinimumCorrectAnswerRequire))
        }
        else if(level == 4) {
            setShowNextScreen(remainingAttempt == 0 && (state.levelFourCorrectAnswerButtons.length >= state.levelFourMinimumCorrectAnswerRequire))
        }
        else {
            setShowNextScreen(remainingAttempt == 0 && (state.levelFiveCorrectAnswerButtons.length >= state.levelFiveMinimumCorrectAnswerRequire))
        }
    }, [])

    const back = () => {
        if(remainingAttempt > 0 ) {
            if(level == 1) {
                navigation.navigate("LevelOneQuestionScreen")
            }
            else if(level == 2) {
                navigation.navigate("LevelTwoQuestionScreen")
            }
            else if(level == 3) {
                navigation.navigate("LevelThreeQuestionScreen")
            }
            else if(level == 4) {
                navigation.navigate("LevelFourQuestionScreen")
            }
            else {
                navigation.navigate("LevelFiveQuestionScreen")
            }
        }
    }

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
            <View style={globalStyles.container}>
                {/* <ScrollView> */}
                    <View style={globalStyles.innerContainer}>
                        <View style={globalStyles.topView}>
                            <BackButton />
                            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                                <Text style={globalStyles.heading}>Level {level}</Text>
                            </View>
                        </View>
        
                        <View style={globalStyles.bottomView}>
                            <View style={{flexDirection: "column", alignItems: "center"}}>
                                <Text style={globalStyles.description}>Answer</Text>
                            </View>
                            {answerCorrect ? (
                                <View style={{flexDirection: "column", alignItems: "center", paddingTop: 20}}>
                                    <AntDesign name="checkcircleo" size={80} color={primaryColor} />
                                    <Text style={{fontSize: 30, fontWeight: "bold", paddingTop: 10, color: primaryColor}}>Correct</Text>
                                    {remainingAttempt > 0 && (
                                        <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                            <Ionicons name="ios-arrow-back-outline" size={15} color="grey" />
                                            <Text style={{color: "grey", fontSize: 15, marginLeft: 10}}>Back</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ) : (
                                <View style={{flexDirection: "column", alignItems: "center", paddingTop: 20}}>
                                    <Entypo name="cross" size={80} color="red" />
                                    <Text style={{fontSize: 30, fontWeight: "bold", paddingTop: 10, color: "red"}}>Wrong</Text>
                                    {remainingAttempt > 0 && (
                                        <TouchableOpacity onPress={() => back()} activeOpacity={1} style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10}}>
                                            <Ionicons name="ios-reload" size={15} color="grey" />
                                            <Text style={{color: "grey", fontSize: 15, marginLeft: 10}}>Try again</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            )}

                            {remainingAttempt <= 0 && (
                                <View style={{flexDirection: "column"}}>
                                    <Button 
                                        type="outline"
                                        color={primaryColor}
                                        onPress={() => navigation.navigate("StatusTab")}
                                        title="Check Status"
                                        titleStyle={{color: primaryColor}}
                                        buttonStyle={styles.statusButtonStyle}
                                        containerStyle={{marginVertical: 10}}
                                    />
                                    {level != 5 && showNextScreen && (
                                        <Button 
                                            onPress={() => navigation.navigate(nextScreenName)}
                                            title="Go To Next Step"
                                            buttonStyle={styles.nextStepButtonStyle}
                                            containerStyle={{marginVertical: 10}}
                                        />
                                    )}

                                    {level == 5 && showNextScreen && (
                                        <Button 
                                            onPress={() => navigation.navigate("PrizeTab")}
                                            title="Select Your Prize"
                                            buttonStyle={styles.nextStepButtonStyle}
                                            containerStyle={{marginVertical: 10}}
                                        />
                                    )}
                                </View>
                            )}
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
        height: 80, 
        width: 80, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: "#686565"
     },
     buttonHoverStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 80, 
        width: 80, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 40, 
        fontWeight: "400"
     },
     statusButtonStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 60, 
        width: "100%", 
        padding: 10, 
        borderRadius: 100, 
        borderColor: primaryColor,
        borderWidth: 2
     },
     nextStepButtonStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 60, 
        width: "100%", 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
})

export default AnswerStatusScreen
