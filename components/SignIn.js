import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin , GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '262887991890-ubl1v7falghills82jntrrvbaaria54l.apps.googleusercontent.com',
});

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
    };
  }
  userLogin = () => {
    auth()
    .signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((user) => {
        console.log(user)
      console.log('User loged in!');
    })
    .catch(error => {
    
  
      console.log('Login unsuccessful!');
    });

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
        <Button  mode='' color='#0075F6'  labelStyle={{fontSize:13,}}  style={{color:'blue',marginTop:-36,marginRight:-250,}}
        onPress={() => {
          this.props.navigation.navigate('SignUp');
        }}
        >join now</Button>
         <Text style={styles.sign}>Sign in</Text>

         <TextInput 
        label="Email" 
        
        value={this.state.email}
        onChangeText={text => this.setState(
          {email:text}
          )} 
          style={styles.input}       
        />
      

        <TextInput
        label="Password"
        secureTextEntry
        value={this.state.password}
        onChangeText={text => this.setState(
          {password : text}
          )} 
          style={styles.input}       
        /> 
         <Button  mode='' color='#0075F6'  labelStyle={{fontSize:13,fontWeight:'bold',}}  style={styles.forgot}>Forgot password?</Button>
        <Button onPress={this.userLogin}  mode='contained' color='#0075F6'  labelStyle={{fontSize:14}}  style={styles.signBtn}>Sign in</Button>

        <Text style={{color:"gray",alignSelf:'center',margin:20}}>or</Text>

        <GoogleSigninButton
            style={{ width: 410, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.onGoogleButtonPress}
            
        />
        
      </View>
    );
  }
}


const styles=StyleSheet.create({
 
    input:{
        alignSelf:'center',
        marginTop:20,
        width:360,
        height:60,
      
        backgroundColor:'white', borderColor:'gray',
        fontSize:15,
        
    },
    l1:{
        color:'#0075F6',fontWeight:'bold',marginLeft:-320, marginTop:20,fontSize:23,
  
    },
    l2:{
        backgroundColor:'#0075F6',fontWeight:'bold',color:'white',marginTop:20,marginBottom:20,fontSize:23,
  
    },
    sign:{
        fontWeight:'bold',color:'black',fontSize:40,
  
    },
  
 
    signBtn:{
        fontWeight:'bold',marginTop:30,borderRadius:20,borderColor:'blue',width:320,height:40, alignSelf:'center',
    },
  
    tinyLogo: {
      width: 500,
      height: 550,
    },
  
    
  
  });