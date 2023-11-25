import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/customButton';
import colors from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default SignupScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, newDate) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }
    if (newDate !== undefined) {
      setSelectedDate(newDate);
    }
  };

  const showAndroidDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleSignup = data => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
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
      style={{flex: 1, backgroundColor: colors.blackColor}}
      contentContainerStyle={styles.container}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <View style={styles.inner}>
        <Text style={styles.header}>Signup</Text>

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
              <Text style={styles.errorText}>{errors.email?.message}</Text>
            </>
          )}
          name="email"
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
              <Text style={styles.errorText}>{errors.password?.message}</Text>
            </>
          )}
          name="password"
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
              <Text style={styles.errorText}>
                {errors.confirmPassword?.message}
              </Text>
            </>
          )}
          name="confirmPassword"
          defaultValue=""
        />

        <TouchableOpacity onPress={showAndroidDatePicker}>
          <View style={styles.inputContainer}>
            <Text style={styles.androidDatePickerText}>
              {selectedDate.toLocaleDateString()}
            </Text>
            <FontAwesome5 name="calendar-alt" size={20} style={styles.icon} />
          </View>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <CustomButton
          style={{width: '100%'}}
          title={'Signup'}
          onPress={handleSubmit(handleSignup)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

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
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  androidDatePickerText: {
    fontSize: 16,
    color: colors.whiteColor,
  },
  icon: {
    marginLeft: 15,
    color: colors.secondary,
  },
  errorText:{
    color:'red',
    marginBottom:5,
    textAlign:'left',
    fontSize:13
  }
});
