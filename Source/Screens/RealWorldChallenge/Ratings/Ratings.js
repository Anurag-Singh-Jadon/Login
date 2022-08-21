// we can use library   import { Rating } from 'react-native-elements';   or import Ratings from 'react-native-ratings';



This is the Genuine Way

    const [defaultRating, setDefaultRating] = useState(2);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';



 <View style={{ width: wp('22%'), height: hp('3.5%'), justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: hp('0.5%') }}>
                                    {maxRating.map((item, key) => {
                                        return (
                                            <TouchableOpacity
                                                activeOpacity={0.2}
                                                key={item}
                                                onPress={() => setDefaultRating(item)}>
                                                <Image
                                                    style={{
                                                        width: wp('2.7%'),
                                                        height: hp('1.7%'),
                                                        resizeMode: 'cover',
                                                        marginLeft: wp('0.7%')
                                                    }}
                                                    source={
                                                        item <= defaultRating
                                                            ? { uri: starImageFilled }
                                                            : { uri: starImageCorner }
                                                    }
                                                />
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>