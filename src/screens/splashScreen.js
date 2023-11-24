import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../constants/colors';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>50 Fin</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackColor,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});