import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Image} from 'react-native';
import CustomHeader from '../components/customHeader';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import stockData from '../Data/stockData';

export default function AmcScreen({navigation}) {
  const [searchText, setSearchText] = useState('');

  const filteredStockData = stockData.filter(item =>
    item.scrip_name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderListItem = ({item}) => (
    <View style={{padding: 10, width: '49%'}}>
      <Image source={require('../assests/image1.jpeg')} style={styles.image} />
      <Text style={{color: 'white'}}>{item.scrip_name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        showImage={false}
        showBackIcon={true}
        onBackPress={() => navigation.goBack()}
        title={'AMC'}>
        <View style={styles.searchView}>
          <TextInput
            placeholder="Search AMC"
            placeholderTextColor={'#CCCC'}
            style={{padding: 8, color: colors.whiteColor}}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Icon name="magnify" size={28} color={colors.whiteColor} />
        </View>
      </CustomHeader>
      <FlatList
        data={filteredStockData}
        renderItem={renderListItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
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
  image: {
    width: '100%',
    height: 80,
    borderRadius: 15,
  },
  searchView: {
    borderWidth: 1,
    borderColor: '#828DFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#171C48',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 35,
    width: '60%',
  },
});
