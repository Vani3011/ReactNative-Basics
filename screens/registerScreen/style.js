import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6EFE7',
    },
    input: {
      borderWidth: 1,
      height: 70,
      borderColor:"#D9DBDD",
      borderRadius:8,
      fontSize:16,
      color:'#02111A',
      paddingBottom:10,
      paddingTop:10,
      paddingHorizontal:22
    },
    multilineInput:{
        borderWidth: 1,
        maxHeight: 150,
        borderColor:"#D9DBDD",
        borderRadius:8,
        fontSize:16,
        color:'#02111A',
        paddingBottom:10,
        paddingTop:22,
        paddingHorizontal:16,
    },
    imgContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16
    },
    profileBox: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      padding: 16
    },
    hdrText: {
      fontSize: 24,
      textAlign: 'center',
      color: '#02111A',
      fontFamily: 'Poppins-SemiBold',
      letterSpacing: 0.5,
      marginTop:10
    },
    subHdrText: {
      marginTop: 1,
      fontSize: 18,
      textAlign: 'center',
      color: '#4E585E',
      fontFamily: 'Poppins-Medium',
      letterSpacing: 0.5
    },
    subHdrText2: {
      marginTop: 1,
      fontSize: 18,
      textAlign: 'center',
      color: '#4E585E',
      fontFamily: 'Poppins-Medium'
  
    },
    bottomBtn: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        padding:16
    },
    btnStyleCustom: {
      borderRadius: 20
    },
    registerBtn: {
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: 24
    },
    labeltxt:{
      marginTop: 5,
      fontSize: 18,
      color: '#414042',
      fontFamily: 'Poppins-SemiBold',
      letterSpacing: 0.5
    },
    subTitle:{
        textAlign:'center',
        fontSize:16,
        color:'#02111A',
        fontFamily: 'Poppins-SemiBold',
        marginTop:12,
        width:190
    },
    borderRight: {
      borderRightWidth: 1,
      borderColor: '#B3B8BB',
      borderWidth: 1,
      height: 40,
      marginLeft: 12,
    },
    mobileInputBlock:{
      backgroundColor: '#E6EAEB',
      height: 70,
      borderRadius: 8,
      marginBottom: 8,
      marginTop: 8,
    },
    countryCodeDiv:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '30%',
    }
  });