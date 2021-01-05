import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { ScrollView, View, StyleSheet, TextInput, Image, Text } from 'react-native'
import { Card } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) => {
    // render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                        animation='bounceIn'
                        source={require('../../../assets/Logo/logo.png')}
                        style={styles.logo}
                        resizeMode='stretch'
                    />
                </View>
                <ScrollView style={{ flex: 1, margin: 20, padding: 10 }}>
                    <View>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25, margin: 5 }}>Benvenuti in</Text>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight:'bold', fontSize: 30, margin: 20 }}>Elletro Fatturas</Text>
                        <Card style={{ backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 20 }}>
                            <TextInput
                              style={{ height: 40, borderBottomColor: '#000', borderBottomWidth: 0.7, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}
                              placeholder='Indrizzo E-mail'
                            />
                            <TextInput
                              style={{ height: 40, borderBottomColor: '#000', borderBottomWidth: 0.7, fontWeight: 'bold' }}
                              placeholder='Password'
                            />
                            <TouchableOpacity style={{ marginTop: 40, alignItems: 'center' }}>
                                <View style={styles.signIn}>
                                    <Text style={styles.text_signIn}>ACCEDI</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 30, alignItems: 'center' }} onPress={() => navigation.navigate('SigninScreen')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#707070' }}>Hai già un account? Iscriviti</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </ScrollView>
                <StatusBar style="auto" />
            </View>
        );
    // }
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#60769A',
        marginTop: Constants.statusBarHeight
    },
    header: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    cardView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signIn: {
        flexDirection: 'row',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#60769A'
    },
    text_signIn: {
        color: '#fff',
        fontWeight: 'bold'
    },
})
