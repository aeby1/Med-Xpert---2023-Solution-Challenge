import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import * as Location from 'expo-location';
import axios from 'axios';

const Appointments = () => {
  return (
    <View style={styles.AppointmentBox}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '30%' }}>
          <Image
            source={require('../../../assets/doctor.png')}
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
                // color: '#25316D'
                color: '#FFF',
              }}
            >
              Dr Sadiq Bashir
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: 'silver'
              }}
            >
              Family Physican
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const HomeScreen = ({ navigation }) => {


  var ExactLocation = "";
  const [location, setLocation] = useState(null);
  const [currentLocationTile, setcurrentLocationTile] = useState('');


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location);
      (async () => { fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.coords.latitude + ',' + location.coords.longitude + '&key=AIzaSyC0cUHSMqBteIB9IBItwXdd51WekolYLkU')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log(json.results);
        setcurrentLocationTile(json["results"][0]["formatted_address"]);
      })
      .catch((error) => console.error(error))})();
    })()
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ProfileRow}>
        <Text style={styles.ProfileText}>Behzad Qasim 👋</Text>
        <Text style={styles.ProfileTextLocation}>
          {currentLocationTile}
        </Text>
      </View>
      <View style={styles.VisitRow}>
        <ScrollView
          horizontal={true}
          style={{ margin: 0, padding: 0 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.ClinicVisit} onPress={()=>{navigation.navigate('CheckVitalScreen')}}>
            <Image
              source={require('../../../assets/bp.png')}
              resizeMode='contain'
              style={{ width: 40, height: 40, padding: 15, marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 18,

                fontWeight: '600',
                color: 'white'
              }}
            >
              Check Vitals
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              Blood Pressure
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              Heart Rate
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              Temperature
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ClinicVisit}>
            <Image
              source={require('../../../assets/hospital.png')}
              resizeMode='contain'
              style={{ width: 40, height: 40, padding: 15, marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 18,

                fontWeight: '600',
                color: 'white'
              }}
            >
              Hospital Visit
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              Search Nearby Hospital
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              14 hospital Found
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ClinicVisit} onPress={()=>{navigation.navigate('MedicineScreen')}}>
            <Image
              source={require('../../../assets/medicine.png')}
              resizeMode='contain'
              style={{ width: 40, height: 40, padding: 15, marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',

                color: 'white'
              }}
            >
              Check Medicine
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              Check medicine schedule
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ClinicVisit} onPress={()=>{ navigation.navigate('FindScreen')}} >
            <Image
              source={require('../../../assets/medical-team.png')}
              resizeMode='contain'
              style={{ width: 40, height: 40, padding: 15, marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',

                color: 'white'
              }}
            >
              Search Doctor
            </Text>
            <Text
              style={{
                fontSize: 11,

                color: 'silver'
              }}
            >
              Consult a doctor
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.AppointmentRow}>
        <Text style={styles.AppointmentRowText}>Recents Visits</Text>
        <ScrollView showsVerticalScrollIndicator={true} >
          <Appointments />
          <Appointments />
          <Appointments />
          <Appointments />
        </ScrollView>
      </View>
      <View style={styles.UseFullOptions}>
        <Text style={styles.AppointmentRowText}>Explore More</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.UseFullOptionsBox}>
          <View style={styles.ExploreMoreRow1Buttons}>
            <View style={{ width: '50%' }}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require('../../../assets/phr.png')}
                  resizeMode='contain'
                  style={{ width: 60, height: 50, padding: 15, marginBottom: 10 }}
                />
                <Text style={{ letterSpacing: 1, color: "#301551", fontWeight: 'bold', fontSize: 19 }}>PHR</Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'white'
                  }}
                >
                  Check Personal Health Record
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require('../../../assets/doctorexplote.png')}
                  resizeMode='contain'
                  style={{ width: 60, height: 50, padding: 15, marginBottom: 10 }}
                />
                <Text style={{ letterSpacing: 1, color: "#301551", fontWeight: 'bold', fontSize: 19 }}>Doctor</Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'white'
                  }}
                >
                  Consult Your Physican
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ExploreMoreRow1Buttons}>
            <View style={{ width: '50%' }}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require('../../../assets/dietapple.png')}
                  resizeMode='contain'
                  style={{ width: 60, height: 50, padding: 15, marginBottom: 10 }}
                />
                <Text style={{ letterSpacing: 1, color: "#301551", fontWeight: 'bold', fontSize: 19 }}>Diet Chart</Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'white'
                  }}
                >
                  Check Your BMI & Create Diet
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require('../../../assets/emergency.png')}
                  resizeMode='contain'
                  style={{ width: 40, height: 50, padding: 15, marginBottom: 10 }}
                />
                <Text style={{ letterSpacing: 1, color: "#301551", fontWeight: 'bold', fontSize: 19 }}>ICE</Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'white'
                  }}
                >
                  Incase of Emergency
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.DailyBlog}>
        <Text style={styles.AppointmentRowText}>Health Blogs</Text>
        <View>
          <View style={{ width: '100%' }}>
            <View style={styles.healthBlog}>
              <View style={styles.healthBlogHeader}>
              <Text style={{ letterSpacing: 1, color: "white", fontWeight: '700', fontSize: 19, textAlign: 'left' }}>What Does It Mean To Be Human?</Text>
              <Text style={{ color: "white", fontWeight: '500', fontSize: 8, textAlign: 'left' }}>Oct 7, 2022</Text>
              <Text style={{ color: "white", fontWeight: '400', fontSize: 11, textAlign: 'left' }}>By MIKE MAGEE</Text>
              </View>
              <Text style={{ letterSpacing: 0, color: "#301551", fontWeight: '500', fontSize: 19, textAlign: 'center', margin: 10, }}>“These are unprecedented times.”</Text>
              <Text
                style={{  
                  fontSize: 14,
                  color: 'black',
                  padding: 20,
                  fontWeight: '300',
                  fontStyle: 'normal',
                  textAlign: 'left'
                }}
              >
                This is a common refrain these days, from any citizen concerned about the American experiment’s democratic ideals.

                Things like – welcoming shores, no one is above the law, stay out of people’s bedrooms, separation of church and state, play by the rules, fake news is just plain lying, don’t fall for the con job, stand up to bullies, treat everyone with the dignity they deserve, love one another, take reasonable risks, extend a helping hand, try to make your world a little bit better each day.

                But I’ve been thinking, are we on a downward spiral really? Or has it always been this messy? Do we really think that we’ve suddenly bought a one-way ticket to “The Bad Place”, and there are no more good spots to land – places that would surprise us, with an unpredicted friendship, a moment of creative kindness, something to make you say, “Wow, I didn’t see that coming.”

                I’m pretty sure I’m right that human societies, not the least of which, America, will never manage perfection. But is it (are we) still basically good. What does it mean to be human, and more specifically American?.... See More
              </Text>
            </View>
          </View>
        </View>
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  ProfileRow: {
    padding: 3,
    flexDirection: 'column',
    width: '100%',
  },
  ProfileText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    fontStyle: 'normal',
  },
  ProfileTextLocation: {
    marginTop: 2,
    fontSize: 13,
    color: 'black',
    fontWeight: '300',
    fontStyle: 'normal',
  },
  Profile: {
    width: '10%',
    padding: 5,
    fontSize: 22,
    color: 'black',
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  VisitRow: {
    height: '15%',
    margin: 1,
  },
  ClinicVisit: {
    flexDirection: 'column',
    padding: 20,
    margin: 5,
    //  backgroundColor: "#2A0944",
    backgroundColor: '#301551',
    // backgroundColor: '#6807f9',
    borderRadius: 10,
    shadowColor: "#492B7C",
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1
    },
  },
  AppointmentRow: {
    height: '10%',
    width: '100%',
    margin: 5,
  },
  AppointmentRowText: {
    fontSize: 19,
    fontWeight: '700',
    paddingHorizontal: 7,
    paddingBottom: 7,
    color: 'black'
  },
  AppointmentBox: {
    marginTop: 5,
    padding: 20,
    // backgroundColor: "#AAC4FF",
    backgroundColor: "#492B7C",
    width: '100%',
    borderRadius: 10,
    borderBottomColor: '#2c3e50',
    borderBottomWidth: 1,

  },
  UseFullOptions: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    margin: 3,
  },
  UseFullOptionsBox: {
    height: 140,
  },
  ExploreMoreRow1Buttons: {
    flexDirection: 'row',
    margin: 2,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#301551',
    backgroundColor: "#B1B2FF",
    // backgroundColor:'#BAE8E8',
    // backgroundColor: "#fff",
    padding: 15,
    margin: 3,
    borderRadius: 5,
    height: 100,
    width: '96%',
    shadowColor: "#492B7C",
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1 
    }
  },
  DailyBlog: {
    flex: 1,
    margin: 5,
  },
  healthBlog:{
    width: '100%',
    backgroundColor: '#Fff',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    marginBottom: 40,
    shadowColor: "#492B7C",
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1
    },
    flexDirection: 'column',
  },
  healthBlogHeader:{
    backgroundColor:'#400D51',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  },
  healthBlogFooter:{
    backgroundColor:'#400D51',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  }
})

export default HomeScreen;
