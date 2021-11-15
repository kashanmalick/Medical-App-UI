import React from 'react'
import { View, Image, StyleSheet, TextInput, ImageBackground } from 'react-native'
import Button from '../components/Button';

export default function Map(props) {
    return (
        <View>
            <ImageBackground
                source={require('../assets/Image/map1.png')}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height:"100%",
                }}
            >
                <View style={styles.bottomInput}>
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
                            style={styles.containerInput}
                            placeholder="Your Location"
                            returnKeyType="search"
                            keyboardType="default"
                        />
                    </View>
                    <Button mode="contained" style={styles.ButtonFirst} onPress={() => props.navigation.navigate('Dashboard')}>
                        Confirm
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        justifyContent: "center",
        alignItems: "center",
    },
    bottomInput: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginLeft: 20,

    },
    ButtonFirst: {
        backgroundColor: '#2A2AC0',
        width: "90%",
        padding: 95
    },
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 15,
        marginTop: 50,
    },
    containerInput: {
        width: "80%",
        fontSize: 16,
    },
})