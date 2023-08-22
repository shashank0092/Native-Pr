import { useEffect } from "react";
import {Text} from "react-native"
import SplashScreen from "react-native-splash-screen";

const App=()=>{

  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return(
    <>
        <Text>
          THIS IS SHUKLA BOI
        </Text>
    </>
  )
}

export default App;