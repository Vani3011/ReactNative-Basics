import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu } from './menu';

const Drawer = createDrawerNavigator();

export const DrawerComponent = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 240,
                },
            }}
        >
            {/* screens */}
            <Drawer.Screen name="Menu" component={Menu} />
        </Drawer.Navigator>
    )
}