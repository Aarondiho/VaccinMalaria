import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthNavigator from './src/navigations/AuthNavigator';
import Toast from 'react-native-toast-message';
import { useFonts, Livvic_400Regular, Livvic_500Medium, Livvic_700Bold, Livvic_900Black_Italic } from '@expo-google-fonts/livvic';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { fetchRegister } from './src/api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// Constants
const BACKGROUND_FETCH_TASK = 'background-fetch-task';

export default function App() {
  const [fontsLoaded] = useFonts({
    Livvic_400Regular,
    Livvic_500Medium,
    Livvic_700Bold,
    Livvic_900Black_Italic,
  });

  

  useEffect(() => {
    registerBackgroundFetch();
    // Setup a manual trigger for the API call every minute while the app is in the foreground
    const intervalId = setInterval(() => {
      checkInternetConnection().then((isConnected) => {
        if (isConnected) {
          sendDataToAPI();
        }
      });
    }, 10 * 1000); // 18 seconds interval

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  

  // Define the background fetch task outside the component
  TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    try {
      console.log('Background fetch initiated');
      const isConnected = await checkInternetConnection();
      if (isConnected) {
        await sendDataToAPI();
      }
      return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
      console.log('Error in background task:', error);
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }
  });

  // Function to check internet connection
  const checkInternetConnection = async () => {
    const state = await NetInfo.fetch();
    return state.isConnected;
  };

  const registerBackgroundFetch = async () => {
    try {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 10, 
        stopOnTerminate: false,
        startOnBoot: true,
      });
      
    } catch (error) {
      console.log('Failed to register background fetch task:', error);
    }
  };

  // Function to send data to the API
  const sendDataToAPI = async () => {

    //user Info 
    const storedId = await AsyncStorage.getItem("id");
    const storedName = await AsyncStorage.getItem("name");
    const storedPhone = await AsyncStorage.getItem("phone");
    const storedSex = await AsyncStorage.getItem("sex");
    const storedBPS = await AsyncStorage.getItem("BPS");
    const storedBDS = await AsyncStorage.getItem("BDS");
    const storedTypeOffice = await AsyncStorage.getItem("typeOffice");
    const storedPlace = await AsyncStorage.getItem("place");
    const storedChanges = await AsyncStorage.getItem("changes");


    //SCORES 



    const storedScore1 = await AsyncStorage.getItem("score1");
    const storedScore2 = await AsyncStorage.getItem("score2");
    const storedScore3 = await AsyncStorage.getItem("score3");
    const storedScore4 = await AsyncStorage.getItem("score4");
    const storedScore5 = await AsyncStorage.getItem("score5");
    const storedScore6 = await AsyncStorage.getItem("score6");
    const storedScore7 = await AsyncStorage.getItem("score7");
    const storedScore8 = await AsyncStorage.getItem("score8");

    const data = {
      id: JSON.parse(storedId),
      name: storedName,
      phone: storedPhone,
      sex: storedSex,
      BPS: storedBPS,
      BDS: storedBDS,
      typeOffice: storedTypeOffice,
      place: storedPlace,
      changes: storedChanges,
      score: JSON.stringify([
                      JSON.parse(storedScore1),
                      JSON.parse(storedScore2), 
                      JSON.parse(storedScore3), 
                      JSON.parse(storedScore4),
                      JSON.parse(storedScore5), 
                      JSON.parse(storedScore6), 
                      JSON.parse(storedScore7), 
                      JSON.parse(storedScore8)]
                    ),
    };

    console.log('Sending data to API:', JSON.stringify(data));

    if(storedChanges == '1'){

        try {
          const response = await fetchRegister(data);
          console.log('API Response:', response);

          if (response[0].Message === 1) {
            await AsyncStorage.setItem('id', JSON.stringify(response[0].id));
            await AsyncStorage.setItem('changes', JSON.stringify(0));
            console.log('Data saved successfully:', response[0].id);
          }else if(response[0].Message === 2){
            
            await AsyncStorage.setItem('changes', JSON.stringify(0));
            console.log('Data updated successfully');

          }else{

            console.log(response[0].Message);

          }
        } catch (error) {
          console.log('Failed to send data:', error);
        }
    }else{

      console.log("no changes to send")
    }

  };

  return !fontsLoaded ? null : (
    <NavigationContainer>
      <StatusBar backgroundColor="white" />
      <AuthNavigator />
      <Toast />
    </NavigationContainer>
  );
}
