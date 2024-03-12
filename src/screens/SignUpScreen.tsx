import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import { useNavigation } from '@react-navigation/native';


function LoginField(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpass] = useState('');

    const nav:any = useNavigation();

    function saveuser(){
      addDoc(collection(db,'Users'),{
        Name: name,
        Email: email,
        Password: password
      }).then(t=>{
        Alert.alert("User is successfully registered");
        nav.navigate('Login');
      }).catch(e=>{
        Alert.alert("User account creation failed");
      })
    }

    return(
      <View style={{marginTop: 80}}>
        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
          <TextInput onChangeText={(v)=>setName(v)} placeholder='Name'
          placeholderTextColor={'#aaa'}
          style={{
            fontSize: 20
          }}
          />
        </View>
  
        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
          marginTop: 10
        }}>
          <TextInput onChangeText={(v)=>setEmail(v)} placeholder='Your Email'
          placeholderTextColor={'#aaa'}
          style={{
            fontSize: 20
          }}
          />
        </View>
        <View style={{
            backgroundColor: 'white',
            borderRadius: 20,
            height: 70,
            marginHorizontal: 30,
            justifyContent: 'center',
            paddingLeft: 20,
            marginTop: 10
          }}>
            <TextInput onChangeText={(v)=>setpass(v)} placeholder='Password'
            placeholderTextColor={'#aaa'}
            style={{
              fontSize: 20
            }}
            />
          </View>
        <Signingbutton saveuser={saveuser}/>
        <BottomSection/>
      </View>
    );
  }

  function Signingbutton(p:any){

    return(
      <View style={{flexDirection:'row', marginTop:20}}>
        <View style={{height:70, flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:25,fontWeight:'600', color:'#000', marginLeft:40}}>Sign Up</Text>
        </View>
        <TouchableOpacity onPress={p.saveuser}>
            <View style={{height:70, flex:1, justifyContent:'center',alignItems:'flex-end'}}>
                <View style={{width:50, height:50, backgroundColor:'blue', marginRight:40,borderRadius:100, justifyContent:'center', alignItems:'center'}}>
                    <Icon size={30} color={'white'} name={'arrow-forward'} type='ionicon '/>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    
    );
  }
  
  function BottomSection(){
    return(
      <View style={{flexDirection:'row', marginTop:40}}>
        <View style={{height:70, flex:2, justifyContent:'center',alignItems:'flex-end'}}>
            <Text style={{fontSize:20,fontWeight:'600', 
            color:'#000',marginRight:40}}>Sign In</Text>
        </View>
      </View>
    );
  }
  

const SignUpScreen = () => {
  return (
    <View>
    <Image style={{
        width: '100%' , height: '110%',
        position: 'absolute'
      }}source={
        require('../../assets/img/backk.jpg')
      } resizeMode='cover'/>
      <Text style={{
        fontSize: 50, color: 'white', fontWeight: '600',
        marginTop: 80, marginLeft: 20,
      }}>{'Create\nAccount'}</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField/>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default SignUpScreen

const sty = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
    }
  })