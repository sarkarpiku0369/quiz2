import React, { useRef } from 'react'
import { Button, Input, Text } from "@rneui/base"
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'; 
import { primaryColor } from '../../styles';
import axiosInstance from '../utils';
import { StoreContext } from '../../App';


const ResetVerification = ({route, navigation}) => {
    
    const {state, setState} = React.useContext(StoreContext)

    const {email} = route.params

    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)

    const [pin1, setPin1] = React.useState('')
    const [pin2, setPin2] = React.useState('')
    const [pin3, setPin3] = React.useState('')
    const [pin4, setPin4] = React.useState('')

    const [submitting, setSubmitting] = React.useState(false)

     const submit = async () => {
         setSubmitting(true)
         
         const otp = `${pin1}${pin2}${pin3}${pin4}`
         try {
             setSubmitting(false)
             const response = await axiosInstance.post('/user/verify', {email, otp})
             if(response.status === 200) {  
                navigation.navigate("PasswordChange", {email})
             }
           }
           catch(err) {
             setSubmitting(false)
             if(err.response.status === 401) {
                 alert("Invalid OTP")
             }
             else {
                 alert("Something went wrong")
             }
           }
     }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text h3 h3Style={styles.headingText1}>Enter Verification Code</Text>
                <Text style={styles.headingText2}>We have send you a 4 digit verification code to your email address</Text>

                <View style={styles.inputContainer}>
                    <View>
                        <Input 
                            keyboardType={'number-pad'}
                            inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={styles.inputStyle}
                            maxLength={1}
                            ref={pin1Ref}
                            onChangeText={(text) => {
                                setPin1(text)
                                pin2Ref.current.focus()
                            }}
                        />
                    </View>
                    <View>
                        <Input 
                            keyboardType={'number-pad'}
                            inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={styles.inputStyle}
                            maxLength={1}
                            ref={pin2Ref}
                            onChangeText={(text) => {
                                setPin2(text)
                                pin3Ref.current.focus()
                            }}
                        />
                    </View>
                    <View>
                        <Input 
                            keyboardType={'number-pad'}
                            inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={styles.inputStyle}
                            maxLength={1}
                            ref={pin3Ref}
                            onChangeText={(text) => {
                                setPin3(text)
                                pin4Ref.current.focus()
                            }}
                        />
                    </View>
                    <View>
                        <Input 
                            keyboardType={'number-pad'}
                            inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={styles.inputStyle}
                            maxLength={1}
                            ref={pin4Ref}
                            onChangeText={(text) => {
                                setPin4(text)
                                pin4Ref.current.blur()
                            }}
                        />
                    </View>
                </View>
            </View>
            
            {/* {hasError && (
                <View style={{backgroundColor: "#fb5151", padding: 8, margin: 12, borderRadius: 4}}>
                {error.map((err, index) => (
                    <Text key={index} style={{color: "white", fontSize: 16}}>{err}</Text>
                ))}
                </View>
            )} */}

            <Button 
                buttonStyle={styles.buttonStyle}
                onPress={submit} 
                loading={submitting} 
                disabled={submitting}>Reset Password</Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: "#DCFFE0"
    },
    headingContainer: {
        alignItems: "center",
    },
    headingText1: {
        color: "grey"
    },
    headingText2: {
        marginTop: 10,
        fontSize: 18,
        textAlign: "center",
        color: "grey"
    },  
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40
    },
    inputContainerStyle: {
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 5,
        borderBottomWidth: 0.5,
        width: 50
    },
    inputStyle: {
        paddingLeft: 16.5,
        fontSize: 30
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
})

export default ResetVerification