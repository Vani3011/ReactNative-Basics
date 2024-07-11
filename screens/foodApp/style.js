import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundImage:'linear-gradient(to right top, #f6f2ef, #f1eeec, #ece9e8, #e7e5e5, #e2e1e1, #e2ddde, #e1d9dd, #ddd5de, #e4cfdb, #edc9d2, #f4c4c4, #f6c1b2)',
        justifyContent: 'center',
        alignItems: 'center',
        // padding:16
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        textAlign: 'center',
        color: "#000000",
        marginTop: -8
    },
    subTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        textAlign: 'center',
        color: "#98A0AC",
    },
    bottomBtn: {
        width: '100%',
        // backgroundColor: '#FFFFFF',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        padding: 16
    },
    submitBtn: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    imageContainer: {
        flex: 1,
        marginTop: 50,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 10
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    image1Block: {
        width: 100,
        height: 100,
        borderRadius: 150,
        padding: 60,
        backgroundColor: '#FFFFFF',
        marginLeft: -25,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image1: {
        width: 80,
        height: 80,
        borderRadius: 150,
    },
    image2Block: {
        width: 100,
        height: 100,
        borderRadius: 150,
        padding: 90,
        backgroundColor: '#FFFFFF',
        marginLeft: 90,
        marginTop: -65,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image2: {
        width: 105,
        height: 105,
        borderRadius: 150,
    },
    image3Block: {
        width: 120,
        height: 120,
        borderRadius: 150,
        padding: 80,
        backgroundColor: '#FFFFFF',
        marginLeft: -75,
        marginTop: -90,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image3: {
        width: 125,
        height: 125,
        borderRadius: 150,
    },
    image4Block: {
        width: 100,
        height: 100,
        borderRadius: 150,
        padding: 45,
        backgroundColor: '#FFFFFF',
        marginLeft: 100,
        marginTop: -60,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image4: {
        width: 70,
        height: 70,
        borderRadius: 150,
    },
    image5Block: {
        width: 100,
        height: 100,
        borderRadius: 150,
        padding: 90,
        backgroundColor: '#FFFFFF',
        marginLeft: 250,
        marginTop: -180,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image5: {
        width: 140,
        height: 140,
        borderRadius: 150,
    },
    image6Block: {
        width: 100,
        height: 100,
        borderRadius: 150,
        padding: 60,
        backgroundColor: '#FFFFFF',
        marginLeft: 290,
        marginTop: -320,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image6: {
        width: 70,
        height: 70,
        borderRadius: 150,
    },
    dashboard: {
        padding: 24
    },
    flexDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    avatarImgBlock: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 8
    },
    avatarImg: {
        borderRadius: 50,
        width: 30,
        height: 30,
    },
    locationDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    locationText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        marginHorizontal: 4
    },
    toggleBlock: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 8
    },
    foodContent: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        color: '#000000'
    },
    content: {
        marginTop: 16,
    },
    popularFoodTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#000000'
    },
    seeAll: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    foodListCard: {
        borderRadius: 12,
        height: 200,
        padding: 12,
        backgroundColor: 'white'
    },
    foodImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foodImage: {
        width: 100,
        height: 100,
        // borderRadius:50
    },
    elevation: {
        // elevation: 5,
        // shadowColor: '#FEF5F3',
        // backgroundColor:'#FEF5F3',
        // borderRadius:50,
        // width: 100,
        // height: 100
      },
    foodName: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        // textAlign: 'center',
        marginTop: 8
    },
    foodDetailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:4
    },
    subDetails: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: '#949494',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: '#ed714d',
        marginHorizontal: 6
    }
    // avatarImg:{
    //     borderRadius:50,
    //     width:30,
    //     height:30,
    // },
})