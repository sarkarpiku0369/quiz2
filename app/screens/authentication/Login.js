//rafce
import { Button, Input } from '@rneui/base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,Image } from "react-native";
import { TextInput } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import BackButton from '../../components/BackButton';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { buttonColor, primaryColor } from '../../styles';
import axiosInstance from '../utils';

const Login = ({navigation}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
      
        axiosInstance.post("/user/login", {
            email
        })
        .then(response => {
            if(response.status === 200) {
                navigation.navigate("OTPVerification", {email})
            }
        })
        .catch(err => {
            err.response.status == 401 ? alert("You are not authenticate") : alert("Server Error")
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
                    <Text style={{justifyContent:"center", fontSize: 18, fontWeight: "bold"}}>Login</Text>
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
                            {/* <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = "Your Email Address"
                                // placeholderTextColor = "#858494"
                                placeholderTextColor="#fff"
                                style={styles.input}
                                autoCapitalize = "none"
                                onChangeText={setEmail}
                            /> */}

<TextInput 
        placeholder = "Enter Your Email" 
       style={styles.input}
        underlineColorAndroid='transparent'
        value={email}
        onChangeText={(text) => setEmail(text)}
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
                                value={password}
                                // placeholderTextColor = "#858494"
                                autoCapitalize = "none"
                                onChangeText={password => setPassword(password)}

                            />
                        </TouchableOpacity>
                    </View>

                    <Button
                        
                        buttonStyle={styles.buttonStyle}
                        title="Login"
                        onPress={() => handleSubmit()}
                    />
                    
                    <View style={{flexDirection:"column", marginTop: 10}}>
                        <Text style={{color: primaryColor}}>Forgot Password</Text>
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

export default Login