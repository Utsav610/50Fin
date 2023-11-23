import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#55FEEE',
    borderRadius: 25,
    alignSelf: 'center',
    padding: 12,
    marginVertical: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
