import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles from '../styles'
import { Avatar, Button, ButtonGroup } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';

const LevelOneAnswer = ({navigation}) => {
    const [selectedButton, setSelectedButton] = React.useState("")

  return (
   <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
    <View style={globalStyles.container}>
        {/* <ScrollView> */}
            <View style={globalStyles.innerContainer}>
                <View style={globalStyles.topView}>
                    <BackButton />

                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <Text style={globalStyles.heading}>Level 1</Text>
                    </View>
                </View>
 
                <View style={globalStyles.bottomView}>
                    <View style={{flexDirection: "column", alignItems: "center"}}>
                        <Text style={globalStyles.description}>Go to the Next Level with 1</Text>
                        <Text style={globalStyles.description}>Question Answers</Text>
                    </View>

                    <View style={{flexDirection: "column", paddingHorizontal: "20%", paddingVertical: 20}}>
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                            buttonStyle={globalStyles.answerButton.buttonStyle}
                            title={"Dog"}
                            onPress={() => navigation.navigate("AnswerCorrectScreen")}
                        />
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                            buttonStyle={globalStyles.answerButton.buttonStyle}
                            title={"A clock"}
                            onPress={() => navigation.navigate("AnswerCorrectScreen")}
                        />
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                            buttonStyle={globalStyles.answerButton.buttonStyle}
                            title={"Women"}
                            onPress={() => navigation.navigate("AnswerWrongScreen")}
                        />
                        <Button 
                            containerStyle={globalStyles.answerButton.containerStyle}
                            buttonStyle={globalStyles.answerButton.buttonStyle}
                            title={"Father"}onPress={() => navigation.navigate("AnswerWrongScreen")}
                        />
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
     }
})

export default LevelOneAnswer
