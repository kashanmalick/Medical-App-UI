import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView } from "react-native";
import Logo from "../components/logoText";
import Button from '../components/Button';


export default function LocationFun(props) {
    let textInput = useRef(null);
    const [interVal, setinterVal] = useState("")

    const onChangeText = (val) => {
        setinterVal(val)
    }

    useEffect(() => {
        textInput.focus()
    }, [])
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.bottomInput}>
                    <Logo />
                    <View style={styles.Text_center}>
                        <Text style={styles.text}>Location</Text>
                        <Text style={styles.S_text}>
                            Please enter your location
                        </Text>
                    </View>
                    <View style={styles.btnStyle}>
                        <Image
                            source={require('../assets/Image/loc.png')}
                            style={{
                                padding: 10,
                                margin: 5,
                                height: 25,
                                width: 25,
                                resizeMode: 'contain',
                                alignItems: 'center',
                            }}
                        />
                        <TextInput
                            ref={(input) => textInput = input}
                            autoFocus={true}
                            style={styles.containerInput}
                            onChangeText={onChangeText}
                            placeholder="Your Location"
                            value={interVal}
                            returnKeyType="search"
                            keyboardType="default"
                        />
                    </View>
                    <Button mode="contained" style={styles.ButtonFirst} onPress={() => props.navigation.navigate('Map')} >
                        Continue
                    </Button>
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
        marginTop: 120,
        marginBottom: 80,
    },
    S_text: {
        color: "#181461",
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150
    },
    ButtonFirst: {
        backgroundColor: '#2A2AC0',
        width: "88%",
        height: 50
    },
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 15,
        margin: 10,
    },
    containerInput: {
        width: "85%",
        fontSize: 16,
    },
})