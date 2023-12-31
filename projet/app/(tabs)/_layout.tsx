import { Tabs } from "expo-router"
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from "../../constants/Colors"
import { AntDesign } from '@expo/vector-icons'
import Styles from "../../constants/Styles"

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home"   options={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.orange,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarIcon: (({focused}) => <FontAwesome5 name="home" size={24} color={focused ? Colors.blue : Colors.orange} />)
      }} />
       <Tabs.Screen name="favoris"   options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarInactiveTintColor: Colors.orange,
        headerShown: false,
        tabBarIcon: (({focused}) => <AntDesign name="hearto" size={24} color={focused ? Colors.blue : Colors.orange} />)
      }} />

      <Tabs.Screen name="add"   options={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.orange,
        headerShown: false,
        tabBarIcon: (({focused}) => <AntDesign name="addfolder" size={24} color={focused ? Colors.blue : Colors.orange} />)
      }} />

      <Tabs.Screen name="infos"   options={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.orange,
        headerTitle: "Avant d'adopter",
        headerTintColor: Colors.orange,
        headerTitleAlign: 'center',
        headerTitleStyle: Styles.infosHeader,
        tabBarIcon: (({focused}) => <AntDesign name="infocirlceo" size={24} color={focused ? Colors.blue : Colors.orange} />)
      }} />

    </Tabs>
  )
}