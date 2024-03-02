import { React, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Clipboard as Clip, RefreshCcw, Github  } from 'lucide-react'
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import styles from './styles';

// Rendering app
export default function App() {

  // Variables
  const [num, setNum] = useState('');
  const [password, setPassword] = useState('');

  // Password generation - Refresh page
  useEffect(
    () => {
      axios.get(`https://ipassword-api.vercel.app/generate/50`)
        .then((response) => {
          setPassword(response.data.password)
        })  
        .catch((error) => {
          alert('A error occurred, try again later')
        });
    }
  , [])

  // Functions
  function button() {
    if (num < 1){
          axios.get(`https://ipassword-api.vercel.app/generate/50`)
            .then((response) => {
              setPassword(response.data.password)
            })  
            .catch((error) => {
              alert('Sorry, we have a server error :(')
            });
    } else if (num > 100){
      alert('Wow! Is it a password? Try a number less than 100 characters 🧐');    
    }
    
    else {
      axios.get(`https://ipassword.vercel-api.app/generate/${num}`)
        .then((response) => {
          setPassword(response.data.password)
        })  
        .catch((error) => {
          alert('Sorry, we have a server error :(')
        });
    }

  }

  // **********************
  function copyToClipboard() {
    Clipboard.setString(password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ipassword 🔑</Text>
      <View style={styles.box}>
        <View style={styles.copyRow}>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Clip style={styles.copyIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.password}>{password}</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.textLength}>Length: </Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='50' onChangeText={(text) => setNum(text)}/>
      </View>

      <TouchableOpacity style={styles.button} onPress={button}>
        <Text style={styles.textButton}>New password</Text>
        <RefreshCcw  style={styles.iconButton}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Linking.openURL('https://ipassword.vercel.app/generate/50')}}>
        <Text>Are you a developer? <Text style={styles.linkText}>Try our free API</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Linking.openURL('https://github.com/IK-R-S/IPassword')}}>
        <Text style={styles.messageGithub}><b>See on Github 😺</b></Text>
      </TouchableOpacity>
    </View>
  );
}
