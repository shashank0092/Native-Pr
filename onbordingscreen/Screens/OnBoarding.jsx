import React from 'react'
import {View, Text, Button, TouchableOpacity,Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


function OnboardingScreen({navigation}) {

    const Done=()=>{
       <TouchableOpacity 
       title={'Done'}
       style={{backgroundColor:"red"}} >
        <Text style={{color:"black"}} >Done</Text>
       </TouchableOpacity>
    }
  return (
   <Onboarding
    onSkip={()=>navigation.replace("Home")}
    onDone={()=>navigation.replace("Home")}
    renderDoneButton={Done}
    // DoneButtonComponent={Done}
    showDone={true}
    pages={[
        {
            backgroundColor: '#a6e4d0',
            image: <Image source={require("../assets/bat1.jpeg")} />,
            title: 'Welcome Batman',
            subtitle: 'So You Want to Become Batman',
        },
        {
            backgroundColor: '#a6e4d0',
            image: <Image source={require("../assets/bat2.jpeg")} />,
            title: 'Warning Batman',
            subtitle: 'This is very painfull process',
        },
        {
            backgroundColor: '#a6e4d0',
            image: <Image source={require("../assets/bat3.jpeg")} />,
            title: 'THINK TWICE',
            subtitle: 'THINK AGIN YOU WILL LOSSE EVRYTHING',

        }
    ]}

    
   />
  );
}

export default OnboardingScreen;