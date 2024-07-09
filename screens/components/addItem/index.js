import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"


export const AddItem = ({ list = [],onIncrement=()=>false,onDecrement=()=>false }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                {list?.map((x, i) => {
                    return (
                        <View style={styles.firstBlock} key={x?.id}>
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
                                <TouchableOpacity onPress={()=>onDecrement(x)} disabled={x?.count===0?true:false}>
                                <View style={x?.count>0?styles.decrementBox:styles.disableDecrementBox}>
                                    <Text style={styles.decrementSymbol}>-</Text>
                                </View>
                                </TouchableOpacity>
                                <View style={{ marginRight: 8, marginLeft: 8 }}>
                                    <Text>{x?.count}</Text>
                                </View>
                                <TouchableOpacity onPress={()=>onIncrement(x)}>
                                <View style={styles.incrementBox}>
                                    <Text style={styles.incrementSymbol}>+</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}