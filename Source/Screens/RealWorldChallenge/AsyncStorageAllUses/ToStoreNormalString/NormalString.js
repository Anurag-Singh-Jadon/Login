Here we can we string anywhere in Project.
First of all store it,save it then use anywhere.

Profile.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//const [getValue, setGetValue] = useState('');
const [firstName, setFirstName] = useState('');

 const saveValueFunction = () => {
        // Function to save the value in AsyncStorage
        try {
            if (firstName) {
                // To check the input not empty
                AsyncStorage.setItem('any_key_here', firstName);
                // Setting a data to a AsyncStorage with respect to a key
                setFirstName('');
                // Resetting the TextInput
                //   console.log("First name value====" +setFirstName)
                // alert('Data Saved');
                // Alert to confirm
            } else {
                alert('Please fill data');
            }
        } catch (error) {
            console.log(error)
        }
    };


Drawer Screen-->
import AsyncStorage from '@react-native-async-storage/async-storage';
const [getValue, setGetValue] = useState('');
  console.log("getvalue data" + getValue);

 const getValueFunction = () => {
    // Function to get the value from AsyncStorage
    try {
      AsyncStorage.getItem('any_key_here').then(
        (value) =>
          // AsyncStorage returns a promise
          // Adding a callback to get the value
          setGetValue(value),
        // Setting the value in Text

        //   alert(getValue);
        console.log("first value=====" + getValue)
      );
    } catch (error) {
      console.log(error)
    }
  };

return(
<View>
 <Text style={styles.title2}>{getValue}</Text>
</View>

)



Booking Slot.js(Same Concept is used to save date,time and formate in Calender)



import DatePicker from 'react-native-modern-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const [selectedTime, setSelectedTime] = useState('');
const [selectedFormate, setSelectedFormate] = useState('');
const [selectedId, setSelectedId] = useState(null);
const [selectedDate, setSelectedDate] = useState('');

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

const saveDate = () => {
        // Function to save the value in AsyncStorage

        // To check the input not empty
        AsyncStorage.setItem('date', selectedDate);
        // Setting a data to a AsyncStorage with respect to a key


        AsyncStorage.setItem('timing', selectedTime);
        AsyncStorage.setItem('formate', selectedFormate);

        console.log('Async me timing', selectedTime)
        console.log('Async me formate', selectedFormate)


        alert('Data Saved');
        // Alert to confirm



    };

   <CustomButton
                    // onPress={() => props.navigation.goBack('SemiPrivateRooms')}
                    onPress={() => { saveDate(); DoubleFunc() }}
                    //  onPress={()=>{userBookingData()}}
                    title={'Confirm'}
                    bgColor={Colors.circleColor}
                    width={wp('90%')}
                    height={hp('8%')}
                    color={Colors.white}
                    fontSize={hp('2.5%')}
                    alignSelf={'center'}
                    marginTop={hp('1%')}
                    borderRadius={hp('1%')}
                />

Now Data is saved and we can send and used it anywhere. 

SamiprivateRoom.js
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import axios from 'axios';

  const [getDate, setGetDate] = useState('');
  const [getTime, setGetTime] = useState('');
  const [getFormate, setGetFormate] = useState('');

  const GetSavedDate = async () => {


        // Function to get the value from AsyncStorage
        AsyncStorage.getItem('date').then(
            (value) =>

                setGetDate(value),

        );
        AsyncStorage.getItem('timing').then(
            (value) =>
                // AsyncStorage returns a promise
                // Adding a callback to get the value
                setGetTime(value),
        );

        AsyncStorage.getItem('formate').then(
            (formate) =>
                // AsyncStorage returns a promise
                // Adding a callback to get the value
                setGetFormate(formate),
        );
    };

Here we getsaved date,time and Formate,Now we can use anywhere in this screen.