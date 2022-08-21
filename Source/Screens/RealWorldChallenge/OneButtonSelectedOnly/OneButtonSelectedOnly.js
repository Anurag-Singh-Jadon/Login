import React, { useState, useEffect } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, FlatList, Modal, Pressable, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';

    const [selectedTime, setSelectedTime] = useState('');
    const [selectedFormate, setSelectedFormate] = useState('');

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

 const Data1 = [
        {
            id: 1,
            time: `07:00`, formate: `AM`
        },
        {
            id: 2,
            time: `08:00`, formate: `AM`
        },
        {
            id: 3,
            time: `09:00`, formate: `PM`
        },
        {
            id: 4,
            time: `10:00`, formate: `PM`
        },
        {
            id: 5,
            time: `11:00`, formate: `PM`
        },


    ]

   const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? Colors.circleColor : Colors.lightblueC;
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    setSelectedTime(item.time);
                    setSelectedFormate(item.formate)
                }
                }
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

const Item = ({ item, onPress, backgroundColor, textColor }) => (
       <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>

            {/* <Circle time={item.time} formate={item.formate}  /> */}

            <Text style={{ fontWeight: 'bold', color: Colors.white, fontSize: hp('2%') }}>{item.time}</Text>
            <Text style={{ fontWeight: 'bold', color: Colors.white, fontSize: hp('2%') }}>{item.formate}</Text>
        </TouchableOpacity>
    );

return(
  <View style={{ width: wp('100%'), height: hp('20%'), marginTop: hp('2%') }}>
                        <Text style={{ padding: wp('4%'), fontWeight: 'bold', fontSize: hp('2.5%') }}>Morning Slot</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={Data1}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            extraData={selectedId}
                        />
                    </View>

)

