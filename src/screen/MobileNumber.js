import React, { useState, useRef } from "react";
import { SafeAreaView, StyleSheet, View, Text, } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Logo from "../components/logoText";
import Button from '../components/Button';

const MobileNumber = (props) => {
    const [value, setValue] = useState("");
    const phoneInput = useRef(null);
    return (
        <View style={styles.mainContainer}>
            <Logo />
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.Text_center}>
                        <Text style={styles.text}>Mobile Number</Text>
                        <Text style={styles.S_text}>
                            The code will be sent to the full mobile number
                        </Text>
                    </View>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="PK"
                        layout="second"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        withDarkTheme
                        withShadow
                        autoFocus
                    />
                    <View style={styles.btn}>
                        <Button mode="contained" style={styles.ButtonFirst} onPress={() => props.navigation.navigate('NumberVerification')}>
                            Continue
                        </Button>
                    </View>
                </SafeAreaView>
            </View>
        </View>

    );
};

export default MobileNumber;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 280,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },

    ButtonFirst: {
        backgroundColor: '#2A2AC0',
        width: "100%",
        padding: 17,
        marginTop: 20,
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
        color: '#181461',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50,
    },
})