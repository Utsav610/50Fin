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
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart';
import CustomButton from '../components/customButton';
import stockData from '../Data/stockData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import CustomHeader from '../components/customHeader';

export default function HomeScreen({navigation}) {
  console.log('navigation', navigation);
  const widthAndHeight = 250;
  const series = [50, 25, 25];
  const sliceColor = ['#7CC7FE', '#828DFF', '#55FEEE'];

  const type = ['Small Cap', 'Mid Cap', 'Large Cap'];

  const [loadMore, setLoadMore] = useState(true);

  const renderViewMoreButton = ({navigation}) => (
    <TouchableOpacity
      style={{
        borderTopWidth: 1,
        borderTopColor: '#828DFF',
        backgroundColor: '#171C48',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        padding: 15,
      }}
      onPress={() => {
        navigation.navigate('Amc');
      }}>
      <Text style={{color: colors.secondary}}>See All AMC</Text>
    </TouchableOpacity>
  );

  const renderListItem = ({item}) => (
    <View style={{padding: 10, width: '49%'}}>
      <Image source={require('../assests/image1.jpeg')} style={styles.image} />
      <Text style={{color: 'white'}}>{item.scrip_name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader showImage={true} showBackIcon={false} />
      <ScrollView>
        <LinearGradient
          colors={['#104C7A', '#07304F', '#083250']}
          style={styles.linearGradient}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Refer</Text>
            <Text style={styles.sectionText}>
              Help people you know obtain a loan against their mutual funds at
              X5 per month
            </Text>
          </View>
        </LinearGradient>

        <Text style={styles.titleText}>Portfolio Analysis</Text>
        <LinearGradient
          colors={['#104C7A', '#07304F', '#083250']}
          style={[styles.linearGradient, {height: 150, padding: 10}]}>
          <View style={styles.portfolioContainer}>
            <View style={styles.portfolioTextContainer}>
              <Text>Fetch Portfolio</Text>
              <Text>Get a free x-ray of your investment</Text>
            </View>
            <View style={styles.portfolioIconContainer}>
              <Icon name="chevron-right" size={28} color="#000000" />
            </View>
          </View>
        </LinearGradient>

        <View
          style={{backgroundColor: '#0A0C1F', borderRadius: 20, marginTop: 20}}>
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
                <Text style={{color: 'white'}}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={{alignSelf: 'center'}}>
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
          <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 700}}>
            AMC
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#828DFF',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#171C48',
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
              placeholder="Search AMC"
              placeholderTextColor={'#CCCC'}
              style={{padding: 8}}
            />
            <Icon name="magnify" size={28} color={colors.whiteColor} />
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#828DFF',
            marginBottom: 50,
            marginTop: 15,
            borderRadius: 15,
          }}>

          <FlatList
            data={stockData.slice(0, 6)}
            renderItem={renderListItem}
            numColumns={2}
            ListFooterComponent={() => renderViewMoreButton({navigation})}
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
  },
  sectionTitle: {
    color: 'white',
  },
  sectionText: {
    color: 'white',
    flexWrap: 'wrap',
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
