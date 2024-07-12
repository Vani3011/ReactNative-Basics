import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import LinearGradient from "react-native-linear-gradient"
import TopImage from "./welcomeScreen"


const Home = (props) => {
    return (
        // <View >
        <LinearGradient colors={['#F6F2EF', '#DBDBDB', '#F6C1B2']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{flex:1}}>
            <TopImage />
            <View style={styles.container}>
            <Text style={styles.title}>Taste the Joy of</Text>
            <Text style={styles.title}>Delivery</Text>
            <View style={{ marginTop: 8 }}>
                <Text style={styles.subTitle}>Unlock a world of culinary delights ,</Text>
                <Text style={styles.subTitle}>right at your fingertips</Text>
            </View>
            <View style={styles.bottomBtn}>
                <TouchableOpacity  onPress={() => props.navigation.navigate('DrawerNav')}>
                    <View style={{
                        backgroundColor: "#ED714D",
                        padding: 16,
                        borderRadius: 30,

                    }}>
                        <Text style={styles.submitBtn}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        </LinearGradient>
        // </View>
    )
}
export default Home