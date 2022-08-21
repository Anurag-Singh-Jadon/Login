//Add This To Manifast.XML 
<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyCUPPS2Di5ciYMANNQ7JbPWmAQGEuDeCiQ"/>

Here android: value is mendatory.

import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const [pin, setPin] = React.useState({
        // latitude: 37.78825,
        // longitude: -122.4324
        latitude: 28.6267895,
        longitude: 77.3724016
    })
    const [region, setRegion] = React.useState({
        latitude: 28.6267895,
        longitude: 77.3724016,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })



return(
<View style={{ width: wp('96%'), height: hp('32%'), alignSelf: 'center', borderRadius: hp('1%') }}>

                                <MapView
                                    style={styles.map}
                                    initialRegion={{
                                        latitude: 28.6267895,
                                        longitude: 77.3724016,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421
                                    }}
                                    provider="google"
                                >
                                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                                    <Marker
                                        coordinate={pin}
                                        pinColor="red"
                                        draggable={true}
                                        onDragStart={(e) => {
                                            console.log("Drag start", e.nativeEvent.coordinates)
                                        }}
                                        onDragEnd={(e) => {
                                            setPin({
                                                latitude: e.nativeEvent.coordinate.latitude,
                                                longitude: e.nativeEvent.coordinate.longitude
                                            })
                                        }}
                                    >
                                        <Callout>
                                            <Text >I'm here</Text>
                                        </Callout>
                                    </Marker>
                                </MapView>
                            </View>

)