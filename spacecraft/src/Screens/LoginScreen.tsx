import { Text, TextInput, TouchableHighlight, View, SafeAreaView, StyleSheet } from 'react-native';
import React from "react"

export default function App() {
  const [text,onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleSpacecraft}>
          SPACECRAFT
        </Text>
      </View>
      <View style={styles.userEmail}>
        <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
        />
      </View>
      <View style={styles.userPassword}>
        <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
        />
      </View>
      <View style={styles.logInContainer}>
         <TouchableHighlight
          onPress={() => {
            alert('You have successfully logged in')
          }}
        >
          <Text style={styles.logIn}>
          Log In
          </Text>
         </TouchableHighlight>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  userEmail: {
    margin: 20,
    marginTop: 100,
  },
  userPassword: {
    marginTop: 40, 
    marginBottom: 20,
    margin: 20,
  },
  textInput: {
    borderRadius: 8, 
    borderColor: 'black',
    borderWidth: 5, 
  },
  titleSpacecraft: {
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    
  },
  titleContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    height: 220,
    marginTop: 180,
  },
  logInContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 180,
  },
  logIn: {
        height: 40, 
        borderWidth: 1,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 200,
        borderRadius: '8px',
        width: 240,
        backgroundColor: 'purple',
        color: 'white',
    },
});
