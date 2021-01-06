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
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-menu" size={30} color="#fff"/>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 100 }}>Home</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1, margin: 20 }}>
                    <View>
                        <Card style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20 }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text>MY LOAN</Text>
                            </View>
                            <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Your payment is processing!</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Jan 4th</Text>
                                <Text>Processing</Text>
                                <Text>$ 152.21</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Jan 4th</Text>
                                <Text>$ 152.21</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text >Jan 4th</Text>
                                <Text >$ 152.21</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text >Total Remaining</Text>
                                <Text >$ 608.84</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginTop: 30, alignContant: 'center' }}>
                                <View style={styles.signIn}>
                                    <Text style={styles.text_signIn}>Pay my balance now</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginTop: 10, alignContant: 'center' }}>
                                <View style={styles.signIn}>
                                    <Text style={styles.text_signIn}>Update payment dates</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                        </Card>
                    </View>
                    <View>        
                        <Card style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20 }}>
                            <TouchableOpacity style={{ alignContant: 'center' }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ color: '#000' }}>How do payments work?</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </View>
                    <View>    
                        <Card style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>FEE MONITOR</Text>
                                <Text style={{ color: '#FEE702', paddingLeft: 10 }}>NEW</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Bank fee paid in last 90 days</Text>
                                <Text>$ 152.21</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Total fees refunded</Text>
                                <Text>$ 152.21</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginTop: 40, alignContant: 'center' }}>
                                <View style={styles.signIn}>
                                    <Text style={styles.text_signIn}>Explore my bank fees</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                        </Card>
                    </View>
                    <View>
                        <Card style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20 }}>
                            <View style={{ marginTop: 10, alignItems: 'flex-start' }}>
                                <Text>FREE MONEY</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text>Refer a friend and get a 5 doller gift card</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={{ marginTop: 40, alignContant: 'center' }}>
                                <View style={styles.signIn}>
                                    <Text style={styles.text_signIn}>Refer a friend</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
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
