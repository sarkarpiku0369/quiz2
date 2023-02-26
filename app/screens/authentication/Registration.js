//rafce
import { Button, Input } from '@rneui/base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import BackButton from '../../components/BackButton';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { buttonColor, primaryColor } from '../../styles';


const Registration = ({navigation}) => {
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
                        <Text style={{justifyContent:"center", fontSize: 18, fontWeight: "bold"}}>Registration</Text>
                        <Text>{" "}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: "center", marginVertical: 40}}>
                    <Image 
                        source={require("../../assets/Login.png")}
                    />
                </View>

                <View>
                <View style={{flexDirection: "column", paddingHorizontal: 15}}>
                        <Text>Email Address</Text>
                        <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                            <MaterialIcons name="email" size={26} color={primaryColor} />
                            <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "Your Email Address"
                                placeholderTextColor = "#858494"
                                autoCapitalize = "none"
                            />
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection: "column", paddingHorizontal: 15, marginBottom: 20}}>
                        <Text>Username</Text>
                        <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                            <AntDesign name="user" size={24} color={primaryColor} />
                            <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "Your username"
                                placeholderTextColor = "#858494"
                                autoCapitalize = "none"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "column", paddingHorizontal: 15, marginBottom: 20}}>
                        <Text>Password</Text>
                        <TouchableOpacity style={{flexDirection: "row", backgroundColor: "white", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, borderRadius: 50, marginVertical: 10}}>
                            <AntDesign name="lock" size={24} color={primaryColor} />
                            <TextInput style = {styles.input}
                                underlineColorAndroid = "transparent"
                                placeholder = "Your Password"
                                placeholderTextColor = "#858494"
                                autoCapitalize = "none"
                            />
                        </TouchableOpacity>
                    </View>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        title="Create Account"
                        onPress={() => navigation.push('OTPVerification')}

                    />
                    <View style={{flexDirection: "column", alignItems: "center", marginTop: 10}}>
                        <TouchableOpacity onPress={()=>navigation.navigate("ResetPassword")} activeOpacity={1}>
                            <Text style={{color: primaryColor}}>Forgot Password</Text>
                        </TouchableOpacity>
                        <Text style={{marginTop: 20}}>
                            By continuing, you agree to the Terms of Services</Text>
                            <Text>& Privacy Policy.
                        </Text>
                    </View>
                    </View>
            </View> 
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    input: {
        width: "90%",
        // margin: 15,
       // height: 40,
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

export default Registration