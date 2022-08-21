import * as yup from 'yup';

import { Alert, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../Assetst/Constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import Modal from "react-native-modal";
import { RadioButton } from 'react-native-paper';


const AdmissionForm = (props) => {

    const [isChecked, setIsChecked] = useState(false);
    const [policyCheckbox, setPolicyCheckbox] = useState(false);
    const [emergencyCheckbox, setEmergencyCheckbox] = useState(false);
    const [relationship, setRelationship] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [text, setText] = useState('');

    const [isSubmit, setIsSubmit] = useState(color = 'gray');

    const [policy, setPolicy] = useState(false);
    const [urgentAdmission, setUrgentAdmission] = useState(false);

    const [okay, setOkay] = useState(false);
    const [yes, setYes] = useState(false);

    const Confirmation = () => {
        setPolicy(!policy);
    };

    const InsurancePolicy = () => {
        if (policyCheckbox) {
            setPolicyCheckbox(false)
            setPolicy(false)
        }
        else if (!policy) {
            setPolicy(!policy)
        }
        else {
            alert('please check Box');
        }
    };

    const PolicyConfirmation = () => {
        if (!okay) {
            setPolicyCheckbox(!policyCheckbox)
            setPolicy(false)
            // alert('please check Box');
        }
    };

    const EmergencyAdmission = () => {
        if (emergencyCheckbox) {
            setEmergencyCheckbox(false)
            setUrgentAdmission(false)
            // alert('filled check Box');
        }
        else if (!urgentAdmission) {
            setUrgentAdmission(!urgentAdmission);
            // alert('empty check Box');
        }

        else {
            alert('please check Box');
        }

    };

    const EmergencyConfirmation = () => {
        if (!yes) {
            setEmergencyCheckbox(!emergencyCheckbox)
            setUrgentAdmission(false)
            // alert('please check Box');
        }
        // else{
        //     setEmergencyCheckbox(emergencyCheckbox) 
        // }
    }

    // const ValidAdmissionForm = () => {

    //     const mobileNo = /^[0]?[789]\d{9}$/;
    //     const name = /^[a-zA-Z ]+(\.|')?[a-zA-Z ]+(\.|')?$/;

    //     if (name.test(relationship) == '') {
    //         alert('Enter Your Relationship with Attendant')
    //     }

    //     else if (mobileNo.test(mobileNumber) == '') {
    //         alert('Enter Your Mobile No.');
    //     }

    //     else if (!isChecked) {
    //         alert('Click checkbox to agree T & C');
    //     }

    //     else {
    //         // props.navigation.navigate('DrawerNavigation')
    //         alert('Form Submitted Successfully');
    //     }
    // }

    const schema = yup.object().shape({
        name: yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required')
            .matches(
                "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$",
                "Name should be in this format"
            ),
        mobileno: yup.string()
            .min(10, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),
    });

    const ValidAdmissionForm = () => {


        if (!isChecked) {
            alert('Click checkbox to agree T & C');
        }

        else {
            // props.navigation.navigate('DrawerNavigation')
            alert('Form Submitted Successfully');
        }
    }

    return (
        <SafeAreaView>

            <Formik
                initialValues={{ mobileno: '', name: '' }}
                validateOnMount={true}
                onSubmit={values => console.log(values)}
                validationSchema={schema}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <View style={styles.container}>

                        <StatusBar
                            backgroundColor={Colors.primaryColor1}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('100%'), height: hp('8%'), backgroundColor: Colors.primaryColor1, }}>
                            <View style={{ width: wp('67%'), flexDirection: 'row', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={() => props.navigation.goBack('ScheduleAppointment')} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), }} >
                                    <AntDesign name='left' size={hp('2.5%')} color='white' />
                                    <Text style={{
                                        fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%')
                                    }}>Back</Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('3%'), }}>Admission Form</Text>
                            </View>
                        </View>
                        <View style={{ width: wp('100%'), height: hp('8%'), flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: Colors.primaryGrayLight }}>
                            <View style={{ width: wp('28%'), alignItems: "center", justifyContent: "center", }}>
                                <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('16%'), height: wp('11%'), borderRadius: hp('1%') }} />
                            </View>
                            <View style={{ width: wp('28%'), alignItems: "center", justifyContent: "center", }}>
                                <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('16%'), height: wp('11%'), borderRadius: hp('1%') }} />
                            </View>
                        </View>

                        <View style={{ width: wp('100%'), alignItems: "center", }}>
                            <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, justifyContent: 'center', marginLeft: hp('3%'), marginTop: hp('1%'), textDecorationLine: 'underline' }}>HOSPITAL ADMISSION FORM</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ width: wp('96%'), }}>
                            <View style={{ width: wp('96%'), height: hp('18%'), }}>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%'), marginTop: hp('1%'), }}>Patient Details for Hospital Admission:</Text>

                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: hp('1%'), marginTop: hp('1%'), }}>Name:<Text style={{ color: Colors.darkOverlayColor2, fontSize: hp('1.5%'), }}> Prakash Pandey</Text></Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: hp('1%'), marginTop: hp('0%'), }}>Age:<Text style={{ color: Colors.darkOverlayColor2, fontSize: hp('1.5%'), }}> 45</Text></Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: hp('1%'), marginTop: hp('0%'), }}>Gender:<Text style={{ color: Colors.darkOverlayColor2, fontSize: hp('1.5%'), }}> Male</Text></Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: hp('1%'), marginTop: hp('0%'), }}>Father's Name:<Text style={{ color: Colors.darkOverlayColor2, fontSize: hp('1.5%'), }}> Kapil Pandey</Text></Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: hp('1%'), marginTop: hp('0%'), }}>Address:<Text style={{ color: Colors.darkOverlayColor2, fontSize: hp('1.5%'), }}> B-12, Himgiri Apartment, Sec-62 NOIDA</Text></Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: hp('1%'), marginTop: hp('0%'), }}>Mobile:<Text style={{ color: Colors.darkOverlayColor2, fontSize: hp('1.5%'), }}>9876543234</Text></Text>
                            </View>

                            <View style={{ width: wp('96%'), height: hp('6%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%'), }}>Hospital Admission Date & Time:</Text>
                                <View style={{ width: wp('40%'), height: hp('5%'), backgroundColor: 'white', justifyContent: 'center', marginRight: hp('2%'), borderRadius: hp('1%'), alignItems: 'center', borderWidth: 2, borderColor: Colors.primaryGrayLight, marginLeft: hp('1%'), }}>
                                    <Text numberOfLines={1} style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryGray, }}>4th Feb 2022 & 2PM to 4PM</Text>
                                </View>
                            </View>

                            <View style={{ width: wp('96%'), height: hp('18%'), marginTop: hp('0.5%'), }}>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%') }}>Attendant's Details:</Text>
                                <View style={{ width: wp('96%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('1%') }}>Attendant's Name:</Text>
                                    <TextInput
                                        placeholder='Manisha Pandey'
                                        placeholderTextColor={Colors.primaryColor7}
                                        style={{ width: wp('56%'), height: hp('4%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: Colors.primaryColor1, }}
                                    />
                                </View>

                                <View style={{ width: wp('96%'), height: hp('6%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('1%') }}>Relationship:</Text>
                                    <TextInput
                                        value={values.name}
                                        placeholder=''
                                        placeholderTextColor={Colors.primaryColor7}
                                        style={{ width: wp('56%'), height: hp('4%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: touched.name && errors.name ? 'red' : Colors.primaryGray }}
                                        // value={relationship}
                                        // onChangeText={text => setRelationship(text)}
                                        onChangeText={handleChange('name')}
                                        onBlur={() => setFieldTouched('name')}

                                    />
                                </View>

                                <View style={{ width: wp('96%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('1%') }}>Attendant's Mobile No:</Text>
                                    <View>
                                        <TextInput
                                            value={values.mobileno}
                                            placeholder=''
                                            placeholderTextColor={Colors.primaryColor7}
                                            style={{
                                                width: wp('56%'), height: hp('4%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: touched.mobileno && errors.mobileno ?
                                                    'red' : Colors.primaryGray
                                            }}
                                            // maxLength={10}
                                            // value={mobileNumber}
                                            // onChangeText={text => setMobileNumber(text)}
                                            keyboardType='number-pad'
                                            onChangeText={handleChange('mobileno')}
                                            onBlur={() => setFieldTouched('mobileno')}
                                        />
                                        {touched.name && errors.name && touched.mobileno && errors.mobileno &&
                                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>please fill required field</Text>
                                        }
                                    </View>
                                </View>

                            </View>

                            <View style={{ width: wp('96%'), height: hp('4%'), flexDirection: 'row', marginTop: hp('0.3%'), alignItems: 'center' }}>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%'), }}>Insurance Policy Details</Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('0.5%'), }}>(if any):</Text>
                                <CheckBox
                                    tintColors={{ true: Colors.primaryColor1 }}
                                    disabled={false}
                                    value={policyCheckbox}
                                    onValueChange={InsurancePolicy}
                                    style={{}}
                                />
                            </View>

                            <View style={{ width: wp('96%'), height: hp('14%'), marginTop: hp('0.3%'), }}>
                                <View style={{ flexDirection: 'row', height: hp('7%'), justifyContent: 'space-between' }}>
                                    <View style={{ paddingTop: 8, marginLeft: hp('1%'), }}>
                                        <Text style={{
                                            position: 'absolute', top: 0, left: 10,
                                            zIndex: 100, backgroundColor: 'white', fontSize: hp('1.5%')
                                            // paddingHorizontal: 20,
                                            // color: Colors.primaryGray
                                        }}>Insurance Company</Text>
                                        <View style={{ width: wp('45%'), height: hp('5%'), borderWidth: 1, borderColor: Colors.primaryGray, borderRadius: hp('1%'), marginTop: hp('0%'), backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>

                                            <TextInput
                                                placeholder=''
                                                placeholderTextColor={Colors.primaryColor7}
                                                style={{ width: wp('40%'), height: hp('4%'), backgroundColor: 'white' }}
                                            />
                                            <TouchableOpacity>
                                                <AntDesign name='caretdown' size={hp('2%')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={{ paddingTop: 8, marginLeft: hp('1%'), }}>
                                        <Text style={{
                                            position: 'absolute', top: 0, left: 10,
                                            zIndex: 100, backgroundColor: 'white', fontSize: hp('1.5%')
                                            // paddingHorizontal: 20,
                                            // color: Colors.primaryGray
                                        }}>Policy Name</Text>
                                        <View style={{ width: wp('45%'), height: hp('5%'), borderWidth: 1, borderColor: Colors.primaryGray, borderRadius: hp('1%'), marginTop: hp('0%'), backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>

                                            <TextInput
                                                placeholder=''
                                                placeholderTextColor={Colors.primaryColor7}
                                                style={{ width: wp('40%'), height: hp('4%'), backgroundColor: 'white' }}
                                            />
                                            <TouchableOpacity>
                                                <AntDesign name='caretdown' size={hp('2%')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingTop: 8, marginLeft: hp('1%'), }}>
                                    <Text style={{
                                        position: 'absolute', top: 0, left: 10,
                                        zIndex: 100, backgroundColor: 'white', fontSize: hp('1.5%')
                                        // paddingHorizontal: 20,
                                        // color: Colors.primaryGray
                                    }}>Policy No.</Text>
                                    <View style={{ width: wp('45%'), height: hp('5%'), borderWidth: 1, borderColor: Colors.primaryGray, borderRadius: hp('1%'), marginTop: hp('0%'), backgroundColor: 'white', alignItems: 'center' }}>

                                        <TextInput
                                            placeholder=''
                                            placeholderTextColor={Colors.primaryColor7}
                                            style={{ width: wp('40%'), height: hp('4%'), backgroundColor: 'white' }}
                                        />

                                    </View>
                                </View>
                            </View>

                            <View style={{ width: wp('96%'), height: hp('4%'), flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.red, marginLeft: hp('1%'), }}>Emergency</Text>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('0.5%'), }}>Hospital Admission:</Text>
                                <CheckBox
                                    tintColors={{ true: Colors.primaryColor1 }}
                                    disabled={false}
                                    value={emergencyCheckbox}
                                    onValueChange={() => EmergencyAdmission()}
                                    style={{}}
                                />
                            </View>

                            <View style={{ width: wp('96%'), height: hp('4%'), flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%'), }}>Hospital Recommended By:</Text>
                            </View>

                            <View>
                                <View style={{ width: wp('96%'), height: hp('12%'), marginTop: hp('1%'), }}>

                                    <View style={{ width: wp('96%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <View style={{ width: wp('43%'), flexDirection: 'row', alignItems: 'center', }}>
                                            <RadioButton
                                                color={Colors.primaryColor1}
                                                value="referral"
                                                status={isChecked === 'referral' ? 'checked' : 'unchecked'}
                                                onPress={() => setIsChecked('referral')}
                                            />
                                            <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>Link Refferal Later (if any):</Text>
                                        </View>
                                        <View style={{ width: wp('50%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', marginLeft: hp('1%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: Colors.primaryGray, justifyContent: 'space-between', }}>
                                            <TextInput
                                                placeholder='http://example.com/curaster/refer'
                                                value={text}
                                                style={{ fontSize: text ? hp('1.5%') : hp('1.3%') }}
                                            />
                                            <TouchableOpacity>
                                                <AntDesign name='cloudupload' size={hp('2%')} color={Colors.primaryGray} style={{ marginRight: hp('1%') }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={{ width: wp('96%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp('1%'), }}>
                                        <View style={{ width: wp('43%'), flexDirection: 'row', alignItems: 'center', }}>
                                            <RadioButton
                                                color={Colors.primaryColor1}
                                                value="selfhospi"
                                                status={isChecked === 'selfhospi' ? 'checked' : 'unchecked'}
                                                onPress={() => setIsChecked('selfhospi')}
                                            />
                                            <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>Self Hospitalization:</Text>
                                        </View>
                                        <View style={{ width: wp('50%'), height: hp('7%'), flexDirection: 'row', marginLeft: hp('1%'), borderRadius: hp('1%'), borderWidth: 1, borderColor: Colors.primaryGray, flexWrap: 'wrap' }}>
                                            <TextInput
                                                placeholder='Please mentaion details for hospitalization'
                                                value={text}
                                                style={{ fontSize: text ? hp('1.5%') : hp('1.3%') }}
                                            />
                                            <TouchableOpacity style={{ width: wp('50%'), height: hp('4%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, }}>upload relevent document</Text>
                                                <AntDesign name='cloudupload' size={hp('2%')} color={Colors.primaryColor7} style={{ marginRight: hp('1%') }} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </View>
                            </View>

                            <View style={{ bottom: 0, }}>
                                <Modal isVisible={urgentAdmission}
                                    animationIn='zoomIn'
                                    // animationOutTiming={500}
                                    // animationInTiming={500}
                                    hideModalContentWhileAnimating={true}
                                    useNativeDriverForBackdrop={true}
                                    onBackdropPress={() => setUrgentAdmission(false)}
                                    onSwipeComplete={() => setUrgentAdmission(false)}
                                    swipeDirection={['down']}
                                    avoidKeyboard={true}
                                    useNativeDriver={true}
                                    style={{ width: wp('90%'), }}
                                >

                                    <View style={{ width: wp('90%'), height: hp('18%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                        <View style={{ width: wp('83%'), height: hp('8%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%') }}>
                                            {/* <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Appointment Cancellation</Text> */}
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor7, marginTop: hp('1.5%') }}>Are you sure you want Emergency Hospital Admission?</Text>


                                            <View style={{ width: wp('84%'), height: hp('8%'), flexDirection: 'row', justifyContent: "space-between", alignItems: "center", marginTop: hp('3.8%') }}>
                                                <TouchableOpacity onPress={() => setUrgentAdmission(false)} style={[styles.cancel, { backgroundColor: "white" }]} >
                                                    <Text style={[styles.can, { color: "#09c6f9" }]}>Cancel</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={EmergencyConfirmation} style={[styles.change, { backgroundColor: "#09c6f9" }]}>
                                                    <Text style={[styles.can, { color: "white" }]}>Yes</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>

                            <View style={{ bottom: 0, }}>
                                <Modal isVisible={policy}
                                    animationIn='zoomIn'
                                    // animationOutTiming={500}
                                    // animationInTiming={500}
                                    hideModalContentWhileAnimating={true}
                                    useNativeDriverForBackdrop={true}
                                    onBackdropPress={() => setPolicy(false)}
                                    onSwipeComplete={() => setPolicy(false)}
                                    swipeDirection={['down']}
                                    avoidKeyboard={true}
                                    useNativeDriver={true}
                                    style={{ width: wp('90%'), }}
                                >

                                    <View style={{ width: wp('90%'), height: hp('22%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                        <View style={{ width: wp('83%'), height: hp('11%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%'), }}>
                                            {/* <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Appointment Cancellation</Text> */}
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor7, marginTop: hp('1.5%') }}>Check at the hospital about the coverage of the insurance policy and for any payment related queries.</Text>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor7, }}>App will not be responsible for any coverage related discrepancies.</Text>


                                            <View style={{ width: wp('83%'), height: hp('8%'), flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: hp('1%'), }}>
                                                <TouchableOpacity onPress={PolicyConfirmation} style={[styles.change, { backgroundColor: "#09c6f9" }]}>
                                                    <Text style={[styles.can, { color: "white" }]}>Okay</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>

                            <View style={{ flexDirection: 'row', width: wp('96%'), height: hp('7'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('4%'), marginBottom: hp('1%') }}>
                                <TouchableOpacity onPress={handleSubmit} style={{ width: wp('40%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor9, borderRadius: hp('1.2%'), borderWidth: 1, borderColor: Colors.primaryColor1 }}>
                                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, }}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { handleSubmit(), ValidAdmissionForm() }}
                                    style={{ width: wp('40%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor1, borderRadius: hp('1.2%'), }}>
                                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor9, }}>Submit</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                )}
            </Formik>
        </SafeAreaView >
    )
}



const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor: Colors.primaryColor9,
        backgroundColor: 'white',
        // backgroundColor: '#dff7f7',
        alignItems: 'center'
    },
    cancel: {
        width: wp('36%'),
        height: hp('5%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.7%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        // borderColor:"#8f9194",
        borderWidth: hp('0.2%'),

    },

    change: {
        width: wp('36%'),
        height: hp('5%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.7%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        // borderColor:"#8f9194",
        borderWidth: hp('0.2%'),

    },
    can: {
        alignItems: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: hp('1.8%')

    },
})

export default AdmissionForm;

// onPress={ValidAdmissionForm}