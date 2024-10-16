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

// Function to send data to the API
const sendDataToAPI = async () => {
  const userInfo = JSON.parse(await AsyncStorage.getItem('userInfo')) || {};
  const scores = JSON.parse(await AsyncStorage.getItem('scores')) || {};

  const data = {
    id: userInfo.id,
    name: userInfo.name,
    phone: userInfo.phone,
    sex: userInfo.sex,
    BPS: userInfo.BPS,
    BDS: userInfo.BDS,
    typeOffice: userInfo.typeOffice,
    place: userInfo.place,
    score: JSON.stringify([scores]),
  };

  console.log('Sending data to API:', data);

  try {
    const response = await fetchRegister(data);
    console.log('API Response:', response);

    if (response[0].Message === 1) {
      await AsyncStorage.setItem('id', JSON.stringify(response[0].id));
      console.log('Data saved successfully:', response[0].id);
    }
  } catch (error) {
    console.error('Failed to send data:', error);
  }
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Livvic_400Regular,
    Livvic_500Medium,
    Livvic_700Bold,
    Livvic_900Black_Italic,
  });

  const [userInfo, setUserInfo] = useState({});
  const [scores, setScores] = useState({});

  useEffect(() => {
    initializeData();
    registerBackgroundFetch();

    // Setup a manual trigger for the API call every 15 minutes while app is in the foreground
    const intervalId = setInterval(() => {
      console.log('Foreground data sync initiated');
      checkInternetConnection().then((isConnected) => {
        if (isConnected) {
          sendDataToAPI();
        }
      });
    }, 10 * 60 * 1000); // 15 minutes interval

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  const initializeData = async () => {
    try {
      const keys = ['id', 'name', 'phone', 'sex', 'BPS', 'BDS', 'typeOffice', 'place'];
      const scoreKeys = ['score1', 'score2', 'score3', 'score4', 'score5', 'score6', 'score7', 'score8'];

      const userValues = await AsyncStorage.multiGet(keys);
      const scoreValues = await AsyncStorage.multiGet(scoreKeys);

      const userData = userValues.reduce((acc, [key, value]) => {
        acc[key] = value || '';
        return acc;
      }, {});
      setUserInfo(userData);

      const scoreData = scoreValues.reduce((acc, [key, value]) => {
        acc[key] = value || '0';
        return acc;
      }, {});
      setScores(scoreData);

      // Store user and score data in AsyncStorage for background access
      await AsyncStorage.setItem('userInfo', JSON.stringify(userData));
      await AsyncStorage.setItem('scores', JSON.stringify(scoreData));
    } catch (error) {
      console.error('Error initializing data:', error);
    }
  };

  const registerBackgroundFetch = async () => {
    try {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 60 * 15, // 15 minutes interval
        stopOnTerminate: false,
        startOnBoot: true,
      });
      console.log('Background fetch task registered');
    } catch (error) {
      console.log('Failed to register background fetch task:', error);
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
