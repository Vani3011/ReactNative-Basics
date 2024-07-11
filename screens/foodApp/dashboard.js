import { Image, Text, View, TouchableOpacity, FlatList } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { styles } from "./style"
import Icon from "react-native-vector-icons/Ionicons";
import { FoodCard } from "./components/card";
import { FoodList, TabList } from "./data";
import { useState } from "react";
import { CustomTabComponent } from "../components/tab";

export const Dashboard = () => {
    const [selectedList, setSelectedList] = useState(TabList[0])
    const [selectedFoodList, setSelectedFoodList] = useState(FoodList)
    const handleChangeTab = (val) => {
        setSelectedList(val)
        if (val?.value > 2) {
            setItemList(FoodList?.filter((x) => { return x?.type === (val.type === 2 ? "Pizza" : val?.type === 3 ? "Salads" : "Biryani") }))
        }
        else {
            setSelectedFoodList(FoodList?.filter((x)=>{return x?.type==="Biryani"}))
        }
    }
    return (
        <LinearGradient colors={['#f7f7f7', '#f7f7f7','#FEF4F8']} start={{ x: 0, y:1}} end={{ x: 1, y: 0.5 }} style={{ flex: 1 }}>
            <View style={styles.dashboard}>
                <View style={styles.flexDiv}>
                    <View style={styles.avatarImgBlock}>
                        <Image source={require('../../assets/images/avatar.png')} style={styles.avatarImg} />
                    </View>
                    <View style={styles.locationDiv}>
                        <Icon name="location" size={16} />
                        <Text style={styles.locationText}>India</Text>
                        <Icon name="chevron-down-sharp" size={16} />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.toggleBlock}>
                            <Icon name="menu-sharp" size={20} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.foodContent}>Ready to order{'\n'}your favourite food?</Text>
                </View>
                <View style={{ marginTop: 12 }}>
                        <FlatList
                            data={TabList}
                            renderItem={({ item }) => <CustomTabComponent list={item} onChangeTab={handleChangeTab} selectedList={selectedList} />}
                            keyExtractor={item => item.value}
                            horizontal
                        />
                    </View>
                <View style={{ marginTop: 10, ...styles.flexDiv }}>
                    <Text style={styles.popularFoodTitle}>Popular Food</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <View style={{ marginTop: 12 }}>
                    <FlatList
                        data={selectedFoodList}
                        renderItem={({ item }) => <FoodCard list={item} />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => {
                            return (
                                <View
                                    style={{
                                        height: "100%",
                                        width: 10,
                                    }} />
                            );
                        }}
                        horizontal
                    />
                </View>
            </View>
        </LinearGradient>
    )
}