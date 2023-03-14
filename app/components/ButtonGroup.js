import React from 'react'

const ButtonGroup = () => {

    let levelName  = ""

    if(level == 1) {
        levelName = "One"
    }
    else if(level == 2) {
        levelName = "Two"
    }
    else if(level == 3) {
        levelName = "Three"
    }
    else if(level == 4) {
        levelName = "Four"
    }
    else {
        levelName = "Five"
    }

    return (
        <>
            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20}}>
                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}                            
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(1) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(1)}
                    onPress={() => setSelectedButton(1)}
                >
                    {state.levelTwoPressedButtons.includes(1) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>1</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(2) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(2)}
                    onPress={() => setSelectedButton(2)}
                >
                    {state.levelTwoPressedButtons.includes(2) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>2</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(3) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(3)}
                    onPress={() => setSelectedButton(3)}
                >
                    {state.levelTwoPressedButtons.includes(3) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>3</Text>
                    )}
                </Button>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10}}>
                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(4) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(4)}
                    onPress={() => setSelectedButton(4)}
                >
                    {state.levelTwoPressedButtons.includes(4) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>4</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(5) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(5)}
                    onPress={() => setSelectedButton(5)}
                >
                    {state.levelTwoPressedButtons.includes(5) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>5</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(6) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(6)}
                    onPress={() => setSelectedButton(6)}
                >
                    {state.levelTwoPressedButtons.includes(6) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>6</Text>
                    )}
                </Button>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 20}}>
                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(7) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(7)}
                    onPress={() => setSelectedButton(7)}
                >
                    {state.levelTwoPressedButtons.includes(7) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>7</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(8) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(8)}
                    onPress={() => setSelectedButton(8)}
                >
                    {state.levelTwoPressedButtons.includes(8) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>8</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(9) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(9)}
                    onPress={() => setSelectedButton(9)}
                >
                    {state.levelTwoPressedButtons.includes(9) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>9</Text>
                    )}
                </Button>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-around", marginVertical: 10}}>
                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(10) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(10)}
                    onPress={() => setSelectedButton(10)}
                >
                    {state.levelTwoPressedButtons.includes(10) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>10</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(11) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(11)}
                    onPress={() => setSelectedButton(11)}
                >
                    {state.levelTwoPressedButtons.includes(11) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>11</Text>
                    )}
                </Button>

                <Button 
                    containerStyle={styles.buttonStyle}
                    buttonStyle={styles.buttonStyle}
                    disabledStyle={{
                        backgroundColor: state.levelTwoCorrectAnswerButtons.includes(12) ? primaryColor : "red",
                    }}
                    disabled={state.levelTwoPressedButtons.includes(12)}
                    onPress={() => setSelectedButton(12)}
                >
                    {state.levelTwoPressedButtons.includes(12) ? (
                        <Feather name="lock" size={24} color="white" />
                    ) : (
                        <Text style={styles.buttonTextStyle}>12</Text>
                    )}
                </Button>
            </View>
        </>
    )
}

export default ButtonGroup