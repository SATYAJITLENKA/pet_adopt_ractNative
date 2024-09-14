import Colors from "@/constants/Colors";
import { Entypo, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor:Colors.PRIMARY}}>
        <Tabs.Screen options={{headerShown:false , tabBarIcon:({color})=><Entypo name="home" size={24} color={color} />}} name='home'/>
        <Tabs.Screen options={{headerShown:false , tabBarIcon:({color})=><MaterialIcons name="favorite" size={24} color={color} />}} name='favorite'/>
        <Tabs.Screen options={{headerShown:false , tabBarIcon:({color})=><MaterialCommunityIcons name="inbox-full" size={24} color={color} />}} name='inbox'/>
        <Tabs.Screen options={{headerShown:false , tabBarIcon:({color})=><FontAwesome6 name="face-smile-beam" size={24} color={color} />}} name='profile'/>
    </Tabs>
  )
  
}
