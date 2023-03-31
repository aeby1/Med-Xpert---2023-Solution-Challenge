import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileInformation = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.mainBox}>
      <View style={styles.profileInformationrowPicture}>
        <View style={{width: '40%'}}>
          <Image
            source={require('../../assets/behzad.png')}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={{width: '60%', flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 23,
          
              fontWeight: 'bold',
              color: 'black',
              margin: 5,
            }}>
            Behzad Qasim
          </Text>
          <Text
            style={{
              fontSize: 14,
             
              color: 'black',
              fontWeight: '700',
              margin: 5,
            }}>
            ID# FA19-BCS-107
          </Text>
          <Text
            style={{
              fontSize: 14,
           
              color: 'black',
              margin: 5,
            }}>
            Full Stack Developer Specialist
          </Text>
        </View>
      </View>
      <View style={styles.profileInformation}>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
              
                color: 'black',
                fontWeight: '700',
              }}>
              Email
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                justifyContent: 'center',
              }}>
              getmetobehzad@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                fontWeight: 'bold',
              }}>
              CNIC
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                justifyContent: 'center',
              }}>
              33302-1234567-1
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                fontWeight: '700',
              }}>
              Date of Birth
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                justifyContent: 'center',
              }}>
              02/04/2001
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
             
                color: 'black',
                fontWeight: '700',
              }}>
              Blood Group
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
            
                color: 'black',
                justifyContent: 'center',
              }}>
              O+ve
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
              
                color: 'black',
                fontWeight: '700',
              }}>
              Phone
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
              
                color: 'black',
                justifyContent: 'center',
              }}>
              0300-5563206
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
              
                color: 'black',
                fontWeight: '700',
              }}>
              Address
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
                
                color: 'black',
                justifyContent: 'center',
              }}>
              House 69, Street-48, I8/2
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                fontWeight: '700',
              }}>
              City
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
              
                color: 'black',
                justifyContent: 'center',
              }}>
              Islamabad
            </Text>
          </View>
        </View>
        <View style={styles.profileInformationrow}>
          <View style={{width: '40%'}}>
            <Text
              style={{
                fontSize: 17,
              
                color: 'black',
                fontWeight: '700',
              }}>
              Gaurdian
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
               
                color: 'black',
                justifyContent: 'center',
              }}> 
              0300-5563206 (Qasim)
            </Text>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
 
  );
};


function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
  <View style={styles.container}>
      <View style={styles.topButtons}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Dashboard')}>
          <Image
            source={require('../../assets/back.png')}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text  style={{width:'80%',textAlign:'center',
      fontSize: 24,
      fontWeight: 'bold',

      color: 'black',
      }}>
          Profile
        </Text>
        
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={require('../../assets/power-off.png')}
            resizeMode="contain"
            style={{width: 30, height: 30, tintColor: 'red'}}
          />
        </TouchableOpacity>
      </View>
      <ProfileInformation />
      <View style={styles.signOutButtonRow}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <View style={{flexDirection:'row',padding:0,margin:0,}}>
        <Image
            source={require('../../assets/power-off.png')}
            resizeMode="contain"
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        <Text style={{  letterSpacing: 1,color: "white",fontSize: 15 }}>   Sign Out</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    margin:20,
  },
  topButtons: {
    height: '5%',
    flexDirection: 'row',
    width: '100%',
  },
  backButton: {
    width: '10%',
  },
  logoutButton: {
    width: '10%',
  },
  mainBox: {
    margin:10,
    height: '74%',
    flexDirection: 'column',
  },
  profileInformation: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#2A1D53',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  profileInformationrowPicture: {
    height: '22%',
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'silver',
    flexDirection: 'row',
    shadowColor: '#2A1D53',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  profileInformationrow: {
    height: '7%',
    textAlignVertical: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
  },
  signOutButtonRow: {
    margin: 20,
    height: '5%',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});
