import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/customHeader'

export default function Portfolio({navigation}) {

  return (
    <View>
        <CustomHeader
        showImage={false} showBackIcon={true}
        onBackPress={()=>{navigation.goBack()}}
        title={'Loan against mutual fund'}
        />
      <Text>P</Text>
    </View>
  )
}

const styles = StyleSheet.create({})