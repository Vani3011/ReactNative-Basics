import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6EFE7',
    },
    firstBlock: {
        backgroundColor: "#ffffff",
        padding: 24
    },
    merchantHdr: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#02111A'
    },
    firstSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    firstCol: {
        flex: 1
    },
    secondCol: {
        flex: 3
    },
    customImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 12,
        width: 90,
        height: 90
    },
    foodTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: "#02111A"
    },
    selectedFoodTitle:{
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: "#02111A"
    },
    location: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: "#4E585E",
    },
    horizontalDiv: {
        borderBottomWidth: 1,
        borderColor: "#E4E8EE",
        marginTop: 12,
        marginBottom: 12
    },
    secondContainer: {
        marginTop: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#ffffff",
        padding:24
    },
    icon:{
        width:25,
        height:25,
        marginLeft:4,
    }
})