import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FinanceNavigation from './src/navigation/financeNavigation';
import HomeNavigation from './src/navigation/homeNavigation';
import { combineReducers, createStore } from 'redux';
import { authReducer } from './src/redux/reducer';
import { Provider } from 'react-redux';

const rootReducer=combineReducers({
  authReducer
})

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <FinanceNavigation/>
    </Provider>
  )
}

const styles = StyleSheet.create({})