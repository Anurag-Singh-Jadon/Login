//OTP Enterd the page  where we enter the mobile number. In this way we want to use this in another page. We can store with Async Storage.

SelectNumber.js
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from 'axios';

class SelectNumber extends Component {
 constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    handleSubmit = () => {
        const SubmitDAta = {
            phone: this.state.phone
        }
        console.log("phone no" + this.state.phone)

        // const phone =this.state
        // console.log(phone);
        console.log(SubmitDAta);
        console.log('hit')
        console.log('http://10.0.2.2:8000/user/phone/login/', SubmitDAta.phone);
        axios.post('http://10.0.2.2:8000/user/phone/login/', SubmitDAta)
            .then(res => {
                console.log(res.data)
                console.log(res.data.Details)
                let sfsdfsd = res.data.Details
                //   AsyncStorage.setItem('DetailsId', sfsdfsd);
                if (res.data.Status == 400) {
                    alert("Number is not ");
                }
                else if (res.data.Status == "Success") {
                    //  AsyncStorage.setItem('user_id')
                    AsyncStorage.setItem('DetailsId', res.data.Details);
                    this.props.navigation.navigate('Otp', { DetailsIdGet: res.data.Details, phoneNo: this.state.phone });

                }
                else {
                    console.log('else condtion')
                }
                //console.log(res);
                console.log(res.data.statusCode);
            })
            .catch(function (error) {
                console.log(error);
            });
        //event.preventDefault();
    }




}
OTP.js


import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from 'axios';
import { baseurl } from '../Config/baseurl';
const VerifyResRegOtp = 'http://10.0.2.2:8000/user/phone/verifyOTP'


const Otp = ({ route, navigation }) => {
 const [pin, setPin] = useState('')
const { DetailsIdGet, phoneNo } = route.params;
      const validForm = () => {


        //const emailRegex = /\S+@\S+\.\S+/;
        // const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const rule = /^[a-zA-Z ]{2,40}$/;
        const DOB_REGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        if (rule.test(fullName) == '') {
            alert('Enter the valid Name')
        }


        else if (DOB_REGEX.test(date) == '') {
            alert('Select Your Date of Birth');
        }


        else if (emailRegex.test(email) == '') {
            alert('Enter the valid Email');
        }

        else {
            alert('Profile Data Submitted Successfully')
            navigation.navigate('DrawerNavigator')
        }

    };
    const onPressotpVerification = () => {
        // const DetailsId = AsyncStorage.getItem('DetailsId')
        // console.log("DetailsId");
        AsyncStorage.getItem('DetailsId').then(
            (value) =>
                setGetValue(value),
        )

        console.log(getValue);
        const verifyObj = {
            details: DetailsIdGet,
            otp: pin,
            phone: phoneNo,
        }
        console.log("Verify obj value==" + verifyObj.otp);
        console.log(verifyObj);
        verifyObj.otp = Number(verifyObj.otp)
        // verifyObj.phone
        console.log(verifyObj);
        const fetchData = async () => {
            const f = axios.post(VerifyResRegOtp, verifyObj);
            f.then(t => {
                console.log(t.data);

                let tk = t.data.token;
                AsyncStorage.setItem('tokenId', t.data.token);
                console.log('tk ======================');
                console.log(tk);
                axios
                    .get('http://10.0.2.2:8000/user/alreadyRegistered',
                        {
                            headers: { Authorization: `Bearer ${tk}` },

                        }
                    )
                    .then(res => {
                        console.log('wqe');
                        console.log(res.data);
                        console.log(res.data.message);
                        if (res.data.message == "No data found") {
                            navigation.navigate('Profile', { Pname: tk })
                        }
                        else if (res.data.message == "User already registered") {
                            navigation.navigate('DrawerNavigator')
                        }
                        else {
                            console.log("Error occur")
                        }
                    });
            }).catch(e => {
                console.log('1st');
            });
        };
        fetchData();
    }
}