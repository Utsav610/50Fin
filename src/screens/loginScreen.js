import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import CustomButton from '../components/customButton';


export default function LoginScreen({ navigation }) {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}>
      <View style={styles.inner}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <CustomButton
          style={{ width: '100%' }}
          title={'Login'}
          onPress={() => {
            navigation.navigate('HomeNavigation');
          }}
        />

        <Text style={styles.signupText}>
          Don't have an account?
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 48,
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 5,
    width: '100%',
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
  },
  signupLink: {
    color: 'blue',
  },
});
