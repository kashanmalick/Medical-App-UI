import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import Button from '../components/Button';


export default function BookApoin(props) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.header}>
                    <Text style={styles.textDashboard}>Book an appointmenet</Text>
                </View>
            </View>
            <View style={styles.centerStyle}>
                <View style={styles.TextInputStyle}>
                    <Image
                        source={require('../assets/Image/searchBlue.png')}
                        style={{
                            padding: 10,
                            marginLeft: 20,
                            height: 20,
                            width: 20,
                            resizeMode: 'contain',
                            alignItems: 'center'
                        }}
                    />
                    <TextInput
                        style={styles.containerInput}
                        placeholder="Doctor.Speciallities..."
                        returnKeyType="search"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.TextInputStyle}>
                    <Image
                        source={require('../assets/Image/LocationImg.png')}
                        style={{
                            padding: 10,
                            marginLeft: 20,
                            height: 20,
                            width: 20,
                            resizeMode: 'contain',
                            alignItems: 'center'
                        }}
                    />
                    <TextInput
                        style={styles.containerInput}
                        placeholder="Select Area"
                        returnKeyType="done"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.TextInputStyle}>
                    <Image
                        source={require('../assets/Image/dateImg.png')}
                        style={{
                            padding: 10,
                            marginLeft: 20,
                            height: 20,
                            width: 20,
                            resizeMode: 'contain',
                            alignItems: 'center'
                        }}
                    />
                    <TextInput
                        style={styles.containerInput}
                        placeholder="Select Date"
                        returnKeyType="done"
                        keyboardType="default"
                    />
                </View>
                <Button mode="contained" style={styles.ButtonFirst} onPress={props.navigation.navigate("Dashboard")}>
                    Search
                </Button>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={styles.text}>All Speciallities</Text>
                        <Image
                            source={require('../assets/Image/filter.png')}
                            style={{ resizeMode: "contain", marginTop: 10 }}
                        />
                    </View>
                    <View style={styles.DocSide}>
                        <Image
                            source={require('../assets/Image/DocOne.png')}
                            style={{ resizeMode: "contain", marginTop: 10 }}
                        />
                        <View style={{ marginLeft: 15, marginTop: 10 }}>
                            <Text>Dr. Martin Pilier</Text>
                            <Text>Cardiologist</Text>
                            <Text>Luxembourg Ville - 2 km</Text>
                            <Image
                                source={require('../assets/Image/rating.png')}
                                style={{ resizeMode: "contain" }}
                            />
                        </View>
                    </View>
                    <View style={styles.DocSide}>
                        <Image
                            source={require('../assets/Image/DocTwo.png')}
                            style={{ resizeMode: "contain", marginTop: 10 }}
                        />
                        <View style={{ marginLeft: 15, marginTop: 10 }}>
                            <Text>Dr. Clara Odding</Text>
                            <Text>dentist</Text>
                            <Text>Frisange - 3 km</Text>
                            <Image
                                source={require('../assets/Image/rating.png')}
                                style={{ resizeMode: "contain" }}
                            />
                        </View>
                    </View>
                    <View style={styles.DocSide}>
                        <Image
                            source={require('../assets/Image/DocThree.png')}
                            style={{ resizeMode: "contain", marginTop: 10 }}
                        />
                        <View style={{ marginLeft: 15, marginTop: 10 }}>
                            <Text>Dr. Julien More</Text>
                            <Text>Phychiatrist</Text>
                            <Text>Mamer - 10 km</Text>
                            <Image
                                source={require('../assets/Image/rating.png')}
                                style={{ resizeMode: "contain" }}
                            />
                        </View>
                    </View>
                    <View style={styles.DocSide}>
                        <Image
                            source={require('../assets/Image/DocFour.png')}
                            style={{ resizeMode: "contain", marginTop: 10 }}
                        />
                        <View style={{ marginLeft: 15, marginTop: 10 }}>
                            <Text>Dr. Jeff Smith</Text>
                            <Text>Darmatologist</Text>
                            <Text>Roser - 4 km</Text>
                            <Image
                                source={require('../assets/Image/rating.png')}
                                style={{ resizeMode: "contain" }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
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
        // backgroundColor: 'gray'
    },
    TextInputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 45,
        borderRadius: 15,
        marginTop: 20,
    },
    containerInput: {
        width: "85%",
        fontSize: 18,
    },
    cardStyle: {
        justifyContent: "space-around",
        alignItems: 'center',
        flexDirection: 'row',
        height: "100%",
        marginTop: 10,
        backgroundColor: 'gray'
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
        fontSize: 26,
        fontWeight: 'bold',

    },
    ButtonFirst: {
        backgroundColor: '#2A2AC0',
        width: "100%",
        padding: 95,
        marginTop: 20,
    },
    text: {
        color: "#181461",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "left",
        marginTop: 10
    },
    DocSide: {
        flexDirection: 'row',
        alignItems: "center",
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#CDD1D9'
    }
})