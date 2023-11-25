import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import CustomHeader from '../components/customHeader';
import colors from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import RnRangeSlider from 'rn-range-slider';
import Fund from '../components/fund';
import CustomButton from '../components/customButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import stockData from '../Data/stockData';

export default function Portfolio({navigation}) {
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([25000]);

  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

  const sliderOneValuesChange = values => setSliderOneValue(values);

  sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

  return (
    <View style={styles.container}>
      <CustomHeader
        showImage={false}
        showBackIcon={true}
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'Loan against mutual fund'}
      />
      <ScrollView>
        <LinearGradient
          colors={['#1A214F', '#252E6F']}
          style={styles.linearGradient}>
          <Text style={styles.amountText}>Set Loan Amount</Text>

          <MultiSlider
            values={sliderOneValue}
            sliderLength={310}
            onValuesChangeStart={sliderOneValuesChangeStart}
            onValuesChange={sliderOneValuesChange}
            min={25000}
            max={81000}
            step={1000}
            style={{padding: 0, margin: 0}}
            valuePrefix="min"
            // onValuesChangeFinish={sliderOneValuesChangeFinish}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={styles.text}>Min. {'\u20B9'}25000</Text>
            <Text style={styles.text}>Max. {'\u20B9'}81000</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#828DFF',
              flexDirection: 'row',
              alignSelf: 'center',
              backgroundColor: '#171C48',
              borderRadius: 10,
              paddingHorizontal: 10,
              width: '60%',
            }}>
            <TextInput
              style={{
                padding: 8,
                color: 'white',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: '600',
                paddingLeft: '35%',
              }}
              editable={false}
              value={`₹${sliderOneValue[0]}`}
            />
          </View>
        </LinearGradient>

        <Text style={[styles.amountText,{marginTop:15}]}>Pledge your Mutual Fund</Text>

        {stockData.slice(0, 5).map(item => (
          <Fund
            key={item.id}
            scrip_name={item.scrip_name}
            max_loan_amount={item.max_loan_amount}
            quantity={item.quantity}
          />
        ))}
        <LinearGradient
          colors={['#1A214F', '#252E6F']}
          style={styles.linearGradient}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.text, {marginRight: 5}]}>
                  Flexible Term
                </Text>
                <Icon
                  name="information-outline"
                  size={28}
                  color={colors.secondary}
                />
              </View>
              <Text style={[styles.text, {fontWeight: '600'}]}>12 months</Text>
            </View>

            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={[styles.text, {marginRight: 5}]}>
                  Interest Rate
                </Text>
                <Icon
                  name="information-outline"
                  size={28}
                  color={colors.secondary}
                />
              </View>
              <Text style={[styles.text, {fontWeight: '600'}]}>18% P.a</Text>
            </View>
          </View>

          <View style={{alignSelf: 'center', marginTop: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.text, {marginRight: 5}]}>Loan Amount</Text>
              <Icon
                name="information-outline"
                size={28}
                color={colors.secondary}
              />
            </View>
            <Text
              style={{
                color: colors.secondary,
                fontSize: 17,
                fontWeight: '600',
              }}>
              {'\u20B9'} 50,000
            </Text>
          </View>
        </LinearGradient>

        <CustomButton
          style={{width: '30%'}}
          title={'Confirm'}
          onPress={() => {}}
        />
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
  linearGradient: {
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
  },
  amountText: {
    fontSize: 17,
    color: colors.whiteColor,
    textAlign: 'center',
    fontWeight: '600',

  },
  text: {
    color: colors.whiteColor,
  },
});
