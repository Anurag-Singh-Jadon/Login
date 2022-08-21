const [color, setColor] = useState(true);
const [myColor, setMyColor] = useState(false);

 const Male = () => {
   setColor(true)
   setMyColor(false)

  }
 const Female = () => {
   setMyColor(true)
   setColor(false)

  }

return(
<View style={{ width: wp('96%'), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', backgroundColor: Colors.primaryColor8, height: hp('8%'), marginTop: hp('0.5%'), alignItems: 'center' }}>
                   <TouchableOpacity onPress={Male}
                       style={{ backgroundColor: color ? Colors.lightPurples : "white", width: wp('40%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('1%'), marginLeft: hp('0.3%'), borderWidth: 1, borderColor: Colors.darkPurple }} >
                       <Text style={{ fontWeight: 'bold', fontSize: hp('1.8%'), color: color ? "white" : Colors.lightPurples }}>Male</Text>
                   </TouchableOpacity>


                   <TouchableOpacity onPress={Female}
                       style={{ backgroundColor: myColor ? Colors.lightPurples : "white", width: wp('40%'), height: hp('7%'), alignItems: 'center', justifyContent: 'center', borderRadius: hp('1%'), marginRight: hp('0.3%'), borderWidth: 1, borderColor: Colors.darkPurple }}>
                       <Text style={{ fontWeight: 'bold', fontSize: hp('1.8%'), color: myColor ? "white" : Colors.lightPurples }}>Female</Text>
                   </TouchableOpacity>
           </View>
)