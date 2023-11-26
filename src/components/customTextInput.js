import React from 'react';
import { View, TextInput, Text } from 'react-native';
import colors from '../constants/colors';

const CustomTextInput = ({
  placeholder,
  keyboardType,
  autoCapitalize,
  secureTextEntry,
  value,
  onChangeText,
  error,
}) => (
  <>
    <TextInput
      style={{
        height: 40,
        borderColor: colors.gray,
        borderWidth: 1,
        marginBottom: 5,
        paddingLeft: 20,
        width: '100%',
        backgroundColor:colors.whiteColor
      }}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
    {error && <Text style={{ color: 'red' }}>{error}</Text>}
  </>
);

export default CustomTextInput;
