 import React from 'react';
import { Text, View , StyleSheet , TouchableOpacity , Image} from 'react-native';


const SearchFilterButtons = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.ButtonsRow}>
            <View style={styles.Button}>
                <TouchableOpacity style={styles.InsideButton}
                onPress={() => props.navigation.navigate('NearbyHospital')}
                >
                  <Image
                    source = {require('../../../assets/hospital-bed.png')}
                    style={{width: 20, height: 20,
                        marginEnd: 10,
                    }}
                    />
                    <Text style={styles.ButtonText}>Nearby Hospital</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Button}>
            <TouchableOpacity style={styles.InsideButton}
             onPress={() => props.navigation.navigate('NearbyDoctor')}
            >
                  <Image
                    source = {require('../../../assets/searchDoctor.png')}
                    style={{width: 20, height: 20,
                        marginEnd: 10,
                    }}
                    />
                    <Text style={styles.ButtonText}>Doctors</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Button}>
            <TouchableOpacity style={styles.InsideButton}
              onPress={() => props.navigation.navigate('NearByPharmacy')}
            >
                  <Image
                    source = {require('../../../assets/drug.png')}
                    style={{width: 20, height: 20,
                        marginEnd: 10,
                    }}
                    />
                    <Text style={styles.ButtonText}>Pharmacy</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  ButtonsRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Button:{
    margin: 2,
    padding: 13,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#301551",
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius:5,
    elevation: 10,
  },
  ButtonText:{
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  InsideButton:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});



export default SearchFilterButtons;
