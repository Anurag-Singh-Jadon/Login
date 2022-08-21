https://github.com/oblador/react-native-animatable
Splash All Ways-->

Way1-->

import React, { useState,useRef, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, ActivityIndicator,Animated } from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assets/Constants/Colors';




const Splash = ({ navigation }) => {
    //State for ActivityIndicator Animation
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);

            navigation.replace('Login')

        }, 2000);

    }, []);


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ width: wp('100%'), height: hp('92%'), alignItems: 'center', justifyContent: 'center', }}>

                    <Image source={require('../Assets/Images/eHospi.png')}
                        style={{ justifyContent: 'space-between', width: wp('55%'), height: hp('30%'), }} />
                </View>
                <View style={{ width: wp('100%'), height: hp('8%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../Assets/Images/india.png')}
                        style={{ width: wp('6%'), height: hp('3%'), }} />
                    <Text style={{ fontWeight: 'bold', fontSize: hp('2%'), marginLeft: wp('1%'), }}>Made in India</Text>
                </View>


            </View>


        </SafeAreaView >
    )
}

export default Splash;
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%')
    },
    midContainer: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    logo: {
        height: hp('12%'),
        width: hp('12%')
    },
    logoCntnr: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    yellowTxt: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: Colors.lightYellow,
    },
    blackTxt: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: Colors.black
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
})

Way2-->


import * as Animatable from 'react-native-animatable';

import { Image, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// const zoomeIn = Animatable.createAnimatableComponent(MyCustomComponent);

const MySplashScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor={'#f5f5f5'}
            />
            {/* <Animatable.Text animation="zoomInUp" iterationCount={5}>Zoom me up, Scotty</Animatable.Text>
            <Animatable.Text animation="zoomOutLeft" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
            <Animatable.Text animation="zoomOutRight" easing="ease-out" iterationCount={5} style={{ textAlign: 'center' }}>❤️</Animatable.Text> */}
            <Animatable.Image style={styles.logo}
                animation="zoomIn" delay={200} duration={5000}
                source={require('../Assetst/Images/Logo.png')}
                onAnimationEnd={() => props.navigation.replace('LoginsignupScreen')}
            />
            {/* <View >
                <Animatable.Text style={[styles.logoText, { color: '#035FCE', fontFamily: 'Roboto-Bold' }]} animation="zoomIn" delay={1000} duration={4000}

                > C u r A s t e r
                </Animatable.Text>


            </View>
            <View>
                <Animatable.Text style={[styles.logoText, { color: 'black', fontFamily: 'Roboto-Regular', fontSize: hp('2%') }]} animation="zoomIn" delay={1000} duration={4000}

                >  For your family's wellness
                </Animatable.Text>
            </View> */}
        </SafeAreaView>
    )
};

export const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: wp('50%'),
        height: wp('50%'),
        // backgroundColor:'#09C6F9',
        // backgroundColor:'#035FCE',
        // backgroundColor:'#F1F8F9',
        // backgroundColor:'#ABB286',

        // backgroundColor:'#D0DAE0',
    },

    logoText: {
        fontSize: hp('5%'),

    },
});

export default MySplashScreen;








