
                                              Page1-->
                                              import AsyncStorage from '@react-native-async-storage/async-storage';
                                              import axios from 'axios';
                                              
                                              return(
                                              <View style={{ height: hp('6.5%'), width: wp('30%'), justifyContent: 'center' }}>
                                                                  <TouchableOpacity style={{ width: wp('20%'), height: hp('3.5%'), backgroundColor: '#CCEBFA', borderRadius: hp('0.8%'), alignSelf: "center", justifyContent: "center" }}
                                                                    onPress={() => {
                                                                      AsyncStorage.setItem('Name', val.patientName);
                                                                      AsyncStorage.setItem('Gender', (val.gender));
                                                                      AsyncStorage.setItem('Fathers_Name', (val.fatherHusbandName));
                                                                      AsyncStorage.setItem('Booking_Id', (val.bookingId));
                                                                      AsyncStorage.setItem('Mobile_Number', (val.phone));
                                                                      AsyncStorage.setItem('Policy Number', (val.policyNumber));
                                                                      AsyncStorage.setItem('Date', (val.bookingDate));
                                                                      AsyncStorage.setItem('Time', (val.bookingTime));
                                                                      AsyncStorage.setItem('Hospital_Ward', (val.bedType));
                                                                      AsyncStorage.setItem('Location', (val.address));
                                              
                                                                      // alert(val.phone);
                                                                      // alert(val.charges.totalCharges);
                                                                      // alert(val.charges.facilitiesCharges);
                                                                      //alert(val.amenities);
                                                                      // alert(val.charges.amenitiesCharges);
                                                                      props.navigation.navigate('BookingHistoryTwo');
                                                                    }}
                                                                  >
                                                                    <Text style={{ fontWeight: 'normal', fontSize: hp('1.3%'), color: '#000', textAlign: "center" }}>VIEW DETAILS</Text>
                                                                  </TouchableOpacity>
                                                                </View>
                                              
                                              )
                                              // Now API Data is set and saved
                                              
                                                                                                         Page2--
                                              
                                              //Time to use that Data
                                              
                                                  const [date, setDate] = useState('');
                                                  const [name, setName] = useState('');
                                                  const [fathersName, setFathersName] = useState('');
                                                  const [gender, setGender] = useState('');
                                                  const [mobileNumber, setMobileNumber] = useState('')
                                                  const [policyNumber, setPolicyNumber] = useState('')
                                                  const [ward, setWard] = useState('')
                                                  const [hospitalName, setHospitalName] = useState('')
                                                  const [location, setLocation] = useState('')
                                                  const [hospName, setHospName] = useState('')
                                                  const [totalcharges, setTotalCharghes] = useState('')
                                                  useEffect(() => {
                                                      getBookingHistoryData();
                                                  }, [])
                                              
                                              const getBookingHistoryData = async () => {
                                                      try {
                                                          await AsyncStorage.getItem('Date').then(
                                                              (Date) =>
                                                                  setDate(Date),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Name').then(
                                                              (Name) =>
                                                                  setName(Name),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Fathers_Name').then(
                                                              (Fname) =>
                                                                  setFathersName(Fname),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Gender').then(
                                                              (Gender) =>
                                                                  setGender(Gender),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Mobile_Number').then(
                                                              (Mbnumber) =>
                                                                  setMobileNumber(Mbnumber),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Policy Number').then(
                                                              (Polnmb) =>
                                                                  setPolicyNumber(Polnmb),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Hospital_Ward').then(
                                                              (Ward) =>
                                                                  setWard(Ward),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Hname').then(
                                                              (Hname) =>
                                                                  setHospitalName(Hname),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('Location').then(
                                                              (Location) =>
                                                                  setLocation(Location),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('HospName').then(
                                                              (HospName) =>
                                                                  setHospName(HospName),
                                                              //   setGetLocation(Location)
                                                          )
                                                          await AsyncStorage.getItem('TotalCharges').then(
                                                              (HospName) =>
                                                                  setTotalCharghes(HospName),
                                                              //   setGetLocation(Location)
                                                          )
                                              
                                                      }
                                                      catch (error) {
                                                          alert(error)
                                                      }
                                              
                                                  }
                                              
                                              //Now Data is get we can set anywhere in UI.
                                              
                                              