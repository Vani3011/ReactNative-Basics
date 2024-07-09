import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { TabComponent } from "../components/tab"
import { useState } from "react"
import { AddItem } from "../components/addItem"
import { FoodList } from "./dummydata"

export const TabList = [
    {
        value: 1,
        name: "All",
        icon: null
    },
    {
        value: 2,
        name: "Combo",
        icon: require('../../assets/images/nonVeg.png')
    },
    {
        value: 3,
        name: "Special",
        icon: require('../../assets/images/superEmoji.png')
    },
    {
        value: 4,
        name: "Drinks",
        icon: require('../../assets/images/coffee.png')
    },
    {
        value: 5,
        name: "Starters",
        icon: require('../../assets/images/burger.png')
    },
]

const MerchantDetails = () => {
    const [selectedList, setSelectedList] = useState(TabList[1])
    const [selectedItems, setSelectedItems] = useState([])
    const [itemList, setItemList] = useState(FoodList)
    const handleChangeTab = (val) => {
        setSelectedList(val)
        if (val?.value > 2) {
            setItemList(FoodList?.filter((x) => { return x?.type === (val.value === 3 ? "Special" : val?.value === 4 ? "Drinks" : "Starters") }))
        }
        else {
            setItemList(FoodList)
        }
    }
    const onIncrement = (val) => {
        const result = itemList?.map((x) => {
            return {
                ...x,
                count: val?.id === x?.id ? (x?.count + 1 ): x?.count
            }
        })
        setItemList(result)
    }
    const onDecrement = (val) => {
        const result = itemList?.map((x) => {
            return {
                ...x,
                count: val?.id === x?.id ? (x?.count - 1 ): x?.count
            }
        })
        setItemList(result)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.firstBlock}>
                    <Text style={styles.merchantHdr}>Merchant Detail</Text>
                    <View style={styles.firstSection}>
                        <View style={styles.firstCol}>
                            <Image source={require('../../assets/images/food.jpg')} style={styles.customImage} />
                        </View>
                        <View style={styles.secondCol}>
                            <Text style={styles.foodTitle} >Chicken Biryani</Text>
                            <View style={styles.addressDiv}>
                                <Text style={styles.location} numberOfLines={1}>Sunrise Avenue 1st cross,Neelankarai,Chennai,600001</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.horizontalDiv} />
                    <View style={{ marginTop: 12 }}>
                        <FlatList
                            data={TabList}
                            renderItem={({ item }) => <TabComponent list={item} onChangeTab={handleChangeTab} selectedList={selectedList} />}
                            keyExtractor={item => item.value}
                            horizontal
                        />
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.selectedFoodTitle}>{selectedList?.name}</Text>
                        {selectedList.icon !== null &&
                            <Image source={selectedList.icon} style={styles.icon} />
                        }
                    </View>
                    <View style={{ marginTop: 12 }}>
                        <AddItem list={itemList} selectedItems={selectedItems} onIncrement={onIncrement} onDecrement={onDecrement} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomBtn}>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "#B10606",
                        padding: 16,
                        borderRadius: 8,

                    }}>
                        <Text style={styles.submitBtn}>Rs.100</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <ScrollView horizontal={true}>
                
                <TabComponent list={TabList} onChangeTab={handleChangeTab}/>
            </ScrollView> */}

        </SafeAreaView>
    )
}
export default MerchantDetails