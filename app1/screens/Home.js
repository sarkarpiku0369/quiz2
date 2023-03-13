import { BackgroundImage, Icon } from '@rneui/base'
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import SafeAreaView from 'react-native-safe-area-view';
import { primaryColor } from '../styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { StoreContext } from '../App';
import axiosInstance from './utils';

const Home = ({navigation}) => {

    const {state, setState} = React.useContext(StoreContext)
    const [greet, setGreet] = React.useState("")
    const [loading, setLoading] = React.useState(true)
    const [banners, setBanners] = React.useState([])

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
            setGreet('GOOD EVENING');
        
        setLoading(true)
        axiosInstance.get("/all-banner")
        .then(response => {
            if(response.status == 200) {
                const prizes = response.data.prizes
                let prize_list = []

                for(let i = 0 ; i < prizes.length ; i++) {
                    prize_list.push({
                        img: `https://yeammi.com/banners/${prizes[i].image}`
                    })
                }

                console.log(prize_list)
                setBanners(prize_list)
                setLoading(false)
            }
        })
    }, [])

    function checkLoggedInStatus() {
        if(state.loggedIn == false) {
        }
    }

    const startGame = () => {
        setState(state => ({...state, 
            gameStarted: false,
            gameEnd: false,
            prizeSelected: false,
            gameLoss: false,
        
            levelOneRemainingAttempt: 2,
            levelOneTouched: false,
            levelOnePassed: false,
            levelOnePressedButtons: [],
            levelOneCorrectAnswerButtons: [],
            levelOneWrongAnswerButtons: [],
            levelOneMinimumCorrectAnswerRequire: 2,
        
            levelTwoRemainingAttempt: 3,
            levelTwoTouched: false,
            levelTwoPassed: false,
            levelTwoPressedButtons: [],
            levelTwoCorrectAnswerButtons: [],
            levelTwoWrongAnswerButtons: [],
            levelTwoMinimumCorrectAnswerRequire: 2,
        
            levelThreeRemainingAttempt: 3,
            levelThreeTouched: false,
            levelThreePassed: false,
            levelThreePressedButtons: [],
            levelThreeCorrectAnswerButtons: [],
            levelThreeWrongAnswerButtons: [],
            levelThreeMinimumCorrectAnswerRequire: 2,
        
            levelFourRemainingAttempt: 3,
            levelFourTouched: false,
            levelFourPassed: false,
            levelFourPressedButtons: [],
            levelFourCorrectAnswerButtons: [],
            levelFourWrongAnswerButtons: [],
            levelFourMinimumCorrectAnswerRequire: 2,
        
            levelFiveRemainingAttempt: 3,
            levelFiveTouched: false,
            levelFivePassed: false,
            levelFivePressedButtons: [],
            levelFiveCorrectAnswerButtons: [],
            levelFiveWrongAnswerButtons: [],
            levelFiveMinimumCorrectAnswerRequire: 2
        
        }))

        navigation.navigate("LevelOneQuestionScreen")
    }
    
    const gameDetail = () => {
        setState(state => ({...state, 
            gameStarted: false,
            gameEnd: false,
            prizeSelected: false,
            gameLoss: false,
        
            levelOneRemainingAttempt: 2,
            levelOneTouched: false,
            levelOnePassed: false,
            levelOnePressedButtons: [],
            levelOneCorrectAnswerButtons: [],
            levelOneWrongAnswerButtons: [],
            levelOneMinimumCorrectAnswerRequire: 2,
        
            levelTwoRemainingAttempt: 3,
            levelTwoTouched: false,
            levelTwoPassed: false,
            levelTwoPressedButtons: [],
            levelTwoCorrectAnswerButtons: [],
            levelTwoWrongAnswerButtons: [],
            levelTwoMinimumCorrectAnswerRequire: 2,
        
            levelThreeRemainingAttempt: 3,
            levelThreeTouched: false,
            levelThreePassed: false,
            levelThreePressedButtons: [],
            levelThreeCorrectAnswerButtons: [],
            levelThreeWrongAnswerButtons: [],
            levelThreeMinimumCorrectAnswerRequire: 2,
        
            levelFourRemainingAttempt: 3,
            levelFourTouched: false,
            levelFourPassed: false,
            levelFourPressedButtons: [],
            levelFourCorrectAnswerButtons: [],
            levelFourWrongAnswerButtons: [],
            levelFourMinimumCorrectAnswerRequire: 2,
        
            levelFiveRemainingAttempt: 3,
            levelFiveTouched: false,
            levelFivePassed: false,
            levelFivePressedButtons: [],
            levelFiveCorrectAnswerButtons: [],
            levelFiveWrongAnswerButtons: [],
            levelFiveMinimumCorrectAnswerRequire: 2
        
        }))

        navigation.navigate("HomeScreen")
    }

    checkLoggedInStatus()

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <View style={{flex:0.35, paddingTop: 10}}>
                <View style={{marginHorizontal: 20, marginBottom: 10}}>
                    <View style={{flexDirection: "row", marginBottom: 5}}>
                        <Feather name="sun" style={styles.sun} />
                        <Text style={styles.good}>{greet}</Text>
                    </View>
                    <Text style={styles.mcarol}>{state.user.name}</Text>
                </View>
            
                <View>
                    {loading ? (
                        <ActivityIndicator />
                    ) : (
                        <ImageSlider 
                        data={banners}
                        // localImg
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
                    )}
                </View>
            </View>
            
            <View style={{flex: 0.65, flexDirection: "column", backgroundColor: "white", borderTopLeftRadius: 31, borderTopRightRadius: 31, padding: 14}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5}}>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 15}}>How to play this game ?</Text>
                    <Text style={{fontSize: 16, color: primaryColor, marginTop: 15}}>Ses All Winners</Text>
                </View>
                <TouchableOpacity activeOpacity={1} style={{flexDirection: "row", justifyContent: "center"}} onPress={() => gameDetail()}>
                    <Image
                        style={{width: "100%"}}
                        resizeMode="contain"
                        source={require("../assets/quizbanner.png")}
                    />
                </TouchableOpacity>

                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "flex-start"}}>
                    <TouchableOpacity onPress={() => startGame()} activeOpacity={0.5}>
                        <Image style={{width: 175, height: 175, resizeMode: "center"}}
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
