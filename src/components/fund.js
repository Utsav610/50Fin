import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function Fund({scrip_name, max_loan_amount, quantity}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const pledgeQuantityValue = isChecked ? max_loan_amount : quantity;
  console.log('pl', pledgeQuantityValue);
  return (
    <LinearGradient colors={['#1A214F', '#252E6F']} style={{marginTop: 10}}>
      <View
        style={{
          borderWidth: 1.5,
          borderColor: colors.secondary,
          padding: 10,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assests/image1.jpeg')}
            style={styles.image}
          />
          <View style={{marginLeft: 15, flex: 1}}>
            <Text style={[styles.text, {fontSize: 16}]}>{scrip_name}</Text>
            <Text style={styles.text}>Equity</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={styles.text}>Value</Text>
              <Text style={styles.text}>Pledge Quantity</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>{'\u20B9'} 47,000 </Text>
              <View
                style={{
                  borderWidth: 1,
                  width: '50%',
                  borderColor: '#828DFF',
                  backgroundColor: '#171C48',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  fontSize: 17,
                  padding: 5,
                  color: 'white',
                }}>
                <Text style={{color:colors.whiteColor}}>{pledgeQuantityValue}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={[
              styles.text,
              {color: colors.secondary, marginRight: 8, fontSize: 15},
            ]}>
            Max: {max_loan_amount}
          </Text>
          <TouchableOpacity onPress={handleCheckboxClick}>
            <Icon
              name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={25}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  text: {
    color: colors.whiteColor,
  },
});
