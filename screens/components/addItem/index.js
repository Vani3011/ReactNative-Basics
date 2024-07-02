import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import { styles } from "./style"


export const AddItem = ({ list = [] }) => {
    return (
            <ScrollView>
                {list?.map((x => {
                    return (
                        <View style={styles.firstBlock}>
                            <View style={styles.secondCol}>
                                <View style={styles.detailsBlock}>
                                    <Image
                                        source={x.image}
                                        style={styles.customImg}
                                    />
                                    <View style={{ marginLeft: 12 }}>
                                        <Text style={styles.foodName}>{x.name}</Text>
                                        <Text style={styles.foodDescription}>
                                            {x.description}
                                        </Text>
                                        <Text style={styles.amount}>{x.amount}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.firstCol}>
                                <View style={styles.decrementBox}>
                                    <Text style={styles.decrementSymbol}>-</Text>
                                </View>
                                <View style={{ marginRight: 8, marginLeft: 8 }}>
                                    <Text>0</Text>
                                </View>
                                <View style={styles.incrementBox}>
                                    <Text style={styles.incrementSymbol}>+</Text>
                                </View>
                            </View>
                        </View>
                    )
                }))}
            </ScrollView>
    )
}