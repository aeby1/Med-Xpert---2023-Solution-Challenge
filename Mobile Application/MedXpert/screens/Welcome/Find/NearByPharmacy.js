import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  FlatList
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import openMap from 'react-native-open-maps';
import * as Location from 'expo-location';
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios';

const NearByPharmacy = () => {
  const [location, setLocation] = useState()
  var latitude,
    longitude = null
  const [loading, setloading] = useState()
  const [arrayOfPharmacy, setarrayOfPharmacy] = useState([])
  var nearByPharmacylocation = []

  const Searchingradius = ["1000", "2000", "50000", "10000"];
  const OpenNow = ["Open", "Closed"];

  const [SearchingRadius1, setSearchingRadius1] = useState(1000);
  const [OpenNowCondition, setOpenNowCondition] = useState("Open");


  const fetchData = async () => {
    var CurrentLocation = latitude + ',' + longitude
    console.log(CurrentLocation)
    try {
      const options = {
        method: 'GET',
        url:
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params: {
          query: 'pharmacy',
          location: CurrentLocation,
          radius: String(SearchingRadius1),
          type: 'pharmacy',
          key: 'AIzaSyC0cUHSMqBteIB9IBItwXdd51WekolYLkU'
        }
      }

      axios
        .request(options)
        .then(function (response) {
          var ReturnData = []
          var APIData = response.data['results']
          for (var i = 0; i < APIData.length; i++) {
            var myobj = {}
            myobj['name'] = APIData[i]['name']
            myobj['lat'] = APIData[i]['geometry']['location']['lat']
            myobj['long'] = APIData[i]['geometry']['location']['lng']
            let obj = {
              pharmacy_name: APIData[i]['name'],
              pharmacy_location: APIData[i]['geometry']['location'],
              pharmacy_user_rating: APIData[i]['user_ratings_total']
            }
            nearByPharmacylocation.push(myobj)

            ReturnData = [...ReturnData, obj]
          }
          var newNearbyPharmacylocation = JSON.stringify(nearByPharmacylocation)
          console.log(newNearbyPharmacylocation)
          setarrayOfPharmacy(ReturnData)
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
    setloading(false)
      ; (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        latitude = location.coords.latitude
        longitude = location.coords.longitude
        SetLocation(location)
        fetchData()
        setloading(true)
      })()
    }, [SearchingRadius1,OpenNowCondition])

  const Pharmacy = props => {
    return (
      <View style={styles.AppointmentBox}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '15%' }}>
            <Image
              source={require('../../../assets/male_doctor.png')}
              resizeMode='contain'
              style={{ width: 30, height: 30 }}
            />
          </View>
          <View style={{ width: '75%' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'black'
                }}
              >
                {props.pharmacy_name}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  paddingTop: 10,
                  color: '#282828'
                }}
              >
                Reviews: {props.pharmacy_user_rating}
              </Text>
            </View>
          </View>

          <View style={{ width: '10%' }}>
            <Image
              source={require('../../../assets/send.png')}
              resizeMode='contain'
              style={{ width: 30, height: 30 }}
            />
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
       
      </View>
    
        {loading ? (

          <View style={styles.AvailablePharmacy}>
            <FlatList
              data={arrayOfPharmacy && arrayOfPharmacy}
              renderItem={({ item }) => (
                // <Text style={{color: 'red'}}></Text>
                <Pharmacy
                  pharmacy_name={item['pharmacy_name']}
                  pharmacy_user_rating={item['pharmacy_user_rating']}
                />
              )}
            />
          </View>

        ) : (
          <View style={styles.LoadingScren}>
          <View style={{margin: '30%',}}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
          <View>
            <Text style={{ fontSize: 12 }}>
              We are fetching pharmacies near you. Please Wait.👋
            </Text>
          </View>
        </View>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    backgroundColor: 'white',
  },
  LoadingScren: {
    justifyContent: 'center',
    alignItems: 'center'
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
    shadowRadius:10,
    elevation: 1,
  },
  AppointmentRow: {
    flex: 1,
    width: '100%',
    margin: 3
  },
  AppointmentRowText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black'
  },
  AppointmentBox: {
    marginTop: 2,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    height: 120,
    borderRadius: 10,
    borderColor: '#7F5DF0',
    borderWidth: 1
  },
  AvailablePharmacy: {
    marginTop: 10,
    height: '80%',
    backgroundColor: 'white',
  },
  SearchingFilterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchingFilterBox: {
    width: '50%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchingFilterTextLabel: {
    fontSize: 14,
    color: 'black',
  },
  SearchingFilterText: {
    fontSize: 11,
    color: 'white',
  },
  SearchingFilterButton: {
    width: '50%',
    borderRadius: 5,
    height: 20,
    padding: 1,
    backgroundColor: '#B1B2FF',
  },
})

export default NearByPharmacy;
