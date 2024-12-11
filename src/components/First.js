import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

const First = () => {
  
  const navigation = useNavigation();

  const toggleRegister = () => {

    const dataToStore = [
      ['score1', JSON.stringify(0)],
      ['score2', JSON.stringify(0)],
      ['score3', JSON.stringify(0)],
      ['score4', JSON.stringify(0)],
      ['score5', JSON.stringify(0)],
      ['score6', JSON.stringify(0)],
      ['score7', JSON.stringify(0)],
      ['score8', JSON.stringify(0)],
      ['first', JSON.stringify(1)],
      ['id', JSON.stringify(0)],
      ['changes', JSON.stringify(0)],
    ];
    AsyncStorage.multiSet(dataToStore);

    navigation.replace(ROUTES.LOGIN);
  };

  



  
  return (
    <LinearGradient
    colors ={['#92BC1D', '#149BD5','#92BC1D']}
    start={[0, 1]}
    end={[1, 0]}
    style={{flex:1}}
  >
              <ScrollView showsVerticalScrollIndicator={false}>
              <View>

              <View className="font-sans mt-12 flex-1 justify-center items-center flex-row">
                {/* First Image */}
                <Image 
                  source={require('../../assets/mod1/Logo_1.png')} 
                  className="w-16 h-16" 
                />

                {/* Vertical Line */}
                <View className="h-12 w-[5px] bg-gray-400 mx-2" />

               {/* Second Image */}
                <Image 
                  source={require('../../assets/gavi.png')} 
                  className="w-28 h-12 rounded-xl" 
                /> 
                {/* Vertical Line */}
                <View className="h-12 w-[5px] bg-gray-400 mx-2" />

                {/* First Image */}
                <Image 
                  source={require('../../assets/pev.png')} 
                  className="w-12 h-12" 
                />
              </View>
          <Text className="text-white text-lg font-bold text-center mb-4 mt-6">VACCINATION CONTRE LE PALUDISME</Text>
        
        <Image
          source={require('../../assets/doctor.png')} // Replace with your image URL
          className=" h-56  mb-5"
          style={{width:width,}}
        />
         <Text className="font-sans mb-5 text-xl text-center text-white  mt-4 w-84 mx-4 ">
                  Bienvenue sur l’application dédiée à la formation sur la vaccination contre le paludisme.  
                </Text>
                
        
        <View className="mb-10"></View>

        <TouchableOpacity
                 className="flex-row justify-center items-center text-center"
                  onPress={toggleRegister}
                >
                  <Text className="bg-white text-center w-36 text-lg text-blue-900  p-2 rounded-xl">Commencer</Text>
                </TouchableOpacity>
        </View>
        <View className="mb-48"></View>
          </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    right: 20,
  },
  closeText: {
    fontFamily: 'sans-serif',
    color: 'black',
    fontSize: 24,
  },
 
  startButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});

export default First;
