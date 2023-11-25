import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/customButton';
import colors from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';


export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
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

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
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
          onPress={handleSignup}
        />
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
});
