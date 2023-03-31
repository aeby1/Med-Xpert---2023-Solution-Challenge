import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import * as Location from 'expo-location'

const MedicineScreen = ({ navigation }) => {
  const MedicineItem = (props) => {
    return (
      <View style={styles.AppointmentBox}>
          <View style={{ width: '20%' , justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/medicine.png')}
              resizeMode='contain'
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={{ width: '50%' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: '400',
                  color: '#FFF'
                }}
              >
                {props.name}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: 'silver'
                }}
              >
                By Dr. Ali
              </Text>
            </View>
          </View>
          <View style={{ width: '30%', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 32, color: 'white' }}>{props.Day}</Text>
              <Text style={{ fontSize: 9 , color: 'white' }}>Days</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../../assets/morning.png')}
                resizeMode='contain'
                style={{ width: 20, margin: 2 ,height: 20 }}
                
              />

              <Image
                source={require('../../../assets/sun.png')}
                resizeMode='contain'
                style={{ width: 20, margin: 2 ,height: 20 }}
              />

              <Image
                source={require('../../../assets/night1.png')}
                resizeMode='contain'
                style={{ width: 20, margin: 2 ,height: 20 }}
              />
            </View>
          </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.MedinceHeaderBox}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.HeaderBoxTitle}>Medicine</Text>
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            style={styles.ExitButton}
            onPress={() => {
              navigation.navigate('Dashboard')
            }}
          >
            <Text style={{ textAlign: 'center' }}>Done</Text>
          </TouchableOpacity>
        </View>
       
      </View>
      <Text style={styles.MedinceModeText} >Active Medicines</Text>
      <View style={styles.MedicineBox}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <MedicineItem name = {"Panadol 5mg"} Day = {2} />
          <MedicineItem name = {"Calpol"} Day = {3} />
          <MedicineItem name = {"Flagyl"} Day = {2} />
          <MedicineItem name = {"Amoxil 200mg"} Day = {1} />
          <MedicineItem name = {"Panadol 10mg"} Day = {2} />
          <MedicineItem name = {"Panadol 5mg"} Day = {2} />
          <MedicineItem name = {"Calpol"} Day = {3} />
          <MedicineItem name = {"Flagyl"} Day = {2} />
          <MedicineItem name = {"Amoxil 200mg"} Day = {1} />
          <MedicineItem name = {"Panadol 10mg"} Day = {2} />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 35
  },
  MedinceHeaderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  MedicineBox: {
    flex: 11
  },
  HeaderBoxTitle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black'
  },
  MedinceModeText:{
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black'
  },
  AppointmentBox: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#492B7C',
    justifyCont1nt: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    borderBottomColor: '#2c3e50',
    borderBottomWidth: 1
  },
  ExitButton: {
    width: '100%',
    borderRadius: 10,
    height: 30,
    justifyContent: 'center'
  }
})

export default MedicineScreen
