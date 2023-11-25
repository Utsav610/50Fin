import {StyleSheet, Text, View} from 'react-native';
import React,{useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/customButton';
import colors from '../constants/colors';
import auth from '@react-native-firebase/auth';
import { Login } from '../redux/action';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSelector, useDispatch} from 'react-redux'

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(Login({ email, password }));
        navigation.navigate('HomeNavigation');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: colors.blackColor }}
      contentContainerStyle={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.header}>Login</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={text => {
                  setEmail(text);
                  onChange(text);
                }}
              />
              <Text style={styles.errorText}>{errors.email?.message}</Text>
            </>
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={value}
                onChangeText={text => {
                  setPassword(text);
                  onChange(text);
                }}
              />
              <Text style={styles.errorText}>{errors.password?.message}</Text>
            </>
          )}
          name="password"
          defaultValue=""
        />

        <CustomButton
          style={{ width: '100%' }}
          title={'Login'}
          onPress={handleSubmit(login)}
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
    color: colors.whiteColor,
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 5,
    width: '100%',
  },
  signupText: {
    marginTop: 16,
    textAlign: 'center',
    color: colors.whiteColor,
  },
  signupLink: {
    color: '#828DFF',
  },
  errorText:{
    color:'red',
    fontSize:13,
    marginBottom:5,
  }
});
