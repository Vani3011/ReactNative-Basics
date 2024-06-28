import { TextInput, View } from "react-native";
import { styles } from "../style";


export const TextBox = ({
    value = "",
    placeholder = "",
    onChange = () => false,
    multiline = false,
    numberOfLines = 1
}) => {
    return (
        <View style={{marginTop:16}}>
        <TextInput
            style={multiline ? styles.multilineInput : styles.input}
            onChangeText={(e)=>onChange(e)}
            value={value}
            placeholder={value !== "" ? "" : placeholder}
            multiline={multiline}
            numberOfLines={numberOfLines}
        />
        </View>
    )
}