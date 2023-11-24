import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function Fund() {
  return (
    <LinearGradient
      colors={['#1A214F', '#252E6F']}
      style={{ marginTop: 10 }}
    >
      <View style={{ borderWidth: 1.5, borderColor: colors.secondary, padding: 10, borderRadius: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assests/image1.jpeg')} style={styles.image} />
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={[styles.text, { fontSize: 16 }]}>Nippon Growth Fund</Text>
            <Text style={styles.text}>Equity</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={styles.text}>Value</Text>
              <Text style={styles.text}>Pledge Quntity</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.text}>Value</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#828DFF',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#171C48',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginLeft: 35,
                  width: '60%'
                }}>
                <TextInput
                  style={{ padding: 8 }}
                  editable={false}
                // value={searchText}
                // onChangeText={text => setSearchText(text)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
          <Text style={[styles.text, { color: colors.secondary, marginRight: 8, fontSize: 15 }]}>Max: 6205.50</Text>
          <TouchableOpacity onPress={() => { }}>
            <Icon name="checkbox-blank-outline" size={25} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  text: {
    color: colors.whiteColor
  }
})