import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6EFE7',
  },
  input: {
    flex:1,
    borderWidth: 1,
    height: 70,
    borderColor: "#D9DBDD",
    borderRadius: 8,
    fontSize: 16,
    color: '#02111A',
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 22,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'normal'
  },
  multilineInput: {
    borderWidth: 1,
    maxHeight: 150,
    borderColor: "#D9DBDD",
    borderRadius: 8,
    fontSize: 16,
    color: '#02111A',
    paddingBottom: 10,
    paddingTop: 22,
    paddingHorizontal: 16,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'normal'
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
    fontWeight: 'normal',
    letterSpacing: 0.5,
    marginTop: 10
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
    padding: 16
  },
  btnStyleCustom: {
    borderRadius: 20
  },
  registerBtn: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily:'Poppins-Medium'
  },
  labeltxt: {
    marginTop: 5,
    fontSize: 18,
    color: '#414042',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.5
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#02111A',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 12,
    width: 190
  },
  borderRight: {
    borderRightWidth: 1,
    borderWidth: 1,
    borderColor: '#B3B8BB',
    height: 40,
    marginLeft: 12,
    flexDirection: 'row',
    backgroundColor: '#E6EAEB',
  },
  countryCode: {
    textAlign: 'center',
    fontSize: 16,
    color: '#02111A',
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
    marginRight: 8
  },
  mobileInputBlock: {
    backgroundColor: '#E6EAEB',
    height: 70,
    borderRadius: 8,
    marginTop: 24,
    marginBottom:1,
    paddingLeft: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  countryCodeDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  inputdiv:{
    flex:1,
    marginBottom: 80
  },
  mobileInput: {
    margin: 10,
    width: '70%',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#E6EAEB',
    fontSize: 16,
    color: '#02111A',
    fontFamily: 'Poppins-Medium',
    fontWeight: 'normal'
  }
});