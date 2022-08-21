
import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginManager,GraphRequest,GraphRequestManager } from 'react-native-fbsdk';

const Google = () => {

 
useEffect(()=>{
 GoogleSignin.configure()
},[])

const fbLogin = (resCallback) =>{
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email','public_profile']).then(
     result =>{
         console.log(" fb result =====>",result);
         if(result.declinedPermissions && result.declinedPermissions.includes("email")){
            resCallback({message: "Email is required"})
         }
         if(result.isCancelled){
             console.log("error")
         }else{
             const infoRequest = new GraphRequest(
                 '/me?fields=email,name,picture,friend',
                 null,
                 resCallback
             );
             new GraphRequestManager().addRequest(infoRequest).start()
         }
     },
     function(error){
         console.log('Login fail with error:' + error)
     }
    )
 }

  const onFbLogin = async() =>{
    try{
     await fbLogin(_responseInfoCallBack)
    }catch(error){
        console.log('error raised', error)
    }
  }

 const _responseInfoCallBack = async(error,result) =>{
     if(error){
        console.log("error top",error)
        return;
     }else{
        const userData = result
        console.log("fb data++++",userData)
     }
 }
 const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('user info', userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(error)
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log(error)
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log(error)
      // play services not available or outdated
    } else {
      console.log(error)
      // some other error happened
    }
  }
};

  return (
    <SafeAreaView style={styles.constainer}>
     <TouchableOpacity style={styles.btn} onPress={googleLogin}>
      <Text style={styles.t1}>Google Login</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={onFbLogin}>
      <Text style={styles.t1}>Facebook Login</Text>
     </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 constainer:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
 },
 btn:{
  width:wp('60%'),
  height:hp('7%'),
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'pink',
  borderRadius:hp('1%'),
  margin:wp('2%')
 },
 t1:{
  fontSize:hp('2%'),
  fontWeight:'bold'
 }
});

export default Google;
