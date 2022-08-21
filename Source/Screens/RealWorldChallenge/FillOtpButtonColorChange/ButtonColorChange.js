const [pin, setPin] = useState('')

<OtpInputs
      handleChange={(code) => setPin(code)}
      numberOfInputs={6}
      keyboardType='phone-pad'
      inputStyles={
          styles.underlineStyleBase
      }
      style={{ flexDirection: 'row', alignSelf: 'center', marginTop: -hp('1%') }}
  />

  {pin.length !== 6 ? (

      <CustomButton

          // onPress={() => props.navigation.navigate('Profile')}
          title={'CONTINUE'}
          bgColor={'#C0C0C0'}
          width={wp('90%')}
          height={hp('7%')}
          color={Colors.white}
          fontSize={hp('2.5%')}
          alignSelf={'center'}
          marginTop={hp('5%')}
          borderRadius={hp('1%')}
          disabled={true}
      />
  ) : (

      <CustomButton
          onPress={() => onPressotpVerification()}
          // onPress={() => navigation.navigate('Profile', { Pname: 'Priyanka Chauhan' })}
          title={'CONTINUE'}
          bgColor={'#0489D6'}
          width={wp('90%')}
          height={hp('7%')}
          color={Colors.white}
          fontSize={hp('2.5%')}
          alignSelf={'center'}
          marginTop={hp('5%')}
          borderRadius={hp('1%')}

      />
  )}