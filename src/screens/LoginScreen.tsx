import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';


function LoginField(p:any){
    const stack = p.stack;
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPass] = useState('');
    return(
      <View style={{marginTop: 110}}>
        <View style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
          <TextInput placeholder='Your Email'
          placeholderTextColor={'#aaa'}
          onChangeText={(v)=>setUserEmail(v)}
          style={{
            fontSize: 20, color: 'black'
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
          <TextInput placeholder='Password'
          placeholderTextColor={'#aaa'}
          secureTextEntry = {true}
          onChangeText={(v)=>setUserPass(v)}
          style={{
            fontSize: 20, color: 'black'
          }}
          />
        </View>
        <Signingbutton u_email={userEmail} u_pass={userPassword} stack={stack}/>
        <BottomSection stack={stack}/>
      </View>
    );
  }

  function Signingbutton(p:any){

    const u_email =p.u_email;
    const u_pass = p.u_pass;

    //const email = 'abc@gmail.com';
    //const passw = '123';

    function getUser(){
        getDocs(
            query(
                collection(db,'Users')
                ,where('Email','==',u_email.toLowerCase()))).then(ds=>{
                    if(ds.size == 1){
                        const dt = ds.docs[0].data();
                        if(dt.Password==u_pass){
                            p.stack.navigate('Home');
                        }else{
                            Alert.alert('Message','Incorrect email or password')
                        }
                    }else{
                        Alert.alert('Message',"Can't find user")
                    }
                })
    }

    function goto(){
        getUser();
        // if (u_email.toLowerCase()==email && u_pass==passw){
        //     p.stack.navigate('Home');
        // }else{
        //     Alert.alert('Message','Incorrect email or password')
        //     console.log('Incorrect email or password');
        // }
    }
    return(
      <View style={{flexDirection:'row', marginTop:20}}>
        <View style={{height:70, flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:25,fontWeight:'600', color:'#000', marginLeft:40}}>Sign In</Text>
        </View>
        <TouchableOpacity onPress={goto}>
            <View style={{height:70, flex:1, justifyContent:'center',alignItems:'flex-end'}}>
                <View style={{width:50, height:50, backgroundColor:'blue', marginRight:40,borderRadius:100, justifyContent:'center', alignItems:'center'}}>
                    <Icon size={30} color={'white'} name={'arrow-forward'} type='ionicon '/>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  function BottomSection(p:any){
    const stack = p.stack;
    function go() {
        stack.navigate('Signup')
    }
    return(
      <View style={{flexDirection:'row', marginTop:50}}>
        <TouchableOpacity onPress={go}>
            <View style={{height:70, flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'600', color:'#000', marginLeft:40}}>Sign Up</Text>
            </View>
        </TouchableOpacity>
        <View style={{height:70, flex:2, justifyContent:'center',alignItems:'flex-end'}}>
            <Text style={{fontSize:20,fontWeight:'600', 
            color:'#000',marginRight:40}}>Forget Password</Text>
        </View>
      </View>
    );
  }
  

const LoginScreen = (props:any) => {
  const stack = props.navigation;
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
      }}>{'Welcome\nBack'}</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField stack={stack}/>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default LoginScreen

const sty = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
    }
  })