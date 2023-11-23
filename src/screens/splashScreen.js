import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

export default function SplashScreen({navigation}) {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          navigation.navigate('Login');
        }, 2000);
    
        return () => clearTimeout(timeoutId);
      }, [navigation]);
    

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
      backgroundColor: 'red', 
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000', 
    },
  });