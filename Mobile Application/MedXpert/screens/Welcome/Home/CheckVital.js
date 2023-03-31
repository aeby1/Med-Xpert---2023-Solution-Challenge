import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import axios from 'axios'

const CheckVitalScreen = ({ navigation }) => {
  const [ipAddress, setipAddress] = useState('')
  const [data, setData] = useState({})
  const [loginloading, setloginloading] = useState(false)
  const [heartrate, setheartrate] = useState({'value': 0,'unit': 'bpm'})
  const [temperature, settemperature] = useState({'value': 0,'unit': '°C'})
  const [bloodoxygenlevel, setbloodoxygenlevel] = useState({'value': 0,'unit': 'mm Hg'})

  const fetch_heart_beat = () => {
    setloginloading(true)
    const options = {
      method: 'GET',
      url: 'http://' + ipAddress + '/',
      headers: {}
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data['BPM'])
        setheartrate({'value': response.data['BPM'],'unit': 'bpm'})
        // setData(response.data)
        // // setData(JSON.parse(response.data));
        // console.log(typeof data)
      })
      .catch(function (error) {
        console.error(error)
      })
    console.log('Fetching Bpm from device... ' + ipAddress)
    setloginloading(false)
  }

  const fetch_spo2 = () => {
    setloginloading(true)
    const options = {
      method: 'GET',
      url: 'http://' + ipAddress + '/',
      headers: {}
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data['SpO2'])
        setbloodoxygenlevel({'value': response.data['SpO2'],'unit': 'bpm'})
      })
      .catch(function (error) {
        console.error(error)
      })
    console.log('Fetching temperature from device... ' + ipAddress)
    setloginloading(false)
  }

  const fetch_temperature = () => {
    setloginloading(true)
    const options = {
      method: 'GET',
      url: 'http://' + ipAddress + '/',
      headers: {}
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data['TEMPERATURE'])
        settemperature({'value': response.data['TEMPERATURE'],'unit': 'mm Hg'})
      })
      .catch(function (error) {
        console.error(error)
      })
    console.log('Fetching temperature from device... ' + ipAddress)
    setloginloading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={styles.HeaderBoxTitle}>Your Current Vital</Text>
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
      <View style={styles.vitalConnectionBox}>
      <Text style={styles.MedinceModeText}>Connect Your Device On Network</Text>
        <View style={styles.Row}>
          <View style={{flex: 2,}}>
          <TextInput
            style={styles.input}
            onChangeText={setipAddress}
            value={ipAddress}
            placeholder='Enter IP Address of Your Device'
            placeholderTextColor={'silver'}
          />
          </View>
          <View style={{flex: 1,}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {setipAddress(ipAddress)}}
          >
            {loginloading ? (
              <ActivityIndicator size='small' color='#fff' />
            ) : null}
            <Text style={{ color: 'white', fontSize: 16 }}>Connect</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View> 
      <View style={styles.vitalBox}>
        <View style={styles.vitalBoxRow}>
          <View style={styles.vitalBoxCol}>
            <TouchableOpacity style={[styles.vitalBoxInfo, { backgroundColor: '#F65A83' }]} onPress={()=>{fetch_heart_beat()}} >
              <View style={styles.vitalBoxInfoHeader}>
                <Text style={{fontSize: 10,fontWeight: '600',color: 'white', flex: 1,
                justifyContent: 'center',textAlign: 'center', marginStart: 10}}>Heart Rate</Text>
                <Image
                  source={require('../../../assets/heart-rate1.png')}
                  resizeMode='contain'
                  style={{ width: 40, height: 40, padding: 15,
                    flex: 1,justifyContent: 'center',alignItems: 'center',
                  }}
                />
              </View>
              <View style={styles.vitalBoxInfoBody}>
              <View style={{alignItems: 'baseline',flexDirection: 'row'}}>
                  {
                    heartrate["value"] == 0 ? 
                    <View>
               <Text style={{fontSize: 30,fontWeight: 'bold',color: 'white'}}> Tap </Text>
                 </View>
                    :
                    <View>
                       <Text style={{fontSize: 45,fontWeight: '800',color: 'white'}}> {heartrate["value"]} </Text>
                  <Text style={{fontSize: 18,fontWeight: '600',color: 'white'}}> {heartrate["unit"]} </Text>
                    </View>
                  }
                  </View>
              </View>
              <View style={styles.vitalBoxInfoFooter}>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>80-120</Text>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>Healthy</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.vitalBoxCol}>
            <TouchableOpacity style={[styles.vitalBoxInfo, { backgroundColor: '#98A8F8' }]} onPress={()=>{fetch_spo2()}}>
              <View style={styles.vitalBoxInfoHeader}>
                <Text style={{fontSize: 10,fontWeight: '600',color: 'white', flex: 1,
                justifyContent: 'center',textAlign: 'center', marginStart: 10}}>Blood Oxygen Level</Text>
                <Image
                  source={require('../../../assets/oxygen-saturation.png')}
                  resizeMode='contain'
                  style={{ width: 60, height: 40, padding: 15,
                    flex: 1,justifyContent: 'center',alignItems: 'center',
                  }}
                />
              </View>
              <View style={styles.vitalBoxInfoBody}>
              <View style={{alignItems: 'baseline',flexDirection: 'row'}}>

              {
                    bloodoxygenlevel["value"] == 0 ? 
                    <View>
               <Text style={{fontSize: 30,fontWeight: 'bold',color: 'white'}}> Tap </Text>
                 </View>
                    :
                    <View>
                       <Text style={{fontSize: 45,fontWeight: '800',color: 'white'}}> {bloodoxygenlevel["value"]} </Text>
                  <Text style={{fontSize: 18,fontWeight: '600',color: 'white'}}> {bloodoxygenlevel["unit"]} </Text>
                    </View>
                  }
                  </View>
              </View>
              <View style={styles.vitalBoxInfoFooter}>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>95-100</Text>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>Normal</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.vitalBoxRow}>
          <View style={styles.vitalBoxCol}>
            <TouchableOpacity
              style={[styles.vitalBoxInfo, { backgroundColor: '#FD8A8A' }]} onPress={()=>{fetch_temperature()}}>
              <View style={styles.vitalBoxInfoHeader}>
                <Text style={{fontSize: 10,fontWeight: '600',color: 'white', flex: 1,
                justifyContent: 'center',textAlign: 'center', marginStart: 10}}>Temperature</Text>
                <Image
                  source={require('../../../assets/thermometer.png')}
                  resizeMode='contain'
                  style={{ width: 30, height: 30, padding: 15,
                    flex: 1,justifyContent: 'center',alignItems: 'center',
                  }}
                />
              </View>
              <View style={styles.vitalBoxInfoBody}>
              <View style={{alignItems: 'baseline',flexDirection: 'row'}}>
              {
                    temperature["value"] == 0 ? 
                    <View>
               <Text style={{fontSize: 30,fontWeight: 'bold',color: 'white'}}> Tap </Text>
                 </View>
                    :
                    <View>
                       <Text style={{fontSize: 45,fontWeight: '800',color: 'white'}}> {temperature["value"]} </Text>
                  <Text style={{fontSize: 18,fontWeight: '600',color: 'white'}}> {temperature["unit"]} </Text>
                    </View>
                  }
                  </View>
              </View>
              <View style={styles.vitalBoxInfoFooter}>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>36.1°C - 37.2°C</Text>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>Normal</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.vitalBoxCol}>
          <TouchableOpacity
              style={[styles.vitalBoxInfo, { backgroundColor: '#42C2FF' }]}
              
            >
              <View style={styles.vitalBoxInfoHeader}>
                <Text style={{fontSize: 10,fontWeight: '600',color: 'white', flex: 1,
                justifyContent: 'center',textAlign: 'center', marginStart: 10}}>Blood Glucose Level</Text>
                <Image
                  source={require('../../../assets/glucometer.png')}
                  resizeMode='contain'
                  style={{ width: 35, height: 35, padding: 15,

                    flex: 1,justifyContent: 'center',alignItems: 'center',
                  }}
                />
              </View>
              <View style={styles.vitalBoxInfoBody}>
                <View style={{alignItems: 'baseline',flexDirection: 'row'}}>
                <Text style={{fontSize: 45,fontWeight: '800',color: 'white'}}>70 </Text>
                  <Text style={{fontSize: 18,fontWeight: '600',color: 'white'}}>mg/dL</Text>
                </View>
              </View>
              <View style={styles.vitalBoxInfoFooter}>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>70 mg/dL - 100 mg/dL</Text>
              <Text style={{fontSize: 12,fontWeight: '400',color: 'white'}}>Normal</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
  Header: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  vitalConnectionBox:{
    flex: 1,
    justifyContent: 'center',
  },
  HeaderBoxTitle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black'
  },
  MedinceModeText: {
    fontSize: 22,
    marginHorizontal: 10,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black'
  },
  button: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#22a0db',
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  Row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'black',
    borderColor: 'silver',
    width: '90%',
    fontSize: 13
  },
  vitalBox: {
    flex: 6,
    // borderWidth: 1,
    flexDirection: 'column'
  },
  vitalBoxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 5
  },
  vitalBoxCol: {
    flex: 1
  },
  vitalBoxInfo: {
    backgroundColor: 'pink',
    height: 180,
    width: '97%',
    borderRadius: 10,
    borderTopRightRadius: 50,
    flexDirection: 'column'
  },
  vitalBoxInfoHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vitalBoxInfoBody: {
    flex: 2,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vitalBoxInfoFooter: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  }
})

export default CheckVitalScreen



{/* <Text style={styles.MedinceModeText}>BPM : {data['BPM']}</Text>
        <Text style={styles.MedinceModeText}>SpO2 : {data['SpO2']}</Text>
        <Text style={styles.MedinceModeText}>
          Temperature : {data['TEMPERATURE']}
        </Text> */}