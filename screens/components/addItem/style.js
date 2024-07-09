import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    firstBlock: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    firstCol: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    foodName: {
      fontSize: 14,
      color: '#02111A',
      fontFamily:'Poppins-SemiBold'
    },
    foodDescription: {
      fontSize: 12,
      color: '#4E585E',
      fontFamily:'Poppins-Medium'
    },
    amount: {
      fontSize: 14,
      color: '#FFD700',
      fontFamily:'Poppins-Bold'
    },
    detailsBlock: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    customImg: {
      width: 60,
      height: 60,
      borderRadius: 8,
      padding:8,
      borderWidth:1,
      borderColor:'#E4E8EE'
    },
    decrementBox: {
      backgroundColor: '#b10606',
      borderRadius: 20,
      justifyContent: 'center',
      width: 25,
      height: 25,
      alignItems:'center',
    },
    disableDecrementBox:{
      backgroundColor: '#E4E8EE',
      borderRadius: 20,
      justifyContent: 'center',
      width: 25,
      height: 25,
      alignItems:'center',
    },
    decrementSymbol: {
      color: '#ffffff',
      textAlign:'center',
      fontSize:16
    },
    incrementBox: {
      backgroundColor: '#b10606',
      borderRadius: 20,
      justifyContent: 'center',
      width: 25,
      height: 25,
      alignItems:'center'
    },
    incrementSymbol: {
      color: '#ffffff',
      textAlign:'center',
      fontSize:16
    },
    secondCol: {
      flex: 3,
      padding: 8,
    }
  });