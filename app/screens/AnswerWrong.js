import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { Entypo } from '@expo/vector-icons'; 
import globalStyles from '../styles'
import { Avatar, Button, ButtonGroup } from '@rneui/base';
import { primaryColor } from '../styles';
import BackButton from '../components/BackButton';


const AnswerWrong = () => {
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
                        <Text style={globalStyles.description}>Answer</Text>
                    </View>

                    <View style={{flexDirection: "column", alignItems: "center", paddingTop: 20}}>
                        <Entypo name="cross" size={80} color="red" />
                        <Text style={{fontSize: 30, fontWeight: "bold", paddingTop: 10, color: "red"}}>Wrong</Text>
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

export default AnswerWrong
