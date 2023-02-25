import { BackgroundImage } from '@rneui/base'
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
// import { SliderBox } from 'react-native-image-slider-box';
import SafeAreaView from 'react-native-safe-area-view';
import { primaryColor } from '../styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StoreContext } from '../App';
//import { SliderBox } from 'react-native-image-slider-box';
//import Carousel from 'react-native-basic-carousel'

const Home = ({navigation}) => {

    const {state, setState} = React.useContext(StoreContext)
    
    function checkLoggedInStatus() {
        if(state.loggedIn == false) {
            alert("askjfb")
        }
    }
    
    checkLoggedInStatus()


    // React.useEffect(() => {
        
    // }, [])

    // const images = [
    //     require("../assets/slider-1.png"),
    //     require("../assets/slider-2.png"),
    //     require("../assets/slider-3.png")
       
    // ]



  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <View style={{flex:0.4, paddingHorizontal:20, paddingTop: 10}}>
            <View style={{flexDirection:"row", marginBottom: 5}}>
                <Feather name="sun" style={styles.sun} />
                <Text style={styles.good}>GOOD MORNING</Text>
            </View>
            <Text style={styles.mcarol}>Madelyn Carol</Text>
        
        <View style={{justifyContent:"center",alignItems:"center"}}>
             <View style={{paddingHorizontal:10,paddingVertical:10,}}>
                <Image source={require("../assets/slider-1.png")} style={{height: 200, width: 350}} resizeMode="contain" />
            </View>
        </View>
        
        </View>
        <View style={{flex: 0.6, flexDirection: "column", backgroundColor: "white", borderTopLeftRadius: 31, borderTopRightRadius: 31, padding: 14}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>How to play this game ?</Text>
                <Text style={{fontSize: 16, color: primaryColor}}>Ses All Winners</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 20}}>
                <Image 
                    source={require("../assets/quizbanner.png")}
                />
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", marginVertical: 20}}>
               <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} activeOpacity={0.5}>
                <Image style={{width:350,height:200,resizeMode:"contain"}}
                    source={require("../assets/playnotbtn.png")}
                    
                />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
       container: { 
       backgroundColor: '#dcffe1',
       flex: 1, 
       flexDirection: "column",   
    },
    mcarol:{
        fontSize: 18,
        color: primaryColor,
        fontWeight: "bold",
    },
    good:{
        color: primaryColor,
        marginLeft:5
    },
    sun:{
        color:primaryColor,
        fontSize:16,
        top:3
    }
})
export default Home
