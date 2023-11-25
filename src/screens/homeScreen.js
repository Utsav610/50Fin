import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart';
import CustomButton from '../components/customButton';
import stockData from '../Data/stockData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import CustomHeader from '../components/customHeader';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export default function HomeScreen({ navigation }) {

  const widthAndHeight = 250;
  const series = [50, 25, 25];
  const data = [50, 20, 60, 80, 45, 91, 44, 50,]
  const sliceColor = ['#7CC7FE', colors.onSecondary, colors.secondary];

  const type = ['Small Cap', 'Mid Cap', 'Large Cap'];

  const renderViewMoreButton = ({ navigation }) => (
    <TouchableOpacity
      style={{
        borderTopWidth: 1,
        borderTopColor: colors.onSecondary,
        backgroundColor: colors.secondaryBackgroundColor,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        padding: 15,
      }}
      onPress={() => {
        navigation.navigate('Amc');
      }}>
      <Text style={{ color: colors.secondary }}>See All AMC</Text>
    </TouchableOpacity>
  );

  const renderListItem = ({ item }) => (
    <View style={{ padding: 10, width: '49%' }}>
      <Image source={require('../assests/image1.jpeg')} style={styles.image} />
      <Text style={{ color: 'white' }}>{item.scrip_name}</Text>
    </View>
  );

  const [searchText, setSearchText] = useState('');
  
  const filteredStockData = stockData.filter(item =>
    item.scrip_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <CustomHeader showImage={true} showBackIcon={false} />
      <ScrollView>
        <LinearGradient
          colors={['#104C7A', '#07304F', '#083250']}
          style={styles.linearGradient}>
          <View style={styles.sectionContainer}>
            <Image source={require('../assests/refer.jpeg')} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={styles.sectionText}>
              Help people you know obtain a loan against their mutual funds at
              X5 per month
            </Text>
          </View>
        </LinearGradient>

        <Text style={styles.titleText}>Portfolio Analysis</Text>
        <LinearGradient
          colors={['#104C7A', '#07304F', '#083250']}
          style={[styles.linearGradient]}>
          <View style={styles.portfolioContainer}>
            <View style={styles.portfolioTextContainer}>
              <Text style={{ color: colors.whiteColor }}>Fetch Portfolio</Text>
              <Text style={{ color: colors.whiteColor, marginTop: 15 }}>Get a free x-ray of your investment</Text>
            </View>
            <View style={styles.portfolioIconContainer}>
              <Icon name="chevron-right" size={28} color={colors.blackColor} />
            </View>
          </View>
          <AreaChart
            style={{ height: 105 }}
            data={data}
            showGrid={false}
            contentInset={{ top: 0, bottom: 0 }}
            curve={shape.curveNatural}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          >
            <Grid />
          </AreaChart>
        </LinearGradient>

        <View
          style={{ backgroundColor: '#0A0C1F', borderRadius: 20, marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 15,
            }}>
            {type.map((item, index) => (
              <View
                key={index}
                style={{
                  marginRight: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 20,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: sliceColor[index],
                    marginRight: 5,
                  }}
                />
                <Text style={{ color: 'white' }}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={{ alignSelf: 'center' }}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.6}
              coverFill={'#1F2660'}
            />
          </View>
        </View>

        <CustomButton
          title={'Fetch Portfolio'}
          onPress={() => {
            navigation.navigate('Portfolio');
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ color: colors.whiteColor, fontSize: 18, fontWeight: 700 }}>
            AMC
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.onSecondary,
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems: 'center',
              backgroundColor: colors.secondaryBackgroundColor,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
            style={{width:'40%' , color:colors.whiteColor}}
              placeholder="Search AMC"
              placeholderTextColor={colors.gray}
              onChangeText={(text)=>{setSearchText(text)}}
            />
            <Icon name="magnify" size={28} color={colors.whiteColor} />
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: colors.onSecondary,
            marginBottom: 50,
            marginTop: 15,
            borderRadius: 15,
          }}>

          <FlatList
            data={searchText.length>0 ? filteredStockData:stockData.slice(0, 6)}
            renderItem={renderListItem}
            numColumns={2}
            ListFooterComponent={() => renderViewMoreButton({ navigation })}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackColor,
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  headerText: {
    color: 'white',
  },
  linearGradient: {
    borderRadius: 10,
    marginTop: 20,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    flex: 1
  },
  sectionText: {
    color: 'white',
    flexWrap: 'wrap',
    flex: 1
  },
  titleText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 15,
  },
  portfolioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  portfolioTextContainer: {
    flex: 1,
  },
  portfolioIconContainer: {
    backgroundColor: colors.secondary,
    padding: 8,
    borderRadius: 10,
  },
  fetchText: {
    color: colors.blackColor,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 15,
  },
});
