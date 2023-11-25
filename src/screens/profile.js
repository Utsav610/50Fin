import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';

export default function Profile() {
  const {user} = useSelector(state => state.authReducer);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assests/user.png')} style={styles.image} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-around',
        }}>
        <Text style={styles.text}>Profile :</Text>
        <Text style={styles.text}>{user?.email}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackColor,
    paddingHorizontal: 15,
  },
  text: {
    color: colors.whiteColor,
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
});
