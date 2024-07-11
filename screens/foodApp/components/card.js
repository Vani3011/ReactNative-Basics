import { Image, Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { styles } from "../style"
import { StarRatingDisplay } from "react-native-star-rating-widget"
import { Rating } from "react-native-ratings"

export const FoodCard = ({ list = {}, }) => {
    return (
        <View style={styles.foodListCard}>
            <View style={styles.foodImageContainer}>
                <Image source={list.image} style={styles.foodImage} />
            </View>
            <Text style={styles.foodName}>{list.name}</Text>
            <Rating
                ratingCount={list.rating}
                ratingColor="#ed714d"
                readonly={true}
                imageSize={15}
                startingValue={list.rating}
                type='custom'
                style={{
                    // textAlign:'end',
                    // justifyContent:'end',
                    // alignItems:'end',
                    flexDirection:'row'
                }}
            />
            <View style={styles.foodDetailRow}>
                <Text style={styles.subDetails}>{list.distance}</Text>
                <View style={styles.dot} />
                <Text style={styles.subDetails}>{`${list.deliveryTime} delivery`}</Text>
            </View>
        </View>
    )
}