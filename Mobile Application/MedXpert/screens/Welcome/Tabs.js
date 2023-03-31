import * as React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Avatar } from 'react-native-paper'

import HomeScreen from './Home/HomeScreen'
import FindScreen from './Find/FindScreen'
import ProfileScreen from './Profile/ProfileScreen'
import ChatScreen from './Chat/ChatScreen'
import SettingScreen from './Setting/SettingScreen'
import MedicineScreen from './Home/Medicine'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            position: 'absolute',
            paddingBottom: 40,
            borderTopColor: '#ED8A0A',
            backgroundColor: '#EFF5F5',
            height: 85,
            ...styles.shadow,
          }
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10
                }}
              >
                <Image
                  source={require('../../assets/home.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                    tintColor: focused ? '#492B7C' : 'silver'
                  }}
                />
                <Text
                   style = {{color: focused ? '#492B7C' : 'silver', fontSize: 10, fontWeight: '400'}}
                    >Home</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='FindScreen'
          component={FindScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10
                }}
              >
                <Image
                  source={require('../../assets/search.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                    tintColor: focused ? '#492B7C' : 'silver'
                  }}
                />
               <Text
                   style = {{color: focused ? '#492B7C' : 'silver', fontSize: 10}}
                    >Find</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                    tintColor: focused ? '#492B7C' : 'silver'
                  }}
                  source={require('../../assets/patient.png')}
                />
                 <Text
                   style = {{color: focused ? '#492B7C' : 'silver', fontSize: 10}}
                    >Profile</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Chat'
          component={ChatScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10
                }}
              >
                <Image
                  source={require('../../assets/chat.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                    tintColor: focused ? '#492B7C' : 'silver'
                  }}
                />
                <Text
                   style = {{color: focused ? '#492B7C' : 'silver', fontSize: 10}}
                    >Chat</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Setting'
          component={SettingScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10
                }}
              >
                <Image
                  source={require('../../assets/setting.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    marginBottom: 5,
                    tintColor: focused ? '#492B7C' : 'silver'
                  }}
                />
                <Text
                   style = {{color: focused ? '#492B7C' : 'silver', fontSize: 10}}
                    >Setting</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    flexDirection: 'column',
    backgroundColor: 'silver',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.01,
    shadowRadius: 1.5,
    elevation: 1
  }
})

export default Tabs
