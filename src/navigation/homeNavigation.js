import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Home from '../screens/homeScreen';
import Profile from '../screens/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function HomeNavigation({ navigation }) {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'home';
        break;
      case 'title2':
        icon = 'account-circle';
        break;
    }

    return (
      <Icon
        name={icon}
        size={30}
        color={routeName === selectedTab ? colors.secondary : colors.whiteColor}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor='#232A2A'
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity style={styles.button}>
            <Icon name={'currency-inr'} color="#828DFF" size={30} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBarExpo.Screen
        name="title1"
        position="LEFT"
        component={() => <Home navigation={navigation} />}
      />
      <CurvedBottomBarExpo.Screen
        name="title2"
        component={() => <Profile navigation={navigation} />}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B45AC',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    borderWidth: 2,
    borderColor: '#828DFF'
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});
