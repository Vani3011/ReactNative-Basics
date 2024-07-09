import { Image, View } from "react-native"
import { styles } from "./style"


const TopImage = () => {
    return (
        <View style={styles.imageContainer}>
             <View style={styles.image1Block}>
                <Image source={require('../../assets/images/salad.png')} style={styles.image1} />
            </View>
            <View style={styles.image2Block}>
                <Image source={require('../../assets/images/pizza1.jpg')} style={styles.image2} />
            </View>
            
            <View style={styles.image3Block}>
                <Image source={require('../../assets/images/burger1.png')} style={styles.image3} />
            </View>
            <View style={styles.image4Block}>
                <Image source={require('../../assets/images/paneer.png')} style={styles.image4} />
            </View>
            <View style={styles.image5Block}>
                <Image source={require('../../assets/images/potBiryani1.png')} style={styles.image5} />
            </View>
            <View style={styles.image6Block}>
                <Image source={require('../../assets/images/curry.jpg')} style={styles.image6} />
            </View>
        </View>
    )
}
export default TopImage