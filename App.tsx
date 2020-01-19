import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ChoreBoard from './components/ChoreBoard'

export default function App() {
  return (
    <ChoreBoard/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
