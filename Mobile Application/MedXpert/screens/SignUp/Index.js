import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function SignUpScreen({ navigation }) {


  const [showAlert, setShowAlert] = useState(false);


  const [name, setname] = useState("");
  const [checked, setChecked] = useState("first");
  const [fathername, setfathername] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [cnic, setcnic] = useState("");
  const [age, setage] = useState("");
  const [telephone, settelephone] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const onSignUpClick = async() => {
    console.log("onSignUpClick");
    if(name != ""  && bloodgroup != "" && cnic != "" && age != "" && telephone != "" && email != "" && password != "" && confirmpassword != ""){
      fetch('http://192.168.1.178:3000/Patient/register_patient/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Name: name,
            Password: password,
            Cnic: cnic,
            Email: email,
            Age: age,
            BloodGroup: bloodgroup,
            Telephone: telephone,
            ConfirmPassword: confirmpassword
        })
      })
      .then(response =>{
        console.log("Sign Up Successfully.")
        console.log(response.json());
        setShowAlert(true);
      })
      .catch(err => {
        console.log(err);
      })
      ;
          
          
    }

    else{
      Alert.alert("MedXpert","Please fill all the fields.")
    }

    

    // Alert.alert("MedXpert","Congratulations! You have successfully registered with MedXpert. Please login to continue.");


  };
  return (
    <View style={styles.container}>
       <ImageBackground source={require("../../assets/backimage.jpg")}  style={{width: '100%', height: '100%'}}>
       <View style={styles.MainContentBox}>
      <View style={styles.Logo}>
      <Image style={styles.imageStyling} source={require("../../assets/newLogo.png")} />
      </View>
     
      <View style={styles.Heading}>
        <Text style={styles.titleText}>Create Your Account</Text>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="MedXpert"
          message="Congratulations! You have successfully registered with MedXpert. Please login to continue."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, Login now"
          confirmButtonColor="#1B2D58"
          onCancelPressed={() => {
            setShowAlert(false);
          }}
          onConfirmPressed={() => {
            setShowAlert(false);
            navigation.navigate('LoginScreen')
          }}
        />
      </View>
      <ScrollView>
      <View style={styles.Rows}>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setname}
            value={name}
            placeholder="Name"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setcnic}
            value={cnic}
            placeholder="National ID"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={settelephone}
            value={telephone}
            keyboardType="phone-pad"
            placeholder="Telephone"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setemail}
            value={email}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setage}
            value={age}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Age"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setbloodgroup}
            value={bloodgroup}
            placeholder="Blood Group"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setpassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.input}
            onChangeText={setconfirmpassword}
            value={confirmpassword}
            secureTextEntry={true}
            placeholder="Confirm Password"
            placeholderTextColor={"silver"}
          />
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.button} onPress={onSignUpClick}>
            <Text style={{ color: "white", fontSize: 18 ,fontWeight: '700',}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo:{
    margin: 0,
    flex: 1,
  },
  Heading: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  Rows: {
    flex: 4,
    margin: 1,
    marginBottom: 10,
    flexDirection: "column",
  },
  Row: {
    
    margin: 5,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    color: "white",
  },
  input: {
    height: 35,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    color: "white",
    borderColor: "silver",
    width: 270,
    fontSize: 14,
    padding: 5,
  },
  imageStyling:{
    width:300,
    height:100,
   shadowColor: 'pink',
   shadowColor: "black",
   shadowOffset: { height: 5},
   shadowOpacity: 0.5,
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
  MainContentBox:{
    paddingTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    color: "white",
    fontSize: 17,
    position: "absolute",
    right: 5,
    top: 5,
  },
});
