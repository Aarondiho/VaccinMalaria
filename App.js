import React,{ useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthNavigator from './src/navigations/AuthNavigator';
import Toast from 'react-native-toast-message';
import { useFonts, Livvic_400Regular, Livvic_500Medium, Livvic_700Bold, Livvic_900Black_Italic } from '@expo-google-fonts/livvic';


export default function App() {

  

  let [fontsLoaded] = useFonts({
    Livvic_400Regular,
    Livvic_500Medium,
    Livvic_700Bold,
    Livvic_900Black_Italic
  });

  return (!fontsLoaded?<></>:
        <NavigationContainer>
          <StatusBar
          backgroundColor="white"
          />
          <AuthNavigator />
          <Toast />
        </NavigationContainer>
  );
}
