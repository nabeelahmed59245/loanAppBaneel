import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                    animation='bounceIn'
                    source={require('../../../assets/Logo/logo.png')}
                    style={styles.logo}
                    resizeMode='stretch'
                />
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                <Text style={styles.title}>Connect with us!</Text>
                <Text style={styles.text}>Sign in with your account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
                        <View style={styles.signIn}>
                            <Text style={styles.text_signIn}>Get Started </Text>
                            <FontAwesome5 name="arrow-right" color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text_privacy}>Powered by Elletro-Fattura, All rights reserved</Text>
            </Animatable.View>
            <StatusBar style="auto" />
        </View>
    );
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: Constants.statusBarHeight
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 180
    },
    footer: {
        flex: 1,
        backgroundColor: '#121212',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    text: {
        color: '#fff',
        marginTop: 5
    },
    button: {
        marginTop: 30,
        alignItems: 'flex-end'
    },
    signIn: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#000'
    },
    text_signIn: {
        color: '#fff',
        fontWeight: 'bold'
    },
    text_privacy: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 70,
        fontSize: 12,
        opacity: 0.5,
    },
})
