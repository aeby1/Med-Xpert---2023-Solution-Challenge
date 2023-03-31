import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground
} from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SafeAreaView } from 'react-native-safe-area-context';


// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }


export default function LoginScreen({navigation}) {

  const [showAlert, setShowAlert] = useState(false);
  const [username, setusername] = useState("");
  const [alertMessage, setalertMessage] = useState("");
  const [password, setpassword] = useState("");
  const [loginloading, setloginloading] = useState(false);
  const [usernameclicked , setusernameclicked] = useState(false);
  const [passwordclicked , setpasswordclicked] = useState(false);

  const LoginIn = async() => {
    // console.log("sdsdsd")
    // navigation.navigate("Dashboard");
    if(username != "" && password != ""){
      setloginloading(true);

      let response = await fetch('http://192.168.1.178:3000/Patient/LoginPatient/'+username+'/'+password+'', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        }
      });
      let json = await response.json();
      if(json["Message"] == "False"){
        setalertMessage("Oops! You entered wrong credentials. Please try again.");
        setShowAlert(true);
      }
      else if(json["Message"] == "True"){
        // const LoggedInUser = json["Data"];
        setloginloading(false);
        navigation.navigate("Dashboard");
      }
      else{
        setalertMessage("Unknown Error Occured");
        setShowAlert(true);
      }
    }
    else{
      Alert.alert("MedXpert","Please fill all the fields.")
    }
  };

  const handleFocus1 = () => setusernameclicked(true)

  const handleBlur1 = () => setusernameclicked(false)

  const handleFocus2 = () => setpasswordclicked(true)

  const handleBlur2 = () => setpasswordclicked(false)

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/backimage.jpg")}  style={{width: '100%', height: '100%'}}>
        <View style={styles.MainContentBox}>
      <View style={styles.MainImageContainer}>
        <Image style={styles.imageStyling} source={require("../../assets/newLogo.png")} />
      </View>
      <View style={styles.Heading}>
        <Text style={styles.titleText}>Welcome back! 🎉</Text>
      </View>
      <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="MedXpert"
          message={alertMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, Login Again"
          confirmButtonColor="#1B2D58"
          onCancelPressed={() => {
            setShowAlert(false);
            setloginloading(false);
          }}
          onConfirmPressed={() => {
            setShowAlert(false);
            setloginloading(false);
          }}
        />
      <View style={styles.Rows}>
        <View style={styles.Row}>
          <TextInput
            style={[styles.input,{
              borderColor: usernameclicked
                 ? '#22a0db'
                 : 'silver',
             borderWidth: 1,
            }]}
            onBlur={handleBlur1}
            onFocus={handleFocus1}
            onChangeText={setusername}
            value={username}
            placeholder="Username"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={[styles.input,{
              borderColor: passwordclicked
                 ? '#22a0db'
                 : 'silver',
             borderWidth: 1,
            }]}
            onBlur={handleBlur2}
            onFocus={handleFocus2}
            onChangeText={setpassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.button} onPress={() => LoginIn()}>
            {loginloading ? <ActivityIndicator size="small" color="#fff" /> : null }
            <Text style={{ color: "white",fontSize: 16 }}>Log In</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.Row}>  Dashboard
        <TouchableOpacity  onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity> 
        </View> */} 
        <View style={styles.Row}>
        <TouchableOpacity  onPress={() => navigation.navigate('SignUpScreen')} >
        <Text style={styles.forgotPassword}>Register Now</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  MainImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Heading: {
    padding: 5,
    width: '100%',
    textAlign: "left",
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    color: "white",
  },
  Rows: {
    marginTop: 5,
    flexDirection: "column",
  },
  Row: {
    height: '10%',
    width: '100%',
    marginTop: 18,
  },
 
  input: {
    height: 38,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
    borderColor: "silver",
    width: '100%',
    fontSize: 13,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#22a0db",
    padding: 10,
    borderRadius: 5,
    height: 40,
  },
  forgotPassword: {
    color: "white",
    fontSize: 17,
    position: "absolute",
    right: 5,
    top: 5,
  },
  MainContentBox:{
    padding: 20,
    justifyContent: "center",
    paddingTop: 150,
  },
  imageStyling:{
    width:300,
    height:100,
   shadowColor: 'pink',
   shadowColor: "black",
   shadowOffset: { height: 5},
   shadowOpacity: 0.5,
 },
});
