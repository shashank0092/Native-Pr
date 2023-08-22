import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, SafeAreaView, Text, Button, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"

import tw from "twrnc"
// const Stack = createNativeStackNavigator();


// const App = () => {


//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} options={{
//           headerShown:false
//         }}  />
//         <Stack.Screen name="Login" component={Login} options={{
//           headerShown:false
//         }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// const Home = (props) => {
//   return (
//     <SafeAreaView>
//       <View style={tw`bg-red-400`} >
//         <Text>Home Screen </Text>
//         <Button title="Go To Login Page" onPress={()=>props.navigation.navigate("Login",{
//           name:'SHUKLA BOI',
//           age:20,
//           data:"boi"
//         })}  />
//       </View>
//     </SafeAreaView>
//   )
// }

// const Login=(props)=>{

//   console.log(props.route.params,"THIS IS PASSED DATA")
//   return(
//     <SafeAreaView>
//       <View>
//         <Text>THIS IS LOGIN PAGE</Text>
//         <Button title="Go To Home Page" onPress={()=>props.navigation.navigate("Home")}  />
//       </View>
//     </SafeAreaView>
//   )
// }

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="black" inactiveColor="green" >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:()=>{
              return(
                <Icon name="home" size={20} color="#900" />
              )
            }         
        }}  />
        <Tab.Screen name="Login" component={Login} options={{
          tabBarIcon:()=>{
            return(
              <MCIcon name="login" size={20} color="#900" />
            ) 

          }
        }} />
        <Tab.Screen name="SignUp" component={SignUp} options={{
            tabBarIcon:()=>{
              return(
                <MCIcon name="login" size={20} color="#900" />
              ) 
  
            }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Home = () => {
  return (
    <View>
      <Text>THIS IS HOME PAGE</Text>
      <TouchableOpacity onPress={()=>console.log("shukla bo")} >
        <Text>
          <Icon name="rocket" size={50} color="#900" />;
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Login = () => {
  return (
    <View>
      <Text>
        THIS IS LOGIN PAGE
      </Text>
    </View>
  )
}

const SignUp = () => {
  return (
    <View>
      <Text>
        THIS IS SIGN UP PAGE
      </Text>
    </View>
  )
}
export default App;