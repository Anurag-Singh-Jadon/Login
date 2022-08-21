Timer for OTP Count--

const [pin, setPin] = useState('')
const [counter, setCounter] = React.useState(30);


    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

  {pin.length !== 4 ?
                            <TouchableOpacity disabled={true} style={{ width: wp('90%'), height: hp('7%'), backgroundColor: 'white', alignSelf: 'center', marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('1.5%') }}>
                                <Text style={{ fontWeight: 'bold', fontSize: hp('2%'), color: Colors.primaryGray }}>Continue</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity style={{ width: wp('90%'), height: hp('7%'), backgroundColor: Colors.themeColor1, alignSelf: 'center', marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('1.5%') }}>
                                <Text style={{ fontWeight: 'bold', fontSize: hp('2%'), color: "white" }}>Continue</Text>
                            </TouchableOpacity>
                        }

                        <View style={{ width: wp('90%'), height: hp('4%'), alignSelf: 'center', flexDirection: 'row', marginTop: hp('1%'), justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ color: 'white', fontSize: hp('2.2%'), textAlign: 'center', fontWeight: 'normal' }}>No OTP Recieved? </Text>
                            {counter !== 0 ?
                                <Text style={{ color: 'white', fontSize: hp('2.2%'), textAlign: 'center', fontWeight: 'normal' }}>Try again in {counter} sec</Text>
                                :
                                <TouchableOpacity style={{ justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: hp('2.2%'), textAlign: 'center', fontWeight: 'normal' }}>  Resend Otp</Text>
                                </TouchableOpacity>
                            }
                        </View>
