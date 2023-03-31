import React, { useState, useEffect } from 'react';
import { View ,Text , StyleSheet , Image ,Button, TouchableOpacity } from 'react-native';

// import { HeaderBackButton } from "@react-navigation/stack";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import FindScreen from './screens/Welcome/Find/FindScreen';
import MedicineScreen from './screens/Welcome/Home/Medicine';
import SignUpScreen from './screens/SignUp/Index';
import LoginScreen from './screens/Login/Index';
import Tabs from './screens/Welcome/Tabs';
import ProfileScreen from './screens/Welcome/Profile';
import CheckVitalScreen from './screens/Welcome/Home/CheckVital';


const Stack = createNativeStackNavigator();

function StartScreen({navigation}) {
  return (
      <View style={styles.container}>
      <View style={styles.LogoImage}>
      <Image style={styles.imageStyling} source = {require('./assets/newLogo.png')} />
      </View>
      <View style={styles.ButtonBox}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{  letterSpacing: 1,color: "white",fontSize: 22 }}>Start</Text>
      </TouchableOpacity>
      </View>
      
    </View>  
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 , backgroundColor: '#f4511e'}}
      source={require('./assets/back.png')}
    />
  );
}

const App = () => {

  return (
       <NavigationContainer>
       <Stack.Navigator 
       initialRouteName="StartScreen" 
       screenOptions={{
         headerShown: false
       }}
       >
       <Stack.Screen name="StartScreen" component={StartScreen} />
       <Stack.Screen name="ProfileScreen" component={ProfileScreen}
      //  options={{
      //   headerLeft: ({ navigation }) => (
      //     <HeaderBackButton onPress={() => navigation.goBack()} />
      //   ),
      // }} 
      // options={{
      //   headerShown:true,
      //   headerBackImageSource:require('./assets/back.png'),
      //   title: 'Profile',
      //   headerStyle: {
      //     backgroundColor: '#f4511e',
      //   },
      //   headerTintColor: 'white',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
          
      //   },
      // }}
      // options={{ 
      //   headerShown:true,
      //   headerBackImageSource:require('./assets/back.png')
      //     }} 
       />
      <Stack.Screen name="CheckVitalScreen" component={CheckVitalScreen} />
       <Stack.Screen name="FindScreen" component={FindScreen} />
       <Stack.Screen name="MedicineScreen" component={MedicineScreen} />
       <Stack.Screen name="Dashboard" component={Tabs} />
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
     </Stack.Navigator>
   </NavigationContainer>   
  );
};

export default App;
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: '#69697b',
    backgroundColor: 'black',
  },
  LogoImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  ButtonBox:{
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#22a0db",
    padding: 10,
    width: '60%',
    borderRadius: 5,
    height: 40,
  },
  imageStyling:{
     width:300,
     height:100,
    shadowColor: 'pink',
    shadowColor: "#69697b",
    shadowOffset: { height: 5},
    shadowOpacity: 0.5,
  },
});
