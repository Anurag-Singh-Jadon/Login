import getDirections from 'react-native-google-maps-directions';

  const [getLocation, setGetLocation] = useState('');

  const HandleGetDirections = () => {
        const data = {
            source: {
                latitude: -33.8356372,
                longitude: 18.6947617
            },
            destination: {
                latitude: -33.8600024,
                longitude: 18.697459
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ],
            waypoints: [
                {
                    latitude: -33.8600025,
                    longitude: 18.697452
                },
                {
                    latitude: -33.8600026,
                    longitude: 18.697453
                },
                {
                    latitude: -33.8600036,
                    longitude: 18.697493
                }
            ]
        }

        getDirections(data)
    }

return(
<TouchableOpacity style={{ width: wp('100%'), height: hp('7%'), backgroundColor: Colors.skyblue, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: hp('3%') }} onPress={HandleGetDirections}>
   <Text style={{ fontWeight: 'bold', color: Colors.white, fontSize: hp('3%') }}>Get Directions</Text>
  </TouchableOpacity>
)