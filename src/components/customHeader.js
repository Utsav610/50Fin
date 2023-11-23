import React from 'react';
import {View, Image, TouchableOpacity ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';


const CustomHeader = ({
  showImage,
  showBackIcon,
  onBackPress,
  title,
  children,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 5,
      }}>
      {showBackIcon && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
      )}

      {showImage && (
        <Image
          source={require('../assests/50Fin.png')}
          style={{width: 60, height: 60}}
          resizeMode="contain"
        />
      )}

      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
        {title && (
          <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
            {title}
          </Text>
        )}
        {children}
      </View>

      <Icon name="bell" size={30} color="white" />
    </View>
  );
};

export default CustomHeader;
