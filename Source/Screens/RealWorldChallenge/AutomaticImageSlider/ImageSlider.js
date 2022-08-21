import { SliderBox } from "react-native-image-slider-box";

  const banners1 = [
        require('../Assetst/Images/banner3.png'),
        require('../Assetst/Images/banner4.png'),
        require('../Assetst/Images/banner5.png'),
        require('../Assetst/Images/banner5.png'),
        require('../Assetst/Images/banner5.png'),
        require('../Assetst/Images/banner5.png'),

    ]

return(
 <View style={{ width: wp('100%'), height: hp('18%'), }}>
                        <SliderBox
                            images={banners1}
                            style={{ width: wp('95%'), height: hp('15%'), alignSelf: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), resizeMode: 'contain', marginTop: hp('1.5%'), }}
                            autoplay={true}
                            autoPlayWithInterval={500}
                            circleLoop={true}
                            inactiveDotColor={true}

                        />
                    </View>

);