import * as React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainBox}>
        <View style={styles.profileInformationrowPicture}>
          <View style={{ width: '40%' }}>
            <Image
              source={require('../../../assets/patient.png')}
              resizeMode='contain'
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={{ width: '60%', flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 23,

                fontWeight: 'bold',
                color: 'black',
                margin: 5
              }}
            >
              Behzad Qasim
            </Text>
            <Text
              style={{
                fontSize: 14,

                color: 'black',
                fontWeight: '700',
                margin: 5
              }}
            >
              ID# FA19-BCS-107
            </Text>
            <Text
              style={{
                fontSize: 14,

                color: 'black',
                margin: 5
              }}
            >
              Full Stack Developer Specialist
            </Text>
          </View>
        </View>
        <View style={styles.profileInformation}>
        <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  Email
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                getmetobehzad@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  Phone
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                0300-0000000
              </Text>
            </View>
          </View>
          <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  Address
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                I8/2 Islamabad
              </Text>
            </View>
          </View>
          <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  CNIC
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                33303-1234567-8
              </Text>
            </View>
          </View>
          <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  Gaurdian
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                0300-5563206 (Qasim)
              </Text>
            </View>
          </View>
          <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  Address
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                I8/2 Islamabad
              </Text>
            </View>
          </View>
          <View style={styles.profileInformationrow}>
            <View style={styles.profileInformationrowLabel}>
              <Text
                style={styles.profileInformationrowLabelText}>
                  Gaurdian
              </Text>
            </View>
            <View style={styles.profileInformationrowValue}>
              <Text
                style={styles.profileInformationrowValueText}>
                0300-5563206 (Qasim)
              </Text>
            </View>
          </View>
        </View>
      </View>
        <View style={styles.signOutButtonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <View style={styles.signOutButtonRowInside}>
              <Image
                source={require('../../../assets/power-off.png')}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: 'white' }}
              />
              <Text style={{ letterSpacing: 1, color: 'white', fontSize: 16 ,fontWeight: '700'}}>
                {' '}
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
  },
  mainBox: {
    flex: 2,
    flexDirection: 'column',
  },
  profileInformation: {
    marginTo: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 2,
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#2A1D53',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
  },
  profileInformationrowPicture: {
    padding: 2,
    margin: 1,
    backgroundColor: "#22a0db",
    borderRadius: 10,
    borderColor: 'silver',
    flexDirection: 'row',
    shadowColor: '#2A1D53',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  profileInformationrow: {
    textAlignVertical: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 0,
    flexDirection: 'row',
    borderBottomColor: 'silver',
    borderBottomWidth: 1
  },
  profileInformationrowLabel:{
    width: '40%',
  },
  profileInformationrowLabelText:{
    fontSize: 17,
    color: 'black ',
    fontWeight: '500'
  },
  profileInformationrowValue:{
  width: '60%',
  },
  profileInformationrowValueText:{
    fontSize: 15,
    color: 'black',
    justifyContent: 'center'
  },
  signOutButtonRow: {
    flex: 1,
    margin: 1,
    justifyContent: 'center',
  },
  signOutButtonRowInside:{
    flexDirection: 'row', 
    padding: 0, 
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10
  }
})

export default ProfileScreen;
