import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native'
import createMapLink from 'react-native-open-maps'
import * as Location from 'expo-location'
import axios from 'axios'
import SelectDropdown from 'react-native-select-dropdown'

const NearbyDoctor = () => {
  const Searchingradius = ['1000', '2000', '50000', '10000']
  const OpenNow = ['Open', 'Closed']

  const [SearchingRadius1, setSearchingRadius1] = useState(1000)
  const [OpenNowCondition, setOpenNowCondition] = useState('Open')

  const [location, setLocation] = useState()
  var latitude,longitude = null
  const [loading, setloading] = useState()

  const [DoctorAroundMe, setDoctorAroundMe] = useState([])

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 30.3753,
    longitude: 69.3451,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09
  })

  const fetchData = async () => {
    var CurrentLocation = latitude + ',' + longitude
    console.log(CurrentLocation)
    var condition = ''
    try {
      if (OpenNowCondition == 'Open') {
        condition += 'true'
      } else {
        condition += 'false'
      }
      const options = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params: {
          location: CurrentLocation,
          radius: String(SearchingRadius1),
          opennow: condition,
          type: 'doctor',
          key: 'AIzaSyC0cUHSMqBteIB9IBItwXdd51WekolYLkU'
        },
        headers: {}
      }
      console.log(options)

      axios
        .request(options)
        .then(function (response) {
          var TempArr = []
          var APIData = response.data['results']
          for (var i = 0; i < APIData.length; i++) {
            var NewObj = {}
            NewObj['name'] = APIData[i]['name']
            NewObj['rating'] = APIData[i]['rating']
            NewObj['location'] = APIData[i]['geometry']['location']
            NewObj['place_id'] = APIData[i]['geometry']['place_id']
            NewObj['address'] = APIData[i]['vicinity']
            TempArr = [...TempArr, NewObj]
          }
          setDoctorAroundMe(TempArr);
          console.log(DoctorAroundMe)
        })
        .catch(function (error) {
          console.error(error)
        })
    } catch (error) {
      console.error(error.message)
    }
  }

  const SetLocation = async location => {
    setLocation(location)
  }

  useEffect(() => {
    setDoctorAroundMe([])
    setloading(false)
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      latitude = location.coords.latitude
      longitude = location.coords.longitude
      SetLocation(location)

      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.099,
        longitudeDelta: 0.099
      })
      fetchData();
      setloading(true)
    })()
  }, [SearchingRadius1,OpenNowCondition])

  const Hospital = props => {
    const SelectedHospitallocation = (fromloc, toloc, place_id) => {
      var sourceAddres = fromloc['latitude'] + ',' + fromloc['longitude']
      var destinationAddres = toloc['lat'] + ',' + toloc['lng']
      createMapLink({
        provider: 'google',
        start: sourceAddres,
        end: destinationAddres,
        endPlaceId: place_id,
        navigate: true
      })
    }

    return (
      <View style={styles.AppointmentBox}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '15%' }}>
            <Image
              source={require('../../../assets/hospital.png')}
              resizeMode='contain'
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={{ width: '75%' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: 'black'
                }}
              >
                {props.HospitalName}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '400',
                  color: 'black'
                }}
              >
                {props.HospitalAddress}
              </Text>
            </View>
          </View>

          <View style={{ width: '10%' }}>
            <TouchableOpacity
              onPress={() => {
                SelectedHospitallocation(
                  props.CurrentLocation,
                  props.HospitalLocation,
                  props.HospitalPlaceId
                )
              }}
            >
              <Image
                source={require('../../../assets/send.png')}
                resizeMode='contain'
                style={{ width: 20, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.SearchingFilterRow}>
        <View style={styles.SearchingFilterBox}>
          <Text style={styles.SearchingFilterTextLabel}>Choose Distance: </Text>
          <SelectDropdown
            data={Searchingradius}
            defaultValueByIndex={0}
            disableAutoScroll
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
              setSearchingRadius1(selectedItem)
              fetchData()
            }}
            buttonTextStyle={styles.SearchingFilterText}
            buttonStyle={styles.SearchingFilterButton}
          />
        </View>
        <View style={styles.SearchingFilterBox}>
          <Text style={styles.SearchingFilterTextLabel}>Opening Hours: </Text>
          <SelectDropdown
            data={OpenNow}
            defaultValueByIndex={0}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
              setOpenNowCondition(selectedItem)
              fetchData()
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
            buttonTextStyle={styles.SearchingFilterText}
            buttonStyle={styles.SearchingFilterButton}
          />
        </View>
      </View>
      {loading ? (
        <View style={styles.AvailablePharmacy}>
          <FlatList
            data={DoctorAroundMe && DoctorAroundMe}
            renderItem={({ item }) => (
              // <Text style={{color: 'red'}}></Text>
              <Hospital
                HospitalName={item['name']}
                HospitalLocation={item['location']}
                HospitalPlaceId={item['place_id']}
                CurrentLocation={location.coords}
                HospitalAddress={item['address']}
              />
            )}
          />
        </View>
      ) : (
        <View style={styles.LoadingScren}>
          <View style={{ margin: '30%' }}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>
              We are fetching Doctors near you. Please Wait.👋
            </Text>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 2,
    paddingRight: 2
  },
  LoadingScren: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height: '100%',
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 1
  },
  AppointmentRow: {
    flex: 1,
    width: '100%',
    margin: 3
  },
  AppointmentRowText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'black'
  },
  AppointmentBox: {
    marginTop: 5,
    padding: 12,
    backgroundColor: '#F9F9F9',
    width: '100%',
    borderRadius: 15,
    borderBottomColor: '#89CFFD',
    borderBottomWidth: 1
  },
  AvailablePharmacy: {
    margin: 2,
    height: '100%'
  },
  SearchingFilterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SearchingFilterBox: {
    width: '50%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  SearchingFilterTextLabel: {
    fontSize: 14,
    color: 'black'
  },
  SearchingFilterText: {
    fontSize: 11,
    color: 'white'
  },
  SearchingFilterButton: {
    width: '50%',
    borderRadius: 5,
    height: 20,
    padding: 1,
    backgroundColor: '#B1B2FF'
  }
})

export default NearbyDoctor
