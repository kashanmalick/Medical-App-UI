import React from 'react'
import LogoText from '../components/logoText'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'


export default function StartScreen(props) {
   
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}><LogoText /></View>
            <View style={styles.textContainerStyle}>
                <View>
                    <Text style={styles.text}>Welcome </Text>
                    <Text style={styles.S_text}>
                        Sign in to continue{"\n"}{"\n"}
                    </Text>
                </View>
                <View style={styles.btnStyle}>
                    <Button mode="contained"  style={styles.ButtonFirst} onPress={() => props.navigation.navigate('MobileNumber')}>
                        Sign in with mobile number
                    </Button>
                    <Text style={{ textAlign: 'center', color: '#000' }}>or</Text>
                    <Button mode="contained" color='#3A559F' style={styles.ButtonSecond}>
                        Sign Up with Facebook
                    </Button>
                </View>
            </View>
            <View style={styles.lastText}>
                <Text style={{ fontSize: 13 }}>By signing in, you accept our <Text style={{ color: '#2A2AC0' }}>Terms and Conditions</Text></Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#181461',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50,
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 250,
    },
    btnStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    S_text: {
        color: "#000",
        textAlign: 'center',
    },
    lastText: {
        flex: 0.1,
        position: 'relative',
        top: 250,
    },
    ButtonFirst: {
        backgroundColor: '#2A2AC0',
        width: "100%",
        padding: 17
    },
    ButtonSecond: {
        width: "100%",
        padding: 40
    },
    textContainerStyle: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    logoContainer: {
        flex: 0.5
    }
})