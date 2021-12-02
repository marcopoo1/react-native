import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { auth } from '../config/firebase';
import firebase from '../config/firebase.js';
import database from '@react-native-firebase/database'
import axios from "axios";

class Battery extends React.PureComponent {
   state = {
            ValR:1,
        }

        updateApi = async () => {
          try {
          const response = await axios.put('https://proyecto-9c755-default-rtdb.firebaseio.com/proyecto-9c755-default-rtdb/LCalle/0',
           this.state)
          console.log(response)
          console.log(response.data)
        }
        catch(e){
          console.log(e);
        }
      }
  
      
      

  render()  {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
  onPress = {() => this.updateApi()}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
  

 }
  

  export default Battery;