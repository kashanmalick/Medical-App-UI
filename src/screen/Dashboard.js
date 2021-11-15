import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';


export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.header}>
                    <Text style={styles.textDashboard}>Dashboard</Text>
                </View>
            </View>
            <View style={styles.centerStyle}>
                <View style={styles.TextInputStyle}>
                    <TextInput
                        style={styles.containerInput}
                        placeholder="Search"
                        returnKeyType="search"
                        keyboardType="default"
                    />
                    <Image
                        source={require('../assets/Image/search.png')}
                        style={{
                            padding: 10,
                            marginRight: 20,
                            height: 23,
                            width: 23,
                            resizeMode: 'contain',
                            alignItems: 'center'
                        }}
                    />
                </View>

                <View style={styles.cardStyle}>
                    <View style={styles.cardImagestyles}>
                        <Text style={styles.text}>Appointments</Text>
                        <Image
                            source={require('../assets/Image/Appointments.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '90%',
                                width: '90%'
                            }}
                        />
                    </View>
                    <View style={styles.cardImagestyles}>
                        <Text style={styles.text}>Records</Text>
                        <Image
                            source={require('../assets/Image/SMR.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '90%',
                                width: '90%'
                            }}
                        />
                    </View>
                </View>
                <View style={styles.cardStyle}>
                    <View style={styles.cardImagestyles}>
                        <Text style={styles.text}>Forum</Text>
                        <Image
                            source={require('../assets/Image/DFImage.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '90%',
                                width: '90%'
                            }}
                        />
                    </View>
                    <View style={styles.cardImagestyles}>
                        <Text style={styles.text}>Account Settings</Text>
                        <Image
                            source={require('../assets/Image/ACSetting.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '70%',
                                width: '70%',
                                marginTop: 20
                            }}
                        />
                    </View>
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#ECF1FA"
    },
    top: {
        flex: 0.1,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: "flex-start",
    },
    header: {
        marginTop: 10,
        margin: 20,
    },
    centerStyle: {
        flex: 0.9,
        width: "90%",
    },
    TextInputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 15,
        marginTop: 20,
    },
    containerInput: {
        width: "80%",
        fontSize: 18,
        marginLeft: 20
    },
    cardStyle: {
        justifyContent: "space-around",
        alignItems: 'center',
        flexDirection: 'row',
        height: "42%",
        marginTop: 10,
    },
    text: {
        color: "#181461",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "left",
        marginTop: 20
    },
    cardImagestyles: {
        height: "95%",
        width: "45%",
        borderRadius: 5,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    textDashboard: {
        color: "#181461",
        fontSize: 28,
        fontWeight: 'bold',

    }
})
