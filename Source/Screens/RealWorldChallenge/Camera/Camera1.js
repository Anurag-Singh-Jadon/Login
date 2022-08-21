 //Here default image is add,while we change the image after cropping image will be set and model close automatically.

 Add This to android manifest file-->
 <uses-permission android:name="android.permission.CAMERA"/>
     <uses-feature android:name="android.hardware.camera" android:required="false" />
 
 import React, { useState, useEffect, useRef } from 'react'
 import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, Linking, ImageBackground, StatusBar, TextInput } from 'react-native';
 import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
 import Colors from '../Assetst/Constants/Colors';
 import * as Animatable from 'react-native-animatable';
 import Modal from "react-native-modal";
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import ImagePicker from 'react-native-image-crop-picker';
 import DatePicker from 'react-native-datepicker';
 
 
    
   const [date, setDate] = useState(new Date())
     const [open, setOpen] = useState(false)
     // const [date, setDate] = useState('');
     const [isModalVisible, setModalVisible] = useState(false);
     const [image, setImage] = useState('');
 
     const [color, setColor] = useState(true);
     const [myColor, setMyColor] = useState(false);
     const toggleModal = () => {
         setModalVisible(!isModalVisible);
     };
 
     const TakePhotoFromCamera = () => {
         ImagePicker.openCamera({
             width: wp('30%'),
             height: hp('15%'),
             cropping: true,
         }).then(image => {
             console.log(image);
             setImage(image.path);
             if (image) {
                 setModalVisible(false);
             }
             // this.bs.current.snapTo(1);
         });
     }
  
   const ChoosePhotoFromGalery = () => {
         ImagePicker.openPicker({
             width: wp('30%'),
             height: hp('15%'),
             cropping: true
         }).then(image => {
             console.log(image);
             setImage(image.path);
             if (image) {
                 setModalVisible(false);
             }
             // this.bs.current.snapTo(1);
         });
     }
 
 return(
 <View style={{width:wp('100%'),height:hp('100%')}}>
  <Modal isVisible={isModalVisible}
                     animationOutTiming={900}
                     animationInTiming={900}
                     hideModalContentWhileAnimating={true}
                     useNativeDriverForBackdrop={true}
                     onBackdropPress={() => setModalVisible(false)}
                     onSwipeComplete={() => setModalVisible(false)}
                     swipeDirection={['down']}
 
                     avoidKeyboard={true}
                     useNativeDriver={true}
                     style={{ alignSelf: 'center', }}
                 >
 
                     <View style={{ width: wp('100%'), height: hp('50%'), alignItems: 'center', marginTop: hp('50%'), borderTopLeftRadius: hp('4%'), borderTopRightRadius: hp('4%'), backgroundColor: 'white' }}>
                         <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'gray', width: wp('30%'), borderRadius: hp('1.5%'), marginTop: hp('2%'), }}></View>
                         <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('5%'), padding: wp('2.5%'), }}>
                             <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', marginBottom: hp('1%'), paddingLeft: wp('1%') }}>Upload Photo</Text>
 
                         </View>
 
 
                         <View style={{ width: wp('100%'), height: hp('9%'), alignItems: 'center', justifyContent: 'center' }}>
                             <TouchableOpacity onPress={TakePhotoFromCamera}
                                 style={{ width: wp('80%'), height: hp('7%'), backgroundColor: Colors.lightPurples, borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', }}
                             >
                                 <Text style={{ color: Colors.white }}>Take Photo From Camera</Text>
                             </TouchableOpacity>
 
                             <TouchableOpacity onPress={ChoosePhotoFromGalery}
                                 style={{ width: wp('80%'), height: hp('7%'), backgroundColor: Colors.lightPurples, borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', marginTop: 12 }}
                             >
                                 <Text style={{ color: Colors.white }}>Choose Photo From Galery</Text>
                             </TouchableOpacity>
                             <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}
                                 style={{ width: wp('80%'), height: hp('7%'), backgroundColor: Colors.lightPurples, borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', marginTop: 12 }}
                             >
                                 <Text style={{ color: Colors.white }}>Cancel</Text>
                             </TouchableOpacity>
                         </View>
                     </View>
                 </Modal>
           <View style={{ width: wp('100%'), height: hp('25%'), justifyContent: 'center', alignItems: 'center' }}>
                     <TouchableOpacity
                         style={{
                             height: hp('16%'),
                             width: wp('30%'),
                             justifyContent: 'center',
                             alignSelf: 'center',
                             alignItems: 'center',
                             // backgroundColor: 'red',
                             // marginTop: hp('1%')
                         }} onPress={toggleModal}>
                         {image == '' ?
                             <View style={{ width: wp('13%'), height: hp('12%'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                                 <Image source={require('../Assetst/Images/6.png')} style={{ width: hp('12%'), height: hp('12%'), borderRadius: hp('1%'), }} />
                             </View> :
                             <ImageBackground
                                 source={{
                                     uri: image,
                                 }}
                                 style={{ height: 100, width: 100, }}
                                 imageStyle={{ height: hp('15%'), width: wp('25%'), marginTop: hp('0.5%'), alignItems: 'center', borderRadius: hp('1%'), backgroundColor: 'gray' }}
                             >
                             </ImageBackground>}
 
 
                     </TouchableOpacity>
                     <View style={{ width: wp('100%'), height: hp('4%'), justifyContent: 'center', alignItems: 'center', marginTop: hp('0.3%') }}>
                         <Text style={{ color: Colors.primaryGray, fontSize: hp('2.2%'), fontWeight: 'normal', }}>Upload your photo</Text>
                     </View>
                 </View>
 
 )