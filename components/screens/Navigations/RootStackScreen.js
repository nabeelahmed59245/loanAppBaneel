import React from 'react'

// Importing Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// Screens Importing
import SplashScreen from '../Authentication/SplashScreen'
import SigninScreen from '../Authentication/SigninScreen'
import SignupScreen from '../Authentication/SignupScreen'
import ForgotPassword from '../Authentication/ForgotPassword'

// Creating Stack Navigator
const RootStack = createStackNavigator();

// Make Screen Worable
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SigninScreen" component={SigninScreen} />
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </RootStack.Navigator>
)

export default RootStackScreen;
