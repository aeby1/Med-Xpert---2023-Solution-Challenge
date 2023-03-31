import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

const ChatScreen = () => {
  const [CurrentTypedChatMessage, setCurrentTypedChatMessage] = React.useState(
    ''
  )
  return (
    <View style={styles.MainContainerBox}>
      <View style={styles.MainHeaderBox}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../../../assets/active.png')}
            resizeMode='contain'
            style={{ width: 15, height: 15, padding: 1 }}
          />
          <Text style={styles.MainHeaderBox_TitleText}>MedXpert ChatBot</Text>
        </View>
        <Text style={styles.MainHeaderBox_TitlePurpose}>
          Personal Assistant
        </Text>
        <View></View>
      </View>
      <View style={styles.ChatBody}>
        <ScrollView></ScrollView>
      </View>
      <View style={styles.MessageInputBox}>
        <View style={{ width: '80%' }}>
          <TextInput
            style={styles.input}
            onChangeText={setCurrentTypedChatMessage}
            value={CurrentTypedChatMessage}
            placeholder='Type a Message'
            placeholderTextColor={'silver'}
          />
        </View>
        <View style={{ width: '20%' }}>
        <TouchableOpacity style={styles.button}>
                <Text style={{ letterSpacing: 1, color: "white", fontWeight: '600', fontSize: 17 }}>Send</Text>
              </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainerBox: {
    flex: 1,
    justifyContent: 'center'
  },
  MainHeaderBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ChatBody: {
    flex: 8,
    backgroundColor: 'white',
    borderColor: 'silver',
    borderRadius: 10,
    margin: 2,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center'
  },
  MessageInputBox: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  MainHeaderBox_TitleText: {
    color: '#301551',
    margin: 2,
    marginStart: 10,
    fontSize: 20,
    fontWeight: '700'
  },
  MainHeaderBox_TitlePurpose: {
    color: '#301551',
    fontSize: 14,
    margin: 2,
    fontWeight: '400'
  },
  input: {
    height: '40%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    color: 'black',
    borderColor: 'grey',
    width: '100%',
    fontSize: 17
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#22a0db',
    padding: 1,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    height: '40%',
    width: '100%',
    shadowColor: "#492B7C",
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1 
    }
  },
})

export default ChatScreen
