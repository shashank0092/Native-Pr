import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Home from './Screens/HomeScreen';
import OnboardingScreen from './Screens/OnBoarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App=()=>{
  const[firstLaunch,setFirstLaunch]=useState(null);

  useEffect(()=>{
    async function setData(){
      const appData=await AsyncStorage.getItem("appLaunched");

      if(appData==null){
        setFirstLaunch(true)
        AsyncStorage.setItem("appLaunched","false")
      }
      else{
        setFirstLaunch(false);
      }
    }

    setData()
  },[])

  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {firstLaunch && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboarding"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;