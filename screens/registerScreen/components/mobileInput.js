import { Image, Text, TextInput, View } from "react-native";
import { styles } from "../style";


export const MobileInputComponent = ({
    value = "",
    placeholder = "",
    onChange = () => false,
    multiline = false,
    numberOfLines = 1
}) => {
    return (
        <View style={styles.mobileInputBlock}>
            <View style={styles.countryCodeDiv}>
                <Image source={require('./assets/flag.png')} />
                <Text style={styles.countryCode}>+91</Text>
                <Image source={require('./assets/arrow.png')} />
                <View style={styles.borderRight} />
            </View>
            <TextInput
                style={styles.mobileInput}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={numberOfLines}
                keyboardType='phone-pad'
                placeholderTextColor="#4E585E" 
            />
        </View>
    )
}