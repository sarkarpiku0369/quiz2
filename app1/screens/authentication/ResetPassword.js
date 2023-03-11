//rafce
import { Button } from '@rneui/base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from 'react-native';
import { primaryColor } from '../../styles';
import axiosInstance from '../utils';
import { Fontisto } from '@expo/vector-icons';

const ResetPassword = ({navigation}) => {

    const [email, setEmail] = React.useState("");
    const [submitting, setSubmitting] = React.useState(false)

    const handleSubmit = () => {
        setSubmitting(true)
        axiosInstance.post("/user/forgot-password", {email})
        .then(response => {
            if(response.status === 200) {
                navigation.navigate("ResetVerification", {email})
            }
        })
        .catch(err => {
            console.log(err.response)
            err.response.status == 401 ? alert("You Are Not Registered!") : alert("Server Error")
        })
        .finally(() => {
            setSubmitting(false)
        })
    }

  return (
        <ScrollView 
            style={{backgroundColor: "#DCFFE0"}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={{flex: 1, backgroundColor: "#DCFFE0", padding: 14}}>
                <View style={{justifyContent: 'center', alignItems: "center", marginVertical: 10, paddingHorizontal: 10, marginBottom: 40}}>
                    <Text style={{color:"#858494", fontSize: 16, fontWeight: "500"}}>Enter your email and we will send you a OTP to reset your password</Text>
                </View>
                <View>
                    <View style={{flexDirection: "column", paddingHorizontal: 15}}>
                        <Text>Email Address</Text>
                        <TouchableOpacity activeOpacity={1} style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10, marginBottom: 20}}>
                            <Fontisto name="email" size={24} color={primaryColor} />
                            <TextInput 
                                placeholder = "Enter Your Email" 
                                style={styles.input}
                                underlineColorAndroid='transparent'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </TouchableOpacity>
                    </View>

                    <Button
                        loading={submitting} 
                        disabled={submitting}
                        buttonStyle={styles.buttonStyle}
                        title="Reset Password"
                        onPress={() => handleSubmit()}
                    />
                </View>
            </View>  
        </ScrollView>
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

export default ResetPassword