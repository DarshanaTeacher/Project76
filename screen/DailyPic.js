import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DailyPic(){
  return (
    <View style={styles.container}>
      <Text>Daily Pictures</Text>
      <StatusBar style="auto" />
    </View>
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