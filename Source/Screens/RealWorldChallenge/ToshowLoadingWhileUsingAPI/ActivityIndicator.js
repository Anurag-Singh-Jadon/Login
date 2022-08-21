import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

const [isLoading, setIsLoading] = useState(true);

///Note for post API isLoading would be False because API will be hit through Button ok ! Not with useEffect Method.

  const getHospitalList = () => {
        setIsLoading(true)                           //Step1
        fetch(baseurl + 'user/findHospital', { headers: { "Authorization": `Bearer ${getTokenId}` } })
            .then((response) => response.json())
            .then((responseJson) => {
                // setJatin(responseJson);
                setHospitaldddddddList(responseJson);
                // setMasterDataSource(responseJson);
                // console.log(responseJson[0].latitude, responseJson[0].longitude)
                // console.log('responseJson data')
                // console.log('Self Pay',responseJson)
            })
            .catch((error) => {                                      //Step2
                console.error(error);
            }).finally(() => setIsLoading(false));
    }

return(

 {isLoading ? (
                <ActivityIndicator color='#bc2b78'
                    size="large" style={{ flex: 1, alignSelf: 'center', marginTop: 25 }} />
            ) : (
                <View style={{ height: hp('7%'), justifyContent: 'center', alignSelf: 'center', width: wp('100%'), alignItems: 'center', }}>

                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: '#249cf2' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={getInsuranceName}
                        //{data=getInsuranceName.map((i)=>{labelField=i.insurance,valueField=i.insurance})}

                        // search
                        maxHeight={300}
                        labelField="insurance"
                        valueField="insurance"
                        placeholder={getDropdownValue}
                        // searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            // setValue(item.insurance);
                            //setValue((item.insurance == 'Self Pay') ? selfPay() : item.insurance )
                            setValue((item.insurance == 'Self Pay') ? selfPay() : item.insurance ? insuranceSelect(item) : item.insurance)
                            setDropdownValue(item.insurance);
                            // console.log(Value)
                        }

                        }
                    // renderLeftIcon={() => (
                    //     <AntDesign
                    //         style={styles.icon}
                    //         color={isFocus ? 'blue' : 'black'}
                    //         name="Safety"
                    //         size={20}
                    //     />
                    // )}
                    />

                </View>
            )}

)

