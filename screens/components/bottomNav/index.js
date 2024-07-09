import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { Dashboard } from "../../foodApp/dashboard"
import AntIcon from "react-native-vector-icons/AntDesign";
export const BottomNavBar = () =>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <AntIcon name="home" color="green" size={50} />
                ),
              }}
            />
            <Tab.Screen name="Favourites" component={Dashboard}/>
            <Tab.Screen name="Cart" component={Dashboard}/>
            <Tab.Screen name="Notificationsnpm i react-native-vector-icons" component={Dashboard}/>

        </Tab.Navigator>
    )
}