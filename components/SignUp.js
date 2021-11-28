import React, { Component } from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      email:'',
      password:''
  };
  }
  registerUser = () =>{
    auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((createduser) => {
      createduser.user.updateProfile({
        displayName:this.state.username
      })
      console.log('User account created & signed in!');
      // console.log(createduser.user);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }
  

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row',justifyContent:'center'}}>
            <Text style={styles.l1} >Linked </Text>
            <Text style={styles.l2}>in</Text>
        </View>
        <Text style={styles.sign}>Join Linkedin</Text>
        <Text style={{color:"gray", marginTop:23,}}>or</Text>
        <Button  mode='' color='#0075F6'  labelStyle={{fontSize:15,fontWeight:'bold',}}  style={{color:'blue',marginTop:-23,marginLeft:-330,}}
        onPress={() => {
          this.props.navigation.navigate('SignIn');
        }}
        >sign in</Button>

<TextInput 
        label="Email" 
        
        value={this.state.email}
        onChangeText={text => this.setState(
          {email:text}
          )} 
          style={styles.input}       
        />

        <TextInput 
        label="User Name"
        
        value={this.state.userName}
        onChangeText={text => this.setState(
          {userName : text}
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
    
        <Button onPress={this.registerUser}  mode='contained' color='#0075F6'  labelStyle={{fontSize:14}}  style={styles.signBtn}>Register User</Button>

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
