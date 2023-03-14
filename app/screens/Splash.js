import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { secondaryColor } from '../styles'

const Splash = ({navigation}) => {

    React.useEffect(() => {

        (async () => {
            try{
                const touched = await AsyncStorage.getItem("touched")
                if(touched == "Y") {
                    navigation.navigate("Main")
                }
                else {
                    setTimeout(() => {
                        AsyncStorage.setItem("touched", "Y")
                        navigation.navigate("Splash1")
                    }, 4000)
                }
            }
            catch(err){
                setTimeout(() => {
                    AsyncStorage.setItem("touched", "Y")
                    navigation.navigate("Splash1")
                }, 4000)
            }
        })()


    }, [])

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
            <View style={styles.container}>
                <View style={{flexDirection: "row", justifyContent: "flex-end", height: 80, marginTop: 10}}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/oval_left.png")}
                    />
                </View>
                <View style={styles.top}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/splash0.png")}
                    />
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-start", position: "absolute", bottom: 0}}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/oval_right.png")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: secondaryColor
    },
    top: {
        flex: 0.8,
        justifyContent: "center",
        paddingHorizontal: 14,
        alignItems: "center",
    },
    bottom: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
    }
})

export default Splash