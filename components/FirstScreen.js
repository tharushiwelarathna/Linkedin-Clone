import React, { Component } from 'react';
import { View, Text , StyleSheet ,Image } from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin , GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '262887991890-ubl1v7falghills82jntrrvbaaria54l.apps.googleusercontent.com',
});

export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onGoogleButtonPress=async () => {
    // Get the users ID token
   const { idToken } = await GoogleSignin.signIn();

   // Create a Google credential with the token
   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

   // Sign-in the user with the credential
   // return auth().signInWithCredential(googleCredential);
   const user = auth().signInWithCredential(googleCredential);
   console.log((await user).user);
 }


  render() {
    return (
      <View>
         
          <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <Text style={styles.l1} >Linked </Text>
            <Text style={styles.l2}>in</Text>
        </View>
     
           <Image
        style={styles.tinyLogo}
        source={require('../assests/img/friendly-support-section.png')}
      />
   
        <Button   mode='contained' color='#0075F6'  labelStyle={{fontSize:14}}  style={styles.signBtn}
        onPress={() => {
          this.props.navigation.navigate('SignUp');
        }}>
          Join now</Button>

        <GoogleSigninButton
            style={{ width: 310, height: 48 , marginTop:20 ,marginLeft:50,}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.onGoogleButtonPress}
            
        />

        <Button  mode='' color='#0075F6'  labelStyle={{fontSize:15,fontWeight:'bold',}}  style={{color:'blue',marginTop:20,}}
        onPress={() => {
          this.props.navigation.navigate('SignIn');
        }}
        >sign in</Button>
      </View>
    );
  }
}


const styles=StyleSheet.create({
 

  l1:{
      color:'#0075F6',fontWeight:'bold',marginLeft:-270, marginTop:20,fontSize:23,

  },
  l2:{
      backgroundColor:'#0075F6',fontWeight:'bold',color:'white',marginTop:20,marginBottom:20,fontSize:23,

  },

  signBtn:{
      fontWeight:'bold',marginTop:30,borderRadius:20,borderColor:'blue',width:300,alignSelf:'center',
  },

  tinyLogo: {
    width: 500,
    height: 550,
  },

  

});