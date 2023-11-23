import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';
import HomeNavigation from './homeNavigation';
import AmcScreen from '../screens/amcScreen';
import Portfolio from '../screens/portfolio';

const Stack = createNativeStackNavigator();

export default function FinanceNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Amc"
          component={AmcScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
