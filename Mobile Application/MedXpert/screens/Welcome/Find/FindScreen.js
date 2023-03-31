import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectDropdown from 'react-native-select-dropdown'


const Stack = createNativeStackNavigator()

import SearchFilterButtons from './SearchFiltersButtons'

import NearbyDoctor from './NearbyDoctor'
import NearbyHospital from './NearbyHospital'
import NearByPharmacy from './NearByPharmacy'




const FindScreen = ({ navigation }) => {
  const [enteredText, setText] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.ButtonsRow}>
        <SearchFilterButtons navigation={navigation} />
      </View>
      <View style={styles.Stackcontainer}>
        <Stack.Navigator
          initialRouteName='NearbyHospital'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='NearbyDoctor' component={NearbyDoctor} />
          <Stack.Screen name='NearbyHospital' component={NearbyHospital} />
          <Stack.Screen name='NearByPharmacy' component={NearByPharmacy} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  },
  SearchBarRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  searchbar: {
    width: '100%',
    padding: 3
  },
  ButtonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  Stackcontainer: {
    flex: 9,
    marginLeft: 4,
    marginRight: 4,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
})

export default FindScreen
