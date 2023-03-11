//rafce
import { Button } from '@rneui/base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import BackButton from '../../components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import { primaryColor } from '../../styles';
import axiosInstance from '../utils';


const NewPassword = ({navigation}) => {
    const [submitting, setSubmitting] = React.useState(false)
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    const handleSubmit = () => {
        setSubmitting(false)

        if(password.length < 8) {
            alert("Password must be at least 8 characters long")
        }
        else if(password != confirmPassword) {
            alert("Password does not match")
        }
        else {}

        axiosInstance.get("/user/change-password", {password})
        .then(response => {
            if(response.status == 200) {
                navigation.navigate('PasswordResetVerification')
            }
        })
        .catch(err => {
            alert("Something Went Wrong!")
        })
        
    }

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: "always"}}>
            <ScrollView 
                contentContainerStyle={{flex: 1}} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flex: 1, backgroundColor:"#DCFFE0", padding: 14}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <BackButton color="black" />
                        <Text style={{justifyContent:"center", fontSize: 18, fontWeight: "bold"}}>New Password</Text>
                        <Text>{" "}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: "center", marginVertical: 10, paddingHorizontal: 15}}>
                        <Text style={{color:"#858494", fontSize: 16, fontWeight: "500"}}>Your new password must be different from previous used passwords</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: "column", paddingHorizontal: 15, marginBottom: 20}}>
                            <Text>Password</Text>
                            <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                                <AntDesign name="lock" size={24} color={primaryColor} />
                                <TextInput style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Your Password"
                                    placeholderTextColor = "#858494"
                                    autoCapitalize = "none"
                                    onChangeText={(text) => setPassword(text)}
                                />
                            </TouchableOpacity>
                            <Text style={{color:"#858494"}}>Must be at least 8 characters.</Text>
                        </View>

                        <View style={{flexDirection: "column", paddingHorizontal: 15, marginBottom: 20}}>
                            <Text>Confirm Password</Text>
                            <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                                <AntDesign name="lock" size={24} color={primaryColor} />
                                <TextInput style = {styles.input}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "Confirm Password"
                                    placeholderTextColor = "#858494"
                                    autoCapitalize = "none"
                                    onChangeText={(text) => setConfirmPassword(text)}
                                />
                            </TouchableOpacity>
                        </View>

                        <Button
                            buttonStyle={styles.buttonStyle}
                            disabled={submitting}
                            title="Reset Password"
                            onPress={() => handleSubmit()}
                        />
                    </View>
                </View>  
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    input: {
        width: "90%",
        borderColor: '#d9d8dd',
        borderWidth: 0,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
      },
     buttonStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 60, 
        width: "100%", 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
     buttonHoverStyle: {
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        height: 50, 
        width: 50, 
        padding: 10, 
        borderRadius: 100, 
        backgroundColor: primaryColor
     },
     buttonTextStyle: {
        color: "white", 
        fontSize: 30, 
        fontWeight: "400"
     },
     
})

export default NewPassword