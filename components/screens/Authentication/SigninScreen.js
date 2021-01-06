import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'; 
import Constants from 'expo-constants';
import { ScrollView, View, StyleSheet, TextInput, Image, Text } from 'react-native'
import { Card } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SigninScreen = ({navigation}) => {
    // render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1, margin: 20, padding: 10, }}>
                    <View style={{ marginTop: 10, marginBottom: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Image 
                        animation='bounceIn'
                        source={require('../../../assets/Logo/logo.png')}
                        style={styles.logo}
                        resizeMode='stretch'
                    />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25, marginTop: 2 }}>Hello</Text>
                        <Text style={{ textAlign: 'center', color: '#fff', fontWeight:'bold', fontSize: 30, margin: 5 }}>Test App</Text>
                        <Card style={{ backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 20 }}>
                            <TextInput
                              style={{ height: 40, borderBottomColor: '#000', borderBottomWidth: 0.7, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}
                              placeholder='E-mail'
                            />
                            <TextInput
                              style={{ height: 40, borderBottomColor: '#000', borderBottomWidth: 0.7, fontWeight: 'bold' }}
                              placeholder='Password'
                            />
                            <TouchableOpacity style={{ marginTop: 40, alignItems: 'center' }} onPress={() => navigation.navigate('HomeScreen')}>
                                <View style={styles.signIn}>
                                    <Text style={styles.text_signIn}>ACCEPT</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 15, alignItems: 'center' }} onPress={() => navigation.navigate('ForgotPassword')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#707070' }}>Forgot Your Password?</Text>
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

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        marginTop: Constants.statusBarHeight
    },
    header: {
        marginTop: 16,
        marginLeft: 10,
        alignItems: 'flex-start'
    },
    logo: {
        width: 70,
        height: 70
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
        backgroundColor: '#000'
    },
    text_signIn: {
        color: '#fff',
        fontWeight: 'bold'
    },
})
