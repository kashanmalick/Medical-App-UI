import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Logo from "../components/logoText";
import Button from '../components/Button';


export default function NumberVerification(props) {
    const lengthInput = 4;
    let textInput = useRef(null);
    const [interVal, setinterVal] = useState("")
    console.log(interVal)

    const onChangeText = (val) => {
        setinterVal(val)
        console.log(val)
    }

    useEffect(() => {
        textInput.focus()
    }, [])
    return (
        <View style={styles.container}>
            <Logo />
            <KeyboardAvoidingView>
                <View style={styles.Text_center}>
                    <Text style={styles.text}>Verification</Text>
                    <Text style={styles.S_text}>
                        Insert your code here
                    </Text>
                </View>

                <View style={styles.bottomInput}>
                    <View style={styles.btnStyle}>
                        <TextInput
                            ref={(input) => textInput = input}
                            autoFocus={true}
                            onChangeText={onChangeText}
                            style={{ width: 50, height: 0.50 }}
                            value={interVal}
                            maxLength={lengthInput}
                            returnKeyType="done"
                            keyboardType="numeric"
                        />
                        <View style={styles.containerInput}>
                            <View style={{flexDirection:"row"}}>
                                {
                                    Array(lengthInput).fill().map((data, index) => (
                                        < View style={styles.cellInput} key={index} >
                                            <Text style={styles.celltext} onPress={() => textInput.focus()}>{interVal && interVal.length > 0 ? interVal[index] : ""}</Text>
                                        </View>
                                    )
                                    )
                                }
                            </View>
                            <View>
                                <Image
                                    source={require('../assets/Image/cross.png')}
                                    style={{ resizeMode: "contain" }}
                                />
                            </View>
                        </View>

                        <Button mode="contained" style={styles.ButtonFirst} onPress={() => props.navigation.navigate('Location')}>
                            Continue
                        </Button>
                        <View style={styles.lastText}>
                            <Text style={{ color: '#2A2AC0', fontSize: 14 }}>Resent code</Text>
                            <Text style={{ color: '#2A2AC0', fontSize: 14 }}>Change Number</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 250,
    },
    S_text: {
        color: "#000",
        textAlign: 'center',
    },
    Text_center: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    text: {
        color: "#181461",
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50,
    },
    textInput: {
        justifyContent: "center",
        alignItems: "center"
    },
    bottomInput: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40
    },
    ButtonFirst: {
        backgroundColor: '#2A2AC0',
        width: "80%",
        marginTop: 20,
    },
    btnStyle: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lastText: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '80%'
    },
    containerInput: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderColor: '#fff',
        borderWidth: 2,
        width: "80%",
        borderRadius: 15,
        height: 55,
        backgroundColor: "#fff"
    },
    cellInput: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1.5,
        borderBottomColor: '#2A2AC0'
    },
    celltext: {
        textAlign: "center",
        fontSize: 16
    }
})