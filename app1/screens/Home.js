import { BackgroundImage, Icon } from '@rneui/base'
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import SafeAreaView from 'react-native-safe-area-view';
import { primaryColor } from '../styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StoreContext } from '../App';

const Home = ({navigation}) => {

    const {state, setState} = React.useContext(StoreContext)
    const [greet, setGreet] = React.useState("")

    React.useEffect(() => {
        var myDate = new Date();
        var hrs = myDate.getHours();

        if (hrs < 12)
            setGreet('GOOD MORNING')
        else if (hrs >= 12 && hrs <= 17)
            setGreet('GOOD AFTERNOON');
        else if (hrs >= 17 && hrs <= 21)
            setGreet('GOOD EVENING');
        else 
            setGreet('GOOD NIGHT');
    }, [])

    function checkLoggedInStatus() {
        if(state.loggedIn == false) {
        }
    }
    
    checkLoggedInStatus()



  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <View style={{flex:0.4, paddingTop: 10}}>
            <View style={{marginHorizontal: 20, marginBottom: 10}}>
                <View style={{flexDirection: "row", marginBottom: 5}}>
                    <Feather name="sun" style={styles.sun} />
                    <Text style={styles.good}>{greet}</Text>
                </View>
                <Text style={styles.mcarol}>Madelyn Carol</Text>
            </View>
        
            <View>
                <ImageSlider 
                    data={[
                        {img: require("../assets/slider-1.png")},
                        {img: require("../assets/slider-1.png")},
                        {img: require("../assets/slider-1.png")}
                    ]}
                    localImg
                    autoPlay={true}   
                    showHeader={false}
                    preview={false}
                    onItemChanged={(item) => {}}
                    headerLeftComponent={<Icon name="arrow-back" color="#fff" size={34} onPress={() => Alert.alert("alert")} />}
                    headerCenterComponent={<Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Header</Text>}
                    headerStyle={{ padding: 10, backgroundColor: 'rgba(0,0,0, 0.6)', }}
                    caroselImageStyle={{ resizeMode: 'contain' }}
                    closeIconColor="#fff"
                />
            </View>
        </View>
        
        <View style={{flex: 0.6, flexDirection: "column", backgroundColor: "white", borderTopLeftRadius: 31, borderTopRightRadius: 31, padding: 14}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>How to play this game ?</Text>
                <Text style={{fontSize: 16, color: primaryColor}}>Ses All Winners</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", marginTop: 30}}>
                <Image 
                    source={require("../assets/quizbanner.png")}
                />
            </View>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "flex-start", marginVertical: 20}}>
               <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} activeOpacity={0.5}>
                <Image style={{width: 180, height: 180, resizeMode: "center"}}
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
